import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
const dataColumns = [
  {
    title: '최초 의뢰금액 내역',
    dataIndex: 'a1',
  },
  {
    title: '최초 의뢰 할인 금액',
    dataIndex: 'a2',
  },
  {
    title: '최종 승인 금액',
    dataIndex: 'a3',
  },
  {
    title: '최종 승인 할인 금액',
    dataIndex: 'a4',
  },
];
const PresentnSttus08 = ({ arrData }) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>원가 의뢰 및 할인금액 내역</TitleComp>
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

export default PresentnSttus08;
