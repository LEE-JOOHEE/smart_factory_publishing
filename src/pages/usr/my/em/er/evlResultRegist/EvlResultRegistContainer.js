import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import EvlResultRegist01 from 'pages/usr/my/em/er/evlResultRegist/comp/EvlResultRegist01';
import EvlResultRegist02 from 'pages/usr/my/em/er/evlResultRegist/comp/EvlResultRegist02';

const EvlResultRegistContainer = ({ setOjtKey, setPageType }) => {
  const [arrEvlLst, setArrEvlLst] = useState([]);

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
        a: '2022',
        b: idx % 2 ? '현장평가' : '현장확인',
        c: `평가TEST과제_${idx}`,
        d: '도입기업명',
        e: '2022-10-01',
        f: '정위원',
        g: idx % 3 === 2 ? '미제출' : idx % 3 === 1 ? '제출' : '승인',
      });
    }
    setArrEvlLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlResultRegist01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlResultRegist02
            arrEvlLst={arrEvlLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(EvlResultRegistContainer);
