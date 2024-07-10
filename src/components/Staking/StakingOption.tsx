import {useBreakpoint} from '@/hooks';
import {Col, Row} from 'antd';
import {Dispatch, SetStateAction} from 'react';
import info from '../../assets/info-circle.png';
import Text from '../Text';

interface StakingOptionProp {
  estimatedAPY: number | undefined;
  setEstimatedAPY: Dispatch<SetStateAction<number | undefined>>;
}

const StakingOption = (props: StakingOptionProp) => {
  const {estimatedAPY, setEstimatedAPY} = props;
  const {sm, md, lg, xl} = useBreakpoint();
  return (
    <Row style={{marginTop: '24px', width: '100%'}}>
      <Row
        style={{
          paddingBottom: '12px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
          width: '100%',
          marginBottom: '24px',
        }}>
        <Text fs={18} fw={600} ff={'darkerGrotesque'} color="white50">
          Staking Options
        </Text>
      </Row>
      <Row style={{width: '100%'}}>
        <Col
          span={24}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '8px',
          }}>
          <Text
            fs={14}
            fw={600}
            ff={'darkerGrotesque'}
            style={{color: '#7D7D7D'}}>
            Estimated APY (Annual Percentage Yield)
          </Text>
          <img src={info} style={{width: '14px', height: '14px'}} />
        </Col>
        <Col
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            paddingBottom: '24px',
            gap: '16px',
          }}
          span={24}>
          <Options
            day={18}
            value={30}
            active={estimatedAPY === 18 ? true : false}
            onClick={() => {
              setEstimatedAPY(18);
            }}
          />
          <Options
            day={23}
            value={90}
            active={estimatedAPY === 23 ? true : false}
            onClick={() => {
              setEstimatedAPY(23);
            }}
          />
          <Options
            day={52}
            value={365}
            active={estimatedAPY === 52 ? true : false}
            onClick={() => {
              setEstimatedAPY(52);
            }}
          />
        </Col>
      </Row>
    </Row>
  );
};

export default StakingOption;

interface Optionsprops {
  value: number;
  day: number;
  active?: boolean;
  onClick?: () => void;
}

const Options = (props: Optionsprops) => {
  const {day, value, active, onClick} = props;
  const {sm, md, lg, xl} = useBreakpoint();
  return (
    <Col
      style={{
        display: 'flex',
        padding: '16px 10px',
        justifyContent: 'center',
        borderRadius: '12px',
        border: `1px solid ${active ? '#FFCB3A' : '#262626'}`,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: active ? '#3D2D00' : '',
        cursor: 'pointer',
      }}
      onClick={onClick}>
      <Text
        fs={md ? 24 : 20}
        fw={400}
        ff="nippo"
        style={{color: active ? '#FFCB3A' : '#7D7D7D'}}>
        {value}%
      </Text>
      <Text
        fs={md ? 14 : 12}
        fw={600}
        ff="darkerGrotesque"
        style={{color: '#7D7D7D'}}>
        For {day} Days
      </Text>
    </Col>
  );
};
