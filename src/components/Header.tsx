import logo from '@/assets/logo.png';
import menu from '@/assets/menu.png';
import wallet from '@/assets/wallet-2.png';
import Sidebar from '@/components/Sidebar';
import {useBreakpoint, useLogin} from '@/hooks';
import {colors, truncateString} from '@/utils';
import {usePrivy} from '@privy-io/react-auth';
import {Flex, Row} from 'antd';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAccount} from 'wagmi';
import Button from './Button';
import Text from './Text';
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

const menuFromPath = (path: string) => {
  switch (path) {
    case '/':
      return 'Home';
    case '/mint':
      return 'Mint';
    case '/staking':
      return 'Staking';
    case '/presale':
      return 'Presale';
    case '/myaccount':
      return 'Account';
    default:
      return 'Home';
  }
};

const Header = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const {md} = useBreakpoint();
  const {address} = useAccount();
  const {ready, authenticated} = usePrivy();
  const [loading, setLoading] = useState<boolean>(false);
  let location = useLocation();
  const navigate = useNavigate();
  const {handleLogin, handleLogout} = useLogin();

  useEffect(() => {
    setActiveMenu(menuFromPath(location.pathname));
  }, [location]);

  const disableLogin = !ready || (ready && authenticated);
  const disableLogout = !ready || (ready && !authenticated);

  const onLogout = async () => {
    setLoading(true);
    await handleLogout();
    setLoading(false);
  };

  return (
    <div
      style={{
        margin: md ? '0 24px' : '0 12px',
        borderBottom: `1px solid ${colors.white20}`,
      }}>
      <Flex
        style={{
          height: 72,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <img src={logo} style={{height: md ? 22 : 18}} />
        <Flex gap={46} style={{display: md ? 'flex' : 'none'}}>
          <MenuItem
            onClick={() => {
              // setActiveMenu('Home');
              navigate('/');
            }}
            active={activeMenu === 'Home'}>
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              // setActiveMenu('Mint');
              navigate('/mint');
            }}
            active={activeMenu === 'Mint'}>
            Mint
          </MenuItem>
          <MenuItem
            onClick={() =>
              // setActiveMenu('Staking')
              navigate('/staking')
            }
            active={activeMenu === 'Staking'}>
            Staking
          </MenuItem>
          <MenuItem
            onClick={() =>
              // setActiveMenu('Staking')
              navigate('/presale')
            }
            active={activeMenu === 'Presale'}>
            Presale
          </MenuItem>
          <MenuItem
            onClick={() =>
              // setActiveMenu('Account')
              navigate('/myaccount')
            }
            active={activeMenu === 'Account'}>
            Account
          </MenuItem>
        </Flex>
        {md ? (
          <>
            {ready && authenticated ? (
              <Button
                className="text-tail-end"
                disabled={disableLogout}
                loading={loading}
                onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button
                  className="text-tail-end"
                  disabled={disableLogin}
                  onClick={handleLogin}
                  loading={!ready}>
                  {ready && !authenticated
                    ? address
                      ? truncateString(address, 12)
                      : 'Connect Wallet'
                    : ''}
                </Button>
              </>
            )}
          </>
        ) : (
          <Row
            style={{
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: colors.white10,
              padding: 10,
              gap: 16,
            }}>
            <img src={wallet} style={{width: 24}} />
            <div
              style={{
                height: 24,
                borderRight: '1px solid rgba(255, 255, 255, 0.10)',
              }}
            />
            <img
              src={menu}
              style={{width: 24}}
              onClick={() => setSidebarOpen(true)}
            />
          </Row>
        )}
      </Flex>
      {!md && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
    </div>
  );
};

export default Header;
