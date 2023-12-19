import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyStatsSelng01 = ({ arrMtchgStatsSleng }) => {
  const columns = [
    { title: '업종', dataIndex: 'a' },
    { title: '10억 미만', dataIndex: 'b' },
    { title: '10~50억', dataIndex: 'c' },
    { title: '50~100억', dataIndex: 'd' },
    { title: '100~300억', dataIndex: 'e' },
    { title: '300~500억', dataIndex: 'f' },
    { title: '500~1000억', dataIndex: 'g' },
    { title: '1000억 이상', dataIndex: 'h' },
    { title: '미입력', dataIndex: 'i' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrMtchgStatsSleng'}
            columns={columns}
            dataSource={arrMtchgStatsSleng}
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

export default SuplyStatsSelng01;
