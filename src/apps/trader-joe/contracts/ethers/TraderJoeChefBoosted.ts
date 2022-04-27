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
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface TraderJoeChefBoostedInterface extends utils.Interface {
  functions: {
    'JOE()': FunctionFragment;
    'MASTER_CHEF_V2()': FunctionFragment;
    'MASTER_PID()': FunctionFragment;
    'VEJOE()': FunctionFragment;
    'add(uint96,uint32,address,address)': FunctionFragment;
    'claimableJoe(uint256,address)': FunctionFragment;
    'deposit(uint256,uint256)': FunctionFragment;
    'emergencyWithdraw(uint256)': FunctionFragment;
    'harvestFromMasterChef()': FunctionFragment;
    'init(address)': FunctionFragment;
    'initialize(address,address,address,uint256)': FunctionFragment;
    'joePerSec()': FunctionFragment;
    'massUpdatePools()': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingTokens(uint256,address)': FunctionFragment;
    'poolInfo(uint256)': FunctionFragment;
    'poolLength()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'set(uint256,uint96,uint32,address,bool)': FunctionFragment;
    'totalAllocPoint()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateFactor(address,uint256)': FunctionFragment;
    'updatePool(uint256)': FunctionFragment;
    'userInfo(uint256,address)': FunctionFragment;
    'withdraw(uint256,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'JOE'
      | 'MASTER_CHEF_V2'
      | 'MASTER_PID'
      | 'VEJOE'
      | 'add'
      | 'claimableJoe'
      | 'deposit'
      | 'emergencyWithdraw'
      | 'harvestFromMasterChef'
      | 'init'
      | 'initialize'
      | 'joePerSec'
      | 'massUpdatePools'
      | 'owner'
      | 'pendingTokens'
      | 'poolInfo'
      | 'poolLength'
      | 'renounceOwnership'
      | 'set'
      | 'totalAllocPoint'
      | 'transferOwnership'
      | 'updateFactor'
      | 'updatePool'
      | 'userInfo'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'JOE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MASTER_CHEF_V2', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MASTER_PID', values?: undefined): string;
  encodeFunctionData(functionFragment: 'VEJOE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'add', values: [BigNumberish, BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'claimableJoe', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'harvestFromMasterChef', values?: undefined): string;
  encodeFunctionData(functionFragment: 'init', values: [string]): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string, string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'joePerSec', values?: undefined): string;
  encodeFunctionData(functionFragment: 'massUpdatePools', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingTokens', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'poolInfo', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'poolLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'set',
    values: [BigNumberish, BigNumberish, BigNumberish, string, boolean],
  ): string;
  encodeFunctionData(functionFragment: 'totalAllocPoint', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'updateFactor', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'updatePool', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'userInfo', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'JOE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MASTER_CHEF_V2', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MASTER_PID', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'VEJOE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimableJoe', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvestFromMasterChef', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'joePerSec', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'massUpdatePools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'set', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalAllocPoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateFactor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'Add(uint256,uint256,uint256,address,address)': EventFragment;
    'Deposit(address,uint256,uint256)': EventFragment;
    'EmergencyWithdraw(address,uint256,uint256)': EventFragment;
    'Harvest(address,uint256,uint256)': EventFragment;
    'Init(uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Set(uint256,uint256,uint256,address,bool)': EventFragment;
    'UpdatePool(uint256,uint256,uint256,uint256,uint256)': EventFragment;
    'Withdraw(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Add'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Init'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Set'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdatePool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface AddEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
  veJoeShareBp: BigNumber;
  lpToken: string;
  rewarder: string;
}
export type AddEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, string, string], AddEventObject>;

export type AddEventFilter = TypedEventFilter<AddEvent>;

export interface DepositEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], EmergencyWithdrawEventObject>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export interface HarvestEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type HarvestEvent = TypedEvent<[string, BigNumber, BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface InitEventObject {
  amount: BigNumber;
}
export type InitEvent = TypedEvent<[BigNumber], InitEventObject>;

export type InitEventFilter = TypedEventFilter<InitEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SetEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
  veJoeShareBp: BigNumber;
  rewarder: string;
  overwrite: boolean;
}
export type SetEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, string, boolean], SetEventObject>;

export type SetEventFilter = TypedEventFilter<SetEvent>;

export interface UpdatePoolEventObject {
  pid: BigNumber;
  lastRewardTimestamp: BigNumber;
  lpSupply: BigNumber;
  accJoePerShare: BigNumber;
  accJoePerFactorPerShare: BigNumber;
}
export type UpdatePoolEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  UpdatePoolEventObject
>;

export type UpdatePoolEventFilter = TypedEventFilter<UpdatePoolEvent>;

export interface WithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface TraderJoeChefBoosted extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TraderJoeChefBoostedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    JOE(overrides?: CallOverrides): Promise<[string]>;

    MASTER_CHEF_V2(overrides?: CallOverrides): Promise<[string]>;

    MASTER_PID(overrides?: CallOverrides): Promise<[BigNumber]>;

    VEJOE(overrides?: CallOverrides): Promise<[string]>;

    add(
      _allocPoint: BigNumberish,
      _veJoeShareBp: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    claimableJoe(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    harvestFromMasterChef(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    init(
      _dummyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    initialize(
      _MASTER_CHEF_V2: string,
      _joe: string,
      _veJoe: string,
      _MASTER_PID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    joePerSec(overrides?: CallOverrides): Promise<[BigNumber] & { amount: BigNumber }>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingTokens(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string, string, BigNumber] & {
        pendingJoe: BigNumber;
        bonusTokenAddress: string;
        bonusTokenSymbol: string;
        pendingBonusToken: BigNumber;
      }
    >;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, string, number, BigNumber, BigNumber] & {
        lpToken: string;
        allocPoint: BigNumber;
        accJoePerShare: BigNumber;
        accJoePerFactorPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
        rewarder: string;
        veJoeShareBp: number;
        totalFactor: BigNumber;
        totalLpSupply: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber] & { pools: BigNumber }>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _veJoeShareBp: BigNumberish,
      _rewarder: string,
      _overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateFactor(
      _user: string,
      _newVeJoeBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
        factor: BigNumber;
      }
    >;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  JOE(overrides?: CallOverrides): Promise<string>;

  MASTER_CHEF_V2(overrides?: CallOverrides): Promise<string>;

  MASTER_PID(overrides?: CallOverrides): Promise<BigNumber>;

  VEJOE(overrides?: CallOverrides): Promise<string>;

  add(
    _allocPoint: BigNumberish,
    _veJoeShareBp: BigNumberish,
    _lpToken: string,
    _rewarder: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  claimableJoe(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  harvestFromMasterChef(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  init(_dummyToken: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  initialize(
    _MASTER_CHEF_V2: string,
    _joe: string,
    _veJoe: string,
    _MASTER_PID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  joePerSec(overrides?: CallOverrides): Promise<BigNumber>;

  massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingTokens(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, string, string, BigNumber] & {
      pendingJoe: BigNumber;
      bonusTokenAddress: string;
      bonusTokenSymbol: string;
      pendingBonusToken: BigNumber;
    }
  >;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, string, number, BigNumber, BigNumber] & {
      lpToken: string;
      allocPoint: BigNumber;
      accJoePerShare: BigNumber;
      accJoePerFactorPerShare: BigNumber;
      lastRewardTimestamp: BigNumber;
      rewarder: string;
      veJoeShareBp: number;
      totalFactor: BigNumber;
      totalLpSupply: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _veJoeShareBp: BigNumberish,
    _rewarder: string,
    _overwrite: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateFactor(
    _user: string,
    _newVeJoeBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      rewardDebt: BigNumber;
      factor: BigNumber;
    }
  >;

  withdraw(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    JOE(overrides?: CallOverrides): Promise<string>;

    MASTER_CHEF_V2(overrides?: CallOverrides): Promise<string>;

    MASTER_PID(overrides?: CallOverrides): Promise<BigNumber>;

    VEJOE(overrides?: CallOverrides): Promise<string>;

    add(
      _allocPoint: BigNumberish,
      _veJoeShareBp: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    claimableJoe(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    harvestFromMasterChef(overrides?: CallOverrides): Promise<void>;

    init(_dummyToken: string, overrides?: CallOverrides): Promise<void>;

    initialize(
      _MASTER_CHEF_V2: string,
      _joe: string,
      _veJoe: string,
      _MASTER_PID: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    joePerSec(overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingTokens(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string, string, BigNumber] & {
        pendingJoe: BigNumber;
        bonusTokenAddress: string;
        bonusTokenSymbol: string;
        pendingBonusToken: BigNumber;
      }
    >;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, string, number, BigNumber, BigNumber] & {
        lpToken: string;
        allocPoint: BigNumber;
        accJoePerShare: BigNumber;
        accJoePerFactorPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
        rewarder: string;
        veJoeShareBp: number;
        totalFactor: BigNumber;
        totalLpSupply: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _veJoeShareBp: BigNumberish,
      _rewarder: string,
      _overwrite: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    updateFactor(_user: string, _newVeJoeBalance: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
        factor: BigNumber;
      }
    >;

    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Add(uint256,uint256,uint256,address,address)'(
      pid?: BigNumberish | null,
      allocPoint?: null,
      veJoeShareBp?: null,
      lpToken?: string | null,
      rewarder?: string | null,
    ): AddEventFilter;
    Add(
      pid?: BigNumberish | null,
      allocPoint?: null,
      veJoeShareBp?: null,
      lpToken?: string | null,
      rewarder?: string | null,
    ): AddEventFilter;

    'Deposit(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): DepositEventFilter;
    Deposit(user?: string | null, pid?: BigNumberish | null, amount?: null): DepositEventFilter;

    'EmergencyWithdraw(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(user?: string | null, pid?: BigNumberish | null, amount?: null): EmergencyWithdrawEventFilter;

    'Harvest(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): HarvestEventFilter;
    Harvest(user?: string | null, pid?: BigNumberish | null, amount?: null): HarvestEventFilter;

    'Init(uint256)'(amount?: null): InitEventFilter;
    Init(amount?: null): InitEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'Set(uint256,uint256,uint256,address,bool)'(
      pid?: BigNumberish | null,
      allocPoint?: null,
      veJoeShareBp?: null,
      rewarder?: string | null,
      overwrite?: null,
    ): SetEventFilter;
    Set(
      pid?: BigNumberish | null,
      allocPoint?: null,
      veJoeShareBp?: null,
      rewarder?: string | null,
      overwrite?: null,
    ): SetEventFilter;

    'UpdatePool(uint256,uint256,uint256,uint256,uint256)'(
      pid?: BigNumberish | null,
      lastRewardTimestamp?: null,
      lpSupply?: null,
      accJoePerShare?: null,
      accJoePerFactorPerShare?: null,
    ): UpdatePoolEventFilter;
    UpdatePool(
      pid?: BigNumberish | null,
      lastRewardTimestamp?: null,
      lpSupply?: null,
      accJoePerShare?: null,
      accJoePerFactorPerShare?: null,
    ): UpdatePoolEventFilter;

    'Withdraw(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): WithdrawEventFilter;
    Withdraw(user?: string | null, pid?: BigNumberish | null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    JOE(overrides?: CallOverrides): Promise<BigNumber>;

    MASTER_CHEF_V2(overrides?: CallOverrides): Promise<BigNumber>;

    MASTER_PID(overrides?: CallOverrides): Promise<BigNumber>;

    VEJOE(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      _allocPoint: BigNumberish,
      _veJoeShareBp: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    claimableJoe(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    harvestFromMasterChef(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    init(_dummyToken: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    initialize(
      _MASTER_CHEF_V2: string,
      _joe: string,
      _veJoe: string,
      _MASTER_PID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    joePerSec(overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingTokens(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _veJoeShareBp: BigNumberish,
      _rewarder: string,
      _overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateFactor(
      _user: string,
      _newVeJoeBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updatePool(_pid: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    JOE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASTER_CHEF_V2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASTER_PID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VEJOE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      _allocPoint: BigNumberish,
      _veJoeShareBp: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    claimableJoe(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    harvestFromMasterChef(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    init(
      _dummyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      _MASTER_CHEF_V2: string,
      _joe: string,
      _veJoe: string,
      _MASTER_PID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    joePerSec(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingTokens(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _veJoeShareBp: BigNumberish,
      _rewarder: string,
      _overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateFactor(
      _user: string,
      _newVeJoeBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}