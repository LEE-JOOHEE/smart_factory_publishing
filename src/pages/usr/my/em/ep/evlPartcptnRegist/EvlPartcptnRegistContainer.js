import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import 'css/CommonUsr.css';
import EvlPartcptnRegist01 from 'pages/usr/my/em/ep/evlPartcptnRegist/comp/EvlPartcptnRegist01';

const EvlPartcptnRegistContainer = () => {
  const [arrEvlPtcptYnReg, setArrEvlPtcptYnReg] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '현장평가',
        c: '도입기업 주소',
        d: '2022-09-27',
        e: '2022-08-30 14:00',
        f: idx % 3 === 1 ? '참석' : idx % 3 === 2 ? '불참석' : '',
      });
    }
    setArrEvlPtcptYnReg(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlPartcptnRegist01 arrEvlPtcptYnReg={arrEvlPtcptYnReg} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(EvlPartcptnRegistContainer);
