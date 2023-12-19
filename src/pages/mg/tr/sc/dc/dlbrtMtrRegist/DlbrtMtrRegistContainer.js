import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import DlbrtMtrRegist01 from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/comp/DlbrtMtrRegist01';
import DlbrtMtrRegist02 from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/comp/DlbrtMtrRegist02';
import DlbrtMtrRegist03 from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/comp/DlbrtMtrRegist03';
import DlbrtMtrRegist04 from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/comp/DlbrtMtrRegist04';

const DlbrtMtrRegistContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  //심의위원회
  const [arrDlbrCmit, setArrDlbrCmit] = useState([]);
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
        c: '사업명',
        d: '수행기관명',
        e: `선정확정안건_${idx}`,
        f: '2022-10-31',
        g: '담당자',
        h: '10',
        i: 'N',
      });
    }
    setArrDlbrCmit(tmp1);
    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a: idx,
        b: 'S01',
        c: `TEST과제_${idx}`,
        d: `기업명${idx}`,
        e: '90',
        f: '선정예정',
        g: '80',
        h: '선정예정',
        i: '적합',
        j: '선정예정',
      });
    }
    setArrAsmtLst(tmp2);
    let tmp3 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp3.push({
        key: idx,
        a: idx,
        b: 'S01',
        c: `TEST과제_${idx}`,
        d: `기업명${idx}`,
        e: '3',
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
          <DlbrtMtrRegist01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DlbrtMtrRegist02
            arrDlbrCmit={arrDlbrCmit}
            dlbrCmitRowClick={dlbrCmitRowClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {lvlIdntyBizVisible ? (
            <DlbrtMtrRegist03 arrAsmtLst={arrAsmtLst} />
          ) : (
            <DlbrtMtrRegist04 arrLvlIdntyBiz={arrLvlIdntyBiz} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default React.memo(DlbrtMtrRegistContainer);
