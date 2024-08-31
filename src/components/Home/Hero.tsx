import {Button, Col, Row} from 'antd';
import Heroright from '@/assets/NewAssets/Hero/Heroright.png';
import infocircles from '@/assets/NewAssets/Hero/infocircle.svg';
import heroback from '@/assets/NewAssets/Hero/heroback.svg';
import { useBreakpoint } from '@/hooks';

<img src={heroback} alt="" />;

const Hero = () => {
  const {xs} = useBreakpoint();
  return (
    <Row
      style={{


      backgroundBlendMode: 'luminosity, normal',
        background: 'heroback',
        backgroundImage: `url(${heroback})`, // Correct property to use
        backgroundSize: 'cover', display: 'flex',
        padding: '24px',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: '24px',
        alignSelf: 'stretch',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.10)',
        flexDirection: xs ?'row-reverse':'row-reverse',
        width:xs?'371px':'unset'
      }}>

<Col style={{}}>

<div>
        <img
          style={{
            maxWidth: xs ? '100%' : '560px',
            maxHeight: '353px',
          }}
          src={Heroright}></img></div>
      </Col>


      <Col
        style={{
          display: 'flex',
          paddingTop: '28px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: '1 0 0',
          alignSelf: 'stretch',
        }}>
        <Row
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize:xs ? '36px':'74px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight:xs ? '34px':'64px',
            letterSpacing:xs ? '-1.08':'-2.22px',
            textTransform: 'uppercase',
            textAlign: 'center', // Center text horizontally
            marginBottom: '24px', // Adjust spacing if needed
          }}>

          <text style={{textAlign: 'left'}}>Unlock Your Creativity with </text>
          <text
            style={{
              color: '#FFCB3A',
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize:xs ? '36px':'74px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight:xs ? '34px':'64px',
              letterSpacing:xs ? '-1.08':'-2.22px',
              textTransform: 'uppercase',
              textAlign: 'center', // Center text horizontally
              marginBottom: '18px', // Adjust spacing if needed
            }}>

            PALADIN
          </text>
        </Row>

        {/* Second Row */}
        <Row>
          <text
            style={{
              color: 'rgba(255, 255, 255, 0.50)',
              fontFamily: '"DarkerGrotesque", sans-serif',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '100%', // This equals 20px
              textAlign: 'left', // Center text horizontally
              width: '100%',
               fontSize: '20px'

            }}>
            Mint, Showcase, and Own Your Unique Creations in the World of NFTs
          </text>
        </Row>

        <Row
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px', // Gap between the buttons
            paddingTop: '28px',
          }}>
          <Col>
            <Button
              style={{
                backgroundColor: '#262626', // Example background color

                width: xs ? '263px' : '227px',
                height: '44px',
                clipPath:
                  'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
              }}>
              <text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Nippo, sans-serif', // Font family
                  fontWeight: '500',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}>

                How to mint?
              </text>
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: xs ? '263px' : '227px',
                height: '44px', // Example button height
                backgroundColor: '#354DFE', // Button background color

                clipPath:
                  'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
                marginBottom: '4px',
              }}>
              <text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Nippo, sans-serif', // Font family
                  fontWeight: '500',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}>
                Mint your ERC404
              </text>
            </Button>
            <div style={{display: 'flex', justifyContent: 'end', gap: '4px'}}>
              <text
                style={{
                  color: '#7D7D7D', // Text color
                  fontFamily: 'Darker Grotesque', // Font family
                  fontSize: '16px', // Font size
                  fontStyle: 'normal', // Font style
                  fontWeight: 600, // Font weight
                  lineHeight: '16px', // Line height
                  textTransform: 'none', // For text transformation
                  letterSpacing: 'normal', // Letter spacing (default)
                }}>
                (0.03 ETH)
              </text>
              <img
                style={{width: '14px', height: '14px'}}
                src={infocircles}></img>
            </div>
          </Col>
        </Row>
      </Col>




    </Row>
  );
};

export default Hero;
