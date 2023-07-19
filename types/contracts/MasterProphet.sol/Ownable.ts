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
} from "../../common";

export interface OwnableInterface extends utils.Interface {
  functions: {
    "ownerSetter()": FunctionFragment;
    "renounceOwnerSetter()": FunctionFragment;
    "setOwnerSetter(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ownerSetter"
      | "renounceOwnerSetter"
      | "setOwnerSetter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ownerSetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnerSetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setOwnerSetter",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ownerSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnerSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOwnerSetter",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

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

export interface Ownable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OwnableInterface;

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
    ownerSetter(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnerSetter(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOwnerSetter(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  ownerSetter(overrides?: CallOverrides): Promise<string>;

  renounceOwnerSetter(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOwnerSetter(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    ownerSetter(overrides?: CallOverrides): Promise<string>;

    renounceOwnerSetter(overrides?: CallOverrides): Promise<void>;

    setOwnerSetter(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    ownerSetter(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnerSetter(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOwnerSetter(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ownerSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnerSetter(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOwnerSetter(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
