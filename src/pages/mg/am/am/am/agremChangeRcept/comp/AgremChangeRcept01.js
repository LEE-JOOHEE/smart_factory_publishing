import React, { useState } from 'react';
import { Button, Col, Input, Modal, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { arrChange } from 'components/common/Common';

// 사업비 변경
const AgremChangeRcept01 = ({
  saveClick = () => Modal.info({ title: '변경 저장' }),
}) => {
  const commonPjtcoColums = [
    {
      title: '구분',
      dataIndex: 'a',
      render: (_, record, index) => {
        return <>지급액</>;
      },
    },
    {
      title: '도입기업',
      dataIndex: 'b',
      children: [
        {
          title: '중도금(현금)',
          dataIndex: 'a1',
          render: (_, record, index) => {
            console.log(record, index);
            return (
              <>
                <Input
                  onChange={(e) => {
                    if (record.type === 'after')
                      arrChange(e.target.value, 'a1', index, setArrAfterPjtco);
                    else if (record.type === 'before')
                      arrChange(e.target.value, 'a1', index, setArrBeforePjtco);
                  }}
                  defaultValue={record?.a1}
                />
              </>
            );
          },
        },
        {
          title: '잔금(현금)',
          dataIndex: 'a2',
          render: (_, record, index) => {
            console.log(record, index);
            return (
              <>
                <Input
                  onChange={(e) => {
                    if (record.type === 'after')
                      arrChange(e.target.value, 'a2', index, setArrAfterPjtco);
                    else if (record.type === 'before')
                      arrChange(e.target.value, 'a2', index, setArrBeforePjtco);
                  }}
                  defaultValue={record?.a2}
                />
              </>
            );
          },
        },
        {
          title: '직접구입비',
          dataIndex: 'a3',
          render: (_, record, index) => {
            console.log(record, index);
            return (
              <>
                <Input
                  onChange={(e) => {
                    if (record.type === 'after')
                      arrChange(e.target.value, 'a3', index, setArrAfterPjtco);
                    else if (record.type === 'before')
                      arrChange(e.target.value, 'a3', index, setArrBeforePjtco);
                  }}
                  defaultValue={record?.a3}
                />
              </>
            );
          },
        },
        {
          title: '도입기업 사업관리 인력 인건비',
          dataIndex: 'a4',
          render: (_, record, index) => {
            console.log(record, index);
            return (
              <>
                <Input
                  onChange={(e) => {
                    if (record.type === 'after')
                      arrChange(e.target.value, 'a4', index, setArrAfterPjtco);
                    else if (record.type === 'before')
                      arrChange(e.target.value, 'a4', index, setArrBeforePjtco);
                  }}
                  defaultValue={record?.a4}
                />
              </>
            );
          },
        },
        {
          title: '클라우드기반 사용료',
          dataIndex: 'a5',
          render: (_, record, index) => {
            console.log(record, index);
            return (
              <>
                <Input
                  onChange={(e) => {
                    if (record.type === 'after')
                      arrChange(e.target.value, 'a5', index, setArrAfterPjtco);
                    else if (record.type === 'before')
                      arrChange(e.target.value, 'a5', index, setArrBeforePjtco);
                  }}
                  defaultValue={record?.a5}
                />
              </>
            );
          },
        },
        {
          title: '소계',
          dataIndex: 'a6',
          render: (_, record, index) => {
            console.log(record, index);
            return (
              <>
                <Input
                  onChange={(e) => {
                    if (record.type === 'after')
                      arrChange(e.target.value, 'a6', index, setArrAfterPjtco);
                    else if (record.type === 'before')
                      arrChange(e.target.value, 'a6', index, setArrBeforePjtco);
                  }}
                  defaultValue={record?.a6}
                />
              </>
            );
          },
        },
      ],
    },
    {
      title: '전담기관',
      dataIndex: 'c',
      children: [
        {
          title: '정부지원금',
          dataIndex: 'a7',
          render: (_, record, index) => {
            console.log(record, index);
            return (
              <>
                <Input
                  onChange={(e) => {
                    if (record.type === 'after')
                      arrChange(e.target.value, 'a7', index, setArrAfterPjtco);
                    else if (record.type === 'before')
                      arrChange(e.target.value, 'a7', index, setArrBeforePjtco);
                  }}
                  defaultValue={record?.a7}
                />
              </>
            );
          },
        },
      ],
    },
  ];
  const [arrBeforePjtco, setArrBeforePjtco] = useState([
    {
      type: 'before',
      a1: '',
    },
  ]);
  const [arrAfterPjtco, setArrAfterPjtco] = useState([
    {
      type: 'After',
      a1: '',
    },
  ]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>변경 전 사업비 변경</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col span={12}>사업비 지급(단위:원)</Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'AgremChangeRcept01Table1'}
            columns={commonPjtcoColums}
            dataSource={arrBeforePjtco}
            pagination={false}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>변경 후 사업비 변경</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col span={12}>사업비 지급(단위:원)</Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'AgremChangeRcept01Table2'}
            columns={commonPjtcoColums}
            dataSource={arrAfterPjtco}
            pagination={false}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button className="eu-btn-crud-fine" size="small" onClick={saveClick}>
            저장
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeRcept01;
