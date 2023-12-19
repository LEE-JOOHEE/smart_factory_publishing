import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import DocIssuSttus01 from 'pages/mg/bm/di/di/docIssuSttus/comp/DocIssuSttus01';
import DocIssuSttus02 from 'pages/mg/bm/di/di/docIssuSttus/comp/DocIssuSttus02';

const DocIssuSttusContainer = ({ setOjtKey, setPageType }) => {
  // 문서 발급 현황 arr
  const [arrDocIssuStts, setArrDocIssuStts] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: `${JSON.stringify(ojtSrchCnd)}`,
    });
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a: 2022 - idx,
        b: '스마트화 수준확인',
        c: '스마트공장 수준확인제도 참여기업 모집',
        d: `도입기업명${idx}`,
        e: `공급기업명${idx}`,
        f: `발급신청기업명${idx}`,
        g: '',
        h: '',
        i: '',
        j: '',
        k: '',
        l: idx,
      });
    }
    setArrDocIssuStts(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DocIssuSttus01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DocIssuSttus02
            arrDocIssuStts={arrDocIssuStts}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(DocIssuSttusContainer);
