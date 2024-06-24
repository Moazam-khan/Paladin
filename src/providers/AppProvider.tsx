import {CommonModals} from '@/components/modals';
import {UserProvider} from '@/contexts';
import {queryClient} from '@/utils';
import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Privy from './PrivyProvider';
import ThemeProvider from './ThemeProvider';
import {Web3ModalProvider} from './Web3ModalProvider';

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({children}: Props) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Web3ModalProvider>
          <QueryClientProvider client={queryClient}>
            <UserProvider>
              <Privy>{children}</Privy>
            </UserProvider>
            <CommonModals />
          </QueryClientProvider>
        </Web3ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
