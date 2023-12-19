import React, { useState, useEffect } from 'react';
import { Col, Row, Tag, Button, Table, Select, Modal, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const PblancChartrManage02 = ({
  arrBizPbanc,
  arrBizDtlPbanc,
  setArrBizDtlPbanc,
  setArrCheckedBizDtlPbanc,
  openClick,
}) => {
  const insertClick = () => {
    Modal.info({
      title: 'insertClick',
      contents: '',
    });
  };

  const deleteClick = () => {
    Modal.warning({
      title: 'deleteClick',
      contents: '',
    });
  };

  const linkInfoClick = (key) => {
    console.log('key: ', key);
    Modal.info({
      title: 'linkInfoClick',
      contents: '',
    });
  };

  const bizPbancColumns = [
    {
      title: '공고연도',
      dataIndex: 'a',
      width: '8%',
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'b',
      width: '21%',
    },
    {
      title: '공고번호',
      dataIndex: 'c',
      width: '20%',
    },
    {
      title: '공고명',
      dataIndex: 'd',
      width: '30%',
    },
    {
      title: '공고일자',
      dataIndex: 'e',
      width: '12%',
      align: 'center',
    },
    {
      title: '등록자',
      dataIndex: 'f',
      width: '9%',
      align: 'center',
    },
  ];

  const bizDtlPbancColumns = [
    {
      title: '세부공고 순번',
      dataIndex: 'a',
      width: '9%',
      align: 'center',
    },
    {
      title: '공고회차',
      dataIndex: 'b',
      width: '8%',
      align: 'center',
    },
    {
      title: '세부공고명',
      dataIndex: 'c',
      render: (text) => <Tag>{text}</Tag>,
      width: '12%',
      align: 'center',
    },
    {
      title: '차수',
      dataIndex: 'd',
      width: '8%',
      align: 'center',
    },
    {
      title: '사업유형구분',
      dataIndex: 'e',
      width: '9%',
      align: 'center',
    },
    {
      title: '사업기간',
      dataIndex: 'f',
      width: '12%',
      align: 'center',
    },
    {
      title: '추경사업 여부',
      dataIndex: 'g',
      width: '9%',
      align: 'center',
    },
    {
      title: '공모유형',
      dataIndex: 'h',
      width: '21%',
      align: 'center',
      render: (text, record, index) => {
        console.log(record, index);
        return (
          <>
            <Space>
              {text}
              <Button
                className="eu-btn-table-default"
                onClick={() => linkInfoClick(record)}
              >
                연계정보
              </Button>
            </Space>
          </>
        );
      },
    },
    {
      title: '사업 세부공고 설정',
      dataIndex: 'i',
      width: '12%',
      align: 'center',
      render: () => (
        <Button
          className="eu-btn-table-default"
          onClick={openClick}
        >
          수정
        </Button>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedBizDtlPbanc(selectedRows);
    },
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24}>
          <TitleComp>사업공고</TitleComp>
        </Col>
        <Col span={24}>
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrBizPbanc ? arrBizPbanc.length : 0}  
              </span>건
            </div>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={bizPbancColumns}
            dataSource={arrBizPbanc}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 120,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mb-8 margin-top">
        <Col span={24} className="title-0">
          <TitleComp>사업세부공고</TitleComp>
        </Col>
        <Col span={12} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrBizDtlPbanc ? arrBizDtlPbanc.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-default"
            onClick={insertClick}
          >
            등록
          </Button>
          <Button
            className="eu-btn-crud-error"
            onClick={deleteClick}
          >
            삭제
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={bizDtlPbancColumns}
            dataSource={arrBizDtlPbanc}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 200,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PblancChartrManage02;
