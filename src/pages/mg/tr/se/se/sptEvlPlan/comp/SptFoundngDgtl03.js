import React, { useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptEvlPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptEvlPopup';
const arrAsmtLstColumns = [
  {
    title: '번호',
    dataIndex: 'a',
    width: '7%',
    align: 'center',
  },
  {
    title: '과제번호',
    dataIndex: 'b',
    width: '8%',
    align: 'center',
  },
  {
    title: '과제명',
    dataIndex: 'c',
    width: '13%',
  },
  {
    title: '도입대표기업',
    dataIndex: 'd',
    width: '12%',
  },
  {
    title: '도입기획기관',
    dataIndex: 'e',
    width: '8%',
    align: 'center',
  },
  {
    title: '도입참여기업수',
    dataIndex: 'f',
    width: '13%',
  },
  {
    title: '공급대표기업',
    dataIndex: 'g',
    width: '12%',
  },
  {
    title: '공급참여기업수',
    dataIndex: 'h',
    width: '8%',
    align: 'center',
  },
  {
    title: '평가대상기업수',
    dataIndex: 'i',
    width: '19%',
  },
];
const SptFoundngDgtl03 = ({ arrAsmtLst }) => {
  const [asmtRegPopupOpen, setAsmtRegPopupOpen] = useState(false);
  const asmtRegClick = () => {
    setAsmtRegPopupOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>과제목록</TitleComp>
        </Col>
        <Col span={6} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrAsmtLst ? arrAsmtLst.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Button
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
      <SptEvlPopup
        key={'SptEvlPopup'}
        asmtRegPopupOpen={asmtRegPopupOpen}
        setAsmtRegPopupOpen={setAsmtRegPopupOpen}
      />
    </>
  );
};

export default SptFoundngDgtl03;
