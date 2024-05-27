import {Hero} from '@/components';
import {Col, Row} from 'antd';

const Home = () => {
  return (
    <Row>
      <Col span={24}>
        <Hero />
      </Col>
    </Row>
  );
};

export default Home;
