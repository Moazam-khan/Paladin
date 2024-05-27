import {ConfigProvider} from 'antd';
import React from 'react';
import {theme} from '../utils';

interface Props {
  children: React.ReactNode;
}
const ThemeProvider = ({children}: Props) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
