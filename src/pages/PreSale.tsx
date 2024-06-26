import {DepositCard, PreSaleHero, PreSaleInfo} from '@/components';
import {Col, Row} from 'antd';

type Props = {};

const PreSale = (props: Props) => {
  return (
    <Row>
      <Col span={24}>
        <PreSaleHero />
      </Col>
      <Col span={24}>
        <Row style={{marginTop: 36}} gutter={[24, 24]}>
          <Col xs={24} lg={10}>
            <DepositCard />
          </Col>

          <Col xs={24} lg={14}>
            <PreSaleInfo />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PreSale;
