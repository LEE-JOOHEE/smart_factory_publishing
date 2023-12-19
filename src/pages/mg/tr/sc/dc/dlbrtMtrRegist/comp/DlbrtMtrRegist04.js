import React, { useState } from 'react';
import { Col, Row, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import DlbrtLevelPopupPage from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/popup/DlbrtLevelPopupPage';
const arrLvlIdntyBizColumns = [
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
    title: '진단보고서 제출자수',
    dataIndex: 'e',
  },
];
const DlbrtMtrRegist04 = ({ arrLvlIdntyBiz }) => {
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
        <Col span={9}>총 {arrLvlIdntyBiz ? arrLvlIdntyBiz.length : 0}건</Col>
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
            columns={arrLvlIdntyBizColumns}
            dataSource={arrLvlIdntyBiz}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
      <DlbrtLevelPopupPage
        key={'DlbrtLevelPopupPage'}
        asmtRegPopupOpen={asmtRegPopupOpen}
        setAsmtRegPopupOpen={setAsmtRegPopupOpen}
      />
    </>
  );
};

export default DlbrtMtrRegist04;
