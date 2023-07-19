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

export interface ProphetSacrificeInterface extends utils.Interface {
  functions: {
    "burnPro()": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "deadAddress()": FunctionFragment;
    "factory()": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "proPercentage()": FunctionFragment;
    "prophet()": FunctionFragment;
    "prophetStaker()": FunctionFragment;
    "prophetStakerSetter()": FunctionFragment;
    "setProPercetange(uint256)": FunctionFragment;
    "setProphetStaker(address)": FunctionFragment;
    "setProphetStakerSetter(address)": FunctionFragment;
    "totalBurnPro()": FunctionFragment;
    "totalStakePro()": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "wsgb()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burnPro"
      | "claimOwnership"
      | "deadAddress"
      | "factory"
      | "oracle"
      | "owner"
      | "pendingOwner"
      | "proPercentage"
      | "prophet"
      | "prophetStaker"
      | "prophetStakerSetter"
      | "setProPercetange"
      | "setProphetStaker"
      | "setProphetStakerSetter"
      | "totalBurnPro"
      | "totalStakePro"
      | "transferOwnership"
      | "wsgb"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "burnPro", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deadAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "prophet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prophetStaker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prophetStakerSetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setProPercetange",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setProphetStaker",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProphetStakerSetter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBurnPro",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStakePro",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, boolean, boolean]
  ): string;
  encodeFunctionData(functionFragment: "wsgb", values?: undefined): string;

  decodeFunctionResult(functionFragment: "burnPro", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deadAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prophet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "prophetStaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prophetStakerSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProPercetange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProphetStaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProphetStakerSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBurnPro",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStakePro",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wsgb", data: BytesLike): Result;

  events: {
    "BurnPro(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProToStake(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BurnPro"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProToStake"): EventFragment;
}

export interface BurnProEventObject {
  amount: BigNumber;
}
export type BurnProEvent = TypedEvent<[BigNumber], BurnProEventObject>;

export type BurnProEventFilter = TypedEventFilter<BurnProEvent>;

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

export interface ProToStakeEventObject {
  amount: BigNumber;
}
export type ProToStakeEvent = TypedEvent<[BigNumber], ProToStakeEventObject>;

export type ProToStakeEventFilter = TypedEventFilter<ProToStakeEvent>;

export interface ProphetSacrifice extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProphetSacrificeInterface;

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
    burnPro(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    deadAddress(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    proPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    prophet(overrides?: CallOverrides): Promise<[string]>;

    prophetStaker(overrides?: CallOverrides): Promise<[string]>;

    prophetStakerSetter(overrides?: CallOverrides): Promise<[string]>;

    setProPercetange(
      _percent: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setProphetStaker(
      _proStaker: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setProphetStakerSetter(
      _newSetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    totalBurnPro(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalStakePro(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    wsgb(overrides?: CallOverrides): Promise<[string]>;
  };

  burnPro(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  deadAddress(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  proPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  prophet(overrides?: CallOverrides): Promise<string>;

  prophetStaker(overrides?: CallOverrides): Promise<string>;

  prophetStakerSetter(overrides?: CallOverrides): Promise<string>;

  setProPercetange(
    _percent: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setProphetStaker(
    _proStaker: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setProphetStakerSetter(
    _newSetter: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  totalBurnPro(overrides?: CallOverrides): Promise<BigNumber>;

  totalStakePro(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  wsgb(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    burnPro(overrides?: CallOverrides): Promise<void>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    deadAddress(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    proPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    prophet(overrides?: CallOverrides): Promise<string>;

    prophetStaker(overrides?: CallOverrides): Promise<string>;

    prophetStakerSetter(overrides?: CallOverrides): Promise<string>;

    setProPercetange(
      _percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setProphetStaker(
      _proStaker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setProphetStakerSetter(
      _newSetter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    totalBurnPro(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakePro(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    wsgb(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "BurnPro(uint256)"(amount?: null): BurnProEventFilter;
    BurnPro(amount?: null): BurnProEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "ProToStake(uint256)"(amount?: null): ProToStakeEventFilter;
    ProToStake(amount?: null): ProToStakeEventFilter;
  };

  estimateGas: {
    burnPro(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    deadAddress(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    proPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    prophet(overrides?: CallOverrides): Promise<BigNumber>;

    prophetStaker(overrides?: CallOverrides): Promise<BigNumber>;

    prophetStakerSetter(overrides?: CallOverrides): Promise<BigNumber>;

    setProPercetange(
      _percent: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setProphetStaker(
      _proStaker: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setProphetStakerSetter(
      _newSetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    totalBurnPro(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakePro(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    wsgb(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burnPro(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    deadAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prophet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prophetStaker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prophetStakerSetter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setProPercetange(
      _percent: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setProphetStaker(
      _proStaker: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setProphetStakerSetter(
      _newSetter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    totalBurnPro(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStakePro(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    wsgb(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}