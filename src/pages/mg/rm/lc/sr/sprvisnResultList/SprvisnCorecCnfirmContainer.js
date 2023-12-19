import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import 'css/Common.css';
import SprvisnCorecCnfirm01 from 'pages/mg/rm/lc/sr/sprvisnResultList/comp/SprvisnCorecCnfirm01';

const SprvisnCorecCnfirmContainer = ({ ojtKey, setPageType }) => {
  const [ojtDetailInfo, setOjtDetailInfo] = useState({
    a1: '2021-I2R-023-000001',
    a2: '2021',
    a3: '2021_스마트공장 구축 및 고도화',
    a4: '(주)도입기업_스마트공장 구축 및 고도화',
    a5: '(주)도입기업',
    a6: '(주)공급기업',
    a7: [
      {
        a1: 'FP(기능점수)산정자료',
        a2: '사업비 산출내역서',
        a3: '2021-07-22',
        a4: '76KB',
      },
    ],
    a8: '기초',
    a9: 'Level1',
    a10: '0',
    a11: [
      {
        a1: 'FP(기능점수)산정자료',
        a2: '사업비 산출내역서',
        a3: '2021-07-22',
        a4: '76KB',
      },
    ],
  });
  const [arrAttchFile, setArrAttchFile] = useState([
    {
      a1: '최종감리 시정조치계획서',
      a2: '2021년 스마트공장 감리보고서',
      a3: '2021-03-30',
      a4: '1010kb',
    },
    {
      a1: '최종감리 시정조치계획서',
      a2: '2021년 스마트공장 감리시정조치결과서',
      a3: '2021-03-30',
      a4: '1010kb',
    },
  ]);

  const [arrPlanResult, setArrPlanResult] = useState([
    {
      a1: '최종감리 시정조치계획서',
      a2: '2021년 스마트공장 감리보고서',
      a3: '2021-03-30',
      a4: '1010kb',
    },
    {
      a1: '검수확인서',
      a2: '2021년 스마트공장 감리시정조치결과서',
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
          <SprvisnCorecCnfirm01
            ojtDetailInfo={ojtDetailInfo}
            arrAttchFile={arrAttchFile}
            arrPlanResult={arrPlanResult}
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

export default React.memo(SprvisnCorecCnfirmContainer);
