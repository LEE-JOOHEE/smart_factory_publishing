import React, { useState } from 'react';
import { Button, Col, Modal, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const CmSmsNtfctn = ({ cmSmsNtfctnPopupOpen, setCmSmsNtfctnPopupOpen }) => {
  const closeClick = () => {
    setCmSmsNtfctnPopupOpen(false);
  };
  return (
    <>
      <Modal
        key="CmSmsNtfctn"
        open={cmSmsNtfctnPopupOpen}
        title="문자메세지 보내기"
        onCancel={closeClick}
        width={900}
        footer={[
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>CmSmsNtfctn</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            {/* 우측 버튼 */}
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>0002_SMS통보</Col>
        </Row>
      </Modal>
    </>
  );
};

export default CmSmsNtfctn;
