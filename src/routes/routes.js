import React from 'react';
import NFTStats from '../components/NFTStats';
export const DASHBOARD_NFT_STATS_PATH = '/dashboard/nft-stats';

const routes = [
  {
    path: DASHBOARD_NFT_STATS_PATH,
    element: <NFTStats />,
    label: 'NFT Stats'
  }
];

export default routes;
