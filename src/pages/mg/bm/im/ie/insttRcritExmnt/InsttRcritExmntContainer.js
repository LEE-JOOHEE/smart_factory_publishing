import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import InsttRcritExmnt01 from 'pages/mg/bm/im/ie/insttRcritExmnt/comp/InsttRcritExmnt01';
import InsttRcritExmnt02 from 'pages/mg/bm/im/ie/insttRcritExmnt/comp/InsttRcritExmnt02';

const InsttRcritExmntContainer = ({ setOjtKey, setPageType }) => {
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
        h: '적합',
      });
    }
    setArrPbancLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttRcritExmnt01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttRcritExmnt02
            arrPbancLst={arrPbancLst}
            arrCheckedPbancLst={arrCheckedPbancLst}
            setArrCheckedPbancLst={setArrCheckedPbancLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttRcritExmntContainer);
