import React, { useState } from 'react';
import { Col, Descriptions, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

//첨부문서
const columns = [
  {
    title: '항목',
    dataIndex: 'a1',
  },
  {
    title: '첨부파일',
    dataIndex: 'a2',
  },
  {
    title: '등록일',
    dataIndex: 'a3',
  },
  {
    title: '파일크기',
    dataIndex: 'a4',
  },
];
const SprvisnCorecResult01 = ({ ojtDetailInfo, arrAttchFile }) => {
  return (
    <>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>과제정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtDetailInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="사업연도" span={1.5}>
              {ojtDetailInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtDetailInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              {ojtDetailInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtDetailInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtDetailInfo?.a6}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부문서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrAttchFile}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SprvisnCorecResult01;
