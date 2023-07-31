// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./OracleSwapHelper.sol";
import "./OracleSwapPair.sol";

contract OracleSwapManager is Ownable {
    address public factory;

    address public ftsoRewarder;

    address public farmRewarder;

    address public configSetter;

    bytes32 private constant WNAT = keccak256(bytes("wnat"));
    bytes32 private constant GENERIC = 0;
    
    mapping(address => address) public rewardManagers;

    constructor(address _configSetter) {
        configSetter = _configSetter;
    }

    function checkConfigSetter() private view {
        require(msg.sender == configSetter, "FORBIDDEN");
    }

    modifier onlyConfigSetter() {
        checkConfigSetter();
        _;
    }

    function setConfigSetter(address _configSetter) external onlyConfigSetter {
        configSetter = _configSetter;
    }

    function setFtsoRewarder(
        address _ftsoRewarder
    ) external onlyConfigSetter {
        require(_ftsoRewarder != address(0), "wrong rewarder");

        ftsoRewarder = _ftsoRewarder;
    }

    function setFarmRewarder(
        address _farmRewarder
    ) external onlyConfigSetter {
        require(_farmRewarder != address(0), "wrong rewarder");

        farmRewarder = _farmRewarder;
    }

    function setFactory(address _factory) external onlyConfigSetter {
        require(
            factory == address(0) && _factory != address(0),
            "wrong factory"
        );
        factory = _factory;
    }

    function setRewarderForPair(
        address pair,
        address tokenA,
        address tokenB
    ) external {
        require(msg.sender == factory, "OracleSwap: FORBIDDEN");
        bytes32 typeA = getTokenType(tokenA);
        bytes32 typeB = getTokenType(tokenB);
        OracleSwapPair p = OracleSwapPair(pair);
        p.addRewarder(farmRewarder);
        if (typeA == WNAT || typeB == WNAT) {
            p.addRewarder(ftsoRewarder);
        }
    }

    function getAssetType(
        address token
    ) private view returns (bytes32 assetType) {
        IFlareAssetRegistry registry = OracleSwapHelper.getFlareAssetRegistry();
        if (address(registry) != address(0))
            assetType = registry.assetType(token);
    }

    function isWNat(address token) private view returns (bool) {
        return token == address(OracleSwapHelper.getWNat());
    }

    function getTokenType(address token) public view returns (bytes32) {
        return isWNat(token) ? WNAT : getAssetType(token);
    }
}
