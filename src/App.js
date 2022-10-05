import './App.css';
import { useMemo } from 'react';
import Layout from './Layout/l/Layout';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { ModeProvider } from './Context/ModeProvider';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {  UnsafeBurnerWalletAdapter, } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');
function App() {
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      
      new UnsafeBurnerWalletAdapter(),
    ],
    []
  );
  console.log(wallets)
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ModeProvider>
            <BrowserRouter>
              <Navbar />
              <Layout />
              <Footer />
            </BrowserRouter>
          </ModeProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
