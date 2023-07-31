// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0;

interface IOracleSwapManager {
    function setRewarderForPair(
        address pair,
        address tokenA,
        address tokenB
    ) external;
    
    function rewardManagers(address pair) external pure returns (address );
}
