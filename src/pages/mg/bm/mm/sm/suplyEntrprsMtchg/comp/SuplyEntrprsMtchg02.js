import React, { useState } from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyEntrprsMtchg02 = ({ arrMtchgStts, openClick }) => {
  const columns = [
    {
      title: '매칭일시',
      dataIndex: 'a',
      render: (_, record) => {
        return (
          <Button type="link" size="small" onClick={openClick}>
            {record?.a}
          </Button>
        );
      },
    },
    {
      title: '수요기업명',
      dataIndex: 'b',
    },
    {
      title: '공급기업 소재지',
      dataIndex: 'c',
    },
    {
      title: '구축시스템',
      dataIndex: 'd',
    },
    {
      title: '수준(Level)',
      dataIndex: 'e',
    },
    {
      title: '업종',
      dataIndex: 'f',
    },
    {
      title: '사업분류',
      dataIndex: 'g',
    },
    {
      title: '세부공고명',
      dataIndex: 'h',
    },
    {
      title: '최종평가',
      dataIndex: 'i',
    },
    {
      title: '종업원수',
      dataIndex: 'j',
    },
    {
      title: '매출금액',
      dataIndex: 'k',
    },
    {
      title: '순위기준',
      dataIndex: 'l',
    },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>{`총 ${arrMtchgStts.length}건`}</Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrMtchgStts'}
            columns={columns}
            dataSource={arrMtchgStts}
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

export default SuplyEntrprsMtchg02;
