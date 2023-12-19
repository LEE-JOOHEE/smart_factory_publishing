import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import DlbrtResultRegist01 from 'pages/mg/tr/sc/dr/dlbrtResultRegist/comp/DlbrtResultRegist01';
import DlbrtResultRegist02 from 'pages/mg/tr/sc/dr/dlbrtResultRegist/comp/DlbrtResultRegist02';
import DlbrtResultRegist03 from 'pages/mg/tr/sc/dr/dlbrtResultRegist/comp/DlbrtResultRegist03';
import DlbrtResultRegist04 from 'pages/mg/tr/sc/dr/dlbrtResultRegist/comp/DlbrtResultRegist04';

const DlbrtResultRegistContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  //심의위원회 결과
  const [arrDlbrCmitRslt, setArrDlbrCmitRslt] = useState([]);
  //과제목록
  const [arrAsmtLst, setArrAsmtLst] = useState([]);
  // 수준확인사업
  const [arrLvlIdntyBiz, setArrLvlIdntyBiz] = useState([]);
  useEffect(() => {
    //공통코드 조회
    // setOjtGroupCodes(getListCommonCd(['a', 'b']));

    let tmp1 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: `평가T${idx}`,
        d: '수행기관명',
        e: `선정확정안건_${idx}`,
        f: '2022-10-31',
        g: '담당자',
        h: '10',
        i: '10',
        j: 'N',
      });
    }
    setArrDlbrCmitRslt(tmp1);
    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a: idx,
        b: `TEST과제_${idx}`,
        c: '제출완료',
        d: '90',
        e: '선정예정',
        f: '80',
        g: '선정예정',
        h: '적합',
        i: '선정예정',
        j: '대기',
      });
    }
    setArrAsmtLst(tmp2);
    let tmp3 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp3.push({
        key: idx,
        a: idx,
        b: `TEST과제_${idx}`,
        c: '1',
        d: '대기',
      });
    }
    setArrLvlIdntyBiz(tmp3);
  }, []);
  const [lvlIdntyBizVisible, setLvlIdntyBizVisible] = useState(true);
  const dlbrCmitRowClick = () => {
    setLvlIdntyBizVisible(!lvlIdntyBizVisible);
  };

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DlbrtResultRegist01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DlbrtResultRegist02
            arrDlbrCmitRslt={arrDlbrCmitRslt}
            dlbrCmitRowClick={dlbrCmitRowClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {lvlIdntyBizVisible ? (
            <DlbrtResultRegist03 arrAsmtLst={arrAsmtLst} />
          ) : (
            <DlbrtResultRegist04 arrLvlIdntyBiz={arrLvlIdntyBiz} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default React.memo(DlbrtResultRegistContainer);
