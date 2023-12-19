import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal, Descriptions, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
const { TextArea } = Input;
const dataColumns = [
  {
    title: '순번',
    dataIndex: 'a1',
  },
  {
    title: '구분',
    dataIndex: 'a2',
  },
  {
    title: '파일명',
    dataIndex: 'a3',
  },
  {
    title: '등록일',
    dataIndex: 'a4',
  },
  {
    title: '파일크기',
    dataIndex: 'a5',
  },
];
const PresentnSttus02 = ({ arrFileInq, ojtFileInq }) => {
  console.log('arrFileInq: ', arrFileInq);
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>첨부문서(신청단계)</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={4}>
            <Descriptions.Item label="항목">{ojtFileInq?.a1}</Descriptions.Item>
            <Descriptions.Item label="첨부파일">
              {ojtFileInq?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="등록일">
              {ojtFileInq?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="파일크기">
              {ojtFileInq?.a1}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>제출서류확인</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={2}>
            <Descriptions.Item label="항목">{ojtFileInq?.b1}</Descriptions.Item>
            <Descriptions.Item label="첨부파일">
              {ojtFileInq?.b2}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부문서(현장평가 결과보고서)</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={dataColumns}
            dataSource={arrFileInq}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>제출서류 확인(컨설팅보고서)</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={2}>
            <Descriptions.Item label="항목">{ojtFileInq?.c1}</Descriptions.Item>
            <Descriptions.Item label="첨부파일">
              {ojtFileInq?.c2}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>현장컨설팅 체크리스트(가격제안 적정성)</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="가격제안 적정성" span={4}>
              {ojtFileInq?.d1}
            </Descriptions.Item>
            <Descriptions.Item label="보완내용" span={4}>
              <TextArea value={ojtFileInq?.d2} readOnly />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PresentnSttus02;
