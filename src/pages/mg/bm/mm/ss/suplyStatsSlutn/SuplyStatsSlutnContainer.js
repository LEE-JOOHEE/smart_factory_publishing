import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import SuplyStatsArea01 from 'pages/mg/bm/mm/ss/suplyStatsArea/comp/SuplyStatsArea01';
import SuplyStatsSultn01 from 'pages/mg/bm/mm/ss/suplyStatsSlutn/comp/SuplyStatsSlutn01';

const SuplyStatsSlutnContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };
  const [arrMtchgStatsSlutn, setArrMtchgStatsSlutn] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a: '합계',
        b: ``,
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        i: '',
        j: '',
      });
    }
    setArrMtchgStatsSlutn(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SuplyStatsArea01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SuplyStatsSultn01 arrMtchgStatsSlutn={arrMtchgStatsSlutn} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SuplyStatsSlutnContainer);
