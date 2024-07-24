import {useBreakpoint} from '@/hooks';
import {calculateYeildPoint, stakeTokens} from '@/utils/staking';
import {Col, ConfigProvider} from 'antd';
import {useEffect, useState} from 'react';
import {parseEther} from 'viem';
import {useAccount} from 'wagmi';
import Button from '../Button';
import Text from '../Text';
import StakingOption from './StakingOption';

const StakingInfo = () => {
  const {sm, md, lg, xl} = useBreakpoint();
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [rewardPoints, setRewardPoints] = useState<number>(0);
  const {address} = useAccount();
  useEffect(() => {
    async function fetchRewardPoints() {
      const points = await calculateYeildPoint(address);
      setRewardPoints(points);
    }
    fetchRewardPoints();
  }, []);
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: 'rgba(255, 255, 255, 0.10)',
            colorBorder: 'transparent',
            colorPrimary: 'rgba(255, 255, 255, 0.10)',
            hoverBorderColor: 'transparent',
          },
        },
      }}>
      <Col
        style={{
          flex: '1',
          borderRadius: '24px',
          border: '0.5px solid #525252',
          backgroundColor: '#171717',
          padding: md ? '36px' : '24px',
        }}>
        <Text fs={24} fw={400} style={{fontFamily: 'Nippo'}}>
          STAKE YOUR PALADINS
        </Text>
        {/* <Row
          style={{
            marginTop: '24px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
          }}>
          <Text
            fs={18}
            fw={600}
            style={{fontFamily: fontFamily.darkerGrotesque}}>
            NFT Information
          </Text>
        </Row>
        <SelectNFT /> */}
        <StakingOption
          stakeAmount={stakeAmount}
          setStakeAmount={setStakeAmount}
        />
        <Button
          style={{width: md ? '227px' : '100%'}}
          size="large"
          //disabled={estimatedAPY ? false : true}
          onClick={() => {
            stakeTokens(parseEther(stakeAmount.toString()));
          }}>
          Stake
        </Button>
        <Text fs={24} fw={400} style={{fontFamily: 'Nippo'}}>
          Reward Points = {rewardPoints}
        </Text>
      </Col>
    </ConfigProvider>
  );
};

export default StakingInfo;
