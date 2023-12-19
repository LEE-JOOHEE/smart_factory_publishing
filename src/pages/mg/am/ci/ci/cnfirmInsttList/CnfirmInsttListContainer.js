import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import CnfirmInsttList01 from 'pages/mg/am/ci/ci/cnfirmInsttList/comp/CnfirmInsttList01';
import CnfirmInsttList02 from 'pages/mg/am/ci/ci/cnfirmInsttList/comp/CnfirmInsttList02';

const CnfirmInsttListContainer = ({ setOjtKey, setPageType }) => {
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
        a: '2021',
        b: '스마트화 수준확인',
        c: `2021-R2031`,
        d: '스마트공장 수준확인제도_참여기업 모집',
        e: '홍길동',
        f: '수메디&테크',
        g: 'SBC인증원',
        h: '기업수준확인(승인)',
        i: '적정',
      });
    }
    setArrPbancLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CnfirmInsttList01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CnfirmInsttList02
            arrPbancLst={arrPbancLst}
            setArrCheckedPbancLst={setArrCheckedPbancLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(CnfirmInsttListContainer);
