import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import NFTStats from './components/NFTStats';
import { useWallet } from './context/WalletContext';

function DashboardLayout({ children }) {
  const { address, isConnected, connect, disconnect } = useWallet();
  const truncated = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '';

  return (
    <div className="dashboard-layout">
      <nav className="dashboard-nav">
        <Link to="/dashboard/nft-stats">NFT Stats</Link>
        <div className="wallet-area">
          {isConnected ? (
            <>
              <span className="nav-address">{truncated}</span>
              <button type="button" onClick={disconnect}>Disconnect</button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => connect('0x1234567890123456789012345678901234567890')}
            >
              Connect wallet (mock)
            </button>
          )}
        </div>
      </nav>
      <div className="dashboard-content">{children}</div>
    </div>
  );
}

const dashboardElement = (
  <DashboardLayout>
    <NFTStats />
  </DashboardLayout>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/nft-stats" replace />} />
      <Route path="/dashboard/nft-stats" element={dashboardElement} />
    </Routes>
  );
}
