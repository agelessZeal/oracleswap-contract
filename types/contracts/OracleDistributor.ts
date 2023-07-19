/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface OracleDistributorInterface extends utils.Interface {
  functions: {
    "LPConvert()": FunctionFragment;
    "LPEnalbe()": FunctionFragment;
    "MIN_LP_AMOUNT()": FunctionFragment;
    "badLpGetter()": FunctionFragment;
    "bridgeFor(address)": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "convert(address,address)": FunctionFragment;
    "convertMultiple(address[],address[])": FunctionFragment;
    "deadAddress()": FunctionFragment;
    "factory()": FunctionFragment;
    "limit_gas()": FunctionFragment;
    "oracleBurnTotalAmount()": FunctionFragment;
    "oracleFoundryTotalAmount()": FunctionFragment;
    "oracleTotalAmount()": FunctionFragment;
    "oracleTreasury()": FunctionFragment;
    "oracleTreasurySetter()": FunctionFragment;
    "oracleTreasuryTotalAmount()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "prophetSacrifice()": FunctionFragment;
    "prophetSacrificeSetter()": FunctionFragment;
    "prophetSacrificeTotalAmount()": FunctionFragment;
    "reflectionLPs(address)": FunctionFragment;
    "setBadLpGetter(address)": FunctionFragment;
    "setBridge(address,address)": FunctionFragment;
    "setGasLimit(uint256)": FunctionFragment;
    "setMinLPAmount(uint256)": FunctionFragment;
    "setOracleLPEnable(bool)": FunctionFragment;
    "setOracleTreasury(address)": FunctionFragment;
    "setOracleTreasurySetter(address)": FunctionFragment;
    "setProphetSacrifice(address)": FunctionFragment;
    "setProphetSacrificeSetter(address)": FunctionFragment;
    "setReflectionLP(address,bool)": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "xOracle()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "LPConvert"
      | "LPEnalbe"
      | "MIN_LP_AMOUNT"
      | "badLpGetter"
      | "bridgeFor"
      | "claimOwnership"
      | "convert"
      | "convertMultiple"
      | "deadAddress"
      | "factory"
      | "limit_gas"
      | "oracleBurnTotalAmount"
      | "oracleFoundryTotalAmount"
      | "oracleTotalAmount"
      | "oracleTreasury"
      | "oracleTreasurySetter"
      | "oracleTreasuryTotalAmount"
      | "owner"
      | "pendingOwner"
      | "prophetSacrifice"
      | "prophetSacrificeSetter"
      | "prophetSacrificeTotalAmount"
      | "reflectionLPs"
      | "setBadLpGetter"
      | "setBridge"
      | "setGasLimit"
      | "setMinLPAmount"
      | "setOracleLPEnable"
      | "setOracleTreasury"
      | "setOracleTreasurySetter"
      | "setProphetSacrifice"
      | "setProphetSacrificeSetter"
      | "setReflectionLP"
      | "transferOwnership"
      | "xOracle"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "LPConvert", values?: undefined): string;
  encodeFunctionData(functionFragment: "LPEnalbe", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MIN_LP_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "badLpGetter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bridgeFor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convert",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "convertMultiple",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deadAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "limit_gas", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "oracleBurnTotalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleFoundryTotalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleTotalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleTreasurySetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleTreasuryTotalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prophetSacrifice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prophetSacrificeSetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prophetSacrificeTotalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reflectionLPs",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBadLpGetter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBridge",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setGasLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinLPAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleLPEnable",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleTreasurySetter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProphetSacrifice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProphetSacrificeSetter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReflectionLP",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, boolean, boolean]
  ): string;
  encodeFunctionData(functionFragment: "xOracle", values?: undefined): string;

  decodeFunctionResult(functionFragment: "LPConvert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LPEnalbe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MIN_LP_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "badLpGetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bridgeFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convertMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deadAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limit_gas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleBurnTotalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleFoundryTotalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleTotalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleTreasurySetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleTreasuryTotalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prophetSacrifice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prophetSacrificeSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prophetSacrificeTotalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reflectionLPs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBadLpGetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinLPAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOracleLPEnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOracleTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOracleTreasurySetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProphetSacrifice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProphetSacrificeSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReflectionLP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xOracle", data: BytesLike): Result;

  events: {
    "BurnConvert(uint256)": EventFragment;
    "FoundryConvert(uint256)": EventFragment;
    "LogBridgeSet(address,address)": EventFragment;
    "LogConvert(address,address,address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProphetSacrificeConvert(uint256)": EventFragment;
    "TotalConvert(uint256)": EventFragment;
    "TreasuryConvert(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BurnConvert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FoundryConvert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogBridgeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogConvert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProphetSacrificeConvert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TotalConvert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasuryConvert"): EventFragment;
}

export interface BurnConvertEventObject {
  amountORACLE: BigNumber;
}
export type BurnConvertEvent = TypedEvent<[BigNumber], BurnConvertEventObject>;

export type BurnConvertEventFilter = TypedEventFilter<BurnConvertEvent>;

export interface FoundryConvertEventObject {
  amountORACLE: BigNumber;
}
export type FoundryConvertEvent = TypedEvent<
  [BigNumber],
  FoundryConvertEventObject
>;

export type FoundryConvertEventFilter = TypedEventFilter<FoundryConvertEvent>;

export interface LogBridgeSetEventObject {
  token: string;
  bridge: string;
}
export type LogBridgeSetEvent = TypedEvent<
  [string, string],
  LogBridgeSetEventObject
>;

export type LogBridgeSetEventFilter = TypedEventFilter<LogBridgeSetEvent>;

export interface LogConvertEventObject {
  server: string;
  token0: string;
  token1: string;
  amount0: BigNumber;
  amount1: BigNumber;
  amountORACLE: BigNumber;
}
export type LogConvertEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber],
  LogConvertEventObject
>;

export type LogConvertEventFilter = TypedEventFilter<LogConvertEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ProphetSacrificeConvertEventObject {
  amountORACLE: BigNumber;
}
export type ProphetSacrificeConvertEvent = TypedEvent<
  [BigNumber],
  ProphetSacrificeConvertEventObject
>;

export type ProphetSacrificeConvertEventFilter =
  TypedEventFilter<ProphetSacrificeConvertEvent>;

export interface TotalConvertEventObject {
  amountORACLE: BigNumber;
}
export type TotalConvertEvent = TypedEvent<
  [BigNumber],
  TotalConvertEventObject
>;

export type TotalConvertEventFilter = TypedEventFilter<TotalConvertEvent>;

export interface TreasuryConvertEventObject {
  amountORACLE: BigNumber;
}
export type TreasuryConvertEvent = TypedEvent<
  [BigNumber],
  TreasuryConvertEventObject
>;

export type TreasuryConvertEventFilter = TypedEventFilter<TreasuryConvertEvent>;

export interface OracleDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleDistributorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    LPConvert(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    LPEnalbe(overrides?: CallOverrides): Promise<[boolean]>;

    MIN_LP_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    badLpGetter(overrides?: CallOverrides): Promise<[string]>;

    bridgeFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { bridge: string }>;

    claimOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    convert(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    convertMultiple(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    deadAddress(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    limit_gas(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracleBurnTotalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracleFoundryTotalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracleTotalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracleTreasury(overrides?: CallOverrides): Promise<[string]>;

    oracleTreasurySetter(overrides?: CallOverrides): Promise<[string]>;

    oracleTreasuryTotalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    prophetSacrifice(overrides?: CallOverrides): Promise<[string]>;

    prophetSacrificeSetter(overrides?: CallOverrides): Promise<[string]>;

    prophetSacrificeTotalAmount(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    reflectionLPs(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    setBadLpGetter(
      _getter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setBridge(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setGasLimit(
      _limit_gas: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setMinLPAmount(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOracleLPEnable(
      _onlyOracleLp: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOracleTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOracleTreasurySetter(
      _oracleTreasurySetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setProphetSacrifice(
      _prophetSacrifice: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setProphetSacrificeSetter(
      _prophetSacrificeSetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setReflectionLP(
      _lp: string,
      _enable: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    xOracle(overrides?: CallOverrides): Promise<[string]>;
  };

  LPConvert(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  LPEnalbe(overrides?: CallOverrides): Promise<boolean>;

  MIN_LP_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  badLpGetter(overrides?: CallOverrides): Promise<string>;

  bridgeFor(token: string, overrides?: CallOverrides): Promise<string>;

  claimOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  convert(
    token0: string,
    token1: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  convertMultiple(
    token0: string[],
    token1: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  deadAddress(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  limit_gas(overrides?: CallOverrides): Promise<BigNumber>;

  oracleBurnTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  oracleFoundryTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  oracleTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  oracleTreasury(overrides?: CallOverrides): Promise<string>;

  oracleTreasurySetter(overrides?: CallOverrides): Promise<string>;

  oracleTreasuryTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  prophetSacrifice(overrides?: CallOverrides): Promise<string>;

  prophetSacrificeSetter(overrides?: CallOverrides): Promise<string>;

  prophetSacrificeTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  reflectionLPs(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  setBadLpGetter(
    _getter: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setBridge(
    token: string,
    bridge: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setGasLimit(
    _limit_gas: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setMinLPAmount(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOracleLPEnable(
    _onlyOracleLp: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOracleTreasury(
    _treasury: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOracleTreasurySetter(
    _oracleTreasurySetter: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setProphetSacrifice(
    _prophetSacrifice: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setProphetSacrificeSetter(
    _prophetSacrificeSetter: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setReflectionLP(
    _lp: string,
    _enable: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  xOracle(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    LPConvert(overrides?: CallOverrides): Promise<void>;

    LPEnalbe(overrides?: CallOverrides): Promise<boolean>;

    MIN_LP_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    badLpGetter(overrides?: CallOverrides): Promise<string>;

    bridgeFor(token: string, overrides?: CallOverrides): Promise<string>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    convert(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    convertMultiple(
      token0: string[],
      token1: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    deadAddress(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    limit_gas(overrides?: CallOverrides): Promise<BigNumber>;

    oracleBurnTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    oracleFoundryTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    oracleTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    oracleTreasury(overrides?: CallOverrides): Promise<string>;

    oracleTreasurySetter(overrides?: CallOverrides): Promise<string>;

    oracleTreasuryTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    prophetSacrifice(overrides?: CallOverrides): Promise<string>;

    prophetSacrificeSetter(overrides?: CallOverrides): Promise<string>;

    prophetSacrificeTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    reflectionLPs(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    setBadLpGetter(_getter: string, overrides?: CallOverrides): Promise<void>;

    setBridge(
      token: string,
      bridge: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setGasLimit(
      _limit_gas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinLPAmount(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracleLPEnable(
      _onlyOracleLp: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracleTreasury(
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracleTreasurySetter(
      _oracleTreasurySetter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setProphetSacrifice(
      _prophetSacrifice: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setProphetSacrificeSetter(
      _prophetSacrificeSetter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReflectionLP(
      _lp: string,
      _enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    xOracle(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "BurnConvert(uint256)"(amountORACLE?: null): BurnConvertEventFilter;
    BurnConvert(amountORACLE?: null): BurnConvertEventFilter;

    "FoundryConvert(uint256)"(amountORACLE?: null): FoundryConvertEventFilter;
    FoundryConvert(amountORACLE?: null): FoundryConvertEventFilter;

    "LogBridgeSet(address,address)"(
      token?: string | null,
      bridge?: string | null
    ): LogBridgeSetEventFilter;
    LogBridgeSet(
      token?: string | null,
      bridge?: string | null
    ): LogBridgeSetEventFilter;

    "LogConvert(address,address,address,uint256,uint256,uint256)"(
      server?: string | null,
      token0?: string | null,
      token1?: string | null,
      amount0?: null,
      amount1?: null,
      amountORACLE?: null
    ): LogConvertEventFilter;
    LogConvert(
      server?: string | null,
      token0?: string | null,
      token1?: string | null,
      amount0?: null,
      amount1?: null,
      amountORACLE?: null
    ): LogConvertEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "ProphetSacrificeConvert(uint256)"(
      amountORACLE?: null
    ): ProphetSacrificeConvertEventFilter;
    ProphetSacrificeConvert(
      amountORACLE?: null
    ): ProphetSacrificeConvertEventFilter;

    "TotalConvert(uint256)"(amountORACLE?: null): TotalConvertEventFilter;
    TotalConvert(amountORACLE?: null): TotalConvertEventFilter;

    "TreasuryConvert(uint256)"(amountORACLE?: null): TreasuryConvertEventFilter;
    TreasuryConvert(amountORACLE?: null): TreasuryConvertEventFilter;
  };

  estimateGas: {
    LPConvert(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    LPEnalbe(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LP_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    badLpGetter(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    convert(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    convertMultiple(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    deadAddress(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    limit_gas(overrides?: CallOverrides): Promise<BigNumber>;

    oracleBurnTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    oracleFoundryTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    oracleTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    oracleTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    oracleTreasurySetter(overrides?: CallOverrides): Promise<BigNumber>;

    oracleTreasuryTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    prophetSacrifice(overrides?: CallOverrides): Promise<BigNumber>;

    prophetSacrificeSetter(overrides?: CallOverrides): Promise<BigNumber>;

    prophetSacrificeTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    reflectionLPs(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setBadLpGetter(
      _getter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setBridge(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setGasLimit(
      _limit_gas: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setMinLPAmount(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOracleLPEnable(
      _onlyOracleLp: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOracleTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOracleTreasurySetter(
      _oracleTreasurySetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setProphetSacrifice(
      _prophetSacrifice: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setProphetSacrificeSetter(
      _prophetSacrificeSetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setReflectionLP(
      _lp: string,
      _enable: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    xOracle(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    LPConvert(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    LPEnalbe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_LP_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    badLpGetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    convert(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    convertMultiple(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    deadAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limit_gas(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracleBurnTotalAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracleFoundryTotalAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracleTotalAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracleTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracleTreasurySetter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracleTreasuryTotalAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prophetSacrifice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prophetSacrificeSetter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prophetSacrificeTotalAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reflectionLPs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBadLpGetter(
      _getter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setBridge(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setGasLimit(
      _limit_gas: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setMinLPAmount(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOracleLPEnable(
      _onlyOracleLp: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOracleTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOracleTreasurySetter(
      _oracleTreasurySetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setProphetSacrifice(
      _prophetSacrifice: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setProphetSacrificeSetter(
      _prophetSacrificeSetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setReflectionLP(
      _lp: string,
      _enable: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    xOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}