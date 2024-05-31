import liquidityArrows from '@/assets/arrow.svg';
import bulb from '@/assets/bulb-square.png';
import balanceChart from '@/assets/chart.svg';
import { colors } from '@/utils';
import { Col, Row } from 'antd';
import Text from './Text';

type Props = {};

const features = [
  {
    title: 'Unlocked Ownership for All',
    description: 'Own a piece of the action, even with limited budget.',
    img: balanceChart,
  },
  {
    title: 'Increased Liquidity & Trading',
    description: 'Buy, sell, and trade portions of NFTs with greater ease.',
    img: liquidityArrows,
  },
  {
    title: 'Innovative Investment Strategies',
    description: 'Open up a world of new possibilities in the NFT market.',
    img: bulb,
  },
];

const FeatureCard = ({
                       title,
                       description,
                       img,
                     }: {
  title: string;
  description: string;
  img: string;
}) => (
  <div
    style={{
      backgroundColor: colors.white15,
      borderRadius: 12,
      border: `0.5px solid ${colors.white20}`,
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
    }}>
    <div
      style={{
        width: '100%',
        height: 88,
        backgroundColor: '#FFFFFF05',
        position: 'absolute',
        zIndex: -10,
      }}
    />

    <img
      style={{
        position: 'relative',
        zIndex: 10,
        left: 24,
        top: 34,
      }}
      height={108}
      width={108}
      src={img}
      alt={title}
    />
    <div style={{ padding: 24, marginTop: 56 }}>
      <Text
        style={{
          fontFamily: 'SpaceGrotesk',
          fontSize: 28,
          textTransform: 'uppercase',
          fontWeight: 700,
          lineHeight: '128%',
          display: 'block',
          color: colors.primary,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: 'DarkerGrotesque',
          fontSize: 24,
          fontWeight: 600,
          display: 'block',
          color: colors.white50,
        }}>
        {description}
      </Text>
    </div>
  </div>
);

const Features = (props: Props) => {
  return (
    <Row
      style={{
        margin: 24,
        marginTop: 48,
      }}>
      <Col span={24}>
        <Text
          style={{
            fontFamily: 'SpaceGrotesk',
            fontSize: 28,
            textTransform: 'uppercase',
            fontWeight: 700,
            lineHeight: '34px',
          }}>
          Own a Piece of History: Introducing ERC-404 <br />
          NFTs
        </Text>
        <Text
          style={{
            fontFamily: 'DarkerGrotesque',
            fontSize: 20,
            fontWeight: 600,
            display: 'block',
            lineHeight: '20px',
            color: colors.white50,
            maxWidth: 800,
          }}>
          Ever wanted to own a piece of a valuable digital asset, but the price tag felt out of reach? ERC-404 NFTs
          change the game! This innovative technology allows you to co-own unique digital collectibles with others.
          Imagine owning a fraction of a famous CryptoPunk or a rare piece of digital art. ERC-404 makes it possible!
        </Text>
      </Col>
      <Col
        span={24}
        style={{
          marginTop: 34,
        }}>
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8}>
              <FeatureCard key={index} {...feature} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Features;
