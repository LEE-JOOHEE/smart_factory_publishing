import React, { useState } from 'react';
import { Col, Row, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const AgremChangeDetail01 = ({ ojtAgremChgDtlInq }) => {
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>협약변경 상세조회</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={3}>
              {ojtAgremChgDtlInq?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={3}>
              {ojtAgremChgDtlInq?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={2}>
              {ojtAgremChgDtlInq?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="신청자">
              {ojtAgremChgDtlInq?.a4}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeDetail01;
