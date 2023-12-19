import React, { useState } from 'react';
import { Col, Descriptions, Row, Select, Tabs, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const ExcBsnsDetail01 = () => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>임시</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}></Col>
      </Row>
    </>
  );
};

export default ExcBsnsDetail01;
