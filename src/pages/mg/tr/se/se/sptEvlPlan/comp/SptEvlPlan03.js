import React, { useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptAsignPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptAsignPopup';
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
    title: '도입기업',
    dataIndex: 'd',
    width: '12%',
  },
  {
    title: '지역',
    dataIndex: 'e',
    width: '7%',
    align: 'center',
  },
  {
    title: '희망일자',
    dataIndex: 'f',
    width: '12%',
  },
  {
    title: '희망일시',
    dataIndex: 'g',
    width: '12%',
  },
  {
    title: '배정위원수',
    dataIndex: 'h',
    width: '9%',
    align: 'center',
  },
  {
    title: '최종섭외일시',
    dataIndex: 'i',
    width: '19%',
  },
];
const SptEvlPlan03 = ({ arrAsmtLst }) => {
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
      <SptAsignPopup
        key={'SptAsignPopup'}
        asmtRegPopupOpen={asmtRegPopupOpen}
        setAsmtRegPopupOpen={setAsmtRegPopupOpen}
      />
    </>
  );
};

export default SptEvlPlan03;
