import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SprvisnCorecCnfirm01 = ({ arrFixActnPlanRptp }) => {
  const columns = [
    {
      title: '항목',
      dataIndex: 'a1',
    },
    {
      title: '첨부파일',
      dataIndex: 'a2',
    },
    {
      title: '등록일',
      dataIndex: 'a3',
    },
    {
      title: '파일크기',
      dataIndex: 'a4',
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>시정조치 계획 및 결과 보고서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrFixActnPlanRptp}
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

export default SprvisnCorecCnfirm01;
