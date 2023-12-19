import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import SprvisnLastResult01 from 'pages/usr/bm/rs/sr/sprvisnLastResult/comp/SprvisnLastResult01';
import SprvisnLastResult02 from 'pages/usr/bm/rs/sr/sprvisnLastResult/comp/SprvisnLastResult02';
import SprvisnLastResult03 from 'pages/usr/bm/rs/sr/sprvisnLastResult/comp/SprvisnLastResult03';
import TaskReqstAtch01 from 'pages/usr/bm/tr/tr/taskReqstAtch/comp/TaskReqstAtch01';
import TaskReqstWct04 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct04';
import TaskReqstWct05 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct05';
import TaskReqstWct06 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct06';

const SprvisnLastResultContainer = ({ ojtKey, setPageType }) => {
  const [ojtDetailInfo, setOjtDetailInfo] = useState({
    a1: '없음',
    a2: '2021-I2R-023-000001',
    a3: '2021',
    a4: '2021_스마트공장 구축 및 고도화',
    a5: '(주)도입기업_스마트공장 구축 및 고도화',
    a6: '(주)도입기업',
    a7: '(주)공급기업',

    a10: '최종감리',
    a11: '(주)감리기관',
    a12: '홍길동',
    a13: '2021-03-30 ~ 2022-04-11',
    a14: '전체',
    a15: '감리조치필요',
    a16: '',
  });
  const [ojtDetailInfo2, setOjtDetailInfo2] = useState({
    a1: '기초',
    a2: 'Level1',
    a3: '0',
    a4: '2021-I2R-023-000001',
    a5: '2021',
    a6: '2021_스마트공장 구축 및 고도화',
    a7: '(주)도입기업_스마트공장 구축 및 고도화',
    a8: '(주)도입기업',
    a9: '(주)공급기업',
  });

  const [arrAttFpFile, setArrAttFpFile] = useState([
    {
      a1: 'FP(기능점수)산정자료',
      a2: '사업비 산출내역서',
      a3: '2021-07-22',
      a4: '76KB',
    },
  ]);
  const [arrAttFile, setArrAttFile] = useState([
    {
      a1: '완료보고',
      a2: '(주)도입기업 완료보고서',
      a3: '2021-07-22',
      a4: '760KB',
    },
    {
      a1: '완료보고',
      a2: '(주)도입기업_사업비집행보거서',
      a3: '2021-07-22',
      a4: '7KB',
    },
  ]);
  const [arrSpvsEvlSmry, setArrSpvvsEvlSmry] = useState([
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

  //HW 구입비
  const [arrHwPurchaseCost, setArrHwPurchaseCost] = useState([
    {
      key: 1,
      a1: 'AI',
      a2: '',
      a3: '국산',
      a4: '한국',
      a5: '',
      a6: 3100000,
      a7: 3.0,
    },
  ]);
  //SW 구입비
  const [arrSwPurchaseCost, setArrSwPurchaseCost] = useState([
    {
      key: 1,
      a1: 'AI',
      a2: '',
      a3: '국산',
      a4: '한국',
      a5: '',
      a6: 3100000,
      a7: 3.0,
    },
  ]);
  //NW 구입비
  const [arrNwPurchaseCost, setArrNwPurchaseCost] = useState([
    {
      key: 1,
      a1: '클라우드',
      a2: '',
      a3: '국산',
      a4: '한국',
      a5: '',
      a6: 3100000,
      a7: 3.0,
    },
  ]);

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
          <SprvisnLastResult01
            ojtDetailInfo={ojtDetailInfo}
            arrAttFpFile={arrAttFpFile}
            arrAttFile={arrAttFile}
            arrSpvsEvlSmry={arrSpvsEvlSmry}
            setArrSpvvsEvlSmry={setArrSpvvsEvlSmry}
            setOjtDetailInfo={setOjtDetailInfo}
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
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct04
            arrHwPurchaseCost={arrHwPurchaseCost}
            setArrHwPurchaseCost={setArrHwPurchaseCost}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct05
            arrSwPurchaseCost={arrSwPurchaseCost}
            setArrSwPurchaseCost={setArrSwPurchaseCost}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct06
            arrNwPurchaseCost={arrNwPurchaseCost}
            setArrNwPurchaseCost={setArrNwPurchaseCost}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnLastResult03 />
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
            onClick={submitClick}
          >
            제출완료
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SprvisnLastResultContainer);
