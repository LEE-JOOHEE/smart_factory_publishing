import React, { useEffect, useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Button, Col, Modal, Row } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';

import SptExmntPopup01 from 'pages/mg/tr/sc/sr/sptExmntPopup/comp/SptExmntPopup01';
import SptExmntPopup02 from 'pages/mg/tr/sc/sr/sptExmntPopup/comp/SptExmntPopup02';
import SptExmntPopup03 from 'pages/mg/tr/sc/sr/sptExmntPopup/comp/SptExmntPopup03';
import SptExmntPopup04 from 'pages/mg/tr/sc/sr/sptExmntPopup/comp/SptExmntPopup04';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';

const SptExmntPopupPage = ({
  sptExmntPopupPageOpen,
  setSptExmntPopupPageOpen,
}) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가계획
  const [arrEvlPlan, setArrEvlPlan] = useState([]);

  const [compRenderName, setCompRenderName] = useState('');

  const getArrEvlPlan = () => {
    setArrEvlPlan([]);
  };

  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };

  const evalPlanRowClick = (record) => {
    setCompRenderName(record.j);
    console.log(record.j);
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c', 'd']));
  }, []);

  const closeClick = () => {
    setSptExmntPopupPageOpen(false);
  };

  return (
    <>
      <Modal
        key="SptExmntPopupPage"
        open={sptExmntPopupPageOpen}
        title="현장확인 결과검토"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1500}
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
          <Col span={24}>
            <SptExmntPopup01 />
          </Col>
        </Row>
        <Row className="eu-row-page-comp-layout">
          <Col span={24}>
            <SptExmntPopup02 />
          </Col>
        </Row>
        <Row className="eu-row-page-comp-layout">
          <Col span={24}>
            <SptExmntPopup03 />
          </Col>
        </Row>
        <Row className="eu-row-page-comp-layout">
          <Col span={24}>
            <CmAtchDoc title={'첨부파일'} />
          </Col>
        </Row>
        <Row className="eu-row-page-comp-layout">
          <Col span={24}>
            <SptExmntPopup04 />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SptExmntPopupPage;
