import React, { useState } from 'react';
import { Button, Col, Modal, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const TechSignPopup = ({ cmEvlMfcmSgnPopupOpen, setCmEvlMfcmSgnPopupOpen }) => {
  const closeClick = () => {
    setCmEvlMfcmSgnPopupOpen(false);
  };

  const sgnInitlClick = () => {
    Modal.info({
      title: '서명초기화',
    });
  };
  const sgnCmptn = () => {
    Modal.info({
      title: '서명완료',
    });
  };

  return (
    <>
      <Modal
        key="cmEvlMfcmSgnPopupOpen"
        open={cmEvlMfcmSgnPopupOpen}
        title="평가위원 서명"
        onCancel={closeClick}
        width={800}
        footer={[
          <Button
            key={'sgnInitlClick'}
            className="eu-btn-popup-process-default"
            onClick={sgnInitlClick}
          >
            서명초기화
          </Button>,
          <Button
            key={'sgnCmptn'}
            className="eu-btn-popup-process-default"
            onClick={sgnCmptn}
          >
            서명완료
          </Button>,
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-error"
            onClick={closeClick}
          >
            취소
          </Button>,
        ]}
      >
        {/* <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>TechSignPopup</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
          </Col>
        </Row> */}
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>TechSignPopup</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* 우측 버튼 */}
            </Col>
          </Row>
          <Col span={24}>{/* 내용 */}</Col>
        </Row>
      </Modal>
    </>
  );
};

export default TechSignPopup;
