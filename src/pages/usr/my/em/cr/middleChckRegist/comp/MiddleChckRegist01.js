import React, { useState } from 'react';
import { Col, Row, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const MiddleChckRegist01 = ({ title = '중간보고서', arrAtchFile }) => {
  const columns = [
    { title: '향목', dataIndex: 'a' },
    { title: '필수여부', dataIndex: 'b' },
    { title: '첨부파일', dataIndex: 'c' },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>{`${title} 첨부문서`}</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAtchFile'}
            columns={columns}
            dataSource={arrAtchFile}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default MiddleChckRegist01;
