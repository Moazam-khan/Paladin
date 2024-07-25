import {useBreakpoint} from '@/hooks';
import {Col, Row} from 'antd';
import purpleLock from '../../assets/purpleLock.png';
import staking from '../../assets/staking-summary.svg';
import yellowLock from '../../assets/yellowLock.png';
import Text from '../Text';

const StakingSummary = () => {
  const {xs, sm, md, lg, xl} = useBreakpoint();
  return (
    <Col
      style={{
        flex: 1,
        borderRadius: '24px',
        border: '0.5px solid #525252',
        backgroundColor: '#171717',
        padding: md ? '36px' : '24px',
      }}>
      <Text fs={24} fw={400} style={{fontFamily: 'Nippo'}}>
        Staking Summary
      </Text>
      <Row
        style={{
          marginTop: '24.1px',
          gap: '24px',
          flexDirection: xs ? 'column' : 'row',
          alignItems: 'center',
        }}>
        <Col
          style={{
            display: 'flex',
            width: '150px',
            height: '150px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${staking})`,
            //backgroundColor: 'red',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            flexDirection: 'column',
          }}>
          <Text
            ff="darkerGrotesque"
            fs={16}
            fw={600}
            style={{color: 'rgba(255, 255, 255, 0.50)', lineHeight: '12px'}}>
            Stacked
          </Text>
          <Text ff="nippo" fs={18} fw={400}>
            0.7 $PAl
          </Text>
        </Col>
        <Col
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flex: 1,
            width: xs ? '100%' : '',
          }}>
          <StakingSummaryData
            img={yellowLock}
            title="Staking Amount"
            value="0.7 $PAL"
          />
          <StakingSummaryData
            img={purpleLock}
            title="Yield Poins"
            value="12,546 Points"
          />
        </Col>
      </Row>
    </Col>
  );
};

export default StakingSummary;

interface StakingSummaryDataProp {
  title: string;
  value: string;
  img: string;
}

const StakingSummaryData = (props: StakingSummaryDataProp) => {
  const {title, value, img} = props;
  return (
    <Row
      style={{
        padding: '8px 8px 8px 20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '18px',
        background: 'rgba(255, 255, 255, 0.10)',
      }}>
      <Col style={{display: 'flex', flexDirection: 'column'}}>
        <Text
          ff="darkerGrotesque"
          fs={16}
          fw={600}
          style={{color: 'rgba(255, 255, 255, 0.50)', lineHeight: '12px'}}>
          {title}
        </Text>
        <Text ff="nippo" fs={18} fw={400}>
          {value}
        </Text>
      </Col>
      <img src={img} />
    </Row>
  );
};
