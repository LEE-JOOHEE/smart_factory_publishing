import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';

import { getListCommonCd } from 'components/common/Common';

import TechEvlCmit01 from 'pages/mg/tr/te/ec/techEvlCmit/comp/TechEvlCmit01';
import TechEvlCmit02 from 'pages/mg/tr/te/ec/techEvlCmit/comp/TechEvlCmit02';
import TechEvlCmit03 from 'pages/mg/tr/te/ec/techEvlCmit/comp/TechEvlCmit03';
import TechEvlCmit04 from 'pages/mg/tr/te/ec/techEvlCmit/comp/TechEvlCmit04';
import TechEvlCmit05 from 'pages/mg/tr/te/ec/techEvlCmit/comp/TechEvlCmit05';
import TechEvlCmit06 from 'pages/mg/tr/te/ec/techEvlCmit/comp/TechEvlCmit06';

const TechEvlCmitContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가위원회
  const [arrEvlCmit, setArrEvlCmit] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };
  const evalCmitClick = (record) => {
    console.log('keyValue : ', record);
    Modal.info({
      title: 'evalCmitClick',
    });
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c', 'd', 'e', 'f', 'g']));

    let tmp1 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '사업명',
        d: '수행기관',
        e: '기술평가',
        f: '심사평가',
        g: '위원회' + idx,
        h: '평가지' + idx,
        i: '간사명',
        j: '2022-10-01~2022-10-31',
        k: 'N',
      });
    }
    setArrEvlCmit(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <TechEvlCmit01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <TechEvlCmit02
            arrEvlCmit={arrEvlCmit}
            evalCmitClick={evalCmitClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <TechEvlCmit03 />
        </Col>
      </Row>

      {/* 
        TechEvlCmit04 는 "eu-row-page-comp-layout" 1row에 table을 2개 넣기 위한 기존레이아웃
        디자인 작업 후
        TechEvlCmit05, TechEvlCmit06을 추가하여 내용을 분리
        1row에 "eu-row-page-comp-layout"을 2개로 분할하여 각각 table을 넣는 레이아웃으로 변경함

        ■ 아래 주석처리된 <TechEvlCmit04 />로 화면 확인바랍니다.
      */}

      {/* <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <TechEvlCmit04 />
        </Col>
      </Row> */}

      <Row gutter={(0, 20)}>
        <Col span={14}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <TechEvlCmit05 />
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <TechEvlCmit06 />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(TechEvlCmitContainer);
