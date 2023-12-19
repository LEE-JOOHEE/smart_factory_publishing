import React, { useState } from 'react';
import { Col, Descriptions, Row, Select, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

//FP(기능점수)산정자료, 결과보고서 컬럼
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
const smryColumns = [
  {
    title: '감리영역',
    dataIndex: 'a1',
  },
  {
    title: '평가',
    dataIndex: 'a2',
  },
  {
    title: '등록일',
    dataIndex: 'a3',
  },
];
const SprvisnLastResult01 = ({ ojtDetailInfo, arrAttFile, arrAttFpFile }) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>최종감리 결과서 반려 사유</TitleComp>
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
          <TitleComp>과제정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtDetailInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업연도" span={1.5}>
              {ojtDetailInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtDetailInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              {ojtDetailInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtDetailInfo?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtDetailInfo?.a7}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>FP(기능점수)산정자료</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrAttFpFile}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>결과보고서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrAttFile}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>감리수행 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="감리구분" span={1.5}>
              {ojtDetailInfo?.a10}
            </Descriptions.Item>
            <Descriptions.Item label="감리기관" span={1.5}>
              {ojtDetailInfo?.a11}
            </Descriptions.Item>
            <Descriptions.Item label="참여감리원" span={1.5}>
              {ojtDetailInfo?.a12}
            </Descriptions.Item>
            <Descriptions.Item label="감리수행일자" span={1.5}>
              {ojtDetailInfo?.a13}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>감리평가요약</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item
              label="감리평가"
              span={3}
              contentStyle={{ padding: '0px', margin: '0px' }}
            >
              <Table
                columns={smryColumns}
                dataSource={[
                  {
                    a1: '사업관리',
                    a2: '보완',
                  },
                  {
                    a1: '시스템구축',
                    a2: '보완',
                  },
                  {
                    a1: '시스템운영',
                    a2: '보완',
                  },
                ]}
                size="small"
                bordered
                pagination={false}
              />
            </Descriptions.Item>
            <Descriptions.Item label="시정조치필요여부" span={3}>
              <Select
                options={[
                  {
                    value: '필요',
                    label: '감리조치필요',
                  },
                  {
                    value: '불필요',
                    label: '감리조치불필요',
                  },
                ]}
                defaultValue={'불필요'}
                value={ojtDetailInfo?.a14}
              />
            </Descriptions.Item>
            <Descriptions.Item label="종합의견" span={3}>
              {ojtDetailInfo?.a15}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SprvisnLastResult01;
