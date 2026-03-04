import React, { useEffect, useState, useMemo } from 'react';
import Api from '../api/Api';
import { useWallet } from '../context/WalletContext';
import '../styles/nft-stats.css';

export default function NFTStats() {
  const { address, isConnected: walletContextConnected } = useWallet();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchStats() {
      try {
        setLoading(true);
        setError(null);
        const headers = {};
        if (address) {
          headers.Authorization = `Bearer ${address}`;
        }
        const data = await Api.http({
          method: 'get',
          url: '/transactions/nft-stats',
          headers
        });
        if (!cancelled) {
          setStats(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || 'Failed to load NFT statistics');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    fetchStats();
    return () => { cancelled = true; };
  }, [address]);

  const walletConnected = useMemo(() => {
    if (typeof stats?.walletConnected === 'boolean') return stats.walletConnected;
    return Boolean(walletContextConnected || address);
  }, [stats?.walletConnected, walletContextConnected, address]);

  const truncatedAddress = useMemo(() => {
    if (!address) return 'Not connected';
    if (address.length <= 10) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  const totalNFTs = stats?.totalNFTs ?? 0;

  return (
    <main className="main">
      <header className="page-header">
        <h1>NFT Statistics</h1>
        <p>Overview of your NFT holdings and wallet connection status.</p>
      </header>
      <div className="nft-content">
        <div className="container">
          {loading && (
            <div className="nft-stats-loading">
              <div className="loading-spinner" aria-hidden />
              <p>Loading NFT statistics...</p>
            </div>
          )}
          {!loading && error && (
            <div className="nft-stats-error">
              <p>{error}</p>
            </div>
          )}
          {!loading && !error && (
            <div className="nft-stats-grid">
              <div className="nft-stats-card">
                <h3>Total NFTs</h3>
                <p className="nft-stats-value">{totalNFTs}</p>
              </div>
              <div className="nft-stats-card">
                <h3>Wallet status</h3>
                <p>
                  <span className={walletConnected ? 'badge badge-success' : 'badge badge-danger'}>
                    {walletConnected ? 'Connected' : 'Not connected'}
                  </span>
                </p>
                <p className="nft-stats-address">{truncatedAddress}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
