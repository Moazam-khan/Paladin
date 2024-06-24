import bgHero from '@/assets/bg-hero.png';
import heroSide from '@/assets/hero-sider.png';
import infoCircle from '@/assets/info-circle.png';
import {useBreakpoint} from '@/hooks';
import {useSelector} from '@/store';
import {colors, fontFamily} from '@/utils';
import {Col, Row} from 'antd';
import Button from './Button';
import Text from './Text';

type Props = {};

const Hero = (props: Props) => {
  const {sm, md, lg, xl} = useBreakpoint();
  const setBuyNftModal = useSelector().setBuyNftModal;

  return (
    <Row
      gutter={[24, 24]}
      style={{
        backgroundImage: `url(${bgHero})`,
        margin: '24px 0',
        padding: 24,
        borderRadius: 15,
      }}>
      <Col
        xs={{span: 24, order: 2}}
        md={{span: 14, order: 1}}
        style={{
          display: 'flex',
          flexDirection: 'column',
          //space between
          justifyContent: 'space-between',
        }}>
        <div style={{paddingTop: 28}}>
          <Text
            style={{
              fontFamily: fontFamily.spaceGrotesk,
              fontWeight: 700,
              fontSize: md ? (lg ? 74 : 40) : 36,
              lineHeight: '87%',
              textTransform: 'uppercase',
              letterSpacing: '-2.2px',
            }}>
            Unlock Your Creativity with{' '}
            <span style={{color: colors.primary}}>PALADINS</span>
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.darkerGrotesque,
              fontSize: '20px',
              fontWeight: 600,
              display: 'block',
              color: colors.white50,
              lineHeight: '100%',
            }}>
            Mint, Showcase, and Own Your Unique Creations in the World of NFTs
          </Text>
        </div>
        <Row
          gutter={[10, 10]}
          style={{
            marginTop: 24,
            width: lg ? '80%' : '100%',
          }}>
          <Col span={sm ? 12 : 24}>
            <Button size={'large'} secondary block>
              HOW TO MINT?
            </Button>
          </Col>
          <Col span={sm ? 12 : 24} style={{display: 'grid'}}>
            <Button
              size={'large'}
              block
              onClick={() => {
                setBuyNftModal({
                  isOpen: true,
                  address: '0x123',
                  amount: 2,
                });
              }}>
              Mint your ERC404
            </Button>
            <Row justify={'end'} align={'middle'} gutter={4}>
              <Col>
                <Text
                  style={{
                    fontFamily: fontFamily.darkerGrotesque,
                    color: colors.white50,
                    fontWeight: 600,
                    fontSize: 16,
                  }}>
                  (0.03 ETH)
                </Text>
              </Col>
              <Col style={{paddingTop: 7}}>
                <img src={infoCircle} style={{height: 14}} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        xs={{span: 24, order: 1}}
        md={{span: 10, order: 2}}
        style={{alignSelf: 'center'}}>
        <img width={'100%'} src={heroSide} alt="hero" />
      </Col>
    </Row>
  );
};

export default Hero;
