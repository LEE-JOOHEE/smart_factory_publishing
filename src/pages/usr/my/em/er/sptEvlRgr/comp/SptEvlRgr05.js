import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SptEvlRgr05 = ({ title = '첨부문서', arrAtchFile }) => {
  const insertClick = (key) => {
    Modal.info({ title: `insert ${key}` });
  };
  const deleteClick = (key) => {
    Modal.info({ title: `delete ${key}` });
  };
  const columns = [
    { title: '향목', dataIndex: 'a' },
    { title: '필수여부', dataIndex: 'b' },
    { title: '허용파일', dataIndex: 'c' },
    {
      title: '첨부파일',
      dataIndex: 'd',
      render: (text, record) => {
        return (
          <>
            {text}
            <span style={{ float: 'right' }}>
              <Button
                size="small"
                className="eu-usr-btn-table-warning"
                onClick={() => insertClick(record.key)}
              >
                추가
              </Button>
              <Button
                size="small"
                className="eu-usr-btn-table-error"
                onClick={() => deleteClick(record.key)}
              >
                삭제
              </Button>
            </span>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>{title}</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAtchFile'}
            columns={columns}
            dataSource={arrAtchFile}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SptEvlRgr05;
