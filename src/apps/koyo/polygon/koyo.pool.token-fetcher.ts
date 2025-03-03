import { Injectable } from '@nestjs/common';

import { BalancerV2PoolTokenFetcher } from '~apps/balancer-v2/common/balancer-v2.pool.token-fetcher';
import { Network } from '~types/network.interface';

import { KOYO_DEFINITION } from '../koyo.definition';

@Injectable()
export class PolygonKoyoPoolTokenFetcher extends BalancerV2PoolTokenFetcher {
  appId = KOYO_DEFINITION.id;
  groupId = KOYO_DEFINITION.groups.pool.id;
  network = Network.POLYGON_MAINNET;
  groupLabel = 'Pools';
  subgraphUrl = 'https://api.thegraph.com/subgraphs/name/koyo-finance/exchange-subgraph-matic';
  vaultAddress = '0xacf8489ccb47da2d7306d827bbede05bfa6fea1b';
  minLiquidity = 0;
}
