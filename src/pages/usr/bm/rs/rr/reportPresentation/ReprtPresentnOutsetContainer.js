import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import ReprtPresentnOutset01 from 'pages/usr/bm/rs/rr/reportPresentation/comp/ReprtPresentnOutset01';

const ReprtPresentnOutsetContainer = ({ setOjtKey, setPageType }) => {
  const [ojtOutsetInfo, setOjtOutsetInfo] = useState({
    a1: '2021-I2R-023-000001',
    a2: '스마트공장 구축',
    a3: '2021_스마트공장 구축 및 고도화',
    a4: '홍길동',
    a5: '(주)도입기업',
    a6: '(주)공급기업',
    a7: '(주)도입기업_20201년 스마트공장 구축 고도화',
    a8: '',
    a9: '',
  });

  const saveClick = () => {
    setPageType('LEVEL_CNFRMN_PRESENTN');
  };
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
          <ReprtPresentnOutset01 ojtOutsetInfo={ojtOutsetInfo} />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-btn-process-fine"
            onClick={saveClick}
          >
            저장
          </Button>
          <Button
            size="large"
            className="eu-btn-process-fine"
            onClick={submitClick}
          >
            제출완료
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

export default React.memo(ReprtPresentnOutsetContainer);
