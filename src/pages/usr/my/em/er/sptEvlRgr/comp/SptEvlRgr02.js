import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SptEvlRgr02 = ({ arrRjctInfo }) => {
  const columns = [
    { title: '반려일시', dataIndex: 'a' },
    { title: '반려사유', dataIndex: 'b' },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>반려정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrRjctInfo'}
            columns={columns}
            dataSource={arrRjctInfo}
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

export default SptEvlRgr02;
