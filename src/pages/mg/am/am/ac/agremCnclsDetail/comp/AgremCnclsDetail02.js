import React, { useState } from 'react';
import { Button, Col, Descriptions, Row, Tabs, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import AgremReturnPopup from 'pages/mg/am/am/ac/agremCnclsDetail/popup/AgremReturnPopup';
import AgremCnclsPopup from 'pages/mg/am/am/ac/agremCnclsDetail/popup/AgremCnclsPopup';

const AgremCnclsDetail02 = ({ ojtAgremCnclsInfo }) => {
  const [agremReturnPopupOpen, setAgremReturnPopupOpen] = useState(false);

  const rjctHstryClick = () => {
    setAgremReturnPopupOpen(true);
  };

  const [agremCnclsPopupOpen, setAgremCnclsPopupOpen] = useState(false);

  const agrmtInqClick = () => {
    Modal.info({
      title: 'agrmtInqClick',
    });
  };
  const agrmtIssuClick = () => {
    Modal.info({
      title: 'agrmtIssuClick',
    });
  };
  const agrmtOtptClick = () => {
    Modal.info({
      title: 'agrmtInqClick',
    });
  };
  const prmpcCalcInqClick = () => {
    setAgremCnclsPopupOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>과제기본정보</TitleComp>
        </Col>
        <Col span={6} className="mt-auto">
          <Button
            className="eu-btn-link"
            type="link"
            onClick={rjctHstryClick}
          >
            반려이력 : {ojtAgremCnclsInfo?.a1}건
          </Button>
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-default"
            onClick={agrmtIssuClick}
          >
            전자협약서 재발급
          </Button>
          <Button
            className="eu-btn-crud-default"
            onClick={agrmtOtptClick}
          >
            전자협약서 출력
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={agrmtInqClick}
          >
            전자협약서 조회
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={prmpcCalcInqClick}
          >
            원가계산 조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="사업명" span={3}>
              {ojtAgremCnclsInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={3}>
              {ojtAgremCnclsInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              {ojtAgremCnclsInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={2}>
              {ojtAgremCnclsInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업">
              {ojtAgremCnclsInfo?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="총사업비" span={3}>
              {ojtAgremCnclsInfo?.a7}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      
      <Row className="eu-row-comp-title mb-12 margin-top">
        <Col span={4} className="title-0">
          <TitleComp>사업기간</TitleComp>
        </Col>
        <Col span={20} className="mt-auto">
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">
              * 사업종료일 입력 시 구축기간 종료일자에 +6개월(집중AS기간)을 가산한 일정으로 계산하여 입력
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="사업기간" span={3}>
              {ojtAgremCnclsInfo?.a8}
            </Descriptions.Item>
            <Descriptions.Item label="구축기간" span={3}>
              {ojtAgremCnclsInfo?.a9}
            </Descriptions.Item>
            <Descriptions.Item label="집중AS기간" span={3}>
              {ojtAgremCnclsInfo?.a10}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <AgremReturnPopup
        agremReturnPopupOpen={agremReturnPopupOpen}
        setAgremReturnPopupOpen={setAgremReturnPopupOpen}
      />
      <AgremCnclsPopup
        agremCnclsPopupOpen={agremCnclsPopupOpen}
        setAgremCnclsPopupOpen={setAgremCnclsPopupOpen}
      />
    </>
  );
};

export default AgremCnclsDetail02;
