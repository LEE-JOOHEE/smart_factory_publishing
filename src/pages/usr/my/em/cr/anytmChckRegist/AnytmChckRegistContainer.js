import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import SptCnfirmRegist01 from 'pages/usr/my/em/er/sptCnfirmRegist/comp/SptCnfirmRegist01';
import SptEvlRgr02 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr02';
import AnytmChckRegist01 from 'pages/usr/my/em/cr/anytmChckRegist/comp/AnytmChckRegist01';
import SptEvlRgr05 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr05';

const AnytmChckRegistContainer = ({ ojtKey, setPageType }) => {
  const [arrRjctInfo, setArrRjctInfo] = useState([]);
  const [arrAtchFile, setArrAtchFile] = useState([]);

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
    }
    setArrRjctInfo(tmp1);
    setArrAtchFile(tmp2);
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
          <AnytmChckRegist01 />
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

export default React.memo(AnytmChckRegistContainer);
