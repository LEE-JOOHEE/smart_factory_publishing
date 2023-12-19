import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/Common.css';
import DocIssuInqire01 from 'pages/mg/bm/di/di/docIssuInqire/comp/DocIssuInqire01';
import DocIssuInqire02 from 'pages/mg/bm/di/di/docIssuInqire/comp/DocIssuInqire02';

const DocIssuInqireContainer = ({ ojtKey, setPageType }) => {
  // 문서 발급 상세 내역 arr
  const [arrDocIssuDtlDsctn, setArrDocIssuDtlDsctn] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: `${JSON.stringify(ojtSrchCnd)}`,
    });
  };

  const listClick = () => {
    setPageType('LIST');
  };

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });

    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2021',
        c: '2022-08-23 14:33:26',
        d: '스마트화 수준확인',
        e: '2021년 스마트공장 수준확인',
        f: `도입기업명${idx}`,
        g: `공급기업명${idx}`,
        h: `발급신청기업명${idx}`,
      });
    }
    setArrDocIssuDtlDsctn(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DocIssuInqire01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DocIssuInqire02 arrDocIssuDtlDsctn={arrDocIssuDtlDsctn} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            key="listClick"
            type="primary"
            size="large"
            onClick={listClick}
            className="eu-btn-process-default"
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(DocIssuInqireContainer);
