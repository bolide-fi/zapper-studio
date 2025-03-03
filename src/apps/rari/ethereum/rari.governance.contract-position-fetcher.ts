import { Inject, Injectable } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { GetDataPropsParams, GetTokenBalancesParams } from '~position/template/contract-position.template.types';
import {
  SingleStakingFarmDefinition,
  SingleStakingFarmTemplateContractPositionFetcher,
} from '~position/template/single-staking.template.contract-position-fetcher';
import { Network } from '~types';

import { RariContractFactory, RariGovernanceTokenDistributor } from '../contracts';
import { RARI_DEFINITION } from '../rari.definition';

const FARMS = [
  // RGT
  {
    address: '0x9c0caeb986c003417d21a7daaf30221d61fc1043',
    stakedTokenAddress: '0xd291e7a03283640fdc51b121ac401383a46cc623',
    rewardTokenAddresses: ['0xd291e7a03283640fdc51b121ac401383a46cc623'],
  },
];

@Injectable()
export class EthereumRariGovernanceContractPositionFetcher extends SingleStakingFarmTemplateContractPositionFetcher<RariGovernanceTokenDistributor> {
  appId = RARI_DEFINITION.id;
  groupId = RARI_DEFINITION.groups.governance.id;
  network = Network.ETHEREUM_MAINNET;
  groupLabel = 'Governance';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(RariContractFactory) protected readonly contractFactory: RariContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): RariGovernanceTokenDistributor {
    return this.contractFactory.rariGovernanceTokenDistributor({ address, network: this.network });
  }

  async getFarmDefinitions(): Promise<SingleStakingFarmDefinition[]> {
    return FARMS;
  }

  async getRewardRates(_params: GetDataPropsParams<RariGovernanceTokenDistributor>) {
    return [0];
  }

  async getStakedTokenBalance(_params: GetTokenBalancesParams<RariGovernanceTokenDistributor>) {
    return [0];
  }

  getRewardTokenBalances({ address, contract }: GetTokenBalancesParams<RariGovernanceTokenDistributor>) {
    return contract.getUnclaimedRgt(address);
  }
}
