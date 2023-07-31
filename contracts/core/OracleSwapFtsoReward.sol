// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import "./OracleSwapHelper.sol";
import "./OracleSwapPair.sol";
import "./interfaces/IOracleSwapPair.sol";
import "./interfaces/IOracleSwapFtsoReward.sol";
import "./libraries/AddressSet.sol";

library OracleSwapFtsoPointer {
    bytes32 internal constant STORAGE_SLOT =
        keccak256("oracleswap.OracleSwapFtsoPointer");

    struct FtsoReward {
        uint256 votePowerBlock;
        uint256 remainingAmount;
        uint256 remainingWeight;
    }

    struct BlockAndOrigin {
        uint256 blockNum;
        address origin;
    }


    struct Pointer {
        uint256 nextEpochToDistribute;
        mapping(uint256 => FtsoReward) pendingRewards;
        mapping(address => mapping(uint256 => uint256)) claimedRewards;

        mapping(address => address) providerDelegation; // delegator => provider
        mapping(address => uint256) providerVotes; // provider => votes
        AddressSet.State allProviders;
        BlockAndOrigin lastProvidersChange;
    }

    function pointer() internal pure returns (Pointer storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}

contract OracleSwapFtsoReward {
    using OracleSwapHelper for IFtsoManager;
    using AddressSet for AddressSet.State;

    address self;

    uint256 private unlocked = 1;
    modifier lock() {
        require(unlocked == 1, "OracleSwap: LOCKED");
        unlocked = 0;
        _;
        unlocked = 1;
    }

    modifier onlyDelegatedCall() {
        require(self != address(this));
        _;
    }

    constructor() {
        self = address(this);
    }

    function initialize(address) external onlyDelegatedCall {
        OracleSwapFtsoPointer.Pointer storage l = OracleSwapFtsoPointer
            .pointer();
        l.nextEpochToDistribute = OracleSwapHelper
            .getFtsoManager()
            .getCurrentFtsoRewardEpoch();
    }

    function applyFee(
        uint256 amount,
        uint256 bips
    ) private pure returns (uint256) {
        return bips > 0 ? (amount * (100_00 - bips)) / 100_00 : amount; // cannot overflow, fee round up
    }

    function adjustRewardAmount(
        IFtsoManager ftsoManager,
        uint256 epoch,
        uint256 totalAmount,
        uint256 rewardsFeeBips,
        address beneficiary
    ) private view returns (uint256 amount) {
        uint256 votePowerBlock = ftsoManager.getRewardEpochVotePowerBlock(
            epoch
        );
        uint256 votePower = IOracleSwapPair(address(this)).totalSupplyAt(
            votePowerBlock
        );
        uint256 beneficiaryVotePower = IOracleSwapPair(address(this))
            .balanceOfAt(beneficiary, votePowerBlock);
        if (beneficiaryVotePower > 0 && votePower > 0) {
            amount = applyFee(totalAmount, rewardsFeeBips);
            amount = (amount * beneficiaryVotePower) / votePower; // this cannot overflow
        }
    }

    function accruingFtsoRewards(
        address beneficiary
    ) external view onlyDelegatedCall returns (uint256 amount) {
        IFtsoManager ftsoManager = OracleSwapHelper.getFtsoManager();
        uint256 epoch = ftsoManager.getCurrentFtsoRewardEpoch();
        OracleSwapHelper.FtsoRewardManagerWithEpochs[]
            memory ftsoRewardManagers = OracleSwapHelper
                .getActiveFtsoRewardManagers(epoch);

        uint256 votePowerBlock = ftsoManager.getRewardEpochVotePowerBlock(
            epoch
        );
        uint256 votePower = IOracleSwapPair(address(this)).totalSupplyAt(
            votePowerBlock
        );
        uint256 beneficiaryVotePower = (beneficiary != address(0))
            ? IOracleSwapPair(address(this)).balanceOfAt(
                beneficiary,
                votePowerBlock
            )
            : votePower;
        if (beneficiaryVotePower > 0 && votePower > 0) {
            for (uint256 i = ftsoRewardManagers.length; i > 0; i--) {
                (, uint256[] memory rewardAmounts, , ) = ftsoRewardManagers[
                    i - 1
                ].rewardManager.getStateOfRewards(address(this), epoch);
                for (uint256 j; j < rewardAmounts.length; j++) {
                    amount += rewardAmounts[j];
                }
            }
            amount = applyFee(amount, 0);
            amount = (amount * beneficiaryVotePower) / votePower; // this cannot overflow
        }
    }

    function epochsWithUndistributedFtsoRewards(
        address beneficiary
    )
        external
        view
        onlyDelegatedCall
        returns (
            uint256[] memory epochs,
            uint256[] memory amounts,
            uint256[] memory totalAmounts
        )
    {
        IFtsoManager ftsoManager = OracleSwapHelper.getFtsoManager();
        OracleSwapHelper.FtsoRewardManagerWithEpochs[]
            memory ftsoRewardManagers = OracleSwapHelper
                .getActiveFtsoRewardManagers(
                    OracleSwapFtsoPointer.pointer().nextEpochToDistribute
                );
        uint256 rewardsFeeBips = 0;

        OracleSwapHelper.Range memory epochsRange = ftsoManager
            .getActiveFtsoRewardEpochsExclusive(
                OracleSwapFtsoPointer.pointer().nextEpochToDistribute
            );
        epochs = new uint256[](epochsRange.len);
        amounts = new uint256[](epochsRange.len);
        totalAmounts = new uint256[](epochsRange.len);
        uint256 count;
        for (
            uint256 epoch = epochsRange.start;
            epoch < epochsRange.end;
            epoch++
        ) {
            for (uint256 i = ftsoRewardManagers.length; i > 0; i--) {
                OracleSwapHelper.FtsoRewardManagerWithEpochs
                    memory ftsoRewardManager = ftsoRewardManagers[i - 1];
                if (
                    ftsoRewardManager.initialRewardEpoch <= epoch &&
                    ftsoRewardManager.lastRewardEpoch >= epoch
                ) {
                    (
                        ,
                        uint256[] memory rewardAmounts,
                        bool[] memory claimed,
                        bool claimable
                    ) = ftsoRewardManager.rewardManager.getStateOfRewards(
                            address(this),
                            epoch
                        );
                    if (claimable) {
                        for (uint256 j; j < rewardAmounts.length; j++) {
                            if (!claimed[j]) {
                                totalAmounts[count] += rewardAmounts[j];
                            }
                        }
                    }
                }
            }
            if (totalAmounts[count] > 0) {
                if (beneficiary != address(0)) {
                    amounts[count] = adjustRewardAmount(
                        ftsoManager,
                        epoch,
                        totalAmounts[count],
                        rewardsFeeBips,
                        beneficiary
                    );
                }
                epochs[count++] = epoch;
            }
        }
        uint256 toDrop = epochsRange.len - count;
        if (toDrop > 0) {
            assembly {
                // reduce array lengths
                mstore(epochs, sub(mload(epochs), toDrop))
                mstore(amounts, sub(mload(amounts), toDrop))
                mstore(totalAmounts, sub(mload(totalAmounts), toDrop))
            }
        }
    }

    function distributeFtsoRewards(
        uint256[] calldata epochs
    ) external lock onlyDelegatedCall {
        if (epochs.length == 0) return;
        OracleSwapFtsoPointer.Pointer storage l = OracleSwapFtsoPointer.pointer();
        IFtsoManager ftsoManager = OracleSwapHelper.getFtsoManager();
        OracleSwapHelper.FtsoRewardManagerWithEpochs[]
            memory ftsoRewardManagers = OracleSwapHelper
                .getActiveFtsoRewardManagers(l.nextEpochToDistribute);
        uint256 rewardsFeeBips = 0;
        uint256 totalRewards;
        

        address payable rewardManagerAddress = payable (OracleSwapPairPointer.pointer().manager.rewardManagers(address(this)));
         

        uint256 maxEpoch = epochs[epochs.length - 1];
        for (uint256 i = epochs.length - 1; i > 0; i--) {
            uint256 epoch = epochs[i - 1];
            if (epoch > maxEpoch) maxEpoch = epoch;
        }
        maxEpoch++; // exclusive upper boundary
        OracleSwapHelper.Range memory epochsRange = ftsoManager
            .getActiveFtsoRewardEpochsExclusive(
                OracleSwapFtsoPointer.pointer().nextEpochToDistribute
            );
        if (maxEpoch > epochsRange.end) maxEpoch = epochsRange.end;
        for (uint256 epoch = epochsRange.start; epoch < maxEpoch; epoch++) {
            uint256 votePowerBlock = ftsoManager.getRewardEpochVotePowerBlock(
                epoch
            );
            uint256 votePower = IOracleSwapPair(address(this)).totalSupplyAt(
                votePowerBlock
            );
            uint256[] memory singleEpoch = new uint256[](1);
            singleEpoch[0] = epoch;
            uint256 epochRewards;
            for (uint256 i = ftsoRewardManagers.length; i > 0; i--) {
                OracleSwapHelper.FtsoRewardManagerWithEpochs
                    memory ftsoRewardManager = ftsoRewardManagers[i - 1];
                if (
                    ftsoRewardManager.initialRewardEpoch <= epoch &&
                    ftsoRewardManager.lastRewardEpoch >= epoch
                ) {
                    epochRewards += ftsoRewardManager.rewardManager.claimReward(
                            rewardManagerAddress,
                            singleEpoch
                        );
                }
            }
            if (epochRewards > 0) {
                totalRewards += epochRewards;
                epochRewards = applyFee(epochRewards, rewardsFeeBips);
                if (epochRewards > 0) {
                    l.pendingRewards[epoch] = OracleSwapFtsoPointer.FtsoReward(
                        votePowerBlock,
                        epochRewards,
                        votePower
                    );
                }
                l.nextEpochToDistribute = epoch + 1;
                //

            }
        }

        if (totalRewards > 0) {
            assert(rewardManagerAddress.balance >= totalRewards);
    
        }
    }

    function getFtsoRewardsProRata(
        OracleSwapFtsoPointer.Pointer storage l,
        uint256 epoch,
        address beneficiary
    ) private view returns (uint256 weight, uint256 amount) {
        if (l.claimedRewards[beneficiary][epoch] == 0) {
            OracleSwapFtsoPointer.FtsoReward storage rewards = l.pendingRewards[
                epoch
            ];
            if (rewards.remainingWeight > 0) {
                weight = IOracleSwapPair(address(this)).balanceOfAt(
                    beneficiary,
                    rewards.votePowerBlock
                );
                amount =
                    (rewards.remainingAmount * weight) /
                    rewards.remainingWeight; // this cannot overflow
            }
        }
    }

    function epochsWithUnclaimedFtsoRewards(
        address beneficiary
    )
        external
        view
        onlyDelegatedCall
        returns (uint256[] memory epochs, uint256[] memory amounts)
    {
        OracleSwapFtsoPointer.Pointer storage l = OracleSwapFtsoPointer.pointer();
        IFtsoManager ftsoManager = OracleSwapHelper.getFtsoManager();
        OracleSwapHelper.Range memory epochsRange = ftsoManager
            .getActiveFtsoRewardEpochsExclusive(0);
        epochs = new uint256[](epochsRange.len);
        amounts = new uint256[](epochsRange.len);
        uint256 count;
        for (
            uint256 epoch = epochsRange.start;
            epoch < epochsRange.end;
            epoch++
        ) {
            (, uint256 amount) = getFtsoRewardsProRata(l, epoch, beneficiary);
            if (amount > 0) {
                // add rewards
                epochs[count] = epoch;
                amounts[count] = amount;
                count++;
            }
        }
        uint256 toDrop = epochsRange.len - count;
        if (toDrop > 0) {
            assembly {
                // reduce array lengths
                mstore(epochs, sub(mload(epochs), toDrop))
                mstore(amounts, sub(mload(amounts), toDrop))
            }
        }
    }

    function claimFtsoRewards(
        OracleSwapFtsoPointer.Pointer storage l,
        address beneficiary,
        address to,
        uint256 epoch,
        address executor
    ) private returns (uint256) {
        (uint256 weight, uint256 amount) = getFtsoRewardsProRata(
            l,
            epoch,
            beneficiary
        );
        if (amount > 0) {
            OracleSwapFtsoPointer.FtsoReward storage rewards = l.pendingRewards[
                epoch
            ];
            // set claimed
            l.claimedRewards[beneficiary][epoch] = amount;
            rewards.remainingAmount -= amount;
            rewards.remainingWeight -= weight;
            
        }
        return amount;
    }

    function claimFtsoRewards(
        OracleSwapFtsoPointer.Pointer storage l,
        uint256[] calldata epochs,
        address beneficiary,
        address to,
        address executor,
        bool wrapped
    ) private {
        IFtsoManager ftsoManager = OracleSwapHelper.getFtsoManager();
        OracleSwapHelper.Range memory epochsRange = ftsoManager
            .getActiveFtsoRewardEpochsExclusive(0);
        uint256 totalRewards;
        for (uint256 i; i < epochs.length; i++) {
            uint256 epoch = epochs[i];
            if (epoch >= epochsRange.start && epoch < epochsRange.end) {
                totalRewards += claimFtsoRewards(
                    l,
                    beneficiary,
                    to,
                    epochs[i],
                    executor
                );
            }
        }
        if (totalRewards > 0) {

        }
    }

    function claimFtsoRewards(
        uint256[] calldata epochs,
        address to,
        bool wrapped
    ) external lock onlyDelegatedCall {
        OracleSwapFtsoPointer.Pointer storage l = OracleSwapFtsoPointer.pointer();
        claimFtsoRewards(l, epochs, msg.sender, to, msg.sender, wrapped);
    }


    function claimedFtsoRewards(
        address beneficiary,
        uint256 epoch
    ) external view onlyDelegatedCall returns (uint256 amount) {
        amount = OracleSwapFtsoPointer.pointer().claimedRewards[beneficiary][
            epoch
        ];
    }

    function unclaimedRewards()
        public
        view
        onlyDelegatedCall
        returns (uint256 totalRewards)
    {
        OracleSwapFtsoPointer.Pointer storage l = OracleSwapFtsoPointer.pointer();
        IFtsoManager ftsoManager = OracleSwapHelper.getFtsoManager();
        OracleSwapHelper.Range memory epochsRange = ftsoManager
            .getActiveFtsoRewardEpochsExclusive(0);
        for (
            uint256 epoch = epochsRange.start;
            epoch < epochsRange.end;
            epoch++
        ) {
            totalRewards += l.pendingRewards[epoch].remainingAmount;
        }
    }

  
    function delegate(IVPToken token, address[] memory newProviders, uint256 maxDelegates) internal {
        uint256 len = Math.min(newProviders.length, maxDelegates);
        uint256 bips = 100_00 / len;
        require(bips > 0);
        token.delegate(newProviders[0], 100_00 - bips * (len - 1));
        for (uint256 i = 1; i < len; i++) {
            token.delegate(newProviders[i], bips);
        }
        (, , uint256 count, ) = token.delegatesOf(address(this));
        require(count == len, 'OracleSwap: DUPLICATED_PROVIDERS');
    }

    function changeProviders(IVPToken token, address[] memory newProviders, uint256 maxDelegates) internal {
        token.undelegateAll();
        delegate(token, newProviders, maxDelegates);
    }

    function transferCallback(address from, address to, uint256 amount) external onlyDelegatedCall {
        OracleSwapFtsoPointer.Pointer storage l = OracleSwapFtsoPointer.pointer();
        if (to == address(0)) {
            // avoid decreasing vote weight in the same transaction that changed providers
            require(
                l.lastProvidersChange.blockNum != block.number || l.lastProvidersChange.origin != tx.origin,
                'OracleSwap: FLASH_ATTACK'
            );
        }
        moveVotes(l, l.providerDelegation[from], l.providerDelegation[to], amount);
    }

    function moveVotes(
        OracleSwapFtsoPointer.Pointer storage l,
        address fromProvider,
        address toProvider,
        uint256 amount
    ) private {
        if (fromProvider != toProvider && amount > 0) {
            if (fromProvider != address(0)) {
                l.providerVotes[fromProvider] -= amount;
                if (l.providerVotes[fromProvider] == 0) l.allProviders.remove(fromProvider);
            }
            if (toProvider != address(0)) {
                if (l.providerVotes[toProvider] == 0) l.allProviders.add(toProvider);
                l.providerVotes[toProvider] += amount;
            }
        }
    }

}
