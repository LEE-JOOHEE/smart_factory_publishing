import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal } from 'antd';
import 'css/Common.css';
import CmAplyAsmtBsc from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtBsc';
import CmAplyAsmtIndcEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtIndcEnt';
import CmAplyAsmtPjtco from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPjtco';
import CmAplyAsmtSplyEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSplyEnt';
import CmAplyAsmtPvltrt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPvltrt';
import CmAplyAsmtRsltIdx from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtRsltIdx';
import CmAplyAsmtEmplym from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtEmplym';
import CmAplyAsmtHstry from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtHstry';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
import SplemntHistPopup from 'pages/mg/tr/re/re/excBsnsDetail/popup/SplemntHistPopup';

const InsttRcritDetailContainer = ({ ojtKey, setPageType }) => {
  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
  }, []);

  const listClick = () => {
    setPageType('LIST');
  };

  const atchFileSaveClick = () => {
    Modal.info({ title: 'atchFileSaveClick' });
  };

  const rvwStbltClick = () => {
    Modal.info({ title: 'rvwStbltClick' });
  };
  const rvwPrgrsClick = () => {
    Modal.info({ title: 'rvwPrgrsClick' });
  };
  const rvwImproptClick = () => {
    Modal.info({ title: 'rvwImproptClick' });
  };

  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Button type={'link'} className="eu-btn-link" onClick={openClick}>
            보완이력 : 4건
          </Button>
          <CmAplyAsmtBsc key={'InsttRcritDetail'} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CmAplyAsmtIndcEnt key={'InsttRcritDetail'} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CmAplyAsmtPjtco key={'InsttRcritDetail'} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CmAplyAsmtSplyEnt key={'InsttRcritDetail'} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CmAplyAsmtPvltrt key={'InsttRcritDetail'} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CmAplyAsmtRsltIdx key={'InsttRcritDetail'} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CmAtchDoc title={'첨부문서'} key={'InsttRcritDetail'} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CmAplyAsmtEmplym key={'InsttRcritDetail'} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CmAplyAsmtHstry key={'InsttRcritDetail'} />
        </Col>
      </Row>

      <Row className="eu-row-page-btn-layout">
        <Col span={24}>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-default"
            onClick={listClick}
          >
            목록
          </Button>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-default"
            onClick={atchFileSaveClick}
          >
            첨부문서 저장
          </Button>
          <Button
            size="large"
            className="eu-btn-process-warning"
            onClick={rvwPrgrsClick}
          >
            검토 중
          </Button>
          <Button
            size="large"
            className="eu-btn-process-warning"
            onClick={rvwStbltClick}
          >
            검토 적합
          </Button>
          <Button
            size="large"
            className="eu-btn-process-error"
            onClick={rvwImproptClick}
          >
            검토 부적합
          </Button>
        </Col>
      </Row>
      <SplemntHistPopup splemntHistOpen={open} setSplemntHistOpen={setOpen} />
    </>
  );
};

export default React.memo(InsttRcritDetailContainer);
