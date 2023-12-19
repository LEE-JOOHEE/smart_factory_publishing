import React, { useState } from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const EvlResultRegist02 = ({ arrEvlLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업년도', dataIndex: 'a' },
    { title: '평가구분', dataIndex: 'b' },
    { title: '과제명', dataIndex: 'c' },
    { title: '도입기업', dataIndex: 'd' },
    { title: '평가희망일자', dataIndex: 'e' },
    { title: '위원구분', dataIndex: 'f' },
    {
      title: '제출현황',
      dataIndex: 'g',
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              setPageType(
                record.g === '미제출'
                  ? 'sptEvlRgr'
                  : record.g === '제출'
                  ? 'sptEvlFather'
                  : 'sptCnfirmRegist'
              );
              setOjtKey(record.key);
            }}
          >
            {record?.g}
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>평가목록</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrEvlLst'}
            columns={columns}
            dataSource={arrEvlLst}
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

export default EvlResultRegist02;
