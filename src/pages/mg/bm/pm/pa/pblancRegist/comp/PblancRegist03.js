import React, { useState } from 'react';
import { Col, Row, Tabs, Table, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const PblancRegist03 = ({
  arrPbancAtchFile,
  arrFlfmtBiz,
  setArrFlfmtBiz,
  openClick,
  setArrCheckedFlfmtBiz,
}) => {
  // 첨부 메소드
  const atchClick = () => {
    Modal.info({
      title: 'atchClick',
    });
  };
  // 공고 첨부파일 column
  const pbancAtchFileColumn = [
    {
      title: '순번',
      dataIndex: 'a',
      align: 'center',
    },
    {
      title: '문서유형',
      dataIndex: 'b',
      align: 'center',
    },
    {
      title: '파일명',
      dataIndex: 'c',
      align: 'center',
    },
    {
      title: '크기(KB)',
      dataIndex: 'd',
      align: 'center',
    },
    {
      title: '등록일자',
      dataIndex: 'e',
      align: 'center',
    },
    {
      title: '파일첨부',
      render: () => (
        <Button
          type="default"
          className="eu-btn-table-default"
          onClick={atchClick}
        >
          첨부
        </Button>
      ),
      align: 'center',
    },
  ];

  // 수행사업 column
  const flfmtBizColumn = [
    {
      title: '사업연도',
      dataIndex: 'a',
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'b',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'c',
      align: 'center',
    },
    {
      title: '사업기간',
      dataIndex: 'd',
      align: 'center',
    },
  ];

  // 수행사업 추가 메소드
  const insertFlfmtBizClick = () => {
    Modal.info({
      title: 'insertFlfmtBizClick',
    });
  };

  const selectFlfmtBizClick = () => {
    openClick();
  };

  // 수행사업 삭제 메소드
  const deleteFlfmtBizClick = () => {
    Modal.info({
      title: 'deleteFlfmtBizClick',
    });
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedFlfmtBiz(selectedRows);
    },
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>공고 첨부파일</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={insertFlfmtBizClick}
          >
            추가
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={deleteFlfmtBizClick}
          >
            삭제
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={pbancAtchFileColumn}
            dataSource={arrPbancAtchFile}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 800,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>수행사업</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-default"
            onClick={selectFlfmtBizClick}
          >
            선택
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={flfmtBizColumn}
            dataSource={arrFlfmtBiz}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 800,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>
    </>
  );
};

export default PblancRegist03;
