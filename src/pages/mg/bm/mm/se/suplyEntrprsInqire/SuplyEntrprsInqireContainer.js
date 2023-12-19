import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import SuplyEntrprsInqire01 from 'pages/mg/bm/mm/se/suplyEntrprsInqire/comp/SuplyEntrprsInqire01';
import SuplyEntrprsInqire02 from 'pages/mg/bm/mm/se/suplyEntrprsInqire/comp/SuplyEntrprsInqire02';

const SuplyEntrprsInqireContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };
  const [arrCnstcPrfmnc, setArrCnstcPrfmnc] = useState([]);
  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: `공급기업명${idx}`,
        c: '0.0',
        d: '0.0',
        e: '0.0',
        f: '0.0',
        g: '0.0',
        h: '0.0',
        i: '0.0',
        j: '0.0',
      });
    }
    setArrCnstcPrfmnc(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SuplyEntrprsInqire01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SuplyEntrprsInqire02 arrCnstcPrfmnc={arrCnstcPrfmnc} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SuplyEntrprsInqireContainer);
