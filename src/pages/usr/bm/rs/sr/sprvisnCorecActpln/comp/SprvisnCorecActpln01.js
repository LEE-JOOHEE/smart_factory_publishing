import React, { useState } from 'react';
import { Col, Row, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SprvisnCorecActpln01 = () => {
  const [ojtAsmtInfo, setOjtAsmtInfo] = useState({
    a1: '2021-I2R-023-000001',
    a2: '2021',
    a3: '2021_스마트공장 구축 및 고도화',
    a4: '(주)도입기업_스마트공장 구축 및 고도화',
    a5: '(주)도입기업',
    a6: '(주)공급기업',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>과제 정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtAsmtInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="사업연도" span={1.5}>
              {ojtAsmtInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtAsmtInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              {ojtAsmtInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtAsmtInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtAsmtInfo?.a6}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SprvisnCorecActpln01;
