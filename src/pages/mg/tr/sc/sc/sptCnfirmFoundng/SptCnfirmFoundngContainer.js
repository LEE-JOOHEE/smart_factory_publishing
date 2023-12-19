import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import SptCnfirmFoundng01 from 'pages/mg/tr/sc/sc/sptCnfirmFoundng/comp/SptCnfirmFoundng01';
import SptCnfirmFoundng02 from 'pages/mg/tr/sc/sc/sptCnfirmFoundng/comp/SptCnfirmFoundng02';
import SptCnfirmFoundng03 from 'pages/mg/tr/sc/sc/sptCnfirmFoundng/comp/SptCnfirmFoundng03';
import SptCnfirmFoundng04 from 'pages/mg/tr/sc/sc/sptCnfirmFoundng/comp/SptCnfirmFoundng04';
import SptCnfirmFoundng05 from 'pages/mg/tr/sc/sc/sptCnfirmFoundng/comp/SptCnfirmFoundng05';
import SptCnfirmFoundng06 from 'pages/mg/tr/sc/sc/sptCnfirmFoundng/comp/SptCnfirmFoundng06';
import { getListCommonCd } from 'components/common/Common';

const SptCnfirmFoundngContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //평가계획
  const [arrEvlPlan, setArrEvlPlan] = useState([]);

  //과제목록
  const [arrAsmtLst, setArrAsmtLst] = useState([]);

  //평가위원목록
  const [arrEvlMfcmLst, setArrEvlMfcmLst] = useState([]);

  //과제목록
  const [arrDgtlAsmtLst, setArrDgtlAsmtLst] = useState([]);

  //평가위원목록
  const [arrDgtlEvlMfcmLst, setArrDgtlEvlMfcmLst] = useState([]);

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    let tmp1 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '평가T1',
        d: '서울테크노파크',
        e: '평가_서울계획1',
        f: '2022-10-01~2022-10-31',
        g: '담당자',
        h: '3',
        i: '0',
        j: 'N',
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
    for (let idx = 1; idx <= 10; idx++) {
      tmp4.push({
        key: idx,
        a: idx,
        b: 'S01',
        c: '과제명',
        d: '기업명',
        e: '기업명',
        f: '2',
        g: '기업명',
        h: '1',
        i: '3',
      });
    }
    setArrDgtlAsmtLst(tmp4);

    let tmp5 = [];

    for (let idx = 1; idx <= 2; idx++) {
      tmp5.push({
        key: idx,
        a: idx,
        b: '도입기업 대표기업',
        c: '대표기업명',
        d: '2022-10-10',
        e: '15',
        f: '09:00 ~ 18:00',
        g: 2,
        h: '2022-09-15 15:30:00',
        i: '정위원',
        j: `위원${idx}`,
      });
    }
    setArrDgtlEvlMfcmLst(tmp5);
  }, []);

  const [dgtlVisible, setDgtlVisible] = useState(false);
  const dgtlVisibleClick = () => {
    setDgtlVisible(!dgtlVisible);
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SptCnfirmFoundng01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SptCnfirmFoundng02
            arrEvlPlan={arrEvlPlan}
            dgtlVisibleClick={dgtlVisibleClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {dgtlVisible ? (
            <SptCnfirmFoundng05 arrAsmtLst={arrDgtlAsmtLst} />
          ) : (
            <SptCnfirmFoundng03 arrAsmtLst={arrAsmtLst} />
          )}
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {dgtlVisible ? (
            <SptCnfirmFoundng06 arrEvlMfcmLst={arrDgtlEvlMfcmLst} />
          ) : (
            <SptCnfirmFoundng04 arrEvlMfcmLst={arrEvlMfcmLst} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SptCnfirmFoundngContainer);
