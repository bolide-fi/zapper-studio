import { Inject, Injectable } from '@nestjs/common';
import { BigNumberish } from 'ethers';
import { compact, range } from 'lodash';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { RewardRateUnit } from '~app-toolkit/helpers/master-chef/master-chef.contract-position-helper';
import { IMulticallWrapper } from '~multicall';
import { isMulticallUnderlyingError } from '~multicall/multicall.ethers';
import { isClaimable, isSupplied } from '~position/position.utils';
import { GetDataPropsParams, GetTokenBalancesParams } from '~position/template/contract-position.template.types';
import {
  GetMasterChefV2ExtraRewardTokenBalancesParams,
  GetMasterChefV2ExtraRewardTokenRewardRates,
  MasterChefV2ContractPositionDataProps,
  MasterChefV2TemplateContractPositionFetcher,
} from '~position/template/master-chef-v2.template.contract-position-fetcher';
import {
  GetMasterChefDataPropsParams,
  MasterChefContractPositionDataProps,
  MasterChefContractPositionDefinition,
} from '~position/template/master-chef.template.contract-position-fetcher';
import { Network } from '~types/network.interface';

import { VectorFinanceContractFactory, VectorFinanceMasterChef, VectorFinanceMasterChefRewarder } from '../contracts';
import VECTOR_FINANCE_DEFINITION from '../vector-finance.definition';

@Injectable()
export class VectorFinanceFarmContractPositionFetcher extends MasterChefV2TemplateContractPositionFetcher<
  VectorFinanceMasterChef,
  VectorFinanceMasterChefRewarder
> {
  appId = VECTOR_FINANCE_DEFINITION.id;
  groupId = VECTOR_FINANCE_DEFINITION.groups.farm.id;
  network = Network.AVALANCHE_MAINNET;
  groupLabel = 'Farms';
  chefAddress = '0x423d0fe33031aa4456a17b150804aa57fc157d97';
  rewardRateUnit = RewardRateUnit.SECOND;

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(VectorFinanceContractFactory) protected readonly contractFactory: VectorFinanceContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): VectorFinanceMasterChef {
    return this.contractFactory.vectorFinanceMasterChef({ address, network: this.network });
  }

  getExtraRewarderContract(address: string) {
    return this.contractFactory.vectorFinanceMasterChefRewarder({ address, network: this.network });
  }

  async getPoolLength(contract: VectorFinanceMasterChef) {
    return contract.poolLength();
  }

  async getStakedTokenAddress(
    contract: VectorFinanceMasterChef,
    poolIndex: number,
    multicall: IMulticallWrapper,
  ): Promise<string> {
    const registeredToken = await contract.registeredToken(poolIndex);
    const poolInfo = await contract.addressToPoolInfo(registeredToken);

    const _helper = this.contractFactory.vectorFinanceMasterChefPoolHelper({
      address: poolInfo.helper,
      network: this.network,
    });
    const helper = multicall.wrap(_helper);
    return helper.depositToken();
  }

  getRewardTokenAddress(contract: VectorFinanceMasterChef): Promise<string> {
    return contract.vtx();
  }

  async getExtraRewarder(contract: VectorFinanceMasterChef, poolIndex: number): Promise<string> {
    const registeredToken = await contract.registeredToken(poolIndex);
    const poolInfo = await contract.addressToPoolInfo(registeredToken);
    return poolInfo.rewarder;
  }

  async getExtraRewardTokenAddresses(contract: VectorFinanceMasterChefRewarder) {
    const rewardTokens = await Promise.all(
      range(0, 2).map(i => {
        return contract.rewardTokens(i).catch(err => {
          if (isMulticallUnderlyingError(err)) return null;
          throw err;
        });
      }),
    );

    return compact(rewardTokens);
  }

  async getReserve({
    contract,
    contractPosition,
    definition,
  }: GetDataPropsParams<
    VectorFinanceMasterChef,
    MasterChefV2ContractPositionDataProps,
    MasterChefContractPositionDefinition
  >): Promise<number> {
    const stakedToken = contractPosition.tokens.find(isSupplied)!;
    const registeredToken = await contract.registeredToken(definition.poolIndex);
    const poolInfo = await contract.getPoolInfo(registeredToken);
    return Number(poolInfo.sizeOfPool) / 10 ** stakedToken.decimals;
  }

  async getTotalAllocPoints({ contract }: GetMasterChefDataPropsParams<VectorFinanceMasterChef>) {
    return contract.totalAllocPoint();
  }

  async getTotalRewardRate({ contract }: GetMasterChefDataPropsParams<VectorFinanceMasterChef>) {
    return contract.vtxPerSec();
  }

  async getPoolAllocPoints({ contract, definition }: GetMasterChefDataPropsParams<VectorFinanceMasterChef>) {
    const registeredToken = await contract.registeredToken(definition.poolIndex);
    const poolInfo = await contract.addressToPoolInfo(registeredToken);
    return poolInfo.allocPoint;
  }

  async getExtraRewardTokenRewardRates({
    contractPosition,
  }: GetMasterChefV2ExtraRewardTokenRewardRates<VectorFinanceMasterChef, VectorFinanceMasterChefRewarder>) {
    // @TODO Not sure, there's no reward rate, just a reward per token
    const [, ...extraRewardTokens] = contractPosition.tokens.filter(isClaimable);
    return Promise.all(extraRewardTokens.map(async () => 0));
  }

  async getStakedTokenBalance({
    address,
    contract,
    contractPosition,
  }: GetTokenBalancesParams<VectorFinanceMasterChef, MasterChefContractPositionDataProps>): Promise<BigNumberish> {
    const registeredToken = await contract.registeredToken(contractPosition.dataProps.poolIndex);
    return contract.depositInfo(registeredToken, address);
  }

  async getRewardTokenBalance({
    address,
    contract,
    contractPosition,
  }: GetTokenBalancesParams<VectorFinanceMasterChef, MasterChefContractPositionDataProps>): Promise<BigNumberish> {
    const anyClaimable = contractPosition.tokens.find(isClaimable)!;
    const registeredToken = await contract.registeredToken(contractPosition.dataProps.poolIndex);
    const pendingTokens = await contract.pendingTokens(registeredToken, address, anyClaimable?.address);
    return pendingTokens.pendingVTX;
  }

  async getExtraRewardTokenBalances({
    address,
    contractPosition,
    rewarderContract,
  }: GetMasterChefV2ExtraRewardTokenBalancesParams<VectorFinanceMasterChef, VectorFinanceMasterChefRewarder>) {
    const [, ...extraRewardTokens] = contractPosition.tokens.filter(isClaimable);
    return Promise.all(extraRewardTokens.map(v => rewarderContract.earned(address, v.address)));
  }
}
