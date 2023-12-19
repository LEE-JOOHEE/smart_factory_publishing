import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
const dataColumns = [
  {
    title: '순번',
    dataIndex: 'a1',
  },
  {
    title: '등록일',
    dataIndex: 'a2',
  },
  {
    title: '파일다운로드',
    dataIndex: 'a3',
  },
  {
    title: '파일크기',
    dataIndex: 'a4',
  },
  {
    title: '파일 삭제',
    dataIndex: 'a5',
  },
];
const PresentnSttus06 = ({ arrData }) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>첨부문서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={dataColumns}
            dataSource={arrData}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default PresentnSttus06;
