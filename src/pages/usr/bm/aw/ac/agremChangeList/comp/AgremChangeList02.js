import React, { useState } from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const AgremChangeList02 = ({ arrAgremTrgtChgAsmt, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a1' },
    { title: '과제번호', dataIndex: 'a2' },
    { title: '사업명', dataIndex: 'a3' },
    {
      title: '과제명',
      dataIndex: 'a4',
      width: '20%',
      render: (text, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-fine"
            onClick={() => {
              setOjtKey(record.key);
              setPageType('DETAIL');
            }}
          >
            {text}
          </Button>
        );
      },
    },
    {
      title: '자체변경건수',
      children: [
        {
          title: '작성중',
          dataIndex: 'a5',
        },
        { title: '처리', dataIndex: 'a6' },
      ],
    },
    {
      title: '승인신청건수',
      children: [
        {
          title: '작성중',
          dataIndex: 'a7',
        },
        {
          title: '미처리',
          dataIndex: 'a8',
        },
        {
          title: '처리',
          dataIndex: 'a9',
        },
      ],
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>협약변경 대상과제</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAgremTrgtChgAsmtTable'}
            columns={columns}
            dataSource={arrAgremTrgtChgAsmt}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 700,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeList02;
