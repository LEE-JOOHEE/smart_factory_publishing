import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';

import SptEvlRegist01 from 'pages/mg/tr/se/sr/sptEvlRegist/comp/SptEvlRegist01';
import SptEvlRegist02 from 'pages/mg/tr/se/sr/sptEvlRegist/comp/SptEvlRegist02';
import SptEvlRegist03 from 'pages/mg/tr/se/sr/sptEvlRegist/comp/SptEvlRegist03';
import SptEvlRegist03DC from 'pages/mg/tr/se/sr/sptEvlRegist/comp/SptEvlRegist03DC';

const SptEvlRegistContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가계획
  const [arrEvlPlan, setArrEvlPlan] = useState([]);

  const [compRenderName, setCompRenderName] = useState('');

  const getArrEvlPlan = () => {
    setArrEvlPlan([]);
  };

  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };

  const evalPlanRowClick = (record) => {
    setCompRenderName(record.j);
    // console.log(record.j);
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
        j: 'NORMAL',
      });
    }
    for (let idx = 4; idx <= 6; idx++) {
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
        j: 'DC',
      });
    }
    setArrEvlPlan(tmp1);
  }, []);

  useEffect(() => {
    if (arrEvlPlan && arrEvlPlan.length > 0) {
      evalPlanRowClick(arrEvlPlan[0]);
    }
  }, [arrEvlPlan]);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRegist01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SptEvlRegist02
            arrEvlPlan={arrEvlPlan}
            evalPlanRowClick={evalPlanRowClick}
          />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {compRenderName === 'DC' ? (
            <SptEvlRegist03DC ojtGroupCodes={ojtGroupCodes} />
          ) : compRenderName === 'NORMAL' ? (
            <SptEvlRegist03 ojtGroupCodes={ojtGroupCodes} />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SptEvlRegistContainer);
