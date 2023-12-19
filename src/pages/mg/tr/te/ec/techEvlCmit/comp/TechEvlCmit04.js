import React, { useState, useEffect } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import TechAsignPopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechAsignPopup';
import TechManagePopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechManagePopup';

const TechEvlCmit04 = () => {
  const arrTrgtAsmtColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '7%',
      align: 'center',
    },
    {
      title: '과제번호',
      dataIndex: 'b',
      width: '15%',
    },
    {
      title: '과제명',
      dataIndex: 'c',
      width: '25%',
    },
    {
      title: '도입기업',
      dataIndex: 'd',
      width: '15%',
    },
    {
      title: '평가시간',
      dataIndex: 'e',
      width: '18%',
      align: 'center',
    },
    {
      title: '신청자',
      dataIndex: 'f',
      width: '10%',
      align: 'center',
    },
    {
      title: '소재지',
      dataIndex: 'g',
      width: '10%',
      align: 'center',
    },
  ];
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

  const [arrTrgtAsmt, setArrTrgtAsmt] = useState([]);
  const [arrEvlMfcmLst, setArrEvlMfcmLst] = useState([]);

  //과제배정
  const [evlCmitAsmtAltmntPopupOpen, setEvlCmitAsmtAltmntPopupOpen] =
    useState(false);
  const evlCmitAsmtAltmntClick = () => {
    setEvlCmitAsmtAltmntPopupOpen(true);
  };

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
      <Row gutter={(8, 50)}>
        {/* 왼쪽 */}
        <Col span={14}>
          <Row className="eu-row-comp-title mb-8">
            <Col span={24} className="title-0">
              <TitleComp>대상과제</TitleComp>
            </Col>
            <Col span={6} className="mt-auto">
              <div className="eu-table-indicator">
                <div className="count">총
                  <span className="text-blue font-bold-500 ml-4">
                    {arrTrgtAsmt ? arrTrgtAsmt.length : 0}
                  </span>건
                </div>
              </div>
            </Col>
            <Col span={18} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-crud-fine"
                onClick={evlCmitAsmtAltmntClick}
              >
                과제배정
              </Button>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                columns={arrTrgtAsmtColumns}
                dataSource={arrTrgtAsmt}
                size="small"
                bordered
                pagination={false}
                scroll={{ y: 300 }}
              />
            </Col>
          </Row>
        </Col>

        {/* 오른쪽 */}
        <Col span={10}>
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
        </Col>
      </Row>

      <TechAsignPopup
        key={'TechAsignPopup'}
        evlCmitAsmtAltmntPopupOpen={evlCmitAsmtAltmntPopupOpen}
        setEvlCmitAsmtAltmntPopupOpen={setEvlCmitAsmtAltmntPopupOpen}
      />
      <TechManagePopup
        key={'TechManagePopup'}
        evlCmitMfcmMngPopupOpen={evlCmitMfcmMngPopupOpen}
        setEvlCmitMfcmMngPopupOpen={setEvlCmitMfcmMngPopupOpen}
      />
    </>
  );
};

export default TechEvlCmit04;
