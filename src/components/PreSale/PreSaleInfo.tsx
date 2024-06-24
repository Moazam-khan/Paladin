import {useBreakpoint} from '@/hooks';
import {colors} from '@/utils';
import {Flex} from 'antd';
import Text from '../Text';
import PreSaleProgressBar from './PreSaleProgressBar';

type Props = {};

const PreSaleInfo = (props: Props) => {
  const {md} = useBreakpoint();
  return (
    <Flex
      style={{
        borderRadius: 24,
        border: `1px solid ${colors.btnPrimaryBorder}`,
        background: colors.btnPrimaryBg,
        boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
        padding: md ? 36 : 24,
        flexDirection: 'column',
        gap: 20,
        height: '100%',
        // justifyContent: 'space-between',
      }}>
      <Text
        center
        ff="nippo"
        fs={28}
        fw={500}
        style={{letterSpacing: '1.68px', lineHeight: '100%'}}>
        TOTAL DEPOSITED <br />
        <span style={{color: colors.textContrast}}>15.2 </span>ETH
      </Text>
      <div style={{opacity: 0.45}}>
        <Flex style={{borderRadius: 8, padding: 10}} justify="space-between">
          <Text
            ff="darkerGrotesque"
            fw={600}
            fs={20}
            style={{lineHeight: '100%'}}>
            Presale min deposit:
          </Text>
          <Text
            ff="darkerGrotesque"
            fw={600}
            fs={20}
            style={{lineHeight: '100%'}}>
            0.05 ETH
          </Text>
        </Flex>
        <Flex
          style={{
            backgroundColor: colors.light50,
            borderRadius: 8,
            padding: 10,
          }}
          justify="space-between">
          <Text
            ff="darkerGrotesque"
            fw={600}
            fs={20}
            style={{lineHeight: '100%'}}>
            Presale max deposit:
          </Text>
          <Text
            ff="darkerGrotesque"
            fw={600}
            fs={20}
            style={{lineHeight: '100%'}}>
            2.0 ETH
          </Text>
        </Flex>
      </div>
      <div style={{marginTop: 'auto', paddingTop: 24}}>
        <PreSaleProgressBar />
      </div>
    </Flex>
  );
};

export default PreSaleInfo;
