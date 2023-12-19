import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';

import WctReqstDetail01 from 'pages/usr/bm/aw/wr/wctReqstDetail/comp/WctReqstDetail01';
import WctReqstDetail02 from 'pages/usr/bm/aw/wr/wctReqstDetail/comp/WctReqstDetail02';
import WctReqstDetail03 from 'pages/usr/bm/aw/wr/wctReqstDetail/comp/WctReqstDetail03';
import WctReqstDetail04 from 'pages/usr/bm/aw/wr/wctReqstDetail/comp/WctReqstDetail04';

const WctReqstDetailContainer = ({ ojtKey, setPageType }) => {
  // 과제기본정보
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({});
  // 은행 및 계좌 번호
  const [ojtBankBacntNo, setBankBacntNo] = useState({});
  // 사업비 진행 상태
  const [ojtBizCtPrgrsStss, setOjtBizCtPrgrsStss] = useState({});
  // 사업비 신청양식 첨부
  const [arrBizCtAplyDcmntAtch, setBizCtAplyDcmntAtch] = useState([]);
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
    setOjtAsmtBscInfo({
      a1: '2022-I2S-000-000111',
      a2: '',
      a3: '2020년 스마트공장 고도화',
      a4: '홍길동',
      a5: '유클리드소프트_2020년 스마트화 역량강화사업 지원기업(코디지원)',
      a6: '(주)도입기업',
      a7: '(주)공급기업',
    });
    setBankBacntNo({
      a1: '전체',
      a2: '',
      a3: '',
    });
    setOjtBizCtPrgrsStss({
      a1: '신청대기',
      a2: '0',
      a3: '신청대기',
      a4: '0',
    });
    let tmp = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp.push({
        key: idx,
        a1: '공문(정부지원금신청)',
        a2: '다운로드',
        a3: 'hwp pdf jpg',
        a4: 'O',
        a5: '',
      });
    }
    setBizCtAplyDcmntAtch(tmp);
  }, [ojtKey]);

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <WctReqstDetail01 ojtAsmtBscInfo={ojtAsmtBscInfo} />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <WctReqstDetail02
            ojtBankBacntNo={ojtBankBacntNo}
            setBankBacntNo={setBankBacntNo}
            ojtGroupCodes={ojtGroupCodes}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <WctReqstDetail03 ojtBizCtPrgrsStss={ojtBizCtPrgrsStss} />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <WctReqstDetail04 arrBizCtAplyDcmntAtch={arrBizCtAplyDcmntAtch} />
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

export default React.memo(WctReqstDetailContainer);
