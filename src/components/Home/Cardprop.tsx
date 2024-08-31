import {Button, Col, Row, Card} from 'antd';

import PC from '@/assets/NewAssets/Hero/PC.png';
import { useBreakpoint } from '@/hooks';



interface CardpropProps {
  title: string;
  content: string;
  imageUrl?: string; // Optional prop
}


const  Cardprop: React.FC<CardpropProps> = ({ title, content, imageUrl }) =>{
  const {xs} = useBreakpoint();
  return (
    <Row
      style={{
        display: 'flex',
        paddingBottom: '24px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12.033px',
        borderRadius: '8px',
        border: '0.868px solid rgba(255, 255, 255, 0.20)',
        background: 'rgba(255, 255, 255, 0.06)',
        boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
        width: xs ? '100% ':'unset'

      }}>
      <Row
        style={{
          display: 'flex',
             width: xs ? '100% ':'unset',
             height: xs ? '289px ':'unset',
          gap: 16,
        }}>
        <img
          style={{
            height: '289px',
            width: '100%',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
          src={imageUrl}></img>
      </Row>

      <Row
        style={{
          padding: '0px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px', // Gap between the line and any subsequent items
          width: xs ? '100% ':'unset',

        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',

            gap: '12px',
            borderRadius: '8px',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',

              gap: '6px',
            }}>
            <span
              style={{
                color: '#FFCB3A',

                fontFamily: 'Nippo',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '1.8px',
              }}>
              PALADINS #38916
            </span>
            <span
              style={{
                color: '#FFF',
                fontFamily: '"Darker Grotesque"',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
              }}>
              10/05/2024
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',

              gap: '12px',
            }}>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.50)',
                fontFamily: '"Darker Grotesque"',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
              }}>
              #Gaming
            </span>

            <div
              style={{
                width:'fit-Content',
                display: 'flex',
                padding: '8px',
                alignItems: 'flex-start',
                gap: '10px',
                borderRadius: '8px',
                background: 'var(--Light-100, rgba(255, 255, 255, 0.10))',


              }}>
                <text style={{
                    color: '#FFF',
                    fontFamily: 'Darker Grotesque',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',


                }}>  {content}</text>


            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <div
            style={{
              width: '227px',
              height: '1.203px',
              background: 'rgba(255, 255, 255, 0.10)',
            }}
          />
        </div>

        <div>
          <Button
            style={{
              width: '227px',
              height: '44px',
              backgroundColor: 'var(--Button-Primary-BG, #262626)',
              borderWidth: '0.5px',
              borderColor: 'var(--Button-Primary-Border, #525252)',
              borderStyle: 'solid',
              borderRadius: '0', // Optional: set to your desired radius if needed
              color: '#FFF', // Optional: set text color if needed
              padding: 0, // Optional: ensure padding doesn't affect dimensions
              clipPath:
                'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
            }}>
            <text
              style={{
                color: 'var(--Text-Default, #FFF)',
                textAlign: 'center',
                fontFamily: 'Nippo',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                width: '244px',
                height: '44px',
              }}>
              {title}
            </text>
          </Button>
        </div>
      </Row>
    </Row>
  );
};

export default Cardprop;
