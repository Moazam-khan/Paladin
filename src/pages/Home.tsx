import { Hero, LatestGems } from "@/components";
import Features from "@/components/Features";
import { Col, Row } from "antd";

const Home = () => {
  return (
    <Row>
      <Col span={24}>
        <Hero />
      </Col>
      <Col span={24}>
        <LatestGems />
      </Col>
      <Col span={24}>
        <Features />
      </Col>
    </Row>
  );
};

export default Home;
