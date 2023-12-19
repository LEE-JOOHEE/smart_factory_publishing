import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import { Button, Modal } from 'antd/lib';
import PresentnSttus01 from 'pages/mg/tr/cc/ps/presentnSttus/comp/PresentnSttus01';
import PresentnSttus02 from 'pages/mg/tr/cc/ps/presentnSttus/comp/PresentnSttus02';
import PresentnSttus03 from 'pages/mg/tr/cc/ps/presentnSttus/comp/PresentnSttus03';
import PresentnSttus04 from 'pages/mg/tr/cc/ps/presentnSttus/comp/PresentnSttus04';
import PresentnSttus05 from 'pages/mg/tr/cc/ps/presentnSttus/comp/PresentnSttus05';
import PresentnSttus06 from 'pages/mg/tr/cc/ps/presentnSttus/comp/PresentnSttus06';
import PresentnSttus07 from 'pages/mg/tr/cc/ps/presentnSttus/comp/PresentnSttus07';
import CmAplyAsmtPjtco from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPjtco';

const AgremCnclsPopup = ({ agremCnclsPopupOpen, setAgremCnclsPopupOpen }) => {
  const closeClick = () => {
    setAgremCnclsPopupOpen(false);
  };
  return (
    <Modal
      open={agremCnclsPopupOpen}
      title="원가계산 검토"
      // style={{ height: 'calc(100vh - 200px)' }}
      // bodyStyle={{ overflowY: 'scroll' }}
      onCancel={closeClick}
      width={1200}
      footer={[
        <Button
          key={'AgremCnclsPopup_closeClick'}
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          닫기
        </Button>,
      ]}
    >
      <Row className="eu-row-comp-cont">
        {/* 과제 기본 정보 */}
        <Col span={24} className="other">
          <PresentnSttus01 clickable={false} />
        </Col>
      </Row>
      <Row className="eu-row-comp-cont margin-top">
        {/* 첨부문서(신청단계) */}
        <Col span={24} className="other">
          <PresentnSttus02 />
        </Col>
      </Row>
      <Row className="eu-row-comp-cont margin-top">
        {/* 첨부문서(현장평가 결과보고서) */}
        <Col span={24} className="other">
          <PresentnSttus03 />
        </Col>
      </Row>
      <Row className="eu-row-comp-cont margin-top">
        {/* 제출서류 확인 */}
        <Col span={24} className="other">
          <PresentnSttus04 />
        </Col>
      </Row>
      <Row className="eu-row-comp-cont margin-top">
        {/* 원가계산기관 산출 사업비 내역 */}
        <Col span={24} className="other">
          <PresentnSttus05 />
        </Col>
      </Row>
      <Row className="eu-row-comp-cont margin-top">
        {/* 가격산출내역서 */}
        <Col span={24} className="other">
          <CmAplyAsmtPjtco editable={false} />
        </Col>
      </Row>
      <Row className="eu-row-comp-cont margin-top">
        {/* 원가계산 검토 의견 */}
        <Col span={24} className="other">
          <PresentnSttus06 />
        </Col>
      </Row><Row className="eu-row-comp-cont margin-top">
        {/* 첨부문서 */}
        <Col span={24} className="other">
          <PresentnSttus07 />
        </Col>
      </Row>
    </Modal>
  );
};

export default AgremCnclsPopup;
