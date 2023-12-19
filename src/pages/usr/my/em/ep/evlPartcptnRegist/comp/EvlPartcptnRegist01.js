import React, { useState } from 'react';
import { Col, Row, Button, Space, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const EvlPartcptnRegist01 = ({ arrEvlPtcptYnReg }) => {
  const columns = [
    { title: '번호', dataIndex: 'a' },
    { title: '평가구분', dataIndex: 'b' },
    { title: '평가장소', dataIndex: 'c' },
    { title: '평가일자', dataIndex: 'd' },
    { title: '응답기한', dataIndex: 'e' },
    {
      title: '참석여부',
      dataIndex: 'f',
      render: (_, record) => {
        return (
          <>
            {record.f === '' ? (
              <Space>
                <Button
                  size="small"
                  className="eu-usr-btn-table-default"
                  onClick={ptcptClick}
                >
                  참석
                </Button>
                <Button
                  size="small"
                  className="eu-usr-btn-table-default"
                  onClick={unPtcptClick}
                >
                  불참석
                </Button>
              </Space>
            ) : (
              record.f
            )}
          </>
        );
      },
    },
  ];

  const ptcptClick = () => {
    Modal.info({ title: '참석' });
  };
  const unPtcptClick = () => {
    Modal.info({ title: '불참석' });
  };
  const refreshClick = () => {
    Modal.info({ title: '새로고침' });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>평가참여 여부 등록 목록</TitleComp>
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
            key={'arrEvlDtLst'}
            columns={columns}
            dataSource={arrEvlPtcptYnReg}
            size="small"
            bordered
            pagination={false}
            scroll={{
              y: 900,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default EvlPartcptnRegist01;
