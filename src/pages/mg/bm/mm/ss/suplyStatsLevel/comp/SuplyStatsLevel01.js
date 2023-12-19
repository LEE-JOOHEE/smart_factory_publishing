import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyStatsLevel01 = ({ arrMtchgStatsLevel }) => {
  const columns = [
    { title: '업종', dataIndex: 'a' },
    { title: '기초', dataIndex: 'b' },
    { title: '중간1', dataIndex: 'c' },
    { title: '중간2', dataIndex: 'd' },
    { title: '고도화', dataIndex: 'e' },
    { title: '미입력', dataIndex: 'f' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrMtchgStatsLevel'}
            columns={columns}
            dataSource={arrMtchgStatsLevel}
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

export default SuplyStatsLevel01;
