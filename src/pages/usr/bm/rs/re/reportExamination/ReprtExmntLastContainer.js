import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import ReprtExmntLast01 from 'pages/usr/bm/rs/re/reportExamination/comp/ReprtExmntLast01';
import ReturnReprtExmntPopup from 'pages/usr/bm/rs/re/reportExamination/popup/ReturnReprtExmntPopup';

const ReprtExmntLastContainer = ({ setOjtKey, setPageType }) => {
  const [ojtReprtLastInfo, setOjtReprtLastInfo] = useState({
    a1: '최종반려',
    a2: '첨부파일 누락',
    a3: '2021-I2R-023-000001',
    a4: '스마트공장 구축',
    a5: '2021_스마트공장 구축 및 고도화',
    a6: '홍길동',
    a7: '(주)도입기업',
    a8: '(주)공급기업',
    a9: '(주)도입기업_20201년 스마트공장 구축 고도화',
  });

  const [returnReprtExmntPopupOpen, setReturnReprtExmntPopupOpen] =
    useState(false);

  const confirmClick = () => {
    setPageType('LEVEL_CNFRMN_EXMNT');
  };
  const rejectClick = () => {
    setReturnReprtExmntPopupOpen(true);
  };
  const lstClick = () => {
    setPageType('LEVEL_CNFRMN_EXMNT');
  };
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ReprtExmntLast01 ojtReprtLastInfo={ojtReprtLastInfo} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-btn-process-fine"
            onClick={confirmClick}
          >
            승인
          </Button>
          <Button
            size="large"
            className="eu-btn-process-error"
            onClick={rejectClick}
          >
            반려
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
      <ReturnReprtExmntPopup
        returnReprtExmntPopupOpen={returnReprtExmntPopupOpen}
        setReturnReprtExmntPopupOpen={setReturnReprtExmntPopupOpen}
        setPageType={setPageType}
      />
    </>
  );
};

export default React.memo(ReprtExmntLastContainer);
