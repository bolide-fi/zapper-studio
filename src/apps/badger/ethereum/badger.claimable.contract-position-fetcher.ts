import { Injectable } from '@nestjs/common';

import { Network } from '~types/network.interface';

import { BADGER_DEFINITION } from '../badger.definition';
import {
  BadgerClaimableContractPositionFetcher,
  BadgerClaimableDefinition,
} from '../common/badger.claimable.contract-position-fetcher';

@Injectable()
export class EthereumBadgerClaimableContractPositionFetcher extends BadgerClaimableContractPositionFetcher {
  appId = BADGER_DEFINITION.id;
  groupId = BADGER_DEFINITION.groups.claimable.id;
  network = Network.ETHEREUM_MAINNET;
  groupLabel = 'Rewards';

  isExcludedFromExplore = true;
  isExcludedFromTvl = true;

  diggTokenAddress = '0x798d1be841a82a273720ce31c822c61a67a601c3';

  async getDefinitions(): Promise<BadgerClaimableDefinition[]> {
    return [
      {
        address: '0x660802fc641b154aba66a62137e71f331b6d787a',
        rewardTokenAddress: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
      },
      {
        address: '0x660802fc641b154aba66a62137e71f331b6d787a',
        rewardTokenAddress: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
      },
      {
        address: '0x660802fc641b154aba66a62137e71f331b6d787a',
        rewardTokenAddress: '0x798d1be841a82a273720ce31c822c61a67a601c3',
      },
      {
        address: '0x660802fc641b154aba66a62137e71f331b6d787a',
        rewardTokenAddress: '0xa0246c9032bc3a600820415ae600c6388619a14d',
      },
    ];
  }
}
