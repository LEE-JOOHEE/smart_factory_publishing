import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import PrmpcCalcPresentn01 from 'pages/usr/bm/pc/pc/prmpcCalcPresentn/comp/PrmpcCalcPresentn01';
import PrmpcCalcPresentn02 from 'pages/usr/bm/pc/pc/prmpcCalcPresentn/comp/PrmpcCalcPresentn02';

const PrmpcCalcPresentnContainer = ({ setOjtKey, setPageType }) => {
  const [arrAsmtLst, setArrAsmtLst] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: '2021',
        b: '인천',
        c: '스마트공장 구축 및 고도화',
        d: '스마트공장 보급 확산 사업(코디지원)',
        e: `도입기업명${idx}`,
        f: `공급기업명${idx}`,
        g:
          idx % 4 === 1
            ? '미제출'
            : idx % 4 === 2
            ? '작성중'
            : idx % 4 === 3
            ? '수정요청'
            : '확인완료',
        h: '-',
      });
    }
    setArrAsmtLst(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <PrmpcCalcPresentn01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <PrmpcCalcPresentn02
            arrAsmtLst={arrAsmtLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PrmpcCalcPresentnContainer);
