import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import WctReqst01 from 'pages/usr/bm/aw/wr/wctReqst/comp/WctReqst01';
import WctReqst02 from 'pages/usr/bm/aw/wr/wctReqst/comp/WctReqst02';

const WctReqstContainer = ({ setOjtKey, setPageType }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  // 사업비 목록
  const [arrBizCtLst, setArrBizCtLst] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };
  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    let tmp1 = [];
    for (let idx = 0; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a1: '2022',
        a2: '1차_스마트공장 구축 및 고도화(기초) 본사업지원(코디지원)',
        a3: '유클리드소프트_1차_스마트공장\n구축 및 고도화_본사업지원(코디지원)',
        a4: '유클리드소프트',
        a5: idx % 2 ? '신청대기' : '지급완료',
        a6: '-',
        a7: '-',
      });
    }
    setArrBizCtLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <WctReqst01 ojtGroupCodes={ojtGroupCodes} searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <WctReqst02
            arrBizCtLst={arrBizCtLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          {/* <Button
            size="large"
            className="eu-usr-btn-process-default"
            onClick={lstClick}
          >
            목록
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-fine"
            onClick={bizAplyLinkClick}
          >
            사업신청 연계
          </Button> */}
        </Col>
      </Row>
    </>
  );
};

export default React.memo(WctReqstContainer);
