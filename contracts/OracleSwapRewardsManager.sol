// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OracleSwapRewardsManager is Ownable {
    address public wnat;
    address public ftsoManager;
    address public ftsoRewardManager;

    address public ftsoProvider;

    address public flareContractRegistry;

    constructor(
        address _wnat,
        address _ftsoManager,
        address _ftsoRewardManager,
        address _flareContractRegistry
    ) {
        wnat = _wnat;
        ftsoManager = _ftsoManager;
        ftsoRewardManager = _ftsoRewardManager;
        flareContractRegistry = _flareContractRegistry;
    }

    
}
