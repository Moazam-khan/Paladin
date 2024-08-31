import {Button, Col, Layout, Menu, Row} from 'antd';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Arrowdown from '../assets/NewAssets/Navbar/arrowdown.svg';
import Wallet from '../assets/NewAssets/Navbar/wallet.svg';
import menu from '../assets/NewAssets/Navbar/menu.svg';
import {useBreakpoint} from '@/hooks';
const {Header} = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setIsHovered(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleClick = (item: string) => {
    setActiveItem(item); // Set the active item on click

    if (item === 'Home') {
      navigate('/');
    } else if (item === 'Mint') {
      navigate('/Mint');
    } else if (item === 'Staking') {
      navigate('/Staking');
    } else if (item === 'Account') {
      navigate('/Account');
    }
  };

  const getNavItemStyle = (item: string) => ({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Nippo',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: 'normal',
    fontStyle: 'normal',
    color: activeItem === item || isHovered === item ? '#FFD700' : '#FFF',
    textDecoration: 'none',
    borderBottom:
      activeItem === item || isHovered === item ? '1px solid #FFD700' : 'none',

    transition: 'color 1s ease, text-decoration 2s ease',
    cursor: 'pointer',
    padding: '24px 0px',
    height: '65px',
  });

  const {xs} = useBreakpoint();
  console.log('xs', xs);

  return (
    <>
      {!xs ? (
        <Header
          style={{
            backgroundColor: 'rgb(0,0,0)',
            fontFamily: 'Nippo',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            padding: '0 50px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.20)',
            cursor: 'pointer',

            display: 'flex',
            justifyContent: 'space-between', // Space items horizontally
            alignItems: 'center', // Center items vertically
            width: '100%', // Make the Col stretch to the full width
          }}>
          <Col>
            <div
              style={{
                color: '#FFF',
                fontFamily: 'Nippo',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                display: 'flex',
                textAlign: 'center',
              }}>
              <text
                style={{
                  width: '77px',
                  height: '22px',
                }}>
                PALADIN
              </text>
            </div>
          </Col>
          <Col>
            <Row gutter={32} align="middle">
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '46px',
                  flex: '1 0 0',
                  alignSelf: 'stretch',
                }}>
                <div
                  style={getNavItemStyle('Home')}
                  onMouseEnter={() => handleMouseEnter('Home')}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick('Home')}>
                  Home
                </div>

                <div
                  style={getNavItemStyle('Mint')}
                  onMouseEnter={() => handleMouseEnter('Mint')}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick('Mint')}>
                  Mint
                </div>

                <div
                  style={getNavItemStyle('Staking')}
                  onMouseEnter={() => handleMouseEnter('Staking')}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick('Staking')}>
                  Staking
                </div>

                <div
                  style={getNavItemStyle('Account')}
                  onMouseEnter={() => handleMouseEnter('Account')}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick('Account')}>
                  Account
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '5px',
              gap: '10px',
            }}>
            <div
              style={{
                position: 'relative', // Position relative for the pseudo-element
                display: 'inline-block',
              }}>
              {/* Button with clip-path */}
              <Button
                style={{
                  width: '227px',
                  backgroundColor: 'var(--Button-Primary-BG, #262626)',
                  border: 'none', // Remove default border
                  padding: '0',
                  borderRadius: '4px',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  display: 'flex',
                  height: '44px',
                  clipPath:
                    'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
                  position: 'relative',
                  zIndex: 1, // Ensure button is on top of pseudo-element
                }}>
                <img src={Wallet} alt="" />
                <span
                  style={{
                    color: 'var(--Text-Default, #FFF)',
                    textAlign: 'center',
                    fontFamily: 'Nippo, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    letterSpacing: '1.6px',
                    textTransform: 'uppercase',
                  }}>
                  My 404 Wallet
                </span>
                <img src={Arrowdown} alt="" />
              </Button>
              {/* Border Wrapper */}
              <div
                style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',

                  borderRadius: '4px', // Match button's border radius

                  zIndex: 0, // Place the border behind the button
                  boxSizing: 'border-box', // Ensure border is included in the element's size
                }}
              />
            </div>
          </Col>
        </Header>
      ) : (
        <Row
          style={{
            padding: '10px 0px',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderBottom: '1px solid rgba(255, 255, 255, 0.20)',
          }}>
          <Col style={{}}>
            <text
              style={{
                color: '#FFF',
                fontFamily: 'Nippo',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
              }}>
              PALADIN
            </text>
          </Col>
          <Col
            style={{
              display: 'flex',
              padding: '10px',
              alignItems: 'center',
              gap: '16px',
              borderRadius: '10px',
              background: 'var(--Button-Primary-BG, #262626)',

            }}>
            <div>

              <img
                style={{width: '24px', height: '24px'}}
                src={Wallet}
                alt=""
              />
            </div>
            <div
              style={{
                width: '1px',
                height: '24px',
                background:
                  'var(--Dividers-On-Surface, rgba(255, 255, 255, 0.10))',
              }}>

            </div>
            <div>

              <img style={{width: '24px', height: '24px'}} src={menu} alt="" />
            </div>

          </Col>


        </Row>
      )}
    </>
  );
};

export default Navbar;
