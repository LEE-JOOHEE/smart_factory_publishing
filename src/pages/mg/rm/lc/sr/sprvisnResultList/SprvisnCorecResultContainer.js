import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import 'css/Common.css';
import SprvisnCorecResult01 from 'pages/mg/rm/lc/sr/sprvisnResultList/comp/SprvisnCorecResult01';

const SprvisnCorecResultContainer = ({ ojtKey, setPageType }) => {
  const [ojtDetailInfo, setOjtDetailInfo] = useState({
    a1: '2021-I2R-023-000001',
    a2: '2021',
    a3: '2021_스마트공장 구축 및 고도화',
    a4: '(주)도입기업_스마트공장 구축 및 고도화',
    a5: '(주)도입기업',
    a6: '(주)공급기업',
  });
  const [arrAttchFile, setArrAttchFile] = useState([
    {
      a1: 'FP(기능점수)산정자료',
      a2: '사업비 산출내역서',
      a3: '2021-07-22',
      a4: '76KB',
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
          <SprvisnCorecResult01
            ojtDetailInfo={ojtDetailInfo}
            arrAttchFile={arrAttchFile}
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

export default React.memo(SprvisnCorecResultContainer);
