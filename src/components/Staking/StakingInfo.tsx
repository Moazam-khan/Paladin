import {useBreakpoint} from '@/hooks';
import {Col, ConfigProvider, Row} from 'antd';
import {useState} from 'react';
import Button from '../Button';
import Text from '../Text';
import StakingOption from './StakingOption';

const StakingInfo = () => {
  const {sm, md, lg, xl} = useBreakpoint();
  const [estimatedAPY, setEstimatedAPY] = useState<number>();
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
      <Row
        style={{
          marginTop: md ? '36px' : '54px',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Col
          style={{
            width: md ? '700px' : '100%',
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
            estimatedAPY={estimatedAPY}
            setEstimatedAPY={setEstimatedAPY}
          />
          <Button
            style={{width: md ? '227px' : '100%'}}
            size="large"
            //disabled={estimatedAPY ? false : true}
          >
            Stake
          </Button>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default StakingInfo;
