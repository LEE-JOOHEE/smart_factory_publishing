import React from 'react';
import { Col, Row } from 'antd';
import 'css/Common.css';

const TechResultNtceContainer = () => {
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>{/*  컴포넌트   */}</Col>
      </Row>
    </>
  );
};

export default React.memo(TechResultNtceContainer);
