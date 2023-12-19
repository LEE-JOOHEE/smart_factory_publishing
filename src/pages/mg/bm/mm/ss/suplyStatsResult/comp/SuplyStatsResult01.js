import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyStatsResult01 = ({ arrMtchgStatsResult }) => {
  const columns = [
    { title: '업종', dataIndex: 'a' },
    { title: '우수', dataIndex: 'b' },
    { title: '보통', dataIndex: 'c' },
    { title: '미흡', dataIndex: 'd' },
    { title: '미입력', dataIndex: 'e' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrMtchgStatsResult'}
            columns={columns}
            dataSource={arrMtchgStatsResult}
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

export default SuplyStatsResult01;
