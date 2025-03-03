import { Injectable } from '@nestjs/common';
import { BigNumberish } from 'ethers';

import { GetTokenBalancesParams } from '~position/template/contract-position.template.types';
import { Network } from '~types/network.interface';

import { DopexSsovContractPositionFetcher, DopexSsovDataProps } from '../common/dopex.ssov.contract-position-fetcher';
import { DopexDpxSsov } from '../contracts';
import { DOPEX_DEFINITION } from '../dopex.definition';

@Injectable()
export class ArbitrumDopexDpxSsovContractPositionFetcher extends DopexSsovContractPositionFetcher<DopexDpxSsov> {
  appId = DOPEX_DEFINITION.id;
  groupId = DOPEX_DEFINITION.groups.dpxSsov.id;
  network = Network.ARBITRUM_MAINNET;
  groupLabel = 'SSOVs';

  getContract(address: string): DopexDpxSsov {
    return this.contractFactory.dopexDpxSsov({ address, network: this.network });
  }

  getSsovDefinitions() {
    return [
      // DPX; December Epoch (Legacy)
      {
        address: '0x0359b4dcd2412ff0dafa8b020bcb57aa8bd13a33',
        depositTokenAddress: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
        extraRewardTokenAddresses: ['0x32eb7902d4134bf98a28b963d26de779af92a212'],
      },
      // DPX; January Epoch (Legacy)
      {
        address: '0x48252edbfcc8a27390827950ccfc1c00152894e3',
        depositTokenAddress: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
        extraRewardTokenAddresses: ['0x32eb7902d4134bf98a28b963d26de779af92a212'],
      },
      // DPX; February Epoch (Active)
      {
        address: '0xbb741dc1a519995eac67ec1f2bfeecbe5c02f46e',
        depositTokenAddress: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
        extraRewardTokenAddresses: ['0x32eb7902d4134bf98a28b963d26de779af92a212'],
      },
    ];
  }

  getTotalEpochStrikeDepositBalance({
    contract,
    contractPosition,
  }: GetTokenBalancesParams<DopexDpxSsov, DopexSsovDataProps>) {
    const { epoch, strike } = contractPosition.dataProps;
    return contract.totalEpochStrikeBalance(epoch, strike);
  }

  getTotalEpochStrikeRewardBalances({
    contract,
    contractPosition,
  }: GetTokenBalancesParams<DopexDpxSsov, DopexSsovDataProps>): Promise<BigNumberish | BigNumberish[]> {
    const { epoch, strike } = contractPosition.dataProps;
    return contract.totalEpochStrikeRdpxBalance(epoch, strike);
  }
}
