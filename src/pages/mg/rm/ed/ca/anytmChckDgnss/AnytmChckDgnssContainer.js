import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import AnytmChckDgnss01 from 'pages/mg/rm/ed/ca/anytmChckDgnss/comp/AnytmChckDgnss01';
import AnytmChckDgnss02 from 'pages/mg/rm/ed/ca/anytmChckDgnss/comp/AnytmChckDgnss02';

const AnytmChckDgnssContainer = () => {
  // 수시점검 확인 목록 arr
  const [arrFlfmtIdnty, setArrFlfmtIdnty] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: `${JSON.stringify(ojtSrchCnd)}`,
    });
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: '2022',
        b: '2022-I6F-085-000036',
        c: '스마트공장 구축 및 고도화(기초)',
        d: '충북',
        e: `도입기업명${idx}`,
        f: '아무개',
        g: `공급기업명${idx}`,
        h: '1/0/1',
        i: '홍길동(id)',
      });
    }
    setArrFlfmtIdnty(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <AnytmChckDgnss01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <AnytmChckDgnss02 arrFlfmtIdnty={arrFlfmtIdnty} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(AnytmChckDgnssContainer);
