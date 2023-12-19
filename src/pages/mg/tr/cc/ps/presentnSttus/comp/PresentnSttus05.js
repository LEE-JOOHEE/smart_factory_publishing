import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
const dataColumns = [
  {
    title: '구분',
    dataIndex: 'a1',
    render: (_, record, index) => {
      console.log(record, index);
      return <>{record.a1}</>;
    },
  },
  {
    title: '금액(단위 : 원)',
    dataIndex: 'a2',
    children: [
      {
        title: '도입기업부담금',
        dataIndex: 'a21',
        children: [
          {
            title: '현금(중도금 및 잔금)',
            dataIndex: 'a211',
          },
          {
            title: '도입기업 사업관리 인력 인건비',
            dataIndex: 'a212',
          },
          {
            title: '클라우드 서비스 이용료',
            dataIndex: 'a213',
          },
          {
            title: '계',
            dataIndex: 'a214',
          },
        ],
      },
      {
        title: '정부지원금',
        dataIndex: 'a21',
      },
      {
        title: '합계',
        dataIndex: 'a23',
      },
    ],
  },
];
const PresentnSttus05 = ({ arrData }) => {
  return (
    <>
      <Row className="eu-row-comp-title mb-12">
        <Col span={6} className="title-0">
          <TitleComp>원가계산기관 산출 사업비 내역</TitleComp>
        </Col>
        <Col span={18} className="mt-auto">
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">
              ※ 신청 사업비 금액 : 1,000원 미만 절삭
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            className="aplyPjtcoDsctnTable"
            columns={dataColumns}
            dataSource={arrData}
            size="small"
            bordered
          />
        </Col>
      </Row>
    </>
  );
};

export default PresentnSttus05;
