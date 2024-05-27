import React from 'react';
import ThemeProvider from './ThemeProvider';

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({children}: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
