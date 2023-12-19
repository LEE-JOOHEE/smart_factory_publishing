import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import CmBaseEditor from 'components/editor/CmBaseEditor';

const PblancRegist02 = ({ pbancCpy }) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>공고 문안</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <CmBaseEditor />
        </Col>
      </Row>
    </>
  );
};

export default PblancRegist02;
