import logo from '@/assets/logo.png';
import {colors} from '@/utils';
import {Flex} from 'antd';
import {useState} from 'react';
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

const Header = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState('Home');
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
        <img src={logo} style={{height: 22}} />
        <Flex gap={46}>
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
        <Button>Connect Wallet</Button>
      </Flex>
    </div>
  );
};

export default Header;
