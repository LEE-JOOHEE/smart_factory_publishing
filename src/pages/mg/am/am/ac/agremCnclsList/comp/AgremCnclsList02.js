import React, { useState } from 'react';
import { Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';
import AgremSignPopup from 'pages/mg/am/am/ac/agremCnclsList/popup/AgremSignPopup';
import UsageAgreementPopup from 'pages/mg/am/am/ac/agremCnclsList/popup/UsageAgreementPopup';
import SatisfactionSurveyPopup from 'pages/mg/am/am/ac/agremCnclsList/popup/SatisfactionSurveyPopup';

const AgremCnclsList02 = ({ arrTask }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
      width: '7%',
      align: 'center',
    },
    {
      title: '과제번호',
      dataIndex: 'a2',
      width: '11%',
      align: 'center',
    },
    {
      title: '과제명',
      dataIndex: 'a3',
      width: '19%',
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'a4',
      width: '8%',
      align: 'center',
    },
    {
      title: '도입기업',
      dataIndex: 'a5',
      width: '11%',
      align: 'center',
    },
    {
      title: '사업비재검토',
      dataIndex: 'a6',
      width: '8%',
      align: 'center',
    },
    {
      title: '제출상태',
      dataIndex: 'a7',
      width: '9%',
      align: 'center',
    },
    {
      title: '서명여부',
      dataIndex: 'a8',
      width: '7%',
      align: 'center',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-btn-link text-c"
              type="link"
              onClick={() => {
                // 화면이동 구현 필요
                //('제안요청서조회상세 페이지 이동 구현');
                console.log(record, index);
                signClick();
              }}
            >
              {record?.a8}
            </Button>
          </>
        );
      },
    },
    {
      title: '협약서명완료여부',
      dataIndex: 'a9',
      width: '10%',
      align: 'center',
    },
    {
      title: '협약완료일자',
      dataIndex: 'a10',
      width: '10%',
      align: 'center',
    },
  ];

  const [agremSignPopupOpen, setAgremSignPopupOpen] = useState(false);
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
    },
  };

  const conclusionClick = () => {
    Modal.info({ title: '체결 클릭' });

  };

  const signClick = () => {
    setAgremSignPopupOpen(true);
  };
  const aprvClick = () => {
    Modal.info({ title: '서류검토 클릭' });
  };
  
  const [usageAgreementPopupOpen, setUsageAgreementPopupOpen] = useState(false);
  const usageAgrementClick = () => {
    setUsageAgreementPopupOpen(true);
  }
  const [satisfactionSurveyPopupOpen, setSatisfactionSurveyPopupOpen] = useState(false);
  const satisfactionSurveyClick = () => {
    setSatisfactionSurveyPopupOpen(true);
  }


  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={4} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrTask?.length.toString().padStart(3, '0')}  
              </span>건
            </div>
          </div>
        </Col>
        <Col span={20} style={{ textAlign: 'right' }}>
          <Button className="eu-btn-crud-warning" onClick={satisfactionSurveyClick}>
            원가계산기관 만족도 조사
          </Button>
          <Button className="eu-btn-crud-error" onClick={usageAgrementClick}>
            과제협약 이용동의서 팝업 양식
          </Button>
          <Button className="eu-btn-crud-fine" onClick={aprvClick}>
            서류검토
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={conclusionClick}
          >
            협약체결
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500, x: 1200 }}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            key={'PrmpcSprvisnExmnt02Table'}
            columns={arrTaskColumns}
            dataSource={arrTask}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <AgremSignPopup
        agremSignPopupOpen={agremSignPopupOpen}
        setAgremSignPopupOpen={setAgremSignPopupOpen}
      />
      <UsageAgreementPopup
        usageAgreementPopupOpen={usageAgreementPopupOpen}
        setUsageAgreementPopupOpen={setUsageAgreementPopupOpen}
      />
      <SatisfactionSurveyPopup
        satisfactionSurveyPopupOpen={satisfactionSurveyPopupOpen}
        setSatisfactionSurveyPopupOpen={setSatisfactionSurveyPopupOpen}
      />
    </>
  );
};

export default AgremCnclsList02;
