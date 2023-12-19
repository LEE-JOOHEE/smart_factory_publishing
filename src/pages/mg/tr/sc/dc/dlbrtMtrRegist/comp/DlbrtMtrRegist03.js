import React, { useState } from 'react';
import { Col, Row, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import DlbrtTaskPopupPage from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/popup/DlbrtTaskPopupPage';
const arrAsmtLstColumns = [
  {
    title: '번호',
    dataIndex: 'a',
    width: 50,
    align: 'center',
  },
  {
    title: '과제번호',
    dataIndex: 'b',
  },
  {
    title: '과제명',
    dataIndex: 'c',
  },
  {
    title: '도입기업',
    dataIndex: 'd',
  },
  {
    title: '현장평가점수',
    dataIndex: 'e',
  },
  {
    title: '현장평가결과',
    dataIndex: 'f',
  },
  {
    title: '종합점수',
    dataIndex: 'g',
  },
  {
    title: '기술성평가결과',
    dataIndex: 'h',
  },
  {
    title: '현장확인적합성',
    dataIndex: 'i',
  },
  {
    title: '현장확인결과',
    dataIndex: 'j',
  },
];
const DlbrtMtrRegist03 = ({ arrAsmtLst }) => {
  const [asmtRegPopupOpen, setAsmtRegPopupOpen] = useState(false);
  const asmtRegClick = () => {
    setAsmtRegPopupOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>과제목록</TitleComp>
        </Col>
        <Col span={9}>총 {arrAsmtLst ? arrAsmtLst.length : 0}건</Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={asmtRegClick}
          >
            과제배정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrAsmtLstColumns}
            dataSource={arrAsmtLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
      <DlbrtTaskPopupPage
        key={'DlbrtMtrRegist06'}
        asmtRegPopupOpen={asmtRegPopupOpen}
        setAsmtRegPopupOpen={setAsmtRegPopupOpen}
      />
    </>
  );
};

export default DlbrtMtrRegist03;
