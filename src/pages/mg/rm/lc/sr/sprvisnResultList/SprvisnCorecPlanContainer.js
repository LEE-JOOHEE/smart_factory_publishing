import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import 'css/Common.css';
import SprvisnCorecPlan01 from 'pages/mg/rm/lc/sr/sprvisnResultList/comp/SprvisnCorecPlan01';

const SprvisnCorecPlanContainer = ({ ojtKey, setPageType }) => {
  const [ojtDetailInfo, setOjtDetailInfo] = useState({
    a1: '2021-I2R-023-000001',
    a2: '2021',
    a3: '2021_스마트공장 구축 및 고도화',
    a4: '(주)도입기업_스마트공장 구축 및 고도화',
    a5: '(주)도입기업',
    a6: '(주)공급기업',
  });
  const [arrSprvisnResult, setArrSprvisnResult] = useState([
    {
      a1: '최종감리결과서',
      a2: '구축시스템 스마트화 수준 평가표',
      a3: '2021-07-22',
      a4: '76KB',
    },
    {
      a1: '구축시스템 스마트화 수준 평가표',
      a2: '구축시스템 스마트화 수준 평가표',
      a3: '2021-07-22',
      a4: '76KB',
    },
    {
      a1: '기업제조혁신역량 평가항목 및 수준 측정표',
      a2: '기업제조혁신역량 평가항목 및 수준측정표',
      a3: '2021-07-22',
      a4: '76KB',
    },
  ]);
  const [arrAttFile, setArrAttFile] = useState([
    {
      a1: '최종감리 시정조치계획서',
      a2: '(주)도입기업 완료보고서',
      a3: '2021-03-30',
      a4: '1010kb',
    },
  ]);
  const listClick = () => {
    setPageType('SPRVISN_RESULT_LIST');
  };

  useEffect(() => {
    if (ojtKey) {
    }
  }, [ojtKey]);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SprvisnCorecPlan01
            ojtDetailInfo={ojtDetailInfo}
            arrSprvisnResult={arrSprvisnResult}
            arrAttFile={arrAttFile}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
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

export default React.memo(SprvisnCorecPlanContainer);
