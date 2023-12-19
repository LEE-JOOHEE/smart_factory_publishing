import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/Common.css';
import CnfirmInsttDetail01 from 'pages/mg/am/ia/ci/cnfirmInsttDetail/comp/CnfirmInsttDetail01';
import CnfirmInsttDetail02 from 'pages/mg/am/ia/ci/cnfirmInsttDetail/comp/CnfirmInsttDetail02';

const CnfirmInsttDetailContainer = ({ ojtKey, setPageType }) => {
  const [arrDgnsRptp, setArrDgnsRptp] = useState([]);

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });

    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: '구축시스템 스마트화 수준 평가표',
        b: 'O',
        c: 'hwp pdf docx',
        d: '구축시스템 스마트화 수준 평가표.docx',
        e: '2022-12-01',
      });
    }
    setArrDgnsRptp(tmp1);
  }, []);

  const listClick = () => {
    setPageType('LIST');
  };
  const aprvClick = () => {
    Modal.info({ title: 'aprvClick' });
  };

  const rjctClick = () => {
    Modal.info({ title: 'rjctClick' });
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CnfirmInsttDetail01 />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <CnfirmInsttDetail02 arrDgnsRptp={arrDgnsRptp} />
        </Col>
      </Row>

      <Row className="eu-row-page-btn-layout">
        <Col span={24}>
          <Button
            className="eu-btn-process-default"
            onClick={listClick}
          >
            목록
          </Button>
          <Button
            className="eu-btn-process-warning"
            onClick={aprvClick}
          >
            승인
          </Button>
          <Button
            className="eu-btn-process-error"
            onClick={rjctClick}
          >
            반려
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(CnfirmInsttDetailContainer);
