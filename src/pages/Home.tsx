import {Hero, LatestGems} from '@/components';
import {Col, Row} from 'antd';

const Home = () => {
  return (
    <Row>
      <Col span={24}>
        <Hero />
      </Col>
      <Col span={24}>
        <LatestGems />
      </Col>
    </Row>
  );
};

export default Home;
