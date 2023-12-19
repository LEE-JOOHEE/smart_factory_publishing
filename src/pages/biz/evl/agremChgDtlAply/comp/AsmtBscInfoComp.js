import React, { useState } from 'react';
import { Descriptions, Input, Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
const AsmtBscInfoComp = () => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
        <Col span={12}></Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="과제번호" span={3}>
              2020-12S-000-000111
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={3}>
              2020년 스마트 공장 고도화
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              유클리드소프트_2022년 스마트화 역량강화사업 지원기업(코디지원)
            </Descriptions.Item>
            <Descriptions.Item label="과제구분">[Empty]</Descriptions.Item>
            <Descriptions.Item label="신청자" span={2}>
              홍길동
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AsmtBscInfoComp;
