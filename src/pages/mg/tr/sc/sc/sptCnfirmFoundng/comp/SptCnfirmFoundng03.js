import React, { useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptAsignPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptAsignPopup';
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
    title: '지역',
    dataIndex: 'e',
  },
  {
    title: '희망일자',
    dataIndex: 'f',
  },
  {
    title: '희망일시',
    dataIndex: 'g',
  },
  {
    title: '배정위원수',
    dataIndex: 'h',
  },
  {
    title: '최종섭외일시',
    dataIndex: 'i',
  },
];
const SptCnfirmFoundng03 = ({ arrAsmtLst }) => {
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
            과제등록
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
      <SptAsignPopup
        key={'SptAsignPopup'}
        asmtRegPopupOpen={asmtRegPopupOpen}
        setAsmtRegPopupOpen={setAsmtRegPopupOpen}
      />
    </>
  );
};

export default SptCnfirmFoundng03;
