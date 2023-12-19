import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';

import SptResultRegist01 from 'pages/mg/tr/sc/sr/sptResultRegist/comp/SptResultRegist01';
import SptResultRegist02 from 'pages/mg/tr/sc/sr/sptResultRegist/comp/SptResultRegist02';
import SptResultRegist03 from 'pages/mg/tr/sc/sr/sptResultRegist/comp/SptResultRegist03';
import SptEvlRegist03DC from 'pages/mg/tr/se/sr/sptEvlRegist/comp/SptEvlRegist03DC';

const SptResultRegistContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가계획
  const [arrEvlPlan, setArrEvlPlan] = useState([]);

  const getArrEvlPlan = () => {
    setArrEvlPlan([]);
  };

  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };
  const [dgtlVisible, setDgtlVisible] = useState(false);
  const evalPlanRowClick = () => {
    setDgtlVisible(!dgtlVisible);
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c', 'd']));

    let tmp1 = [];
    for (let idx = 1; idx <= 3; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '평가T1',
        d: '서울테크노파크',
        e: '평가_서울계획' + idx,
        f: '2022-10-01~2022-10-31',
        g: '담당자',
        h: '3',
        i: '2',
      });
    }
    for (let idx = 7; idx <= 10; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '디지털클러스터',
        d: '서울테크노파크',
        e: '평가_서울계획' + idx,
        f: '2022-10-01~2022-10-31',
        g: '담당자',
        h: '3',
        i: '2',
      });
    }
    setArrEvlPlan(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SptResultRegist01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SptResultRegist02
            arrEvlPlan={arrEvlPlan}
            evalPlanRowClick={evalPlanRowClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {dgtlVisible ? (
            <SptEvlRegist03DC ojtGroupCodes={ojtGroupCodes} />
          ) : (
            <SptResultRegist03 ojtGroupCodes={ojtGroupCodes} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SptResultRegistContainer);
