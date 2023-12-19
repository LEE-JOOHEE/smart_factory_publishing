import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';

import 'css/Common.css';

const SptResultRegist02 = ({ arrEvlPlan, evalPlanRowClick }) => {
  const arrEvlPlanColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: 50,
      align: 'center',
    },
    {
      title: '사업년도',
      dataIndex: 'b',
      width: 80,
    },
    {
      title: '사업명',
      dataIndex: 'c',
      width: 120,
    },
    {
      title: '수행기관',
      dataIndex: 'd',
      width: 120,
    },
    {
      title: '계획명',
      dataIndex: 'e',
      width: 250,
      render: (_, record) => {
        return (
          <Button type="link" size="small" onClick={evalPlanRowClick}>
            {record?.e}
          </Button>
        );
      },
    },
    {
      title: '평가기간',
      dataIndex: 'f',
      width: 180,
    },
    {
      title: '담당간사',
      dataIndex: 'g',
      width: 80,
    },
    {
      title: '배정과제수',
      dataIndex: 'h',
      width: 60,
    },
    {
      title: '판정과제수',
      dataIndex: 'i',
      width: 60,
    },
  ];

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>평가계획</TitleComp>
        </Col>
        <Col span={9}>총 {arrEvlPlan ? arrEvlPlan.length : 0}건</Col>
        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrEvlPlanColumns}
            dataSource={arrEvlPlan}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SptResultRegist02;
