import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import SptEvlPlan01 from 'pages/mg/tr/se/se/sptEvlPlan/comp/SptEvlPlan01';
import SptEvlPlan02 from 'pages/mg/tr/se/se/sptEvlPlan/comp/SptEvlPlan02';
import SptEvlPlan03 from 'pages/mg/tr/se/se/sptEvlPlan/comp/SptEvlPlan03';
import SptEvlPlan04 from 'pages/mg/tr/se/se/sptEvlPlan/comp/SptEvlPlan04';
import SptFoundngDgtl03 from 'pages/mg/tr/se/se/sptEvlPlan/comp/SptFoundngDgtl03';
import SptFoundngDgtl04 from 'pages/mg/tr/se/se/sptEvlPlan/comp/SptFoundngDgtl04';

import { getListCommonCd } from 'components/common/Common';

const SptEvlPlanContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가계획
  const [arrEvlPlan, setArrEvlPlan] = useState([]);

  //과제목록
  const [arrAsmtLst, setArrAsmtLst] = useState([]);

  //평가위원목록
  const [arrEvlMfcmLst, setArrEvlMfcmLst] = useState([]);

  //평가기관목록
  const [arrEvlInstLst, setArrEvlInstLst] = useState([]);

  const getArrEvlPlan = () => {
    setArrEvlPlan([]);
  };
  const getArrAsmtLst = () => {
    setArrAsmtLst([]);
  };
  const getArrEvlMfcmLst = () => {
    setArrEvlMfcmLst([]);
  };

  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };
  const [compRenderName, setCompRenderName] = useState('');

  const evalPlanRowClick = (record) => {
    setCompRenderName(record.l);
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    let tmp1 = [];
    for (let idx = 1; idx <= 2; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '평가T1',
        d: '서울테크노파크',
        e: '서울',
        f: '평가_서울계획1',
        g: '2022-10-01~2022-10-31',
        h: '담당자',
        i: '3',
        j: '0',
        k: 'N',
        l: 'NORMAL',
      });
    }
    for (let idx = 3; idx <= 4; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '평가T1',
        d: '서울테크노파크',
        e: '서울',
        f: '평가_서울계획1_DC',
        g: '2022-10-01~2022-10-31',
        h: '담당자',
        i: '3',
        j: '0',
        k: 'N',
        l: 'DC',
      });
    }
    setArrEvlPlan(tmp1);

    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a: idx,
        b: 'S01',
        c: 'TEST과제_1',
        d: '기업명1',
        e: '서울',
        f: '2022-10-10',
        g: '9:00~18:00',
        h: '2',
        i: '2022-09-15 15:30:00',
      });
    }
    setArrAsmtLst(tmp2);

    let tmp3 = [];
    for (let idx = 1; idx <= 8; idx++) {
      tmp3.push({
        key: idx,
        a: idx,
        b: '정위원',
        c: '20222-09-15 15:40:00',
        d: '위원1',
        e: '15',
        f: '서울',
        g: '서울',
        h: '소속',
        i: '직위',
        j: 'mail@mail.co.kr',
        k: '010-0000-0000',
      });
    }
    setArrEvlMfcmLst(tmp3);

    let tmp4 = [];
    for (let idx = 1; idx <= 4; idx++) {
      tmp4.push({
        key: idx,
        a: idx,
        b: '도입기업 대표기업1',
        c: '대표기업명1',
        d: '서울',
        e: '20222-09-15',
        f: '09:00~18:00',
        g: 4,
        h: '20222-09-15 15:40:00',
        i: '정위원',
        j: '위원' + idx,
      });
    }

    for (let idx = 5; idx <= 6; idx++) {
      tmp4.push({
        key: idx,
        a: idx,
        b: '도입기업 대표기업2',
        c: '대표기업명2',
        d: '서울',
        e: '20222-09-15',
        f: '09:00~18:00',
        g: 2,
        h: '20222-09-15 15:40:00',
        i: '정위원' + idx,
        j: '위원' + idx,
      });
    }
    setArrEvlInstLst(tmp4);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SptEvlPlan01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SptEvlPlan02
            arrEvlPlan={arrEvlPlan}
            evalPlanRowClick={evalPlanRowClick}
          />
        </Col>
      </Row>

      {compRenderName === 'DC' ? (
        <>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <SptFoundngDgtl03 arrAsmtLst={arrAsmtLst} />
            </Col>
          </Row>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <SptFoundngDgtl04 arrEvlInstLst={arrEvlInstLst} />
            </Col>
          </Row>
        </>
      ) : compRenderName === 'NORMAL' ? (
        <>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <SptEvlPlan03 arrAsmtLst={arrAsmtLst} />
            </Col>
          </Row>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <SptEvlPlan04 arrEvlMfcmLst={arrEvlMfcmLst} />
            </Col>
          </Row>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default React.memo(SptEvlPlanContainer);
