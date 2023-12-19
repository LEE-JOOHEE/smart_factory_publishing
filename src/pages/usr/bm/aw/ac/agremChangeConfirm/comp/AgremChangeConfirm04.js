import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const AgremChangeConfirm04 = ({ arrAtchFile }) => {
  const uploadClick = (key) => {
    Modal.info({ title: `key: ${key}` });
  };
  const columns = [
    { title: '항목', dataIndex: 'a1' },
    { title: '허용파일', dataIndex: 'a2' },
    {
      title: '첨부파일',
      dataIndex: 'a3',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-default"
            onClick={() => uploadClick(record.key)}
          >
            업로드
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>첨부문서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAtchFileTable'}
            columns={columns}
            dataSource={arrAtchFile}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 200,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeConfirm04;
