import {Col, Row} from 'antd';
import Blog from '../assets/NewAssets/Footer/Blog.png';
import Disscard from '../assets/NewAssets/Footer/Disscard.png';
import Telegram from '../assets/NewAssets/Footer/Telegram.png';
import X from '../assets/NewAssets/Footer/X.png';
import {useBreakpoint} from '@/hooks';

const Footer = () => {
  const {xs} = useBreakpoint();
  return (
    <Row style={{
      gap:'56px',



    }}>

    <Row
      style={{

        padding: '56px 0px',
        alignSelf: 'stretch',
        flexDirection: 'column', // Border for the container
        width:'100%'

      }}>
         <div
  style={{
    height: '1px',
    width: '100%', // You can set a specific width like '50%' or '200px' if needed
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginBottom:'36px'
  }}
></div>
      <Row>
        <Col
          style={{
            width: '354px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: xs ? 'center':'flex-start',
            gap: '10px',

            padding: '10px', // Optional: Adding padding for better spacing
          }}>
          {/* First Element: Image */}
          <div
            style={{
              color: 'var(--Text-Default, #FFF)',
              fontFamily: 'Nippo',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}>
            {/* Replace with your image */}
            PALADINS
          </div>

          {/* Second Element: Text */}
          <div
            style={{
              color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
              fontFamily: 'DarkerGrotesque',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '100%', // or 18px
              textAlign : xs? 'center': 'left',
            }}>
            Lorem ipsum dolor sit amet consectetur. Non curabitur egestas quis
            in gravida parturient lacinia lacus.
          </div>

          {/* Third Element: Icon */}
          <div
            style={{
              width: '254px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}>
            <Row
              style={{
                display: 'flex', // Ensure flexbox is used
                flexDirection: 'row', // Arrange items horizontall
                gap: '20px', // Space between images
                width: '100%', // Make sure Row takes full width of parent div
                justifyContent: xs ? 'center':'left'
              }}>
              <img
                style={{width: '24px', height: '24px'}} // Remove gap from individual images
                src={Blog}
                alt="Blog"
              />
              <img
                style={{width: '24px', height: '24px'}} // Remove gap from individual images
                src={Telegram}
                alt="Telegram"
              />
              <img
                style={{width: '24px', height: '24px'}} // Remove gap from individual images
                src={X}
                alt="X"
              />
              <img
                style={{width: '24px', height: '24px'}} // Remove gap from individual images
                src={Disscard}
                alt="Disscard"
              />
            </Row>
          </div>
        </Col>

        <Col
          style={{
            display: 'flex',
            alignItems: xs ? 'center' : 'flex-start',
            gap: '10px',
            flex: '1 0 0',
            padding: '10px',
            flexDirection: xs ? 'column-reverse' : 'unset',// Optional padding


          }}>
          {/* First Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              flex: '1 0 0',

              padding: '10px', // Optional padding
            }}>
            {/* Heading for the first column */}
            <div
              style={{
                color: 'var(--Text-Default, #FFF)',
                fontFamily: 'DarkerGrotesque',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 800,
                lineHeight: '18px', // 100% of 18px
                width: '100%', // Ensure the heading is centered within the column
              }}>
              Products
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                textAlign: 'center',
                fontFamily: '"DarkerGrotesque"',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px', // line-height as 100% of font-size
                // leadingTrim and textEdge are not directly supported in Ant Design,
                // so those would remain as custom CSS if necessary.
              }}>
                
              <text >Footer Item</text>
              <text>Footer Item</text>
              <text>Footer Item</text>
            </div>
          </div>

          {/* Second Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              flex: '1 0 0',

              padding: '10px', // Optional padding
            }}>
            {/* Heading for the second column */}
            <div
              style={{
                color: 'var(--Text-Default, #FFF)',

                fontFamily: 'DarkerGrotesque',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 800,
                lineHeight: '18px', // 100% of 18px

                width: '100%', // Ensure the heading is centered within the column
              }}>
              Contact Us
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                textAlign: 'center',
                fontFamily: '"DarkerGrotesque"',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px', // line-height as 100% of font-size
                // leadingTrim and textEdge are not directly supported in Ant Design,
                // so those would remain as custom CSS if necessary.
              }}>
              <text>Footer Item</text>
              <text>Footer Item</text>
              <text>Footer Item</text>
            </div>
          </div>

          {/* Third Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              flex: '1 0 0',

              padding: '10px', // Optional padding
            }}>
            {/* Heading for the third column */}
            <div
              style={{
                color: 'var(--Text-Default, #FFF)',

                fontFamily: 'DarkerGrotesque',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 800,
                lineHeight: '18px', // 100% of 18px

                width: '100%', // Ensure the heading is centered within the column
              }}>
              About
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                textAlign: 'center',
                fontFamily: '"DarkerGrotesque"',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px', // line-height as 100% of font-size
                // leadingTrim and textEdge are not directly supported in Ant Design,
                // so those would remain as custom CSS if necessary.
              }}>
              <text>Footer Item</text>
              <text>Footer Item</text>
              <text>Footer Item</text>
            </div>
          </div>
        </Col>
      </Row>

      <Row style={{  justifyContent: xs ? 'center' : 'flex-start', // Center content if xs is true
      }}>

        <text
          style={{
            color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
            fontFamily: '"DarkerGrotesque"',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '100%', // or 16px
            textAlign: 'center', // Optional: for text alignment
            // leading-trim and text-edge are not directly supported in Ant Design
            // so they need custom CSS

          }}>
         © 2024 PALADINS, all rights reserved
        </text>
      </Row>
    </Row>
    </Row>
  );
};

export default Footer;
