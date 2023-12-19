import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
const dataColumns = [
  {
    title: '항목',
    dataIndex: 'a1',
  },
  {
    title: '첨부파일',
    dataIndex: 'a2',
  },
];
const PresentnSttus04 = ({ arrData }) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>제출서류 확인</TitleComp>
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

export default PresentnSttus04;
