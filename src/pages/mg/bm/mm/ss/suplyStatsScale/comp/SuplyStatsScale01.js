import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyStatsScale01 = ({ arrMtchgStatsScale }) => {
  const columns = [
    { title: '업종', dataIndex: 'a' },
    { title: '10인 미만', dataIndex: 'b' },
    { title: '10~30인', dataIndex: 'c' },
    { title: '30~50인', dataIndex: 'd' },
    { title: '50~100인', dataIndex: 'e' },
    { title: '100~200인', dataIndex: 'f' },
    { title: '200인 이상', dataIndex: 'g' },
    { title: '미입력', dataIndex: 'h' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrMtchgStatsScale'}
            columns={columns}
            dataSource={arrMtchgStatsScale}
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

export default SuplyStatsScale01;
