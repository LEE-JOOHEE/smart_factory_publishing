import React, { useState } from 'react';
import {
  Col,
  Row,
  Tree,
  Table,
  Button,
  Select,
  Card,
  Switch,
  Radio,
  Modal,
} from 'antd';
import { PlusOutlined , MinusOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const BsnsExpitmTaxitm03 = ({
  arrBizClsf,
  selectedExpitmKeys,
  setSelectedExpitmKeys,
  arrExpitm,
  setArrExpitm,
  arrChcExpitmGroupDsctn,
  setArrChcExpitmGroupDsctn,
  path,
}) => {

  const expitmChange = (text, record, index) => {
    console.log('text: ', text);
    console.log('record: ', record);
    console.log('index: ', index);
  };

  // 비목 테이블 column
  const expitmColumns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      key: 'a',
      width: '15%',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'title',
      key: 'title',
      width: '60%',
      align: 'center',
    },
    {
      title: '비목그룹',
      key: 'b',
      width: '25%',
      align: 'center',
      render: (_, record, index) => (
        <Select
          dropdownAlign={{ offset: [0, 1] }}
          className="text-l"
          onChange={() => expitmChange(_, record, index)}
          options={[
            {
              value: 'G01',
              label: 'G01',
            },
            {
              value: 'G02',
              label: 'G02',
            },
          ]}
          value={arrExpitm[index].b}
        />
      ),
    },
  ];
  // 선택 비목그룹내역 column
  const chcExpitmGroupDsctnColumn = [
    {
      title: '사업연도', 
      dataIndex: 'a',
      key: 'a',
      width: '15%',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'title',
      key: 'title',
      width: '35%',
      align: 'left',
    },
    {
      title: '비목그룹',
      dataIndex: 'b',
      key: 'b',
      width: '15%',
      align: 'center',
    },
    {
      title: '비목',
      dataIndex: 'c',
      key: 'c',
      width: '35%',
      align: 'center',
    },
  ];

  // 비목 행추가 메소드
  const insertLineClick = () => {
    Modal.info({
      title: 'insertLineClick',
    });
  };

  // 비목 저장 메소드
  const insertExpitmClick = () => {
    Modal.info({
      title: 'insertExpitmClick',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={8} className="title-0">
          <TitleComp>비목</TitleComp>
        </Col>
        <Col span={16} style={{  textAlign: 'right' }}>
          <Button
            className="eu-btn-row-insert"
            icon={<PlusOutlined  />}
            onClick={insertLineClick}
          >
            행추가
          </Button>
          <Button
            className="eu-btn-crud-warning"
            onClick={insertExpitmClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={expitmColumns}
            dataSource={arrExpitm}
            pagination={false}
            bordered={true}
            size={'small'}
            sticky={true}
            scroll={{ y: 200, }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={8}>
          <TitleComp>선택 비목그룹내역</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={chcExpitmGroupDsctnColumn}
            dataSource={arrChcExpitmGroupDsctn}
            pagination={false}
            bordered={true}
            size={'small'}
            sticky={true}
            scroll={{
              y: 510,
            }}
          />
        </Col>
      </Row>
      
    </>
  );
};

export default BsnsExpitmTaxitm03;
