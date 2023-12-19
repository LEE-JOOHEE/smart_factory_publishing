import React, { useState, useEffect } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import TechManagePopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechManagePopup';

const TechEvlCmit06 = () => {
  const arrEvlMfcmLstColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '15%',
      align: 'center',
    },
    {
      title: '성명',
      dataIndex: 'b',
      width: '20%',
    },
    {
      title: '위원장여부',
      dataIndex: 'c',
      width: '35%',
    },
    {
      title: '소속',
      dataIndex: 'd',
      width: '30%',
    },
  ];

  const [arrEvlMfcmLst, setArrEvlMfcmLst] = useState([]);

  //평가위원회 평가위원선정
  const [evlCmitMfcmMngPopupOpen, setEvlCmitMfcmMngPopupOpen] = useState(false);
  const evlCmitAtmcRcmdtnClick = () => {
    setEvlCmitMfcmMngPopupOpen(true);
  };

  const evlHdDsgnClick = () => {
    Modal.info({
      title: '평가위원장지정',
    });
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
            onClick={evlHdDsgnClick}
          >
            평가위원장지정
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={evlCmitAtmcRcmdtnClick}
          >
            평가위원선정
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
            scroll={{ y: 300 }}
          />
        </Col>
      </Row>

      <TechManagePopup
        key={'TechManagePopup'}
        evlCmitMfcmMngPopupOpen={evlCmitMfcmMngPopupOpen}
        setEvlCmitMfcmMngPopupOpen={setEvlCmitMfcmMngPopupOpen}
      />
    </>
  );
};

export default TechEvlCmit06;
