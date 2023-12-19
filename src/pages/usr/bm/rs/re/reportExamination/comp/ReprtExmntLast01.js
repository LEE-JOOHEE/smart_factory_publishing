import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Select,
  Input,
  Descriptions,
  Checkbox,
  Modal,
  Table,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const ReprtExmntLast01 = ({ ojtReprtLastInfo }) => {
  const columns = [
    {
      title: '항목',
      dataIndex: 'a1',
    },
    {
      title: '양식',
      dataIndex: 'a2',
    },
    {
      title: '허용파일',
      dataIndex: 'a3',
    },
    {
      title: '필수여부',
      dataIndex: 'a4',
    },
    {
      title: '첨부파일',
      dataIndex: 'a5',
    },
  ];

  const arrAttchFile = [
    {
      a1: '운영현황보고서',
      a2: '',
      a3: '*.hwp, *.pdf, *.png, *.tif',
      a4: 'O',
      a5: '운영현황보고서.pdf',
    },
    {
      a1: '운영현황보고서',
      a2: '',
      a3: '*.hwp, *.pdf, *.png, *.tif',
      a4: 'O',
      a5: '운영현황보고서.pdf',
    },
    {
      a1: '운영현황보고서',
      a2: '',
      a3: '*.hwp, *.pdf, *.png, *.tif',
      a4: 'O',
      a5: '운영현황보고서.pdf',
    },
    {
      a1: '운영현황보고서',
      a2: '',
      a3: '*.hwp, *.pdf, *.png, *.tif',
      a4: 'O',
      a5: '운영현황보고서.pdf',
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title ">
        <Col span={12}>
          <TitleComp>검토 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="검토 현황" span={3}>
              {ojtReprtLastInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="최근 반려 사유" span={3}>
              {ojtReprtLastInfo?.a2}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtReprtLastInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제구분" span={1.5}>
              {ojtReprtLastInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtReprtLastInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="신청자" span={1.5}>
              {ojtReprtLastInfo?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtReprtLastInfo?.a7}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtReprtLastInfo?.a8}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              {ojtReprtLastInfo?.a9}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부파일</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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

export default ReprtExmntLast01;
