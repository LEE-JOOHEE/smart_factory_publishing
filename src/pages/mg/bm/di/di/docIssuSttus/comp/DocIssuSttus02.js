import React, { useState } from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const DocIssuSttus02 = ({ arrDocIssuStts, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a' },
    { title: '사업분류', dataIndex: 'b' },
    { title: '세부공고명', dataIndex: 'c' },
    { title: '도입기업', dataIndex: 'd' },
    { title: '공급기업', dataIndex: 'e' },
    { title: '발급신청기업', dataIndex: 'f' },
    { title: '발급신청자', dataIndex: 'g' },
    { title: '문서종류', dataIndex: 'h' },
    { title: '발급상태', dataIndex: 'i' },
    { title: '파일명', dataIndex: 'j' },
    { title: '스탬프시간', dataIndex: 'k' },
    {
      title: '순번',
      dataIndex: 'l',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link"
            size="small"
            type="link"
            onClick={() => {
              setPageType('DETAIL');
              setOjtKey(record.key);
            }}
          >
            {record?.l}
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={2}>
          <TitleComp>문서발급목록</TitleComp>
        </Col>
        <Col span={22}>{`총 ${arrDocIssuStts.length}건`}</Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrDocIssuStts'}
            columns={columns}
            dataSource={arrDocIssuStts}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 750 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default DocIssuSttus02;
