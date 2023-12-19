import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyStatsSlutn01 = ({ arrMtchgStatsSlutn }) => {
  const columns = [
    { title: '업종', dataIndex: 'a' },
    { title: 'MES(POP)', dataIndex: 'b' },
    { title: 'ERP', dataIndex: 'c' },
    { title: 'PLM', dataIndex: 'd' },
    { title: 'SCM', dataIndex: 'e' },
    { title: '기타', dataIndex: 'f' },
    { title: 'FEMS', dataIndex: 'g' },
    { title: '자동화장비', dataIndex: 'h' },
    { title: '5G', dataIndex: 'i' },
    { title: '미입력', dataIndex: 'j' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrMtchgStatsSlutn'}
            columns={columns}
            dataSource={arrMtchgStatsSlutn}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 700 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SuplyStatsSlutn01;
