import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import 'css/CommonUsr.css';
import EvlOprtn01 from 'pages/usr/my/em/eo/evlOprtn/comp/EvlOprtn01';

const EvlOprtnContainer = ({ setOjtKey, setPageType }) => {
  const [arrEvlLst, setArrEvlLst] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx % 2 ? '기술성평가' : '최종평가',
        b: '2022',
        c: '평가위원회 명',
        d: '분과 명',
        e: '2022-10-01',
        f: idx % 2 ? 'Y' : 'N',
        g: '3',
        h: '평가중',
      });
    }
    setArrEvlLst(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlOprtn01
            arrEvlLst={arrEvlLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(EvlOprtnContainer);
