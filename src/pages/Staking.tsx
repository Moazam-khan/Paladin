import StakingHero from '@/components/Staking/StakingHero';
import StakingInfo from '@/components/Staking/StakingInfo';
import {calculateYeildPoint} from '@/utils/staking';
import {Row} from 'antd';
import {useAccount} from 'wagmi';

const Staking = () => {
  const {address} = useAccount();
  calculateYeildPoint(address);
  return (
    <Row>
      <StakingHero />
      <StakingInfo />
    </Row>
  );
};

export default Staking;
