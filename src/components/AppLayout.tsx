import {useBreakpoint} from '@/hooks';
import {Layout} from 'antd';
import React from 'react';
import {Footer, Header} from '.';

const {Content} = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({children}: Props) => {
  const {md} = useBreakpoint();
  return (
    <Layout
      style={{
        backgroundColor: 'transparent',
        maxWidth: '1329px',
        margin: 'auto',
        padding: '0 24px',
      }}>
      <Header />
      <Content style={{}}>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
