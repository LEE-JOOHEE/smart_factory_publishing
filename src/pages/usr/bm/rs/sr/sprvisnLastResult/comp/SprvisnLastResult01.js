import React, { useState } from 'react';
import { Col, Descriptions, Row, Select, Table, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { arrChange, ojtChange } from 'components/common/Common';

const { TextArea } = Input;

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

const SprvisnLastResult01 = ({
  ojtDetailInfo,
  arrAttFile,
  arrAttFpFile,
  arrSpvsEvlSmry,
  setArrSpvvsEvlSmry,
  setOjtDetailInfo,
}) => {
  const smryColumns = [
    {
      title: '감리영역',
      dataIndex: 'a1',
    },
    {
      title: '평가',
      dataIndex: 'a2',
      render: (_, record, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a2', index, setArrSpvvsEvlSmry);
            }}
            options={[
              {
                value: '보완',
                label: '보완',
              },
              {
                value: '적정',
                label: '적정',
              },
              {
                value: '부정적',
                label: '부정적',
              },
            ]}
            value={arrSpvsEvlSmry[index]?.a2}
          />
        );
      },
    },
    {
      title: '비고',
      dataIndex: 'a3',
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>최종감리 결과서 반려 사유</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="반려사유" span={3}>
              {ojtDetailInfo?.a1}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>과제정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>FP(기능점수)산정자료</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>결과보고서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>감리수행 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>감리평가요약</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item
              label="감리평가"
              span={3}
              contentStyle={{ padding: '0px', margin: '0px' }}
            >
              <Table
                columns={smryColumns}
                dataSource={arrSpvsEvlSmry}
                size="small"
                bordered
                pagination={false}
              />
            </Descriptions.Item>
            <Descriptions.Item label="판정결과" span={3}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a14', setOjtDetailInfo);
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtDetailInfo?.a14}
              />
            </Descriptions.Item>
            <Descriptions.Item label="시정조치필요여부" span={3}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a15', setOjtDetailInfo);
                }}
                options={[
                  {
                    value: '감리조치필요',
                    label: '감리조치필요',
                  },
                  {
                    value: '감리조치불필요',
                    label: '감리조치불필요',
                  },
                ]}
                value={ojtDetailInfo?.a15}
              />
            </Descriptions.Item>
            <Descriptions.Item label="종합의견" span={3}>
              <TextArea
                value={ojtDetailInfo?.a16}
                onChange={(e) => {
                  ojtChange(e.target.value, 'a16', setOjtDetailInfo);
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SprvisnLastResult01;
