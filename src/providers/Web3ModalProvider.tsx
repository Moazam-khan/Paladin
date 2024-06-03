import {projectId, wagmiConfig} from '@/utils';
import {createWeb3Modal} from '@web3modal/wagmi/react';
import {WagmiProvider} from 'wagmi';

createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': '#FB5951',
    '--w3m-color-mix-strength': 35,
    '--w3m-font-family':
      '"Avenir Next LT Pro bold", "Avenir Next LT Pro", "Helvetica Neue",sans-serif',
    '--w3m-accent': '#0672B5',
  },
});

export function Web3ModalProvider({children}: {children: React.ReactNode}) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}
