import StakingHero from '@/components/Staking/StakingHero';
import StakingInfo from '@/components/Staking/StakingInfo';
import {Row} from 'antd';

const Staking = () => {
  return (
    <Row>
      <StakingHero />
      <StakingInfo />
    </Row>
  );
};

export default Staking;
