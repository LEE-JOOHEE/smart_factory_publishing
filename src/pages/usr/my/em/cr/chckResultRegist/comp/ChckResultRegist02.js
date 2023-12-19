import React, { useState } from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const ChckResultRegist02 = ({ arrChckLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업년도', dataIndex: 'a' },
    { title: '점검구분', dataIndex: 'b' },
    { title: '과제명', dataIndex: 'c' },
    { title: '도입기업', dataIndex: 'd' },
    { title: '점검기간', dataIndex: 'e' },
    {
      title: '제출현황',
      dataIndex: 'f',
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              setPageType(
                record.b === '중간점검'
                  ? 'middle'
                  : record.b === '완료점검'
                  ? 'compt'
                  : record.b === '수시점검'
                  ? 'anytm'
                  : 'yryc'
              );
              setOjtKey(record.key);
            }}
          >
            {record?.f}
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>점검목록</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right', color: 'red' }}>
          점검기관은 수행기관에서 계획한 일정입니다. 정확한 일정은 수행기관 및
          도입기업과 협의하여 점검 진행하시기 바랍니다.
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrChckLst'}
            columns={columns}
            dataSource={arrChckLst}
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

export default ChckResultRegist02;
