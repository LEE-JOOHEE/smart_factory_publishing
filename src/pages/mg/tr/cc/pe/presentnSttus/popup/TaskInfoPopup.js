import React, { useState } from 'react';
import 'css/Common.css';

import { Button, Col, Modal, Row } from 'antd';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
import TitleComp from 'components/layout/TitleComp';
import CmAplyAsmtBsc from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtBsc';
import CmAplyAsmtIndcEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtIndcEnt';
import CmAplyAsmtPjtco from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPjtco';
import CmAplyAsmtSplyEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSplyEnt';
import CmAplyAsmtPvltrt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPvltrt';
import CmAplyAsmtRsltIdx from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtRsltIdx';
import CmAplyAsmtSrvy from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSrvy';
import CmAplyAsmtEmplym from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtEmplym';
import CmAplyAsmtHstry from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtHstry';

const TaskInfoPopup = ({
  taskInfoPopupOpen,
  setTaskInfoPopupOpen,
  taskInfoPopupTitle = '원가계산검토',
}) => {
  const [aplyAsmtPjtcoOpen, setAplyAsmtPjtcoOpen] = useState(true);
  const aplyAsmtPjtcoShow = () => {
    setAplyAsmtPjtcoOpen(true);
  };
  const aplyAsmtPjtcoClose = () => {
    setAplyAsmtPjtcoOpen(false);
  };
  const confirmClick = () => {
    setTaskInfoPopupOpen(false);
  };
  const closeClick = () => {
    setTaskInfoPopupOpen(false);
  };
  const [editable] = useState(false);
  return (
    <Modal
      open={taskInfoPopupOpen}
      title={taskInfoPopupTitle}
      onOk={confirmClick}
      onCancel={closeClick}
      style={{ height: 'calc(100vh - 200px)' }}
      bodyStyle={{ overflowY: 'scroll' }}
      width={1200}
      footer={[
        <Button
          size="middle"
          className="eu-btn-popup-process-fine"
          onClick={confirmClick}
        >
          확인
        </Button>,
        <Button
          type="primary"
          size="middle"
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          취소
        </Button>,
      ]}
    >
      <Row>
        <Col span={24}>
          {/* 과제 기본 정보 */}
          <CmAplyAsmtBsc editable={editable} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 도입 기업 정보 */}
          <CmAplyAsmtIndcEnt editable={editable} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        {/* 사업비내역 */}
        <Col span={12}>
          <TitleComp>사업비내역</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            type="eu-btn-crud-fine"
            onClick={() => {
              if (aplyAsmtPjtcoOpen) aplyAsmtPjtcoClose();
              else aplyAsmtPjtcoShow();
            }}
          >
            {!aplyAsmtPjtcoOpen ? '열기' : '닫기'}
          </Button>
        </Col>
        {aplyAsmtPjtcoOpen && (
          <Col span={24}>
            <CmAplyAsmtPjtco editable={false} />
          </Col>
        )}
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 컨소시엄 공급기업 */}
          <CmAplyAsmtSplyEnt editable={editable} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 우대사항 */}
          <CmAplyAsmtPvltrt editable={editable} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 성과지표 */}
          <CmAplyAsmtRsltIdx editable={editable} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 첨부문서 */}
          <CmAtchDoc title={'첨부문서'} editable={editable} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 설문조사 */}
          <CmAplyAsmtSrvy editable={editable} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 일자리평가 */}
          <CmAplyAsmtEmplym editable={editable} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 참여과제이력 */}
          <CmAplyAsmtHstry editable={editable} />
        </Col>
      </Row>
    </Modal>
  );
};

export default TaskInfoPopup;
