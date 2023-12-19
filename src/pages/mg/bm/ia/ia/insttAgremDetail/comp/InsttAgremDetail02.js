import React, { useState } from 'react';
import { Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const InsttAgremDetail02 = () => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>전자협약서 서명</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}></Col>
      </Row>
    </>
  );
};

export default InsttAgremDetail02;
