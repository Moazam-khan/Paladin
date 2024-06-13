import {getNFTs} from '@/api/ApiCalls/nfts';
import add from '@/assets/Add.png';
import nftBoy from '@/assets/nft-boy.png';
import nftGirl from '@/assets/nft-girl.png';
import {colors, fontFamily} from '@/utils';
import {Col, Row} from 'antd';
import {useEffect, useState} from 'react';
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
    title: 'PALADINS #38969',
    date: new Date('2021-09-01'),
    tag: 'gaming',
    price: 3.09,
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
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getNFTs();
      setNFTs(data.data);
    };
    loadData();
  }, []);
  return (
    <Row
      style={{
        margin: 24,
      }}>
      <Col span={24}>
        <Text
          style={{
            fontFamily: fontFamily.spaceGrotesk,
            fontSize: 28,
            fontWeight: 700,
            textTransform: 'uppercase',
          }}>
          Discover the Latest GEMS{' '}
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.darkerGrotesque,
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
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={16} md={20}>
            <Row gutter={[24, 24]}>
              {nfts.map((gem: any, index) => (
                <Col xs={24} md={8} lg={6}>
                  <NftCard
                    key={index}
                    style={
                      {
                        // maxWidth: 289,
                        // width: '20%',
                        // minWidth: 200,
                      }
                    }
                    {...gem}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={24} sm={8} md={4}>
            <div
              style={{
                maxWidth: 200,
                backdropFilter: 'blur(2px)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 16,
                border: `1px solid ${colors.white20}`,
                borderRadius: 8,
                textAlign: 'center',
                gap: 14,
              }}>
              <img src={add} style={{height: 44}} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: 1.8,
                  textTransform: 'uppercase',
                }}>
                Mint Yours Now
              </Text>
            </div>
          </Col>
        </Row>
        {/* <Flex wrap="wrap" justify="flex-start" style={{flex: 1}} gap={22}>
          {fakeGems.map((gem, index) => (
            <NftCard
              key={index}
              style={{
                maxWidth: 289,
                width: '20%',
                minWidth: 200,
              }}
              {...gem}
            />
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
        </Flex> */}
      </Col>
    </Row>
  );
};

export default LatestGems;
