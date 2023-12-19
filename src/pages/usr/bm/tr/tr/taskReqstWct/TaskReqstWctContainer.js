import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import TaskReqstWct01 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct01';
import TaskReqstWct02 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct02';
import TaskReqstWct03 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct03';
import TaskReqstWct04 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct04';
import TaskReqstWct05 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct05';
import TaskReqstWct06 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct06';
import TaskReqstWct07 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct07';
import TaskReqstWct08 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct08';
import TaskReqstWct09 from 'pages/usr/bm/tr/tr/taskReqstWct/comp/TaskReqstWct09';
import { useHistory } from 'react-router-dom';

const TaskReqstWctContainer = () => {
  const history = useHistory();

  //신청 사업비 내역
  const [arrAplyPjtcoDsctn, setArrAplyPjtcoDsctn] = useState([]);
  // 가격 산출 내역서
  const [arrPriceComputationDsctn, setArrPriceComputationDsctn] = useState([
    {
      a1: 'S/W 개발비',
      a2: 0,
    },
    {
      a1: 'H/W 개발비',
      a2: 37200000,
    },
    {
      a1: 'S/W 구입비',
      a2: 4776583,
    },
    {
      a1: 'N/W 구축비',
      a2: 3300000,
    },
    {
      a1: '기타(할인)비용',
      a2: 456600,
    },
    {
      a1: '도입기업의 사업관리 인력 인건비',
      a2: 8952100,
    },
    {
      a1: '클라우드 기반 서비스 이용료',
      a2: 54718700,
    },
  ]);
  // 공급기업별 사업비내역
  const [splyEntNm, setSplyEntNm] = useState('공급기업 법인명(상호)_1');
  //직접 인건비 산출내역
  const [arrLbrcoComputationDsctn, setArrLbrcoComputationDsctn] = useState([]);
  // SW 개발비
  const [arrSwDvlopCt, setArrSwDvlopCt] = useState([
    { key: 1, a1: '직접인건비', a2: 0, a3: 0, a4: '' },
    { key: 2, a1: '제경비', a2: 0, a3: 0, a4: '' },
    { key: 3, a1: '기술료', a2: 0, a3: 0, a4: '' },
  ]);
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
  //기타(할인) 비용
  const [arrEtcCost, setArrEtcCost] = useState([
    {
      key: 1,
      a1: '기타비용',
      a2: '',
      a3: '국산',
      a4: '한국',
      a5: '',
      a6: 3100000,
      a7: 3.0,
    },
  ]);
  // 도입기업 사업관리 인력 인건비
  const [arrIndcEntBizMngHnfLbrco, setArrIndcEntBizMngHnfLbrco] = useState([
    {
      key: 1,
      a1: '스마트사업 구축',
      a2: '홍길동',
      a3: 4555500,
      a4: 6,
      a5: 20,
    },
  ]);
  // 클라우드 기반 서비스 이용료
  const [arrCloudSrvcUtztnCt, setArrCloudSrvcUtztnCt] = useState([
    {
      key: 1,
      a1: '클라우드 기반 서비스',
      a2: '',
      a3: '',
      a4: 3500000,
      a5: 12,
      a6: '',
    },
  ]);
  const lstClick = () => {
    history.push('/usr/bm/tr/tr/smsDspth');
  };

  const saveClick = () => {
    Modal.info({ title: '저장' });
  };
  useEffect(() => {
    let tmp1 = [];
    let tmp2 = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp1.push({
        key: idx,
        a1: '13,247,900',
        a2: '8,952,100',
        a3: '0',
        a4: 22200000 / idx,
        a5: '15,000,000',
      });
      tmp2.push({
        key: idx,
        a1: 'IT PMO',
        a2: '김영수',
        a3: '0',
        a4: '22',
        a5: 100000 * idx,
        a6: '',
      });
    }
    setArrAplyPjtcoDsctn(tmp1);

    setArrLbrcoComputationDsctn(tmp2);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct01
            arrAplyPjtcoDsctn={arrAplyPjtcoDsctn}
            arrPriceComputationDsctn={arrPriceComputationDsctn}
            splyEntNm={splyEntNm}
            setSplyEntNm={setSplyEntNm}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct02
            arrLbrcoComputationDsctn={arrLbrcoComputationDsctn}
            setArrLbrcoComputationDsctn={setArrLbrcoComputationDsctn}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct03
            arrSwDvlopCt={arrSwDvlopCt}
            setArrSwDvlopCt={setArrSwDvlopCt}
          />
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
          <TaskReqstWct07
            arrEtcCost={arrEtcCost}
            setArrEtcCost={setArrEtcCost}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct08
            arrIndcEntBizMngHnfLbrco={arrIndcEntBizMngHnfLbrco}
            setArrIndcEntBizMngHnfLbrco={setArrIndcEntBizMngHnfLbrco}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct09
            arrCloudSrvcUtztnCt={arrCloudSrvcUtztnCt}
            setArrCloudSrvcUtztnCt={setArrCloudSrvcUtztnCt}
          />
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
        </Col>
      </Row>
    </>
  );
};

export default React.memo(TaskReqstWctContainer);
