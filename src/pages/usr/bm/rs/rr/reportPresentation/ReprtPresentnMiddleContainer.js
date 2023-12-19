import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import ReprtPresentnMiddle01 from 'pages/usr/bm/rs/rr/reportPresentation/comp/ReprtPresentnMiddle01';

const ReprtPresentnMiddleContainer = ({ setOjtKey, setPageType }) => {
  const [ojtReprtMiddleInfo, setOjtReprtMiddleInfo] = useState({
    a1: '중간점검 보완 판정',
    a2: '1. 첨부파일 누락2. 오타 및 사업비 금액이 상이함3. 서명 일자 오타',
    a3: '도입기업 승인',
    a4: '사업비(원가계산 확인필요) 수정요청',
    a5: '2021-I2R-023-000001',
    a6: '스마트공장 구축',
    a7: '2021_스마트공장 구축 및 고도화',
    a8: '홍길동',
    a9: '(주)도입기업',
    a10: '(주)공급기업',
    a11: '(주)도입기업_20201년 스마트공장 구축 고도화',
  });

  const sbmsnRtrcnClick = () => {
    setPageType('LEVEL_CNFRMN_PRESENTN');
  };
  const lstClick = () => {
    setPageType('LEVEL_CNFRMN_PRESENTN');
  };

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ReprtPresentnMiddle01 ojtReprtMiddleInfo={ojtReprtMiddleInfo} />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-btn-process-fine"
            onClick={sbmsnRtrcnClick}
          >
            제출취소
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

export default React.memo(ReprtPresentnMiddleContainer);
