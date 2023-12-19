import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyStatsArea02 = ({ arrMtchgStatsArea }) => {
  const columns = [
    { title: '업종', dataIndex: 'a' },
    { title: '서울', dataIndex: 'b' },
    { title: '부산', dataIndex: 'c' },
    { title: '인천', dataIndex: 'd' },
    { title: '울산', dataIndex: 'e' },
    { title: '경기', dataIndex: 'f' },
    { title: '강원', dataIndex: 'g' },
    { title: '충북', dataIndex: 'h' },
    { title: '전북', dataIndex: 'i' },
    { title: '경남', dataIndex: 'j' },
    { title: '제주', dataIndex: 'k' },
    { title: '대전', dataIndex: 'l' },
    { title: '대구', dataIndex: 'm' },
    { title: '광주', dataIndex: 'n' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrMtchgStatsArea'}
            columns={columns}
            dataSource={arrMtchgStatsArea}
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

export default SuplyStatsArea02;
