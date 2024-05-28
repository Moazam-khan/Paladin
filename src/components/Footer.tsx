import logo from '@/assets/logo.png';
import blend from '@/assets/social-blend.png';
import discord from '@/assets/social-discord.png';
import telegram from '@/assets/social-telegram.png';
import twitter from '@/assets/social-twitter.png';
import {colors} from '@/utils';
import {Col, Flex, Row} from 'antd';
import Text from './Text';

type Props = {};

const footerMenus = [
  {
    title: {title: 'Products', link: '/products'},
    Items: [
      {
        title: 'NFTs',
        link: '/nfts',
      },
      {
        title: 'Marketplace',
        link: '/marketplace',
      },
      {
        title: 'Governance',
        link: '/governance',
      },
    ],
  },
  {
    title: {title: 'Contact Us', link: '/contact-us'},
    Items: [
      {
        title: 'NFTs',
        link: '/nfts',
      },
      {
        title: 'Marketplace',
        link: '/marketplace',
      },
      {
        title: 'Governance',
        link: '/governance',
      },
    ],
  },
  {
    title: {title: 'About Us', link: '/about-us'},
    Items: [
      {
        title: 'NFTs',
        link: '/nfts',
      },
      {
        title: 'Marketplace',
        link: '/marketplace',
      },
      {
        title: 'Governance',
        link: '/governance',
      },
    ],
  },
];

const Footer = (props: Props) => {
  return (
    <Row
      style={{
        margin: '36px 24px',
      }}>
      <Col span={6}>
        <img src={logo} style={{height: 22}} />
        <Text
          style={{
            fontFamily: 'DarkerGrotesque',
            fontSize: 18,
            fontWeight: 700,
            display: 'block',
            color: colors.white50,
          }}>
          Lorem ipsum dolor sit amet consectetur. Non curabitur egestas quis in
          gravida parturient lacinia lacus.
        </Text>
        <Flex
          gap={20}
          style={{
            marginTop: 10,
          }}>
          <img src={blend} height={24} />
          <img src={telegram} height={24} />
          <img src={twitter} height={24} />
          <img src={discord} height={24} />
        </Flex>
      </Col>
      {footerMenus.map((subMenu, index) => (
        <Col
          style={{
            paddingLeft: 24,
            display: 'flex',
            justifyContent: 'center',
          }}
          key={subMenu.title.title + index}
          span={6}>
          <div>
            <Text
              style={{
                fontFamily: 'DarkerGrotesque',
                fontSize: 18,
                fontWeight: 800,
                cursor: 'pointer',
              }}>
              {subMenu.title.title}
            </Text>
            {subMenu.Items.map((item) => (
              <Text
                key={item.title + subMenu.title.title + index}
                style={{
                  fontFamily: 'DarkerGrotesque',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'block',
                  color: colors.white50,
                  cursor: 'pointer',
                }}>
                {item.title}
              </Text>
            ))}
          </div>
        </Col>
      ))}
      <Col span={24}>
        <Text
          style={{
            fontFamily: 'DarkerGrotesque',
            fontWeight: 600,
            display: 'block',
            color: colors.white50,
            marginTop: 36,
          }}>
          © 2024 PALADINS, all rights reserved
        </Text>
      </Col>
    </Row>
  );
};

export default Footer;
