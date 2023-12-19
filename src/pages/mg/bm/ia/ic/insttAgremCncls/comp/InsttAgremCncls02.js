import React, { useState } from 'react';
import { Col, Row, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const InsttAgremCncls02 = ({ arrInsttAgremCncls, setOjtKey, setPageType }) => {
  const columns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      align: 'center',
    },
    {
      title: '지역',
      dataIndex: 'b',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'c',
      align: 'center',
    },
    {
      title: '공고명',
      dataIndex: 'd',
      align: 'center',
      render: (text, record, index) => (
        <Button
          type="default"
          className="eu-btn-table-default"
          onClick={() => {
            setOjtKey(record.key);
            setPageType('DETAIL');
          }}
        >
          {text}
        </Button>
      ),
    },
    {
      title: '협약 진행상태',
      dataIndex: 'e',
      align: 'center',
    },
    {
      title: '협약 완료일자',
      dataIndex: 'f',
      align: 'center',
    },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>{`총 ${arrInsttAgremCncls.length}건`}</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrInsttAgremCncls}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 800,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>
    </>
  );
};

export default InsttAgremCncls02;
