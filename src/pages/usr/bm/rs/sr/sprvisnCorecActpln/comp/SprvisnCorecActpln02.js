import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SprvisnCorecActpln02 = ({ arrSpvsRslt }) => {
  const columns = [
    { title: '항목', dataIndex: 'a1' },
    { title: '첨부파일', dataIndex: 'a2' },
    { title: '등록일', dataIndex: 'a3' },
    { title: '파일크기', dataIndex: 'a4' },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>감리결과</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrSpvsRsltTable'}
            columns={columns}
            dataSource={arrSpvsRslt}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SprvisnCorecActpln02;
