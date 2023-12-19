import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const InsttAgremExmnt02 = ({ arrInsttAgremExmnt, setOjtKey, setPageType }) => {
  useEffect(() => {
    console.log('arrInsttAgremExmnt: ', arrInsttAgremExmnt);
  }, [arrInsttAgremExmnt]);

  const prcsClick = (key) => {
    setOjtKey(key);
    setPageType('DETAIL');
  };

  const columns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      key: 1,
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'b',
      key: 2,
      align: 'center',
    },
    {
      title: '공고명',
      dataIndex: 'c',
      key: 3,
      align: 'center',
    },
    {
      title: '신청기관',
      dataIndex: 'd',
      key: 4,
      align: 'center',
    },
    {
      title: '진행상태',
      key: 5,
      align: 'center',
      dataIndex: 'e',
      render: (text, record, index) => (
        <Button
          type="default"
          className="eu-btn-table-default"
          onClick={() => prcsClick(index)}
        >
          {text}
        </Button>
      ),
    },
  ];

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>{`총 ${arrInsttAgremExmnt.length}건`}</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'insttAgremExmnt'}
            columns={columns}
            dataSource={arrInsttAgremExmnt}
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

export default InsttAgremExmnt02;
