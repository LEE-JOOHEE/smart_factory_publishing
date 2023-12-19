import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const DocIssuInqire02 = ({ arrDocIssuDtlDsctn }) => {
  const columns = [
    { title: '순번', dataIndex: 'a' },
    { title: '사업연도', dataIndex: 'b' },
    { title: '생성일자', dataIndex: 'c' },
    { title: '사업분류', dataIndex: 'd' },
    { title: '사업명', dataIndex: 'e' },
    { title: '도입기업', dataIndex: 'f' },
    { title: '공급기업', dataIndex: 'g' },
    { title: '발급신청기업', dataIndex: 'h' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={2}>
          <TitleComp>상세내역</TitleComp>
        </Col>
        <Col span={22}>{`총 ${arrDocIssuDtlDsctn.length}건`}</Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Col span={24}>
            <Table
              key={'arrDocIssuDtlDsctn'}
              columns={columns}
              dataSource={arrDocIssuDtlDsctn}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 850 }}
            />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default DocIssuInqire02;
