import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';

import 'css/Common.css';

const TechResultRegist01 = ({ arrScmitCmpstn }) => {
  const arrScmitCmpstnColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '6%',
      align: 'center',
    },
    {
      title: '사업',
      dataIndex: 'b',
      width: '10%',
    },
    {
      title: '수행기관',
      dataIndex: 'c',
      width: '10%',
    },
    {
      title: '위원회명',
      dataIndex: 'd',
      width: '8%',
    },
    {
      title: '분과명',
      dataIndex: 'e',
      width: '8%',
    },
    {
      title: '평가장소',
      dataIndex: 'f',
      width: '16%',
    },
    {
      title: '분과평가일자',
      dataIndex: 'g',
      width: '9%',
      align: 'center',
    },
    {
      title: '과제수',
      dataIndex: 'h',
      width: '5%',
      align: 'center',
    },
    {
      title: '평가위원수',
      dataIndex: 'i',
      width: '7%',
      align: 'center',
    },
    {
      title: '서명완료수',
      dataIndex: 'j',
      width: '7%',
      align: 'center',
    },
    {
      title: '평가상태',
      dataIndex: 'k',
      width: '6%',
      align: 'center',
    },
    {
      title: '평가확정여부',
      dataIndex: 'l',
      width: '8%',
      align: 'center',
    },
  ];

  const evlCfmtnClick = () => {
    Modal.info({
      title: '평가확정 클릭',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>평가계획</TitleComp>
        </Col>
        <Col span={12} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrScmitCmpstn ? arrScmitCmpstn.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={evlCfmtnClick}
          >
            평가확정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrScmitCmpstnColumns}
            dataSource={arrScmitCmpstn}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200, x: 1400 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default TechResultRegist01;
