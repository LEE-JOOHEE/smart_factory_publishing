import React, { useState } from 'react';
import { Col, Row, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const AgremChangeConfirm01 = ({ ojtAsmtBscInfo }) => {
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={3}>
              {ojtAsmtBscInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={3}>
              {ojtAsmtBscInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              {ojtAsmtBscInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제구분">
              {ojtAsmtBscInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="신청자">
              {ojtAsmtBscInfo?.a5}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeConfirm01;
