import React, { useState } from 'react';
import { Col, Row, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SprvisnCorecCnfirm02 = () => {
  const [ojtSpvsFlfmtInfo, setOjtSpvsFlfmtInfo] = useState({
    a1: '최종감리',
    a2: '(주)감리기관',
    a3: '홍길동',
    a4: '2021-09-01',
    a5: '2021-12-03',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>감리수행 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="감리구분" span={1.5}>
              {ojtSpvsFlfmtInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="감리기관" span={1.5}>
              {ojtSpvsFlfmtInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="참여감리원" span={1.5}>
              {ojtSpvsFlfmtInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="감리수행일자" span={1.5}>
              {ojtSpvsFlfmtInfo?.a4} ~ {ojtSpvsFlfmtInfo?.a5}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SprvisnCorecCnfirm02;
