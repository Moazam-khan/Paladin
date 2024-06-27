import logo from '@/assets/logo.png';
import blend from '@/assets/social-blend.png';
import discord from '@/assets/social-discord.png';
import twitter from '@/assets/social-twitter.png';
import {useBreakpoint} from '@/hooks';
import {colors, fontFamily} from '@/utils';
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
  const {sm, md} = useBreakpoint();
  return (
    <Row
      gutter={[28, 56]}
      style={{
        margin: '36px 0',
      }}>
      <Col xs={24} md={8} lg={6}>
        <img src={logo} style={{height: 22}} />
        <Text
          style={{
            fontFamily: fontFamily.darkerGrotesque,

            fontSize: 18,
            fontWeight: 700,
            display: 'block',
            color: colors.white50,
            lineHeight: '18px',
            marginTop: 10,
          }}>
          Mint, Showcase, and Own Your Unique Creations in the World of NFT.
        </Text>
        <Flex
          gap={20}
          style={{
            marginTop: 20,
          }}>
          <a
            href="https://medium.com/@paladinsdao"
            target="_blank"
            rel="noreferrer">
            <img src={blend} height={24} />
          </a>
          {/* <img src={telegram} height={24} /> */}
          <a
            href="https://x.com/paladinsdao?lang=en"
            target="_blank"
            rel="noreferrer">
            <img src={twitter} height={24} />
          </a>
          <a
            href="https://discord.com/invite/paladinsdao"
            target="_blank"
            rel="noreferrer">
            <img src={discord} height={24} />
          </a>
        </Flex>
      </Col>
      <Col xs={24} md={16} lg={18}>
        <Row gutter={[12, 36]}>
          {footerMenus.map((subMenu, index) => (
            <Col
              style={{
                display: 'flex',
                justifyContent: md ? 'center' : sm ? 'left' : 'center',
                textAlign: sm ? 'left' : 'center',
              }}
              key={subMenu.title.title + index}
              xs={24}
              sm={8}>
              <div>
                <Text
                  style={{
                    fontFamily: fontFamily.darkerGrotesque,
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
                      fontFamily: fontFamily.darkerGrotesque,
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
        </Row>
      </Col>
      <Col span={24}>
        <Text
          style={{
            fontFamily: fontFamily.darkerGrotesque,
            fontWeight: 600,
            display: 'block',
            color: colors.white50,
            marginTop: 36,
          }}>
          &#169; 2024 PALADINS, all rights reserved
        </Text>
      </Col>
    </Row>
  );
};

export default Footer;
