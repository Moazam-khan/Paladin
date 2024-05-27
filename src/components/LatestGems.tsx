import nftBoy from '@/assets/nft-boy.png';
import nftGirl from '@/assets/nft-girl.png';
import {colors} from '@/utils';
import {Col, Flex, Row} from 'antd';
import NftCard from './NftCard';
import Text from './Text';

type Props = {};

const fakeGems = [
  {
    title: 'PALADINS #38916',
    date: new Date('2021-09-01'),
    tag: 'gaming',
    img: nftGirl,
    price: 1,
  },
  {
    title: 'PALADINS #38917',
    date: new Date('2021-09-01'),
    tag: 'digital art',
    price: 0.000123,
    img: nftGirl,
  },
  {
    title: 'PALADINS #38918',
    date: new Date('2021-09-01'),
    tag: 'crew',
    price: 0.8,
    img: nftBoy,
  },
];

const LatestGems = (props: Props) => {
  return (
    <Row
      style={{
        margin: 24,
      }}>
      <Col span={24}>
        <Text
          style={{
            fontFamily: 'SpaceGrotesk',
            fontSize: 28,
            fontWeight: 700,
            textTransform: 'uppercase',
          }}>
          Discover the Latest GEMS{' '}
        </Text>
        <Text
          style={{
            fontFamily: 'DarkerGrotesque',
            fontSize: 20,
            fontWeight: 600,
            display: 'block',
            color: colors.white50,
          }}>
          Explore the Freshest Additions to Our Growing Collection of Unique
          NFTs. Each Piece Tells a Story.
        </Text>
      </Col>
      <Col span={24} style={{marginTop: 36}}>
        <Flex wrap="wrap" justify="space-between" gap={22}>
          {fakeGems.map((gem, index) => (
            <NftCard key={index} {...gem} />
          ))}
          <div
            style={{
              width: 165,
              backgroundColor: '#FFFFFF0D',
              height: 131,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 16,
              border: '0.5px solid #FFFFFF33',
            }}>
            <Text>Mint Yours Now</Text>
          </div>
        </Flex>
      </Col>
    </Row>
  );
};

export default LatestGems;
