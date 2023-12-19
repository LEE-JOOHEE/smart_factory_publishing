import React, { useState } from 'react';
import {
  Col,
  Row,
  Tree,
  Table,
  Button,
  Switch,
  Card,
  Radio,
  Modal,
  Tabs,
} from 'antd';
import { PlusOutlined , MinusOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const BsnsBudgetManage03 = ({
  arrBizClsf,
  selectedKeys,
  setSelectedKeys,
  arrBizBgt,
  setArrBizBgt,
  path,
}) => {
  // 사업예산 테이블 column
  const columns = [
    {
      title: '예산명',
      dataIndex: 'a',
      key: 'a',
      align: 'center',
    },
    {
      title: '예산유형',
      dataIndex: 'b',
      key: 'b',
      align: 'center',
    },
    {
      title: '예산금액',
      key: 'c',
      dataIndex: 'c',
      align: 'center',
    },
    {
      title: '평가관리비',
      key: 'd',
      dataIndex: 'd',
      align: 'center',
    },
    {
      title: '지급총액',
      key: 'e',
      dataIndex: 'e',
      align: 'center',
    },
  ];

  // 사업예산 행추가 메소드
  const insertLineClick = () => {
    Modal.info({
      title: 'insertLineClick',
    });
  };
  // 사업예산 행삭제 메소드
  const deleteLineClick = () => {
    Modal.info({
      title: 'deleteLineClick',
    });
  };

  // 사업예산 저장 메소드
  const insertExpitmClick = () => {
    Modal.info({
      title: 'insertExpitmClick',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-12">
        <Col span={8}>
          <TitleComp>사업예산</TitleComp>
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
            className="eu-btn-row-delete"
            icon={<MinusOutlined  />}
            onClick={deleteLineClick}
          >
            행삭제
          </Button>
          <Button
            className="eu-btn-crud-warning"
            onClick={insertExpitmClick}
          >
            저장
          </Button>
        </Col>
        <Col span={24} className="mt-auto">
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red">
              * [예산금액]을 수정하였을 경우 [하반기예산금액]은 초기화됩니다.
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={arrBizBgt}
          pagination={false}
          bordered={true}
          size={'small'}
          sticky={true}
          scroll={{ y: 800, }}
          tableLayout={'auto'}
        />
      </Col>
    </Row>
    </>
  );
};

export default BsnsBudgetManage03;
