import React, { useState } from 'react';
import { Col, Descriptions, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const ReprtPresentnDetail01 = ({ ojtDetailInfo }) => {
  return (
    <>
      <Row className="eu-row-comp-title ">
        <Col span={12}>
          <TitleComp>점검결과</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="점검결과" span={3}>
              {ojtDetailInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="종합의견" span={3}>
              {ojtDetailInfo?.a2}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>검토 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="검토 현황" span={3}>
              {ojtDetailInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="최근 반려 사유" span={3}>
              {ojtDetailInfo?.a4}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtDetailInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="과제구분" span={1.5}>
              {ojtDetailInfo?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtDetailInfo?.a7}
            </Descriptions.Item>
            <Descriptions.Item label="신청자" span={1.5}>
              {ojtDetailInfo?.a8}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtDetailInfo?.a9}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtDetailInfo?.a10}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              {ojtDetailInfo?.a11}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default ReprtPresentnDetail01;
