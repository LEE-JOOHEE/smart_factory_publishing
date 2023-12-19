import React, { useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptMfcmmPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptMfcmmPopup';
const arrEvlMfcmLstColumns = [
  {
    title: '순번',
    dataIndex: 'a',
    width: 50,
    align: 'center',
  },
  {
    title: '위원구분',
    dataIndex: 'b',
  },
  {
    title: '섭외일시',
    dataIndex: 'c',
    width: 200,
  },
  {
    title: '성명',
    dataIndex: 'd',
  },
  {
    title: '배정과제수',
    dataIndex: 'e',
    width: 70,
  },
  {
    title: '전문가소재지',
    dataIndex: 'f',
  },
  {
    title: '주요지역 (TP구분)',
    dataIndex: 'g',
    width: 100,
  },
  {
    title: '소속',
    dataIndex: 'h',
  },
  {
    title: '직위',
    dataIndex: 'i',
  },
  {
    title: '이메일',
    dataIndex: 'j',
  },
  {
    title: '전화번호',
    dataIndex: 'k',
  },
];
const SptCnfirmFoundng04 = ({ arrEvlMfcmLst }) => {
  const [cmEvlMfcmMngPopupOpen, setCmEvlMfcmMngPopupOpen] = useState(false);
  const cmEvlMfcmMngPopupOpenClick = () => {
    setCmEvlMfcmMngPopupOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>평가위원목록</TitleComp>
        </Col>
        <Col span={9}>총 {arrEvlMfcmLst ? arrEvlMfcmLst.length : 0}건</Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={cmEvlMfcmMngPopupOpenClick}
          >
            평가위원 선정관리
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrEvlMfcmLstColumns}
            dataSource={arrEvlMfcmLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 320 }}
          />
        </Col>
      </Row>
      <SptMfcmmPopup
        key={'SptMfcmmPopup'}
        cmEvlMfcmMngPopupOpen={cmEvlMfcmMngPopupOpen}
        setCmEvlMfcmMngPopupOpen={setCmEvlMfcmMngPopupOpen}
      />
    </>
  );
};

export default SptCnfirmFoundng04;
