import {getNFTs} from '@/api/ApiCalls/nfts';
import bgHero from '@/assets/nfts-hero-bg.png';
import showcase from '@/assets/nfts-hero-showcase.png';
import {Text} from '@/components';
import Button from '@/components/Button';
import NftCard from '@/components/NftCard';
import {useSelector} from '@/store';
import {colors} from '@/utils';
import {Col, Row} from 'antd';
import {useEffect, useState} from 'react';

const Nfts = () => {
  const [nfts, setNFTs] = useState<Array<NFT>>([]);
  const setBuyNftModal = useSelector().setBuyNftModal;

  useEffect(() => {
    const loadData = async () => {
      const data = await getNFTs();

      //use the first updated 4 nfts
      const updatedNfts = data.data.sort(
        (a: NFT, b: NFT) =>
          new Date(b?.updated_at)?.getTime() -
          new Date(a?.updated_at)?.getTime(),
      );

      setNFTs(updatedNfts);
    };
    loadData();
  }, []);

  return (
    <Col span={24}>
      <Row
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundPosition: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <Col
          span={24}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img src={showcase} style={{maxHeight: 400, maxWidth: '100%'}} />
          <Text
            ff="spaceGrotesk"
            fw={700}
            fs={44}
            style={{
              lineHeight: '87%',
              textTransform: 'uppercase',
              letterSpacing: '-2.2px',
              marginBottom: 14,
            }}>
            Explore, own, trade unique{' '}
            <span style={{color: colors.primary}}>NFTs.</span>
          </Text>
          <Text ff="darkerGrotesque" fs={24} color="white50">
            Build your collection and sell your favorites.
          </Text>
        </Col>
        <Col span={24} style={{marginTop: 24}}>
          <Row justify={'center'} align={'middle'} gutter={[10, 10]}>
            <Col xs={24} sm={12} md={6} lg={4}>
              <Button block size="large" secondary>
                How to mint?
              </Button>
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <Button block size="large">
                Mint your ERC404
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{marginTop: 24, display: 'grid'}}>
        <Text ff="spaceGrotesk" fs={28} fw={700} normal>
          DISCOVER THE LATEST GEMS
        </Text>
        <Text
          ff="darkerGrotesque"
          fs={20}
          fw={600}
          color="textDescriptionOnBlack"
          normal>
          Explore the Freshest Additions to Our Growing Collection of Unique
          NFTs. Each Piece Tells a Story.
        </Text>

        <Row style={{margin: '28px 0'}}>
          <Col span={24}>
            <Row gutter={[24, 36]}>
              {nfts.map((gem: any, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={gem?.identifier}>
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
        </Row>
      </Row>
    </Col>
  );
};

export default Nfts;
