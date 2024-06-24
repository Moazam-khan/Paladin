import {fontFamily, theme} from '@/utils';
import {ConfigProvider} from 'antd';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
const ThemeProvider = ({children}: Props) => {
  return (
    <ConfigProvider
      input={{
        style: {
          fontWeight: 600,
          fontFamily: fontFamily.darkerGrotesque,
        },
        styles: {
          input: {
            fontFamily: fontFamily.darkerGrotesque,
            fontWeight: 600,
            lineHeight: '100%',
          },
        },
      }}
      theme={theme}>
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
