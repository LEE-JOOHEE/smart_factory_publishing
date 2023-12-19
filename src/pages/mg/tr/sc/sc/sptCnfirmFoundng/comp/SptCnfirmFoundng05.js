import React, { useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptEvlPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptEvlPopup';
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
    title: '도입대표기업',
    dataIndex: 'd',
  },
  {
    title: '도입기획기관',
    dataIndex: 'e',
  },
  {
    title: '도입기업수',
    dataIndex: 'f',
  },
  {
    title: '공급대표기업',
    dataIndex: 'g',
  },
  {
    title: '공급기업수',
    dataIndex: 'h',
  },
  {
    title: '평가대상기업수',
    dataIndex: 'i',
  },
];
const SptCnfirmFoundng05 = ({ arrAsmtLst }) => {
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
      <SptEvlPopup
        key={'SptEvlPopup'}
        asmtRegPopupOpen={asmtRegPopupOpen}
        setAsmtRegPopupOpen={setAsmtRegPopupOpen}
      />
    </>
  );
};

export default SptCnfirmFoundng05;
