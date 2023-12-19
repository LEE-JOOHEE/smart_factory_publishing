import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import SptCnfirmRegist01 from 'pages/usr/my/em/er/sptCnfirmRegist/comp/SptCnfirmRegist01';
import SptEvlRgr02 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr02';
import MiddleChckRegist01 from 'pages/usr/my/em/cr/middleChckRegist/comp/MiddleChckRegist01';
import ComptChckRegist01 from 'pages/usr/my/em/cr/comptChckRegist/comp/ComptChckRegist01';
import SptEvlRgr05 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr05';

const ComptChckRegistContainer = ({ ojtKey, setPageType }) => {
  const [arrRjctInfo, setArrRjctInfo] = useState([]);
  const [arrAtchFile, setArrAtchFile] = useState([]);
  const [arrComptRptpAtchFile, setArrComptRptpAtchFile] = useState([]);

  const saveClick = () => {
    Modal.info({ title: 'saveClick' });
  };

  const submitClick = () => {
    setPageType('LIST');
  };

  useEffect(() => {
    Modal.info({ title: `ojtKey: ${JSON.stringify(ojtKey)}` });
    let tmp1 = [];
    let tmp2 = [];
    let tmp3 = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp1.push({
        key: idx,
        a: '2022-10-01 12:05',
        b: '반려 사유',
      });
      tmp2.push({
        key: idx,
        a: '현장평가결과보고서',
        b: idx % 2 ? 'O' : 'X',
        c: 'hwp,docs,pdf',
        d: '보고서첨부파일.pdf',
      });
      tmp3.push({
        key: idx,
        a: '중간보고서',
        b: 'O',
        c: '중간보고서.hwp (1024kb)',
      });
    }
    setArrRjctInfo(tmp1);
    setArrAtchFile(tmp2);
    setArrComptRptpAtchFile(tmp3);
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
          <MiddleChckRegist01
            title={'완료보고서'}
            arrAtchFile={arrComptRptpAtchFile}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ComptChckRegist01 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRgr05 arrAtchFile={arrAtchFile} />
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

export default React.memo(ComptChckRegistContainer);
