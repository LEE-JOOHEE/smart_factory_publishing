import React, { useEffect, useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Button, Col, Modal, Row } from 'antd';
import 'css/Common.css';

import SptExmntPopup01 from 'pages/mg/tr/se/sr/sptExmntPopup/comp/SptExmntPopup01';
import SptExmntPopup02 from 'pages/mg/tr/se/sr/sptExmntPopup/comp/SptExmntPopup02';
import SptExmntPopup03 from 'pages/mg/tr/se/sr/sptExmntPopup/comp/SptExmntPopup03';
import SptExmntPopup04 from 'pages/mg/tr/se/sr/sptExmntPopup/comp/SptExmntPopup04';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';

const SptExmntPopup = ({ sptExmntPopupPageOpen, setSptExmntPopupPageOpen }) => {
  const closeClick = () => {
    setSptExmntPopupPageOpen(false);
  };

  return (
    <>
      <Modal
        key="SptExmntPopupPage"
        open={sptExmntPopupPageOpen}
        title="현장평가 결과검토"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1300}
        footer={[
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Col span={24} className="other">
            <SptExmntPopup01 />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Col span={24} className="other">
            <SptExmntPopup02 />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Col span={24} className="other">
            <SptExmntPopup03 />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Col span={24} className="other">
            <CmAtchDoc title={'첨부파일'} />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Col span={24} className="other">
            <SptExmntPopup04 />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SptExmntPopup;
