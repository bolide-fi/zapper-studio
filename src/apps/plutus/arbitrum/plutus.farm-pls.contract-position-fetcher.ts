import { Inject, Injectable } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { GetDataPropsParams, GetTokenBalancesParams } from '~position/template/contract-position.template.types';
import {
  SingleStakingFarmDataProps,
  SingleStakingFarmDefinition,
  SingleStakingFarmTemplateContractPositionFetcher,
} from '~position/template/single-staking.template.contract-position-fetcher';
import { Network } from '~types/network.interface';

import { PlutusContractFactory, PlutusFarmPls } from '../contracts';
import PLUTUS_DEFINITION from '../plutus.definition';

@Injectable()
export class ArbitrumPlutusFarmPlsContractPositionFetcher extends SingleStakingFarmTemplateContractPositionFetcher<PlutusFarmPls> {
  appId = PLUTUS_DEFINITION.id;
  groupId = PLUTUS_DEFINITION.groups.farmPls.id;
  network = Network.ARBITRUM_MAINNET;
  groupLabel = 'PLS Farm';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(PlutusContractFactory) protected readonly contractFactory: PlutusContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): PlutusFarmPls {
    return this.contractFactory.plutusFarmPls({ address, network: this.network });
  }

  async getFarmDefinitions(): Promise<SingleStakingFarmDefinition[]> {
    return [
      {
        address: '0x5593473e318f0314eb2518239c474e183c4cbed5',
        stakedTokenAddress: '0x6cc0d643c7b8709f468f58f363d73af6e4971515',
        rewardTokenAddresses: [
          '0x51318b7d00db7acc4026c88c3952b66278b6a67f', // PLS
        ],
      },
    ];
  }

  async getRewardRates({ contract }: GetDataPropsParams<PlutusFarmPls, SingleStakingFarmDataProps>) {
    return contract.plsPerSecond();
  }

  async getStakedTokenBalance({ contract, address }: GetTokenBalancesParams<PlutusFarmPls>) {
    return contract.userInfo(0, address).then(v => v.amount);
  }

  async getRewardTokenBalances({ contract, address }: GetTokenBalancesParams<PlutusFarmPls>) {
    return contract.pendingPls(0, address);
  }
}
