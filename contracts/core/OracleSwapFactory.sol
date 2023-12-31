// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.19;

import "./interfaces/IOracleSwapFactory.sol";
import "./OracleSwapPair.sol";
import "./interfaces/IOracleSwapManager.sol";

contract OracleSwapFactory is IOracleSwapFactory {
    address public override feeTo;
    address public override feeToSetter;
    address public override migrator;

    address public immutable manager;

    mapping(address => mapping(address => address)) public override getPair;
    address[] public override allPairs;

    constructor(address _feeToSetter, address _manager) {
        feeToSetter = _feeToSetter;
        require(_manager != address(0), "OracleSwap: ZERO_ADDRESS");
        manager = _manager;
    }

    function allPairsLength() external view override returns (uint) {
        return allPairs.length;
    }

    function pairCodeHash() external pure returns (bytes32) {
        return keccak256(type(OracleSwapPair).creationCode);
    }

    function createPair(
        address tokenA,
        address tokenB
    ) external override returns (address pair) {
        require(tokenA != tokenB, "OracleSwap: IDENTICAL_ADDRESSES");
        (address token0, address token1) = tokenA < tokenB
            ? (tokenA, tokenB)
            : (tokenB, tokenA);
        require(token0 != address(0), "OracleSwap: ZERO_ADDRESS");
        require(
            getPair[token0][token1] == address(0),
            "OracleSwap: PAIR_EXISTS"
        ); // single check is sufficient
        bytes memory bytecode = type(OracleSwapPair).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        OracleSwapPair(pair).initialize(manager, token0, token1);
        getPair[token0][token1] = pair;
        getPair[token1][token0] = pair; // populate mapping in the reverse direction
        allPairs.push(pair);
        
        IOracleSwapManager(manager).setRewarderForPair(pair, token0, token1);
        emit PairCreated(token0, token1, pair, allPairs.length);
    }

    function setFeeTo(address _feeTo) external override {
        require(msg.sender == feeToSetter, "OracleSwap: FORBIDDEN");
        feeTo = _feeTo;
    }

    function setMigrator(address _migrator) external override {
        require(msg.sender == feeToSetter, "OracleSwap: FORBIDDEN");
        migrator = _migrator;
    }

    function setFeeToSetter(address _feeToSetter) external override {
        require(msg.sender == feeToSetter, "OracleSwap: FORBIDDEN");
        feeToSetter = _feeToSetter;
    }
}
