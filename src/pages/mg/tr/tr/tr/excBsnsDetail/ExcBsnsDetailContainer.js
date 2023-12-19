import React, { useState } from 'react';

import 'css/Common.css';

import { Button, Col, Modal, Row } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
import CmAplyAsmtBsc from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtBsc';
import CmAplyAsmtIndcEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtIndcEnt';
import CmAplyAsmtPjtco from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPjtco';
import CmAplyAsmtSplyEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSplyEnt';
import CmAplyAsmtPvltrt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPvltrt';
import CmAplyAsmtRsltIdx from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtRsltIdx';
import CmAplyAsmtSrvy from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSrvy';
import CmAplyAsmtEmplym from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtEmplym';
import CmAplyAsmtHstry from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtHstry';

const ExcBsnsDetailContainer = () => {
  const [editable, setEditable] = useState(false);

  // 사업비내역
  const [aplyAsmtPjtcoOpen, setAplyAsmtPjtcoOpen] = useState(false);
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
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 과제 기본 정보 */}
          <CmAplyAsmtBsc editable={editable} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 도입 기업 정보 */}
          <CmAplyAsmtIndcEnt editable={false} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout pb-12">
        {/* 사업비내역 */}
        <Col span={12}>
          <TitleComp>사업비내역</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            type="eu-btn-dropdown-arrow"
            className="eu-btn-dropdown-arrow"
            onClick={() => {
              if (aplyAsmtPjtcoOpen) aplyAsmtPjtcoClose();
              else aplyAsmtPjtcoShow();
            }}
          >
            {!aplyAsmtPjtcoOpen ? <DownOutlined /> : <UpOutlined />}
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

      <Row className="eu-row-page-btn-layout">
        <Col span={24}></Col>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-process-warning"
            onClick={listClick}
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ExcBsnsDetailContainer);
