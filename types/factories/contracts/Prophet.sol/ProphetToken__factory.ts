/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProphetToken,
  ProphetTokenInterface,
} from "../../../contracts/Prophet.sol/ProphetToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerFTSO",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerMasterProphet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerNftStaking",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerSetter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnerSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ownerMasterProphet_",
        type: "address",
      },
      {
        internalType: "address",
        name: "ownerNftStaking_",
        type: "address",
      },
      {
        internalType: "address",
        name: "ownerFTSO_",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwnerSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200001d3362000088565b604080518082019091526007815266141c9bdc1a195d60ca1b60208201526003906200004a90826200017d565b5060408051808201909152600381526250524f60e81b60208201526004906200007490826200017d565b506005805460ff1916601217905562000249565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200010357607f821691505b6020821081036200012457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200017857600081815260208120601f850160051c81016020861015620001535750805b601f850160051c820191505b8181101562000174578281556001016200015f565b5050505b505050565b81516001600160401b03811115620001995762000199620000d8565b620001b181620001aa8454620000ee565b846200012a565b602080601f831160018114620001e95760008415620001d05750858301515b600019600386901b1c1916600185901b17855562000174565b600085815260208120601f198616915b828110156200021a57888601518255948401946001909101908401620001f9565b5085821015620002395787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611f3280620002596000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806370a0823111610104578063a9059cbb116100a2578063e5dc22a811610071578063e5dc22a81461046d578063e7a324dc1461047e578063eb2c317a146104a5578063f1127ed8146104b857600080fd5b8063a9059cbb146103fb578063b4b5ea571461040e578063c3cda52014610421578063dd62ed3e1461043457600080fd5b806395d89b41116100de57806395d89b41146103ba578063a3ee00e8146103c2578063a457c2d7146103d5578063a60d8508146103e857600080fd5b806370a082311461035e578063782d6fe1146103875780637ecebe001461039a57600080fd5b806339509351116101715780635c19a95c1161014b5780635c19a95c146102ea578063636f7bb6146102fd57806363c7f51b146103105780636fcfff451461032357600080fd5b8063395093511461028057806340c10f1914610293578063587cde1e146102a657600080fd5b806320606b70116101ad57806320606b701461022757806323b872dd1461024e578063313ce5671461026157806339499d661461027657600080fd5b806306fdde03146101d4578063095ea7b3146101f257806318160ddd14610215575b600080fd5b6101dc61050f565b6040516101e99190611aad565b60405180910390f35b610205610200366004611b35565b6105a1565b60405190151581526020016101e9565b6006545b6040519081526020016101e9565b6102197f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b61020561025c366004611b5f565b6105b8565b60055460405160ff90911681526020016101e9565b61027e610621565b005b61020561028e366004611b35565b6106b2565b61027e6102a1366004611b35565b6106e8565b6102d26102b4366004611b9b565b6001600160a01b039081166000908152600a60205260409020541690565b6040516001600160a01b0390911681526020016101e9565b61027e6102f8366004611b9b565b61079f565b6009546102d2906001600160a01b031681565b61027e61031e366004611b9b565b6107ac565b610349610331366004611b9b565b600c6020526000908152604090205463ffffffff1681565b60405163ffffffff90911681526020016101e9565b61021961036c366004611b9b565b6001600160a01b031660009081526001602052604090205490565b610219610395366004611b35565b6108b1565b6102196103a8366004611b9b565b600d6020526000908152604090205481565b6101dc610b2f565b6008546102d2906001600160a01b031681565b6102056103e3366004611b35565b610b3e565b61027e6103f6366004611bb6565b610b8d565b610205610409366004611b35565b610c64565b61021961041c366004611b9b565b610c71565b61027e61042f366004611bf9565b610ce6565b610219610442366004611c59565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6000546001600160a01b03166102d2565b6102197fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b6007546102d2906001600160a01b031681565b6104f36104c6366004611c8c565b600b6020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b6040805163ffffffff90931683526020830191909152016101e9565b60606003805461051e90611ccc565b80601f016020809104026020016040519081016040528092919081815260200182805461054a90611ccc565b80156105975780601f1061056c57610100808354040283529160200191610597565b820191906000526020600020905b81548152906001019060200180831161057a57829003601f168201915b5050505050905090565b60006105ae338484611053565b5060015b92915050565b60006105c58484846111ab565b610617843361061285604051806060016040528060288152602001611eb0602891396001600160a01b038a166000908152600260209081526040808320338452909152902054919061150b565b611053565b5060019392505050565b6000546001600160a01b031633146106a65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201527f536574746572000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6106b06000611537565b565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916105ae918590610612908661159f565b6007546001600160a01b031633148061070b57506008546001600160a01b031633145b8061072057506009546001600160a01b031633145b61076c5760405162461bcd60e51b815260206004820152601160248201527f55736572206973206e6f74206f776e6572000000000000000000000000000000604482015260640161069d565b61077682826115ab565b6001600160a01b038083166000908152600a602052604081205461079b921683611691565b5050565b6107a933826117f5565b50565b6000546001600160a01b0316331461082c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201527f5365747465720000000000000000000000000000000000000000000000000000606482015260840161069d565b6001600160a01b0381166108a85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161069d565b6107a981611537565b60004382106109285760405162461bcd60e51b815260206004820152602960248201527f4f5241434c453a3a6765745072696f72566f7465733a206e6f7420796574206460448201527f657465726d696e65640000000000000000000000000000000000000000000000606482015260840161069d565b6001600160a01b0383166000908152600c602052604081205463ffffffff16908190036109595760009150506105b2565b6001600160a01b0384166000908152600b60205260408120849161097e600185611d4e565b63ffffffff908116825260208201929092526040016000205416116109e7576001600160a01b0384166000908152600b60205260408120906109c1600184611d4e565b63ffffffff1663ffffffff168152602001908152602001600020600101549150506105b2565b6001600160a01b0384166000908152600b6020908152604080832083805290915290205463ffffffff16831015610a225760009150506105b2565b600080610a30600184611d4e565b90505b8163ffffffff168163ffffffff161115610af85760006002610a558484611d4e565b610a5f9190611da1565b610a699083611d4e565b6001600160a01b0388166000908152600b6020908152604080832063ffffffff8086168552908352928190208151808301909252805490931680825260019093015491810191909152919250879003610acc576020015194506105b29350505050565b805163ffffffff16871115610ae357819350610af1565b610aee600183611d4e565b92505b5050610a33565b506001600160a01b0385166000908152600b6020908152604080832063ffffffff9094168352929052206001015491505092915050565b60606004805461051e90611ccc565b60006105ae338461061285604051806060016040528060258152602001611ed8602591393360009081526002602090815260408083206001600160a01b038d168452909152902054919061150b565b6000546001600160a01b03163314610c0d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201527f5365747465720000000000000000000000000000000000000000000000000000606482015260840161069d565b600780546001600160a01b039485167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600880549385169382169390931790925560098054919093169116179055565b60006105ae3384846111ab565b6001600160a01b0381166000908152600c602052604081205463ffffffff1680610c9c576000610cdf565b6001600160a01b0383166000908152600b6020526040812090610cc0600184611d4e565b63ffffffff1663ffffffff168152602001908152602001600020600101545b9392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866610d1161050f565b80519060200120610d1f4690565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60c08401526001600160a01b038b1660e084015261010083018a90526101208084018a9052825180850390910181526101408401909252815191909301207f1901000000000000000000000000000000000000000000000000000000000000610160830152610162820183905261018282018190529192506000906101a201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa158015610e84573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001519150506001600160a01b038116610f2b5760405162461bcd60e51b815260206004820152602860248201527f4f5241434c453a3a64656c656761746542795369673a20696e76616c6964207360448201527f69676e6174757265000000000000000000000000000000000000000000000000606482015260840161069d565b6001600160a01b0381166000908152600d60205260408120805491610f4f83611dc4565b919050558914610fc65760405162461bcd60e51b8152602060048201526024808201527f4f5241434c453a3a64656c656761746542795369673a20696e76616c6964206e60448201527f6f6e636500000000000000000000000000000000000000000000000000000000606482015260840161069d565b8742111561103c5760405162461bcd60e51b815260206004820152602860248201527f4f5241434c453a3a64656c656761746542795369673a207369676e617475726560448201527f2065787069726564000000000000000000000000000000000000000000000000606482015260840161069d565b611046818b6117f5565b505050505b505050505050565b6001600160a01b0383166110ce5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161069d565b6001600160a01b03821661114a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161069d565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166112275760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161069d565b6001600160a01b0382166112a35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161069d565b600081116112f35760405162461bcd60e51b815260206004820152601b60248201527f45524332303a207472616e73666572207a65726f20616d6f756e740000000000604482015260640161069d565b6001600160a01b038316600090815260016020526040902054818110156113825760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161069d565b600061138f83606461188d565b9050600061139d8483611899565b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49549091506113d5908361159f565b60008052600160209081527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4991909155604080516060810190915260268082526114449287929190611e54908301396001600160a01b038916600090815260016020526040902054919061150b565b6001600160a01b038088166000908152600160205260408082209390935590871681522054611473908261159f565b6001600160a01b038087166000818152600160209081526040808320959095558a84168252600a90528381205491815292909220546114b6928216911683611691565b846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516114fb91815260200190565b60405180910390a3505050505050565b6000818484111561152f5760405162461bcd60e51b815260040161069d9190611aad565b505050900390565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000610cdf8284611dfc565b6001600160a01b0382166116015760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161069d565b60065461160e908261159f565b6006556001600160a01b038216600090815260016020526040902054611634908261159f565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906116859085815260200190565b60405180910390a35050565b816001600160a01b0316836001600160a01b0316141580156116b35750600081115b156117f0576001600160a01b03831615611756576001600160a01b0383166000908152600c602052604081205463ffffffff1690816116f3576000611736565b6001600160a01b0385166000908152600b6020526040812090611717600185611d4e565b63ffffffff1663ffffffff168152602001908152602001600020600101545b905060006117448285611899565b9050611752868484846118a5565b5050505b6001600160a01b038216156117f0576001600160a01b0382166000908152600c602052604081205463ffffffff1690816117915760006117d4565b6001600160a01b0384166000908152600b60205260408120906117b5600185611d4e565b63ffffffff1663ffffffff168152602001908152602001600020600101545b905060006117e2828561159f565b905061104b858484846118a5565b505050565b6001600160a01b038281166000818152600a6020818152604080842080546001845282862054949093528787167fffffffffffffffffffffffff00000000000000000000000000000000000000008416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611887828483611691565b50505050565b6000610cdf8284611e0f565b6000610cdf8284611e23565b60006118c943604051806060016040528060368152602001611e7a60369139611a7d565b905060008463ffffffff1611801561192357506001600160a01b0385166000908152600b6020526040812063ffffffff831691611907600188611d4e565b63ffffffff908116825260208201929092526040016000205416145b1561196c576001600160a01b0385166000908152600b60205260408120839161194d600188611d4e565b63ffffffff168152602081019190915260400160002060010155611a32565b60408051808201825263ffffffff838116825260208083018681526001600160a01b038a166000908152600b83528581208a85168252909252939020915182547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000016911617815590516001918201556119e6908590611e36565b6001600160a01b0386166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff929092169190911790555b60408051848152602081018490526001600160a01b038716917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a25050505050565b6000816401000000008410611aa55760405162461bcd60e51b815260040161069d9190611aad565b509192915050565b600060208083528351808285015260005b81811015611ada57858101830151858201604001528201611abe565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b80356001600160a01b0381168114611b3057600080fd5b919050565b60008060408385031215611b4857600080fd5b611b5183611b19565b946020939093013593505050565b600080600060608486031215611b7457600080fd5b611b7d84611b19565b9250611b8b60208501611b19565b9150604084013590509250925092565b600060208284031215611bad57600080fd5b610cdf82611b19565b600080600060608486031215611bcb57600080fd5b611bd484611b19565b9250611be260208501611b19565b9150611bf060408501611b19565b90509250925092565b60008060008060008060c08789031215611c1257600080fd5b611c1b87611b19565b95506020870135945060408701359350606087013560ff81168114611c3f57600080fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611c6c57600080fd5b611c7583611b19565b9150611c8360208401611b19565b90509250929050565b60008060408385031215611c9f57600080fd5b611ca883611b19565b9150602083013563ffffffff81168114611cc157600080fd5b809150509250929050565b600181811c90821680611ce057607f821691505b602082108103611d19577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b63ffffffff828116828216039080821115611d6b57611d6b611d1f565b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600063ffffffff80841680611db857611db8611d72565b92169190910492915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611df557611df5611d1f565b5060010190565b808201808211156105b2576105b2611d1f565b600082611e1e57611e1e611d72565b500490565b818103818111156105b2576105b2611d1f565b63ffffffff818116838216019080821115611d6b57611d6b611d1f56fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654f5241434c453a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747345524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207ec85725fa233356b4b1633332231dd48eda827006785ada34d35c7992e8742b64736f6c63430008130033";

type ProphetTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProphetTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProphetToken__factory extends ContractFactory {
  constructor(...args: ProphetTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ProphetToken> {
    return super.deploy(overrides || {}) as Promise<ProphetToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProphetToken {
    return super.attach(address) as ProphetToken;
  }
  override connect(signer: Signer): ProphetToken__factory {
    return super.connect(signer) as ProphetToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProphetTokenInterface {
    return new utils.Interface(_abi) as ProphetTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProphetToken {
    return new Contract(address, _abi, signerOrProvider) as ProphetToken;
  }
}
