import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const TaskReqstAtch01 = ({ arrAtchFile }) => {
  const columns = [
    { title: '항목', dataIndex: 'a' },
    {
      title: '양식',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-fine"
            onClick={() => downloadClick(record.key)}
          >
            다운로드
          </Button>
        );
      },
    },
    { title: '허용파일', dataIndex: 'b' },
    { title: '필수여부', dataIndex: 'c' },
    { title: '첨부파일', dataIndex: 'd' },
  ];
  const downloadClick = (key) => {
    Modal.info({ title: `다운로드: ${JSON.stringify(key)}` });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>첨부문서</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAtchFile'}
            columns={columns}
            dataSource={arrAtchFile}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 300,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstAtch01;
