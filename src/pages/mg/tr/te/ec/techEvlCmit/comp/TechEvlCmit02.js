import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';

import 'css/Common.css';
import TechBsnsPopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechBsnsPopup';
import TechCompositionPopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechCompositionPopup';

const TechEvlCmit02 = ({ arrEvlCmit, evalCmitClick }) => {
  const arrEvlCmitColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '5%',
      align: 'center',
    },
    {
      title: '사업년도',
      dataIndex: 'b',
      width: '6%',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'c',
      width: '12%',
    },
    {
      title: '수행기관',
      dataIndex: 'd',
      width: '11%',
    },
    {
      title: '평가구분',
      dataIndex: 'e',
      width: '8%',
    },
    {
      title: '평가방법',
      dataIndex: 'f',
      width: '8%',
    },
    {
      title: '평가위원회명',
      dataIndex: 'g',
      width: '10%',
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="eu-btn-link text-c"
            onClick={() => {
              evalCmitClick(record);
            }}
          >
            {record?.g}
          </Button>
        );
      },
    },
    {
      title: '평가지표',
      dataIndex: 'h',
      width: '8%',
    },
    {
      title: '총괄간사',
      dataIndex: 'i',
      width: '8%',
    },
    {
      title: '평가기간',
      dataIndex: 'j',
      width: '16%',
    },
    {
      title: '전체확정여부',
      dataIndex: 'k',
      width: '8%',
      align: 'center',
    },
  ];

  //사업별 배정현황조회 팝업
  const [cmEvlAltmntSttsOpen, setCmEvlAltmntSttsOpen] = useState(false);
  const evlAltmntSttsClick = () => {
    setCmEvlAltmntSttsOpen(true);
  };
  //평가위원회등록
  //평가계획생성팝업
  const [evlCmitRegPopupOpen, setEvlCmitRegPopupOpen] = useState(false);
  const evlCmitRegClick = () => {
    setEvlCmitRegPopupOpen(true);
  };

  useEffect(() => {}, []);
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>평가위원회</TitleComp>
        </Col>
        <Col span={9}></Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={evlAltmntSttsClick}
          >
            사업별 배정현황 조회
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={evlCmitRegClick}
          >
            평가위원회 등록
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrEvlCmitColumns}
            dataSource={arrEvlCmit}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200, x: 1400 }}
          />
        </Col>
      </Row>
      <TechBsnsPopup
        key={'TechBsnsPopup'}
        cmEvlAltmntSttsOpen={cmEvlAltmntSttsOpen}
        setCmEvlAltmntSttsOpen={setCmEvlAltmntSttsOpen}
      />
      <TechCompositionPopup
        key={'TechCompositionPopup'}
        evlCmitRegPopupOpen={evlCmitRegPopupOpen}
        setEvlCmitRegPopupOpen={setEvlCmitRegPopupOpen}
      />
    </>
  );
};

export default TechEvlCmit02;
