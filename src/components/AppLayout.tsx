import {Layout} from 'antd';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const {Content} = Layout;

interface Props {
  children: React.ReactNode;
}
const AppLayout = ({children}: Props) => {
  return (
    <Layout
      style={{
        backgroundColor: 'transparent',
        maxWidth: '1329px',
        margin: 'auto',
      }}>
      <Header />
      <Content style={{}}>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
