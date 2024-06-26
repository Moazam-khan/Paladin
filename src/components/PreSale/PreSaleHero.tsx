import bgHero from '@/assets/bg-hero.png';
import heroSide from '@/assets/cyber-token-hero.png';
import {useBreakpoint} from '@/hooks';
import {useSelector} from '@/store';
import {colors, fontFamily} from '@/utils';
import {Col, Row} from 'antd';
import Text from '../Text';

type Props = {};

const PreSaleHero = (props: Props) => {
  const {sm, md, lg, xl} = useBreakpoint();
  const setBuyNftModal = useSelector().setBuyNftModal;

  return (
    <Row
      style={{
        backgroundImage: `url(${bgHero})`,
        marginTop: 24,
        padding: 24,
        borderRadius: 15,
      }}>
      <Col
        xs={{span: 24, order: 2}}
        md={{span: 14, order: 1}}
        style={{
          display: 'flex',
          flexDirection: 'column',
          //space between
          justifyContent: 'space-between',
        }}>
        <div style={{paddingTop: 28}}>
          <Text
            style={{
              fontFamily: fontFamily.spaceGrotesk,
              fontWeight: 700,
              fontSize: md ? (lg ? 74 : 40) : 36,
              lineHeight: '87%',
              textTransform: 'uppercase',
              letterSpacing: '-2.2px',
            }}>
            <span style={{color: colors.primary}}>$CYBER </span>PRESALE
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.darkerGrotesque,
              fontSize: '20px',
              fontWeight: 600,
              display: 'block',
              color: colors.white50,
              lineHeight: '100%',
              marginTop: 24,
            }}>
            The amount of $CYBER received after the Presale depends on the total
            amount deposited. The first 20 ETH receive a guaranteed allocation.
            Tokens for the remaining 10 ETH will be distributed proportionally.
            Any extra ETH will be refunded.
            <br />
            <br />
            For example, if 40 ETH is gathered, deposits before 20 ETH milestone
            receive the full amount of tokens, while deposits after the first 20
            ETH receive half of the tokens and half of the ETH deposited back.
          </Text>
        </div>
      </Col>
      <Col
        xs={{span: 24, order: 1}}
        md={{span: 10, order: 2}}
        style={{alignSelf: 'center', paddingLeft: md ? 24 : 0}}>
        <img width={'100%'} src={heroSide} alt="hero" />
      </Col>
    </Row>
  );
};

export default PreSaleHero;
