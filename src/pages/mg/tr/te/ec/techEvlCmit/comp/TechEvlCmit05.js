import React, { useState, useEffect } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import TechAsignPopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechAsignPopup';

const TechEvlCmit05 = () => {
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

  const [arrTrgtAsmt, setArrTrgtAsmt] = useState([]);

  //과제배정
  const [evlCmitAsmtAltmntPopupOpen, setEvlCmitAsmtAltmntPopupOpen] =
    useState(false);
  const evlCmitAsmtAltmntClick = () => {
    setEvlCmitAsmtAltmntPopupOpen(true);
  };

  return (
    <>
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

      <TechAsignPopup
        key={'TechAsignPopup'}
        evlCmitAsmtAltmntPopupOpen={evlCmitAsmtAltmntPopupOpen}
        setEvlCmitAsmtAltmntPopupOpen={setEvlCmitAsmtAltmntPopupOpen}
      />
    </>
  );
};

export default TechEvlCmit05;
