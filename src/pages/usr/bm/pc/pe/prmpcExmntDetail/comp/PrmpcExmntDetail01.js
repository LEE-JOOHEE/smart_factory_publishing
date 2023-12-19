import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const PrmpcExmntDetail01 = ({ arrAtchFileAply }) => {
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
          <TitleComp>첨부문서(신청단계)</TitleComp>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={columns}
            dataSource={arrAtchFileAply}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default PrmpcExmntDetail01;
