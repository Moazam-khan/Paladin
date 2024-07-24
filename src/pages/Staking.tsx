import StakingHero from '@/components/Staking/StakingHero';
import StakingInfo from '@/components/Staking/StakingInfo';
import StakingSummary from '@/components/Staking/StakingSummary';
import {useBreakpoint} from '@/hooks';
import {Row} from 'antd';

const Staking = () => {
  const {sm, md, lg, xl} = useBreakpoint();
  return (
    <>
      <Row>
        <StakingHero />
      </Row>
      <Row
        style={{
          gap: '36px',
          width: '100%',
          marginTop: '36px',
          flexDirection: lg ? 'row' : 'column',
        }}>
        <StakingInfo />
        <StakingSummary />
      </Row>
    </>
  );
};

export default Staking;
