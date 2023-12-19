import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import InsttResultRegist01 from 'pages/mg/bm/im/sr/insttResultRegist/comp/InsttResultRegist01';
import InsttResultRegist02 from 'pages/mg/bm/im/sr/insttResultRegist/comp/InsttResultRegist02';
import InsttResultRegist03 from 'pages/mg/bm/im/sr/insttResultRegist/comp/InsttResultRegist03';

const InsttResultRegistContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: `searchClick : ${JSON.stringify(ojtSrchCnd)}`,
    });
  };
  // 기관선정평가위원회
  const [arrInstSlctnEvlCmit, setArrInstSlctnEvlCmit] = useState([]);
  // 기관 목록
  const [arrInstLst, setArrInstLst] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    let tmp2 = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '사업명',
        d: '주관기관 모집',
        e: `대중소 주관기관 모집${idx}`,
        f: '2022-10-31',
        g: '담당자',
        h: '3',
        i: '2',
        j: 'Y',
        k: 'N',
      });
      tmp2.push({
        key: idx,
        a: idx,
        b: 'XXX',
        c: `제출기관명${idx}`,
        d: '담당자명',
        e: '2022-10-21',
        f: 'Y',
        g: '대기',
      });
    }
    setArrInstSlctnEvlCmit(tmp1);
    setArrInstLst(tmp2);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttResultRegist01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttResultRegist02 arrInstSlctnEvlCmit={arrInstSlctnEvlCmit} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttResultRegist03 arrInstLst={arrInstLst} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttResultRegistContainer);
