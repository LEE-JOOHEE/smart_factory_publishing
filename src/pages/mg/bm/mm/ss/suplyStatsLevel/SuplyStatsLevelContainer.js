import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import SuplyStatsArea01 from 'pages/mg/bm/mm/ss/suplyStatsArea/comp/SuplyStatsArea01';
import SuplyStatsLevel01 from 'pages/mg/bm/mm/ss/suplyStatsLevel/comp/SuplyStatsLevel01';

const SuplyStatsLevelContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };
  const [arrMtchgStatsLevel, setArrMtchgStatsLevel] = useState([]);

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
      });
    }
    setArrMtchgStatsLevel(tmp1);
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
          <SuplyStatsLevel01 arrMtchgStatsLevel={arrMtchgStatsLevel} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SuplyStatsLevelContainer);
