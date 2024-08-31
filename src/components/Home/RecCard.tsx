import { useBreakpoint } from '@/hooks';
import {Button, Col, Row, Card} from 'antd';



interface RecCardProps {
  icon: string;
  title: string;
  description?: string; // Optional prop
}


const  RecCard: React.FC<RecCardProps> = ({ icon, title, description }) =>{

  const {xs} = useBreakpoint();
  return (
    <Col
      style={{
        width:xs? '371px' : '448px',
        height:xs? '290px' : '347.745px',
        clipPath:
          'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 15px)',
      }}>
      <div
        style={{
          display: 'flex',
          maxWidth:xs? '500px' : '448px',
          height:xs? '256px':'314px',
          padding: '12px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(2px)',
          strokeWidth: 0.868,
          stroke: '#525252',
          borderBottomRightRadius: '30px',
        }}>
        <img src={ icon}></img>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            gap: 14,
            alignSelf: 'stretch',

          }}>
          <text
            style={{
              color: '#FFCB3A', // Assuming var(--Text-Contrast, #FFCB3A)
              fontFamily: 'SpaceGrotesk',
              fontSize:xs ?'24px' :'32px',
              fontWeight: 700,
              lineHeight:xs? '32px':'36px', // 112.5% of 32px
              letterSpacing:xs?'-0.72px': '-0.96px',
              textTransform: 'uppercase',
              fontStyle: 'normal',
              width:xs?'371px':'unset'
            }}>
            { title }
          </text>
          <text
            style={{
              color: '#7D7D7D', // Assuming var(--Text-Descritpion---On-Black, #7D7D7D)
              fontFamily: 'DarkerGrotesque',
              fontSize: xs ? '18px':'22px',
              fontWeight: '600px',
              lineHeight: '100%', // This is 22px given the font size
              fontStyle: 'normal',
            }}>
          {  description }
          </text>
        </div>
      </div>
    </Col>
  );
};
export default RecCard;
