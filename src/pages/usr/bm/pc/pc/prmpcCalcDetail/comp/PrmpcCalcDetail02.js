import React, { useState } from 'react';
import { Col, Row, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const PrmpcCaclDetail02 = () => {
  const [ojtCodi, setOjtCodi] = useState({
    a1: '아무개',
    a2: '010-1111-1111',
    a3: 'abc@naver.com',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>코디네이터 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="성명" span={3}>
              {ojtCodi?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="핸드폰" span={2}>
              {ojtCodi?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="이메일" span={1}>
              {ojtCodi?.a3}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PrmpcCaclDetail02;
