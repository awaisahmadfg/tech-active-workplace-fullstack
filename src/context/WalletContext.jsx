import React, { createContext, useContext, useState, useCallback } from 'react';

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback((walletAddress) => {
    setAddress(walletAddress || null);
    setIsConnected(Boolean(walletAddress));
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
    setIsConnected(false);
  }, []);

  const value = { address, isConnected, connect, disconnect };
  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  return ctx || { address: null, isConnected: false, connect: () => {}, disconnect: () => {} };
}
