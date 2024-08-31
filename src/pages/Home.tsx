import {Row} from 'antd';

import {useBreakpoint} from '@/hooks';
import Add from '../assets/NewAssets/Hero/Add.png';
import Frame from '../assets/NewAssets/Hero/Frame.png';
import Frame2 from '../assets/NewAssets/Hero/Frame2.png';
import Frame3 from '../assets/NewAssets/Hero/Frame3.png';
import PC from '../assets/NewAssets/Hero/PC.png';
import PC2 from '../assets/NewAssets/Hero/PC2.png';
import PC3 from '../assets/NewAssets/Hero/PC3.png';
import Subtract from '../assets/NewAssets/Hero/Subtract.svg';
import Cardprop from '../components/Home/Cardprop';
import Hero from '../components/Home/Hero';
import RedCard from '../components/Home/RecCard';

const Home = () => {
  const {xs} = useBreakpoint();
  return (
    <Row style={{paddingTop: '24px'}}>
      <Hero></Hero>

      <Row
        style={{
          display: 'flex',
          paddingTop: '54px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '36px',
          width: '100%',
        }}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <text
            style={{
              color: ' #FFF',
              fontFamily: '"SpaceGrotesk"',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '54px',
              letterSpacing: '-0.84px',
              textTransform: 'uppercase',
            }}>
            Discover the Latest GEMS
          </text>
          <text
            style={{
              color: '#7D7D7D',
              fontFamily: '"DarkerGrotesque"',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '100%', // 20px
            }}>
            Explore the Freshest Additions to Our Growing Collection of Unique
            NFTs. Each Piece Tells a Story.
          </text>
        </div>

        <Row
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            width: '100%',
            gap: xs ? '16px' : 'unset',
          }}>
          <Cardprop title="buy nft" content="1 PAL" imageUrl={PC} />
          <Cardprop title="buy nft" content="1 PAL" imageUrl={PC} />
          <Cardprop title="buy nft" content="1 PAL" imageUrl={PC2} />
          <Cardprop
            title="buy more"
            content="0.3 PAL - Remmaining"
            imageUrl={PC3}
          />
          <Row style={{}}>
            <div
              style={{
                backgroundImage: `url(${Subtract})`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
                width: '166px',
                height: '132px',
              }}>
              <img
                style={{
                  display: 'flex',
                  width: '44px',
                  height: '44px',
                  padding: '5.958px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                src={Add}
              />
              <text
                style={{
                  color: 'var(--Text-Default, #FFF)',
                  textAlign: 'center',
                  fontFamily: 'Nippo',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  letterSpacing: '1.8px',
                }}>
                MINT YOURS NOW
              </text>
            </div>
          </Row>
        </Row>
      </Row>

      <Row
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 36,
          alignSelf: 'stretch',
          paddingTop: '54px',
        }}>
        <Row
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 16,
            alignSelf: 'stretch',
          }}>
            <div style={{  width: xs ? '371px' : 'unset',}}>
          <text
            style={{
              color: '#FFF', // Assuming var(--Text-Default, #FFF)
              fontFamily: 'SpaceGrotesk',
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: xs ? '30px' : '54px',
              letterSpacing: '-0.84px',
              textTransform: 'uppercase',
              fontStyle: 'normal',

            }}>
            Own a Piece of History: Introducing ERC-404 NFTs
          </text>
          </div>
          <text
            style={{
              color: '#7D7D7D', // Assuming var(--Text-Descritpion---On-Black, #7D7D7D)
              fontFamily: 'DarkerGrotesque',
              fontSize: '20px',
              fontWeight: '600px',
              lineHeight: '100%', // Equivalent to 20px since the font-size is 20px
              fontStyle: 'normal',
              maxWidth: '790px',
            }}>
            Ever wanted to own a piece of a valuable digital asset, but the
            price tag felt out of reach? ERC-404 NFTs change the game! This
            innovative technology allows you to co-own unique digital
            collectibles with others. Imagine owning a fraction of a famous
            CryptoPunk or a rare piece of digital art. ERC-404 makes it
            possible!
          </text>
        </Row>
        <Row
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 24,
            alignSelf: 'stretch',
          }}>
          <RedCard
            icon={Frame}
            title="Unlocked Ownership for All"
            description="Own a piece of the action, even with limited budget."
          />
          <RedCard
            icon={Frame2}
            title="Increased Liquidity & Trading"
            description="Buy, sell, and trade portions of NFTs with greater ease."
          />
          <RedCard
            icon={Frame3}
            title="Innovative Investment Strategies"
            description="Open up a world of new possibilities in the NFT market."
          />
        </Row>
      </Row>
    </Row>
  );
};

export default Home;
