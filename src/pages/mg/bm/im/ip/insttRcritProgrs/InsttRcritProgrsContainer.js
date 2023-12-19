import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import InsttRcritProgrs01 from 'pages/mg/bm/im/ip/insttRcritProgrs/comp/InsttRcritProgrs01';
import InsttRcritProgrs02 from 'pages/mg/bm/im/ip/insttRcritProgrs/comp/InsttRcritProgrs02';

const InsttRcritProgrsContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    Modal.info({ title: `ojtSrchCnd: ${JSON.stringify(ojtSrchCnd)}` });
  };
  const [arrPbancLst, setArrPbancLst] = useState([]);

  const [arrCheckedPbancLst, setArrCheckedPbancLst] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: '2022',
        b: '대중소 상생형',
        c: '스마트공장 보급확산사업 공고(대중소 상생형 주관기관 모집)',
        d: '홍길동',
        e: 'K000036',
        f: `제출기관명${idx}`,
        g: '2022-10-21',
        h: '작성 중',
      });
    }
    setArrPbancLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttRcritProgrs01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttRcritProgrs02
            arrPbancLst={arrPbancLst}
            arrCheckedPbancLst={arrCheckedPbancLst}
            setArrCheckedPbancLst={setArrCheckedPbancLst}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttRcritProgrsContainer);
