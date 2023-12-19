import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import SprvisnCorecActpln01 from 'pages/usr/bm/rs/sr/sprvisnCorecActpln/comp/SprvisnCorecActpln01';
import SprvisnCorecActpln02 from 'pages/usr/bm/rs/sr/sprvisnCorecActpln/comp/SprvisnCorecActpln02';
import TaskReqstAtch01 from 'pages/usr/bm/tr/tr/taskReqstAtch/comp/TaskReqstAtch01';

const SprvisnCorecActplnContainer = ({ ojtKey, setPageType }) => {
  const [arrSpvsRslt, setArrSpvsRslt] = useState([]);

  const [arrAtchFile, setArrAtchFile] = useState([]);

  const cancelSubmitClick = () => {
    Modal.info({ title: '제출취소' });
  };
  const saveClick = () => {
    Modal.info({ title: '저장' });
  };

  const submitClick = () => {
    Modal.info({ title: '제출완료' });
  };

  const lstClick = () => {
    setPageType('LIST');
  };

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
    let tmp1 = [];
    let tmp2 = [];
    for (let i = 1; i < 50; i++) {
      tmp1.push({
        key: i,
        a1: '최종감리결과서',
        a2: '2021년 스마트공장 감리보고서',
        a3: '2021-03-02',
        a4: '712KB',
      });
      tmp2.push({
        key: i,
        a: '사업계획서',
        b: '.hwp',
        c: 'O',
        d: '사업계획서.hwp(13KB)',
      });
    }
    setArrSpvsRslt(tmp1);
    setArrAtchFile(tmp2);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnCorecActpln01 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnCorecActpln02 arrSpvsRslt={arrSpvsRslt} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstAtch01 arrAtchFile={arrAtchFile} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-usr-btn-process-default"
            onClick={lstClick}
          >
            목록
          </Button>
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
            onClick={cancelSubmitClick}
          >
            제출취소
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-warning"
            onClick={submitClick}
          >
            제출완료
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SprvisnCorecActplnContainer);
