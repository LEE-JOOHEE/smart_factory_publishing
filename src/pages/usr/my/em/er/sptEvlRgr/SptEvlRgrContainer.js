import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import SptEvlRgr01 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr01';
import SptEvlRgr02 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr02';
import SptEvlRgr03 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr03';
import SptEvlRgr04 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr04';
import SptEvlRgr05 from 'pages/usr/my/em/er/sptEvlRgr/comp/SptEvlRgr05';

const SptEvlRgrContainer = ({ ojtKey, setPageType }) => {
  const [arrMfmcInfo, setArrMfmcInfo] = useState([]);
  const [arrRjctInfo, setArrRjctInfo] = useState([]);
  const [arrAtchFile, setArrAtchFile] = useState([]);

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
    let tmp1 = [];
    let tmp2 = [];
    let tmp3 = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp1.push({
        key: idx,
        a: '정위원',
        b: `위원${idx}`,
        c: '010-0000-0000',
      });
      tmp2.push({
        key: idx,
        a: '2022-10-01 12:05',
        b: '반려 사유',
      });
      tmp3.push({
        key: idx,
        a: '현장평가결과보고서',
        b: idx % 2 ? 'O' : 'X',
        c: 'hwp,docs,pdf',
        d: '보고서첨부파일.pdf',
      });
    }
    setArrMfmcInfo(tmp1);
    setArrRjctInfo(tmp2);
    setArrAtchFile(tmp3);
  }, []);

  const saveClick = () => {
    Modal.info({ title: 'saveClick' });
  };

  const submitClick = () => {
    setPageType('LIST');
  };

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRgr01 arrMfmcInfo={arrMfmcInfo} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRgr02 arrRjctInfo={arrRjctInfo} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRgr03 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRgr04 />
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

export default React.memo(SptEvlRgrContainer);
