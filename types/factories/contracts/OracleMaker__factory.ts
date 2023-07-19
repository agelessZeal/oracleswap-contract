/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OracleMaker,
  OracleMakerInterface,
} from "../../contracts/OracleMaker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bar",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "LogBridgeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "server",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountORACLE",
        type: "uint256",
      },
    ],
    name: "LogConvert",
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
    inputs: [],
    name: "bar",
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
        name: "token",
        type: "address",
      },
    ],
    name: "bridgeFor",
    outputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    name: "convert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "token0",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "token1",
        type: "address[]",
      },
    ],
    name: "convertMultiple",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IOracleSwapFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pendingOwner",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "setBridge",
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
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001be038038062001be08339810160408190526200003591620000b4565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b0393841660805291831660a052821660c0521660e05262000111565b80516001600160a01b0381168114620000af57600080fd5b919050565b60008060008060808587031215620000cb57600080fd5b620000d68562000097565b9350620000e66020860162000097565b9250620000f66040860162000097565b9150620001066060860162000097565b905092959194509250565b60805160a05160c05160e0516119fb620001e5600039600081816105660152818161069701528181610b6301528181610b9f01528181610d4201528181610d7e01528181610da701528181610dd401528181610e100152610e3901526000818161052901528181610ace01528181610b1201528181610bff01528181610c4301528181610ca701528181610ceb015261101001526000818161019a01528181610b3401528181610c6501528181610d0d01526110320152600081816101600152818161075c015261109701526119fb6000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063a761a93911610076578063c45a01551161005b578063c45a01551461015b578063e30c397814610182578063febb0f7e1461019557600080fd5b8063a761a93914610135578063bd1b820c1461014857600080fd5b80634e71e0c8116100a75780634e71e0c8146100eb5780638da5cb5b146100f35780639d22ae8c1461012257600080fd5b8063078dfbe7146100c3578063303e6aa4146100d8575b600080fd5b6100d66100d13660046115bb565b6101bc565b005b6100d66100e6366004611652565b61032d565b6100d66103f8565b600054610106906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100d66101303660046116be565b6104cd565b6101066101433660046116f7565b610674565b6100d66101563660046116be565b6106bc565b6101067f000000000000000000000000000000000000000000000000000000000000000081565b600154610106906001600160a01b031681565b6101067f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b0316331461021b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b81156102f4576001600160a01b0383161515806102355750805b6102815760405162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152606401610212565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116179055505050565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0385161790555b505050565b33321461037c5760405162461bcd60e51b815260206004820152601960248201527f4f7261636c654d616b65723a206d7573742075736520454f41000000000000006044820152606401610212565b8260005b818110156103f0576103de86868381811061039d5761039d61171b565b90506020020160208101906103b291906116f7565b8585848181106103c4576103c461171b565b90506020020160208101906103d991906116f7565b610719565b806103e881611779565b915050610380565b505050505050565b6001546001600160a01b03163381146104535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401610212565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6000546001600160a01b031633146105275760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610212565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161415801561059b57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614155b80156105b95750806001600160a01b0316826001600160a01b031614155b6106055760405162461bcd60e51b815260206004820152601b60248201527f4f7261636c654d616b65723a20496e76616c69642062726964676500000000006044820152606401610212565b6001600160a01b0382811660008181526002602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169486169485179055517f2e103aa707acc565f9a1547341914802b2bfe977fd79c595209f248ae4b006139190a35050565b6001600160a01b0380821660009081526002602052604090205416806106b757507f00000000000000000000000000000000000000000000000000000000000000005b919050565b33321461070b5760405162461bcd60e51b815260206004820152601960248201527f4f7261636c654d616b65723a206d7573742075736520454f41000000000000006044820152606401610212565b6107158282610719565b5050565b6040517fe6a439050000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015282811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063e6a4390590604401602060405180830381865afa1580156107a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c991906117b1565b90506001600160a01b0381166108215760405162461bcd60e51b815260206004820152601960248201527f4f7261636c654d616b65723a20496e76616c69642070616972000000000000006044820152606401610212565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526108b99082906001600160a01b038216906370a0823190602401602060405180830381865afa158015610884573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a891906117ce565b6001600160a01b0384169190610a23565b6040517f89afcb4400000000000000000000000000000000000000000000000000000000815230600482015260009081906001600160a01b038416906389afcb449060240160408051808303816000875af115801561091c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094091906117e7565b91509150826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610982573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a691906117b1565b6001600160a01b0316856001600160a01b0316146109c057905b6001600160a01b03808516908616337fd06b1d7ed79b664d17472c6f6997b929f1abe463ccccb4e5b6a0038f2f730c1585856109fe8b8b8484610aa3565b6040805193845260208401929092529082015260600160405180910390a45050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610328908490610f0b565b6000836001600160a01b0316856001600160a01b031603610bfd576000610aca8484610ff3565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b031603610b6157610b596001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083610a23565b809150610bf7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b031603610bcb57610bc47f000000000000000000000000000000000000000000000000000000000000000082611008565b9150610bf7565b6000610bd687610674565b9050610be487828430611052565b9150610bf38182846000610aa3565b9250505b50610f03565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b031603610ca557610c8a6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000085610a23565b610c9e83610c988685611008565b90610ff3565b9050610f03565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b031603610d4057610d326001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000084610a23565b610c9e82610c988786611008565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b031603610dd257610c9e7f0000000000000000000000000000000000000000000000000000000000000000610dcd85610c98887f00000000000000000000000000000000000000000000000000000000000000008830611052565b611008565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b031603610e5f57610c9e7f0000000000000000000000000000000000000000000000000000000000000000610dcd84610c98897f00000000000000000000000000000000000000000000000000000000000000008930611052565b6000610e6a86610674565b90506000610e7786610674565b9050856001600160a01b0316826001600160a01b031603610eb057610ea98287610ea38a868a30611052565b87610aa3565b9250610f00565b866001600160a01b0316816001600160a01b031603610ee057610ea9878287610edb8a868a30611052565b610aa3565b610efd8282610ef18a868a30611052565b610edb8a868a30611052565b92505b50505b949350505050565b6000610f60826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113fa9092919063ffffffff16565b9050805160001480610f81575080806020019051810190610f81919061180b565b6103285760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610212565b6000610fff8284611828565b90505b92915050565b6000610fff837f0000000000000000000000000000000000000000000000000000000000000000847f00000000000000000000000000000000000000000000000000000000000000005b6040517fe6a439050000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152848116602483015260009182917f0000000000000000000000000000000000000000000000000000000000000000169063e6a4390590604401602060405180830381865afa1580156110de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110291906117b1565b90506001600160a01b03811661115a5760405162461bcd60e51b815260206004820152601b60248201527f4f7261636c654d616b65723a2043616e6e6f7420636f6e7665727400000000006044820152606401610212565b600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa15801561119b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111bf9190611859565b506dffffffffffffffffffffffffffff918216935016905060006111e5876103e5611409565b9050836001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015611225573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124991906117b1565b6001600160a01b0316896001600160a01b03160361132a5761127181610c98856103e8611409565b61127b8284611409565b611285919061189e565b945061129b6001600160a01b038a168589610a23565b60408051600080825260208201928390527f022c0d9f000000000000000000000000000000000000000000000000000000009092526001600160a01b0386169163022c0d9f916112f3919089908b9060248101611947565b600060405180830381600087803b15801561130d57600080fd5b505af1158015611321573d6000803e3d6000fd5b505050506113ee565b61133a81610c98846103e8611409565b6113448285611409565b61134e919061189e565b94506113646001600160a01b038a168589610a23565b60408051600080825260208201928390527f022c0d9f000000000000000000000000000000000000000000000000000000009092526001600160a01b0386169163022c0d9f916113bb9189918b9060248101611947565b600060405180830381600087803b1580156113d557600080fd5b505af11580156113e9573d6000803e3d6000fd5b505050505b50505050949350505050565b6060610f038484600085611415565b6000610fff828461197f565b60608247101561148d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610212565b600080866001600160a01b031685876040516114a99190611996565b60006040518083038185875af1925050503d80600081146114e6576040519150601f19603f3d011682016040523d82523d6000602084013e6114eb565b606091505b5091509150610efd878383876060831561156657825160000361155f576001600160a01b0385163b61155f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610212565b5081610f03565b610f03838381511561157b5781518083602001fd5b8060405162461bcd60e51b815260040161021291906119b2565b6001600160a01b03811681146115aa57600080fd5b50565b80151581146115aa57600080fd5b6000806000606084860312156115d057600080fd5b83356115db81611595565b925060208401356115eb816115ad565b915060408401356115fb816115ad565b809150509250925092565b60008083601f84011261161857600080fd5b50813567ffffffffffffffff81111561163057600080fd5b6020830191508360208260051b850101111561164b57600080fd5b9250929050565b6000806000806040858703121561166857600080fd5b843567ffffffffffffffff8082111561168057600080fd5b61168c88838901611606565b909650945060208701359150808211156116a557600080fd5b506116b287828801611606565b95989497509550505050565b600080604083850312156116d157600080fd5b82356116dc81611595565b915060208301356116ec81611595565b809150509250929050565b60006020828403121561170957600080fd5b813561171481611595565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036117aa576117aa61174a565b5060010190565b6000602082840312156117c357600080fd5b815161171481611595565b6000602082840312156117e057600080fd5b5051919050565b600080604083850312156117fa57600080fd5b505080516020909101519092909150565b60006020828403121561181d57600080fd5b8151611714816115ad565b808201808211156110025761100261174a565b80516dffffffffffffffffffffffffffff811681146106b757600080fd5b60008060006060848603121561186e57600080fd5b6118778461183b565b92506118856020850161183b565b9150604084015163ffffffff811681146115fb57600080fd5b6000826118d4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60005b838110156118f45781810151838201526020016118dc565b50506000910152565b600081518084526119158160208601602086016118d9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8481528360208201526001600160a01b038316604082015260806060820152600061197560808301846118fd565b9695505050505050565b80820281158282048414176110025761100261174a565b600082516119a88184602087016118d9565b9190910192915050565b602081526000610fff60208301846118fd56fea2646970667358221220b82f3de7a66534426408c4de99f657efc7f0719fae73d06d4c11658d6fa47eea64736f6c63430008130033";

type OracleMakerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleMakerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleMaker__factory extends ContractFactory {
  constructor(...args: OracleMakerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: string,
    _bar: string,
    _oracle: string,
    _weth: string,
    overrides?: Overrides & { from?: string }
  ): Promise<OracleMaker> {
    return super.deploy(
      _factory,
      _bar,
      _oracle,
      _weth,
      overrides || {}
    ) as Promise<OracleMaker>;
  }
  override getDeployTransaction(
    _factory: string,
    _bar: string,
    _oracle: string,
    _weth: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _bar,
      _oracle,
      _weth,
      overrides || {}
    );
  }
  override attach(address: string): OracleMaker {
    return super.attach(address) as OracleMaker;
  }
  override connect(signer: Signer): OracleMaker__factory {
    return super.connect(signer) as OracleMaker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleMakerInterface {
    return new utils.Interface(_abi) as OracleMakerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleMaker {
    return new Contract(address, _abi, signerOrProvider) as OracleMaker;
  }
}
