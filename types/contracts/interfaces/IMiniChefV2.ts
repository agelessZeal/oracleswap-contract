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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace IMiniChefV2 {
  export type PoolInfoStruct = {
    accSushiPerShare: BigNumberish;
    lastRewardTime: BigNumberish;
    allocPoint: BigNumberish;
  };

  export type PoolInfoStructOutput = [BigNumber, BigNumber, BigNumber] & {
    accSushiPerShare: BigNumber;
    lastRewardTime: BigNumber;
    allocPoint: BigNumber;
  };
}

export interface IMiniChefV2Interface extends utils.Interface {
  functions: {
    "deposit(uint256,uint256,address)": FunctionFragment;
    "emergencyWithdraw(uint256,address)": FunctionFragment;
    "harvest(uint256,address)": FunctionFragment;
    "poolLength()": FunctionFragment;
    "updatePool(uint256)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
    "withdraw(uint256,uint256,address)": FunctionFragment;
    "withdrawAndHarvest(uint256,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "emergencyWithdraw"
      | "harvest"
      | "poolLength"
      | "updatePool"
      | "userInfo"
      | "withdraw"
      | "withdrawAndHarvest"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAndHarvest",
    values: [BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAndHarvest",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IMiniChefV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMiniChefV2Interface;

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
    deposit(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    harvest(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    updatePool(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    userInfo(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    withdraw(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawAndHarvest(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  deposit(
    pid: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    pid: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  harvest(
    pid: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  updatePool(
    pid: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  userInfo(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  withdraw(
    pid: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawAndHarvest(
    pid: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(
      pid: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    harvest(
      pid: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IMiniChefV2.PoolInfoStructOutput>;

    userInfo(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    withdraw(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAndHarvest(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    deposit(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    harvest(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    userInfo(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawAndHarvest(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    harvest(
      pid: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updatePool(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    userInfo(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawAndHarvest(
      pid: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
