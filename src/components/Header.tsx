import logo from '@/assets/logo.png';
import menu from '@/assets/menu.png';
import wallet from '@/assets/wallet-2.png';
import { colors } from '@/utils';
import { Flex, Row } from 'antd';
import { useState } from 'react';
import Button from './Button';
import Text from './Text';
import { useBreakpoint } from '@/hooks';
import Sidebar from '@/components/Sidebar';

type Props = {};

const MenuItem = ({
                    active = false,
                    style,
                    children,
                    ...rest
                  }: {
  active: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div
    style={{
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: active
        ? `1px solid ${colors.primary}`
        : `1px solid transparent`,
      position: 'relative',
      top: 1,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }}
    {...rest}>
    {typeof children === 'string' ? (
      <Text
        style={{
          fontSize: 18,
          position: 'relative',
          bottom: 1,
          color: active ? colors.primary : colors.white50,
        }}>
        {children}
      </Text>
    ) : (
      children
    )}
  </div>
);

const Header = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { md } = useBreakpoint();

  return (
    <div
      style={{
        margin: '0 24px',
        borderBottom: `1px solid ${colors.white20}`,
      }}>
      <Flex
        style={{
          height: 72,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <img src={logo} style={{ height: md ? 22 : 18 }} />
        <Flex gap={46} style={{ display: md ? 'flex' : 'none' }}>
          <MenuItem
            onClick={() => {
              setActiveMenu('Home');
            }}
            active={activeMenu === 'Home'}>
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              setActiveMenu('Mint');
            }}
            active={activeMenu === 'Mint'}>
            Mint
          </MenuItem>
          <MenuItem
            onClick={() => setActiveMenu('Staking')}
            active={activeMenu === 'Staking'}>
            Staking
          </MenuItem>
          <MenuItem
            onClick={() => setActiveMenu('Account')}
            active={activeMenu === 'Account'}>
            Account
          </MenuItem>
        </Flex>
        {md ? <Button>Connect Wallet</Button> :
          <Row
            style={{ alignItems: 'center', borderRadius: 10, backgroundColor: colors.white10, padding: 10, gap: 16 }}>
            <img src={wallet} style={{ width: 24 }} />
            <div style={{ height: 24, borderRight: '1px solid rgba(255, 255, 255, 0.10)' }} />
            <img src={menu} style={{ width: 24 }} onClick={() => setSidebarOpen(true)} />
          </Row>}
      </Flex>
      {!md && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
    </div>
  );
};

export default Header;
