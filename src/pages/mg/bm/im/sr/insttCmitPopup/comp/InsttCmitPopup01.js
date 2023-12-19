import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const InsttCmitPopup01 = () => {
  return (
      <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>InsttCmitPopup01</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
        {/* 우측 버튼 */}
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
        {/* 내용 */}
        </Col>
      </Row>
     </>
  );
};

export default InsttCmitPopup01;
