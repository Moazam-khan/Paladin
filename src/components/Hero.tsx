import bgHero from '@/assets/bg-hero.png';
import heroSide from '@/assets/hero-sider.png';
import {colors} from '@/utils';
import {Col, Flex, Row} from 'antd';
import Button from './Button';
import Text from './Text';

type Props = {};

const Hero = (props: Props) => {
  return (
    <Row
      style={{
        backgroundImage: `url(${bgHero})`,
        margin: 24,
        padding: 24,
        borderRadius: 15,
      }}>
      <Col
        span={14}
        style={{
          paddingRight: '1.4rem',
          display: 'flex',
          flexDirection: 'column',
          //space between
          justifyContent: 'space-between',
        }}>
        <div style={{paddingTop: 28}}>
          <Text
            style={{
              fontFamily: 'SpaceGrotesk',
              fontWeight: 700,
              fontSize: '74px',
              lineHeight: '87%',
              textTransform: 'uppercase',
              letterSpacing: '-2.2px',
            }}>
            Unlock Your Creativity with{' '}
            <span style={{color: colors.primary}}>PALADINS</span>
          </Text>
          <Text
            style={{
              fontFamily: 'DarkerGrotesque',
              fontSize: '20px',
              fontWeight: 600,
              display: 'block',
              color: colors.white50,
            }}>
            Mint, Showcase, and Own Your Unique Creations in the World of NFTs
          </Text>
        </div>
        <Flex
          gap={10}
          style={{
            marginTop: 24,
          }}>
          <Button secondary>HOW TO MINT?</Button>
          <Flex style={{flexDirection: 'column'}}>
            <Button>Mint your ERC404</Button>
            <Text
              style={{
                fontFamily: 'DarkerGrotesque',
                color: colors.white50,
                textAlign: 'right',
              }}>
              (0.03 ETH)
            </Text>
          </Flex>
        </Flex>
      </Col>
      <Col span={10} style={{alignSelf: 'center'}}>
        <img width={'100%'} src={heroSide} alt="hero" />
      </Col>
    </Row>
  );
};

export default Hero;
