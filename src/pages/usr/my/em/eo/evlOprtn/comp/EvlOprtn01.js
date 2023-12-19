import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const EvlOprtn01 = ({ arrEvlLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '평가구분', dataIndex: 'a' },
    { title: '사업년도', dataIndex: 'b' },
    { title: '평가위원회', dataIndex: 'c' },
    { title: '분과', dataIndex: 'd' },
    { title: '평가일자', dataIndex: 'e' },
    { title: '평가위원장여부', dataIndex: 'f' },
    { title: '평가대상과제수', dataIndex: 'g' },
    {
      title: '평가상태',
      dataIndex: 'h',
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              setPageType(record.f === 'Y' ? 'charmnEvl' : 'mfcmmRegist');
              setOjtKey(record.key);
            }}
          >
            {record?.h}
          </Button>
        );
      },
    },
  ];
  const refreshClick = () => {
    Modal.info({ title: 'refreshClick' });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>평가목록</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-default"
            onClick={refreshClick}
          >
            새로고침
          </Button>
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
            scroll={{ y: 900 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default EvlOprtn01;
