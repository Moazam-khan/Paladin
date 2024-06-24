import logo from '@/assets/logo.png';
import {PrivyProvider} from '@privy-io/react-auth';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Privy = ({children}: Props) => {
  return (
    <PrivyProvider
      appId="clwywj9cw03rbz15b6nadav0u"
      config={{
        loginMethods: ['twitter', 'wallet'],

        // Customize Privy's appearance in  app
        appearance: {
          theme: 'dark',
          logo: logo,
        },
      }}>
      {children}
    </PrivyProvider>
  );
};

export default Privy;
