import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';

import BsnsActplnDetail01 from 'pages/usr/bm/sm/ba/bsnsActplnDetail/comp/BsnsActplnDetail01';
import BsnsActplnDetail02 from 'pages/usr/bm/sm/ba/bsnsActplnDetail/comp/BsnsActplnDetail02';
import BsnsActplnDetail03 from 'pages/usr/bm/sm/ba/bsnsActplnDetail/comp/BsnsActplnDetail03';

import TaskReqstWct02 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct02';
import TaskReqstWct03 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct03';
import TaskReqstWct04 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct04';
import TaskReqstWct05 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct05';
import TaskReqstWct06 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct06';
import TaskReqstWct07 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct07';
import TaskReqstWct08 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct08';
import TaskReqstWct09 from 'pages/usr/bm/ie/pm/prpslManage/comp/TaskReqstWct09';

const BsnsActplnDetailContainer = ({ ojtKey, setPageType }) => {
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

  const saveClick = (arr) => {
    Modal.info({ title: `${JSON.stringify(arr)} 저장` });
  };

  const lstClick = () => {
    setPageType('LIST');
  };

  const bizAplyLinkClick = () => {
    Modal.info({ title: '과제정보(기본정보) 페이지 이동' });
  };

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
    let tmp1 = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp1.push({
        key: idx,
        a1: 'IT PMO',
        a2: '김영수',
        a3: '0',
        a4: '22',
        a5: 100000 * idx,
        a6: '',
      });
    }
    setArrLbrcoComputationDsctn(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <BsnsActplnDetail01 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <BsnsActplnDetail02 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <BsnsActplnDetail03
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
            saveClick={saveClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct03
            arrSwDvlopCt={arrSwDvlopCt}
            setArrSwDvlopCt={setArrSwDvlopCt}
            saveClick={saveClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct04
            arrHwPurchaseCost={arrHwPurchaseCost}
            setArrHwPurchaseCost={setArrHwPurchaseCost}
            saveClick={saveClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct05
            arrSwPurchaseCost={arrSwPurchaseCost}
            setArrSwPurchaseCost={setArrSwPurchaseCost}
            saveClick={saveClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct06
            arrNwPurchaseCost={arrNwPurchaseCost}
            setArrNwPurchaseCost={setArrNwPurchaseCost}
            saveClick={saveClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct07
            arrEtcCost={arrEtcCost}
            setArrEtcCost={setArrEtcCost}
            saveClick={saveClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct08
            arrIndcEntBizMngHnfLbrco={arrIndcEntBizMngHnfLbrco}
            setArrIndcEntBizMngHnfLbrco={setArrIndcEntBizMngHnfLbrco}
            saveClick={saveClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstWct09
            arrCloudSrvcUtztnCt={arrCloudSrvcUtztnCt}
            setArrCloudSrvcUtztnCt={setArrCloudSrvcUtztnCt}
            saveClick={saveClick}
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
            onClick={bizAplyLinkClick}
          >
            사업신청 연계
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BsnsActplnDetailContainer);
