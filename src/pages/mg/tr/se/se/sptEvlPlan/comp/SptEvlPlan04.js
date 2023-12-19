import React, { useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptMfcmmPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptMfcmmPopup';
const arrEvlMfcmLstColumns = [
  {
    title: '순번',
    dataIndex: 'a',
    width: '5%',
    align: 'center',
  },
  {
    title: '위원구분',
    dataIndex: 'b',
    width: '7%',
    align: 'center',
  },
  {
    title: '섭외일시',
    dataIndex: 'c',
    width: '13%',
  },
  {
    title: '성명',
    dataIndex: 'd',
    width: '7%',
  },
  {
    title: '배정과제수',
    dataIndex: 'e',
    width: '7%',
    align: 'center',
  },
  {
    title: '전문가소재지',
    dataIndex: 'f',
    width: '7%',
    align: 'center',
  },
  {
    title: '주요지역 (TP구분)',
    dataIndex: 'g',
    width: '10%',
    align: 'center',
  },
  {
    title: '소속',
    dataIndex: 'h',
    width: '7%',
  },
  {
    title: '직위',
    dataIndex: 'i',
    width: '7%',
  },
  {
    title: '이메일',
    dataIndex: 'j',
    width: '12%',
  },
  {
    title: '전화번호',
    dataIndex: 'k',
    width: '10%',
  },
];
const SptEvlPlan04 = ({ arrEvlMfcmLst }) => {
  const [cmEvlMfcmMngPopupOpen, setCmEvlMfcmMngPopupOpen] = useState(false);
  const cmEvlMfcmMngPopupOpenClick = () => {
    setCmEvlMfcmMngPopupOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>평가위원목록</TitleComp>
        </Col>
        <Col span={6} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrEvlMfcmLst ? arrEvlMfcmLst.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Button
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
            scroll={{ y: 320, x: 1400 }}
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

export default SptEvlPlan04;
