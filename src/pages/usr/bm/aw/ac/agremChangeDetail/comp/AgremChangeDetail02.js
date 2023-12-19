import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const AgremChangeDetail02 = ({ arrAgremChgPrgrsStts }) => {
  const columns = [
    { title: '순번', dataIndex: 'a1' },
    { title: '변경종류', dataIndex: 'a2' },
    { title: '처리진행상태', dataIndex: 'a3' },
    { title: '요청자', dataIndex: 'a4' },
    { title: '요청일', dataIndex: 'a5' },
    { title: '변경요청항목', dataIndex: 'a6' },
    { title: '비고', dataIndex: 'a7' },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>협약변경 진행현황</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAgremChgPrgrsSttsTable'}
            columns={columns}
            dataSource={arrAgremChgPrgrsStts}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 300,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeDetail02;
