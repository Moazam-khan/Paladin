import {useBreakpoint} from '@/hooks';
import {colors, fontFamily} from '@/utils';
import {Row} from 'antd';
import bgHero from '../../assets/StakingHero.png';
import Button from '../Button';
import Text from '../Text';
const StakingHero = () => {
  const {sm, md, lg, xl} = useBreakpoint();
  return (
    <Row
      style={{
        padding: md ? '24px 99px' : '24px 24px',
        marginTop: '24px',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.10)',
        width: '100%',
        justifyContent: 'center',
        backgroundImage: `url(${bgHero})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <Text
        style={{
          fontFamily: fontFamily.spaceGrotesk,
          fontWeight: 700,
          fontSize: md ? '64px' : '36px',
          lineHeight: md ? '64px' : '34px',
          textTransform: 'uppercase',
          letterSpacing: '-2.2px',
          maxWidth: '1194px',
          textAlign: md ? 'center' : 'left',
          marginTop: md ? '24px' : '18px',
        }}>
        Staking Your <span style={{color: colors.primary}}>ERC-404</span> NFTs:
        Earn Rewards & Unlock{' '}
        <span style={{color: colors.primary}}>Benefits</span>
      </Text>
      <Text
        style={{
          color: colors.white50,
          width: '100%',
          textAlign: md ? 'center' : 'left',
        }}
        ff={'darkerGrotesque'}
        fs={20}
        fw={600}>
        Turn your ERC-404s into passive income machines.
      </Text>
      <Button
        size={'large'}
        style={{marginTop: md ? '36px' : '24px', width: md ? '227px' : ''}}
        block={md ? false : true}>
        Start Staking
      </Button>
    </Row>
  );
};

export default StakingHero;
