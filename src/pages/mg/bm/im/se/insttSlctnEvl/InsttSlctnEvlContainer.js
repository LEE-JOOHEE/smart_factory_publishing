import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import InsttSlctnEvl01 from 'pages/mg/bm/im/se/insttSlctnEvl/comp/InsttSlctnEvl01';
import InsttSlctnEvl02 from 'pages/mg/bm/im/se/insttSlctnEvl/comp/InsttSlctnEvl02';
import InsttSlctnEvl03 from 'pages/mg/bm/im/se/insttSlctnEvl/comp/InsttSlctnEvl03';

const InsttSlctnEvlContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: `searchClick : ${JSON.stringify(ojtSrchCnd)}`,
    });
  };
  // 기관선정평가위원회
  const [arrInstSlctnEvlCmit, setArrInstSlctnEvlCmit] = useState([]);
  // 배정 기관 목록
  const [arrAltmntInstLst, setArrAltmntInstLst] = useState([]);

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
        i: 'N',
      });
      tmp2.push({
        key: idx,
        a: idx,
        b: 'XXX',
        c: `제출기관명${idx}`,
        d: '담당자명',
        e: '2022-10-21',
      });
    }
    setArrInstSlctnEvlCmit(tmp1);
    setArrAltmntInstLst(tmp2);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttSlctnEvl01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttSlctnEvl02 arrInstSlctnEvlCmit={arrInstSlctnEvlCmit} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttSlctnEvl03 arrAltmntInstLst={arrAltmntInstLst} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttSlctnEvlContainer);
