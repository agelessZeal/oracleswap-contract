/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface IOracleSwapRewardsManagerInterface extends utils.Interface {
  functions: {
    "flareContractRegistry()": FunctionFragment;
    "ftsoManager()": FunctionFragment;
    "ftsoProvider()": FunctionFragment;
    "ftsoRewardManager()": FunctionFragment;
    "wnat()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "flareContractRegistry"
      | "ftsoManager"
      | "ftsoProvider"
      | "ftsoRewardManager"
      | "wnat"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "flareContractRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ftsoManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ftsoProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ftsoRewardManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wnat", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "flareContractRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ftsoManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ftsoProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ftsoRewardManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wnat", data: BytesLike): Result;

  events: {};
}

export interface IOracleSwapRewardsManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOracleSwapRewardsManagerInterface;

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
    flareContractRegistry(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    ftsoManager(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    ftsoProvider(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    ftsoRewardManager(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    wnat(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  flareContractRegistry(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  ftsoManager(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  ftsoProvider(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  ftsoRewardManager(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  wnat(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  callStatic: {
    flareContractRegistry(overrides?: CallOverrides): Promise<string>;

    ftsoManager(overrides?: CallOverrides): Promise<string>;

    ftsoProvider(overrides?: CallOverrides): Promise<string>;

    ftsoRewardManager(overrides?: CallOverrides): Promise<string>;

    wnat(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    flareContractRegistry(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    ftsoManager(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    ftsoProvider(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    ftsoRewardManager(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    wnat(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    flareContractRegistry(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    ftsoManager(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    ftsoProvider(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    ftsoRewardManager(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    wnat(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}