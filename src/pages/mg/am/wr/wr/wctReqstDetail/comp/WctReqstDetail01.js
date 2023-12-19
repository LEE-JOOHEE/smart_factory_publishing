import React, { useState } from 'react';
import { Col, Descriptions, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const WctReqstDetail01 = ({ ojtDetailInfo }) => {
  return (
    <>
      <Row className="eu-row-comp-title ">
        <Col span={12}>
          <TitleComp>반려 사유</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="반려사유" span={3}>
              {ojtDetailInfo?.a1}
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
              {ojtDetailInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="과제구분" span={1.5}>
              {ojtDetailInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtDetailInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="신청자" span={1.5}>
              {ojtDetailInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              {ojtDetailInfo?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtDetailInfo?.a7}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtDetailInfo?.a8}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default WctReqstDetail01;
