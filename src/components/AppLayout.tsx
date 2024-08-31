import {useBreakpoint} from '@/hooks';
import {Layout} from 'antd';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const {Content} = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({children}: Props) => {
  const {xs} = useBreakpoint();
  return (
    <Layout
      style={{
        backgroundColor: 'transparent',
        maxWidth: '1440px',
        margin: 'auto',
        padding:xs? '0px 12px 24px 12px':'0 24px',
      }}>
      <Navbar></Navbar>

      // <Content style={{}}>{children}</Content>

 <Footer></Footer>
    </Layout>
  );
};

export default AppLayout;
