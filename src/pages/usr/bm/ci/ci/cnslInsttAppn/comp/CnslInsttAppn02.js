import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const CnslInsttAppn02 = ({ arrAsmtLst }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a1' },
    { title: '수행사업', dataIndex: 'a2' },
    { title: '과제명', dataIndex: 'a3' },
    { title: '과제신청자', dataIndex: 'a4' },
    { title: '도입기업', dataIndex: 'a5' },
    { title: '컨설팅기관', dataIndex: 'a6' },
    { title: '상태', dataIndex: 'a7' },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>과제 목록</TitleComp>
          {`총 ${arrAsmtLst.length}건`}
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'CnslInsttAppn02'}
            columns={columns}
            dataSource={arrAsmtLst}
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

export default CnslInsttAppn02;
