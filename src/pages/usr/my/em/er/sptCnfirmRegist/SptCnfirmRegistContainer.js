import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import SptCnfirmRegist01 from 'pages/usr/my/em/er/sptCnfirmRegist/comp/SptCnfirmRegist01';
import SptEvlRgr02 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr02';
import SptCnfirmRegist02 from 'pages/usr/my/em/er/sptCnfirmRegist/comp/SptCnfirmRegist02';
import SptCnfirmRegist03 from 'pages/usr/my/em/er/sptCnfirmRegist/comp/SptCnfirmRegist03';
import SptEvlRgr04 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr04';
import SptEvlRgr05 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr05';

const SptCnfirmRegistContainer = ({ ojtKey, setPageType }) => {
  const [arrRjctInfo, setArrRjctInfo] = useState([]);
  const [arrSptIdntyRptpAtch, setArrSptIdntyRptpAtch] = useState([]);

  const saveClick = () => {
    Modal.info({ title: 'saveClick' });
  };

  const submitClick = () => {
    setPageType('LIST');
  };

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
    let tmp1 = [];
    let tmp2 = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp1.push({
        key: idx,
        a: '현장확인결과보고서',
        b: idx % 2 ? 'O' : 'X',
        c: 'hwp, docx, pdf',
        d: '보고서첨부파일.pdf',
      });
      tmp2.push({
        key: idx,
        a: '2022-10-01 12:05',
        b: '반려 사유',
      });
    }
    setArrSptIdntyRptpAtch(tmp1);
    setArrRjctInfo(tmp2);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptCnfirmRegist01 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRgr02 arrRjctInfo={arrRjctInfo} />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptCnfirmRegist02 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptCnfirmRegist03 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRgr04 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRgr05
            title={'현장 확인 보고서 첨부'}
            arrAtchFile={arrSptIdntyRptpAtch}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-usr-btn-process-fine"
            onClick={saveClick}
          >
            저장
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-warning"
            onClick={submitClick}
          >
            제출
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SptCnfirmRegistContainer);
