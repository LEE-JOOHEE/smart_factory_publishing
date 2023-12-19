import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import EvlMfcmmFx01 from 'pages/usr/my/em/em/evlMfcmmFx/comp/EvlMfcmmFx01';
import EvlMfcmmFx02 from 'pages/usr/my/em/em/evlMfcmmFx/comp/EvlMfcmmFx02';

const EvlMfcmmFxContainer = () => {
  const [arrEvlDtLst, setArrEvlDtLst] = useState([]);
  const [arrCheckedEvlDtLst, setArrCheckedEvlDtLst] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: `ojtSrchCnd: ${JSON.stringify(ojtSrchCnd)}`,
    });
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: '수도권(제주, 강원 포함)',
        b: '2022-09-13 ~ 2022-10-12',
        c: '종일',
        d: '일정확인요청',
      });
    }
    setArrEvlDtLst(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlMfcmmFx01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlMfcmmFx02
            arrEvlDtLst={arrEvlDtLst}
            arrCheckedEvlDtLst={arrCheckedEvlDtLst}
            setArrCheckedEvlDtLst={setArrCheckedEvlDtLst}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(EvlMfcmmFxContainer);
