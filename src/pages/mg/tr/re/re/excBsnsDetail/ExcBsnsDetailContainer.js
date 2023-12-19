import React, { useState } from 'react';

import 'css/Common.css';

import { Button, Col, Modal, Row } from 'antd';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
import ExcBsnsDetail01 from 'pages/mg/tr/re/re/excBsnsDetail/comp/ExcBsnsDetail01';
import TitleComp from 'components/layout/TitleComp';
import CmAplyAsmtPjtco from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPjtco';
import CmAplyAsmtIndcEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtIndcEnt';
import CmAplyAsmtBsc from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtBsc';
import CmAplyAsmtSplyEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSplyEnt';
import CmAplyAsmtPvltrt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPvltrt';
import CmAplyAsmtRsltIdx from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtRsltIdx';
import CmAplyAsmtEmplym from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtEmplym';
import CmAplyAsmtHstry from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtHstry';

const ExcBsnsDetailContainer = () => {
  const [isCoordinator, setIsCoordinator] = useState(true);

  const [aplyAsmtPjtcoOpen, setAplyAsmtPjtcoOpen] = useState(true);
  const aplyAsmtPjtcoShow = () => {
    setAplyAsmtPjtcoOpen(true);
  };
  const aplyAsmtPjtcoClose = () => {
    setAplyAsmtPjtcoOpen(false);
  };
  const listClick = () => {
    Modal.info({
      title: 'list Click',
    });
  };
  const docClick = () => {
    Modal.info({
      title: 'doc Click',
    });
  };

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 과제 기본 정보 */}
          <CmAplyAsmtBsc editable={true} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 도입 기업 정보 */}
          <CmAplyAsmtIndcEnt editable={false} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout pb-16">
        {/* 사업비내역 */}
        <Col span={12}>
          <TitleComp>사업비내역</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-default"
            onClick={() => {
              if (aplyAsmtPjtcoOpen) aplyAsmtPjtcoClose();
              else aplyAsmtPjtcoShow();
            }}
          >
            {!aplyAsmtPjtcoOpen ? '열기' : '닫기'}
          </Button>
        </Col>
        {aplyAsmtPjtcoOpen && (
          <Col span={24} className="mb-28">
            <CmAplyAsmtPjtco editable={false} />
          </Col>
        )}
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 컨소시엄 공급기업 */}
          <CmAplyAsmtSplyEnt editable={false} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 우대사항 */}
          <CmAplyAsmtPvltrt editable={false} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 성과지표 */}
          <CmAplyAsmtRsltIdx editable={false} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 첨부문서 */}
          <CmAtchDoc title={'첨부문서'} editable={true} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 일자리평가 */}
          <CmAplyAsmtEmplym editable={true} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 참여과제이력 */}
          <CmAplyAsmtHstry editable={false} />
        </Col>
      </Row>
      {isCoordinator && (
        <Row className="eu-row-page-comp-layout">
          <Col span={24}>
            {/* 코디네이터 */}
            <ExcBsnsDetail01 editable={false} />
          </Col>
        </Row>
      )}
      <Row className="eu-row-page-btn-layout">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            onClick={listClick}
            className="eu-btn-process-default"
          >
            목록
          </Button>
          <Button
            onClick={docClick}
            className="eu-btn-process-default"
          >
            첨부문서 저장
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ExcBsnsDetailContainer);
