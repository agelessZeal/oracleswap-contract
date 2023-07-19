/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MasterProphet,
  MasterProphetInterface,
} from "../../../contracts/MasterProphet.sol/MasterProphet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pro",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_proPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bonusEndBlock",
        type: "uint256",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "BONUS_MULTIPLIER",
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
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bonusEndBlock",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
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
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "ownerGovernance",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingPro",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accProPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
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
    inputs: [],
    name: "pro",
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
    name: "proPerBlock",
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
    inputs: [],
    name: "renounceOwnerSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "ownerGovernance_",
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
    name: "startBlock",
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
    inputs: [],
    name: "totalAllocPoint",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proPerBlock",
        type: "uint256",
      },
    ],
    name: "updateProPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060065534801561001557600080fd5b50604051611aaf380380611aaf833981016040819052610034916100c2565b61003d33610072565b600180546001600160a01b0319166001600160a01b03959095169490941790935560039190915560029190915560075561010d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080608085870312156100d857600080fd5b84516001600160a01b03811681146100ef57600080fd5b60208601516040870151606090970151919890975090945092505050565b6119938061011c6000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806363c7f51b116100ee5780638aa285501161009757806393f1a40b1161007157806393f1a40b1461036a578063d7c31a69146103b1578063e2bbb158146103d1578063e5dc22a8146103e457600080fd5b80638aa285501461032f5780638da5cb5b146103375780638dbb1e3a1461035757600080fd5b806367991767116100c8578063679917671461030057806371416f4d14610313578063856ca5b41461031c57600080fd5b806363c7f51b1461029557806364482f79146102a8578063656bc2f4146102bb57600080fd5b806339499d661161015057806351eb05a61161012a57806351eb05a6146102675780635312ea8e1461027a578063630b5ba11461028d57600080fd5b806339499d6614610243578063441a3e701461024b57806348cd4cb11461025e57600080fd5b80631aed6553116101815780631aed6553146102125780631eaaa0451461021b578063299a7bcc1461023057600080fd5b8063081e3eda146101a85780631526fe27146101bf57806317caf6f114610209575b600080fd5b6004545b6040519081526020015b60405180910390f35b6101d26101cd366004611632565b610402565b6040805173ffffffffffffffffffffffffffffffffffffffff909516855260208501939093529183015260608201526080016101b6565b6101ac60065481565b6101ac60025481565b61022e61022936600461167b565b610453565b005b61022e61023e3660046116bd565b61062d565b61022e61070d565b61022e6102593660046116f6565b6107a6565b6101ac60075481565b61022e610275366004611632565b610912565b61022e610288366004611632565b610a62565b61022e610b11565b61022e6102a3366004611718565b610b3c565b61022e6102b6366004611735565b610c5e565b6009546102db9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101b6565b61022e61030e366004611632565b610d6c565b6101ac60035481565b6101ac61032a366004611763565b610dfa565b6101ac600681565b6008546102db9073ffffffffffffffffffffffffffffffffffffffff1681565b6101ac6103653660046116f6565b610f7f565b61039c610378366004611763565b60056020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101b6565b6001546102db9073ffffffffffffffffffffffffffffffffffffffff1681565b61022e6103df3660046116f6565b610fe5565b60005473ffffffffffffffffffffffffffffffffffffffff166102db565b6004818154811061041257600080fd5b6000918252602090912060049091020180546001820154600283015460039093015473ffffffffffffffffffffffffffffffffffffffff9092169350919084565b60085473ffffffffffffffffffffffffffffffffffffffff16331480610490575060095473ffffffffffffffffffffffffffffffffffffffff1633145b6104e15760405162461bcd60e51b815260206004820152601160248201527f55736572206973206e6f74206f776e657200000000000000000000000000000060448201526064015b60405180910390fd5b80156104ef576104ef610b11565b6000600754431161050257600754610504565b435b60065490915061051490856110fd565b6006556040805160808101825273ffffffffffffffffffffffffffffffffffffffff948516815260208101958652908101918252600060608201818152600480546001810182559281905292517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b9290930291820180547fffffffffffffffffffffffff000000000000000000000000000000000000000016939096169290921790945593517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c840155517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19d8301555090517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19e90910155565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106ba5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201527f536574746572000000000000000000000000000000000000000000000000000060648201526084016104d8565b6008805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560098054929093169116179055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461079a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201527f536574746572000000000000000000000000000000000000000000000000000060648201526084016104d8565b6107a46000611110565b565b6000600483815481106107bb576107bb611788565b6000918252602080832086845260058252604080852033865290925292208054600490920290920192508311156108345760405162461bcd60e51b815260206004820152601260248201527f77697468647261773a206e6f7420676f6f64000000000000000000000000000060448201526064016104d8565b61083d84610912565b6000610877826001015461087164e8d4a5100061086b8760030154876000015461118590919063ffffffff16565b90611191565b9061119d565b905061088333826111a9565b815461088f908561119d565b80835560038401546108ac9164e8d4a510009161086b9190611185565b600183015582546108d49073ffffffffffffffffffffffffffffffffffffffff16338661123f565b604051848152859033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689060200160405180910390a35050505050565b60006004828154811061092757610927611788565b9060005260206000209060040201905080600201544311610946575050565b80546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156109b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d891906117b7565b9050806000036109ed57504360029091015550565b60006109fd836002015443610f7f565b90506000610a2a60065461086b8660010154610a246003548761118590919063ffffffff16565b90611185565b9050610a4d610a428461086b8464e8d4a51000611185565b6003860154906110fd565b60038501555050436002909201919091555050565b600060048281548110610a7757610a77611788565b60009182526020808320858452600582526040808520338087529352909320805460049093029093018054909450610ac99273ffffffffffffffffffffffffffffffffffffffff91909116919061123f565b8054604051908152839033907fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959060200160405180910390a360008082556001909101555050565b60045460005b81811015610b3857610b2881610912565b610b31816117ff565b9050610b17565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bc95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201527f536574746572000000000000000000000000000000000000000000000000000060648201526084016104d8565b73ffffffffffffffffffffffffffffffffffffffff8116610c525760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104d8565b610c5b81611110565b50565b60085473ffffffffffffffffffffffffffffffffffffffff16331480610c9b575060095473ffffffffffffffffffffffffffffffffffffffff1633145b610ce75760405162461bcd60e51b815260206004820152601160248201527f55736572206973206e6f74206f776e657200000000000000000000000000000060448201526064016104d8565b8015610cf557610cf5610b11565b610d3882610d3260048681548110610d0f57610d0f611788565b90600052602060002090600402016001015460065461119d90919063ffffffff16565b906110fd565b6006819055508160048481548110610d5257610d52611788565b906000526020600020906004020160010181905550505050565b60085473ffffffffffffffffffffffffffffffffffffffff16331480610da9575060095473ffffffffffffffffffffffffffffffffffffffff1633145b610df55760405162461bcd60e51b815260206004820152601160248201527f55736572206973206e6f74206f776e657200000000000000000000000000000060448201526064016104d8565b600355565b60008060048481548110610e1057610e10611788565b6000918252602080832087845260058252604080852073ffffffffffffffffffffffffffffffffffffffff8981168752935280852060049485029092016003810154815492517f70a08231000000000000000000000000000000000000000000000000000000008152309681019690965290965091949193919216906370a0823190602401602060405180830381865afa158015610eb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed691906117b7565b9050836002015443118015610eea57508015155b15610f4a576000610eff856002015443610f7f565b90506000610f2660065461086b8860010154610a246003548761118590919063ffffffff16565b9050610f45610f3e8461086b8464e8d4a51000611185565b85906110fd565b935050505b610f72836001015461087164e8d4a5100061086b86886000015461118590919063ffffffff16565b9450505050505b92915050565b60006002548211610fa057610f996006610a24848661119d565b9050610f79565b6002548310610fb357610f99828461119d565b610f99610fcb6002548461119d90919063ffffffff16565b610d326006610a248760025461119d90919063ffffffff16565b600060048381548110610ffa57610ffa611788565b6000918252602080832086845260058252604080852033865290925292206004909102909101915061102b84610912565b80541561106e576000611060826001015461087164e8d4a5100061086b8760030154876000015461118590919063ffffffff16565b905061106c33826111a9565b505b81546110929073ffffffffffffffffffffffffffffffffffffffff16333086611318565b805461109e90846110fd565b80825560038301546110bb9164e8d4a510009161086b9190611185565b6001820155604051838152849033907f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159060200160405180910390a350505050565b60006111098284611837565b9392505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000611109828461184a565b60006111098284611861565b6000611109828461189c565b8015610b38576001546040517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b15801561122357600080fd5b505af1158015611237573d6000803e3d6000fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526113139084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261137c565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113769085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611291565b50505050565b60006113de826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114719092919063ffffffff16565b90508051600014806113ff5750808060200190518101906113ff91906118af565b6113135760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104d8565b60606114808484600085611488565b949350505050565b6060824710156115005760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104d8565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161152991906118f0565b60006040518083038185875af1925050503d8060008114611566576040519150601f19603f3d011682016040523d82523d6000602084013e61156b565b606091505b509150915061157c87838387611587565b979650505050505050565b606083156116035782516000036115fc5773ffffffffffffffffffffffffffffffffffffffff85163b6115fc5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104d8565b5081611480565b61148083838151156116185781518083602001fd5b8060405162461bcd60e51b81526004016104d8919061190c565b60006020828403121561164457600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610c5b57600080fd5b8015158114610c5b57600080fd5b60008060006060848603121561169057600080fd5b8335925060208401356116a28161164b565b915060408401356116b28161166d565b809150509250925092565b600080604083850312156116d057600080fd5b82356116db8161164b565b915060208301356116eb8161164b565b809150509250929050565b6000806040838503121561170957600080fd5b50508035926020909101359150565b60006020828403121561172a57600080fd5b81356111098161164b565b60008060006060848603121561174a57600080fd5b833592506020840135915060408401356116b28161166d565b6000806040838503121561177657600080fd5b8235915060208301356116eb8161164b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156117c957600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611830576118306117d0565b5060010190565b80820180821115610f7957610f796117d0565b8082028115828204841417610f7957610f796117d0565b600082611897577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b81810381811115610f7957610f796117d0565b6000602082840312156118c157600080fd5b81516111098161166d565b60005b838110156118e75781810151838201526020016118cf565b50506000910152565b600082516119028184602087016118cc565b9190910192915050565b602081526000825180602084015261192b8160408501602087016118cc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220b576207cd06086556a95e088d87812e5bf1efe925204b7cd204bc81894c30f6664736f6c63430008130033";

type MasterProphetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MasterProphetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MasterProphet__factory extends ContractFactory {
  constructor(...args: MasterProphetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _pro: string,
    _proPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<MasterProphet> {
    return super.deploy(
      _pro,
      _proPerBlock,
      _startBlock,
      _bonusEndBlock,
      overrides || {}
    ) as Promise<MasterProphet>;
  }
  override getDeployTransaction(
    _pro: string,
    _proPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pro,
      _proPerBlock,
      _startBlock,
      _bonusEndBlock,
      overrides || {}
    );
  }
  override attach(address: string): MasterProphet {
    return super.attach(address) as MasterProphet;
  }
  override connect(signer: Signer): MasterProphet__factory {
    return super.connect(signer) as MasterProphet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterProphetInterface {
    return new utils.Interface(_abi) as MasterProphetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterProphet {
    return new Contract(address, _abi, signerOrProvider) as MasterProphet;
  }
}
