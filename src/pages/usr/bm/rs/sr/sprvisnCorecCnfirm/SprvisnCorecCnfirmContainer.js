import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import SprvisnCorecActpln01 from 'pages/usr/bm/rs/sr/sprvisnCorecActpln/comp/SprvisnCorecActpln01';
import SprvisnCorecConfirm01 from 'pages/usr/bm/rs/sr/sprvisnCorecCnfirm/comp/SprvisnCorecCnfirm01';
import SprvisnCorecConfirm02 from 'pages/usr/bm/rs/sr/sprvisnCorecCnfirm/comp/SprvisnCorecCnfirm02';
import SprvisnCorecConfirm03 from 'pages/usr/bm/rs/sr/sprvisnCorecCnfirm/comp/SprvisnCorecCnfirm03';
import SprvisnLastResult02 from 'pages/usr/bm/rs/sr/sprvisnLastResult/comp/SprvisnLastResult02';
import TaskReqstAtch01 from 'pages/usr/bm/tr/tr/taskReqstAtch/comp/TaskReqstAtch01';

const SprvisnCorecCnfirmContainer = ({ ojtKey, setPageType }) => {
  const [arrFixActnPlanRptp, setArrFixActnPlanRptp] = useState([
    {
      key: 1,
      a1: '최종감리 시정조치계획서',
      a2: '2021년 스마트공장 감리보고서',
      a3: '2021-03-02',
      a4: '712KB',
    },
    {
      key: 2,
      a1: '최종감리 시정조치결과서',
      a2: '2021년 스마트공장 감리시정조치결과서',
      a3: '2021-03-02',
      a4: '25KB',
    },
  ]);
  const [arrSpvsEvlSmry, setArrSpvsEvlSmry] = useState([
    { key: 1, a1: '사업관리', a2: '보완', a3: '' },
    { key: 2, a1: '시스템구축', a2: '적정', a3: '' },
    { key: 3, a1: '시스템운영', a2: '부정적', a3: '' },
  ]);
  const [ojtLvlIdntyRslt, setOjtLvlIdntyRslt] = useState({
    a1: 0,
    a2: 0,
    a3: '666.30',
  });
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
    for (let idx = 1; idx < 20; idx++) {
      tmp1.push({
        key: idx,
        a: '사업계획서',
        b: '.hwp',
        c: 'O',
        d: '사업계획서.hwp(13KB)',
      });
    }
    setArrAtchFile(tmp1);
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
          <SprvisnCorecConfirm01 arrFixActnPlanRptp={arrFixActnPlanRptp} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnCorecConfirm02 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnCorecConfirm03
            arrSpvsEvlSmry={arrSpvsEvlSmry}
            setArrSpvsEvlSmry={setArrSpvsEvlSmry}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnLastResult02
            ojtLvlIdntyRslt={ojtLvlIdntyRslt}
            setOjtLvlIdntyRslt={setOjtLvlIdntyRslt}
          />
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

export default React.memo(SprvisnCorecCnfirmContainer);
