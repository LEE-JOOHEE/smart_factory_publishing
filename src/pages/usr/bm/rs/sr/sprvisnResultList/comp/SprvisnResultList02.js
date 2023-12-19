import React, { useState } from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SprvisnResultList02 = ({ arrSpvsRsltLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '순번', dataIndex: 'a1' },
    { title: '사업연도', dataIndex: 'a2' },
    { title: '사업명', dataIndex: 'a3' },
    { title: '과제번호', dataIndex: 'a4' },
    { title: '과제명', dataIndex: 'a5' },
    { title: '도입기업', dataIndex: 'a6' },
    { title: '공급기업', dataIndex: 'a7' },
    { title: '감리기관', dataIndex: 'a8' },
    { title: '감리구분', dataIndex: 'a9' },
    { title: '판정결과', dataIndex: 'b1' },
    {
      title: '결과서',
      dataIndex: 'b2',
      render: (text, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-fine"
            onClick={() => {
              setOjtKey(record.key);
              setPageType('LASTRESULT');
            }}
          >
            {text}
          </Button>
        );
      },
    },
    {
      title: '시정조치계획서',
      dataIndex: 'b3',
      render: (text, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-fine"
            onClick={() => {
              setOjtKey(record.key);
              setPageType('CORECACTPLN');
            }}
          >
            {text}
          </Button>
        );
      },
    },
    {
      title: '시정조치결과서',
      dataIndex: 'b4',
      render: (text, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-fine"
            onClick={() => {
              setOjtKey(record.key);
              setPageType('CORECRESULT');
            }}
          >
            {text}
          </Button>
        );
      },
    },
    {
      title: '시정조치결과확인서',
      dataIndex: 'b5',
      render: (text, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-fine"
            onClick={() => {
              setOjtKey(record.key);
              setPageType('CORECCONFIRM');
            }}
          >
            {text}
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>{`총 ${arrSpvsRsltLst.length}건`}</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrSpvsRsltLstTable'}
            columns={columns}
            dataSource={arrSpvsRsltLst}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 600,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SprvisnResultList02;
