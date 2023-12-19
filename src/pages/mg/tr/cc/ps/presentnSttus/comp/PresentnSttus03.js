import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
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
const PresentnSttus03 = ({ arrData }) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>첨부문서
            {/* (현장평가 결과보고서) */}
            <span className="eu-unit">( 현장평가 결과보고서 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
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

export default PresentnSttus03;
