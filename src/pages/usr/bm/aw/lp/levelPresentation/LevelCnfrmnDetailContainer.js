import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import LevelCnfrmnDetail01 from 'pages/usr/bm/aw/lp/levelPresentation/comp/LevelCnfrmnDetail01';
const LevelCnfrmnDetailContainer = ({ ojtKey, setPageType }) => {
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

  const submitClick = () => {
    setPageType('LEVEL_CNFRMN_PRESENTN');
  };
  const lstClick = () => {
    setPageType('LEVEL_CNFRMN_PRESENTN');
  };
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <LevelCnfrmnDetail01 arrDgnsRptp={arrDgnsRptp} />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-btn-process-fine"
            onClick={submitClick}
          >
            제출
          </Button>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-default"
            onClick={lstClick}
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(LevelCnfrmnDetailContainer);
