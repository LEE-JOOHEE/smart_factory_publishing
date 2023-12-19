import React, { useState, useEffect } from 'react';

import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import { Button, Modal } from 'antd/lib';
// import CmAplyAsmtAtch from 'pages/cm/tr/CmAplyAsmtAtch';
import PresentnSttus01 from 'pages/mg/tr/cc/pe/presentnSttus/comp/PresentnSttus01';
import PresentnSttus02 from 'pages/mg/tr/cc/pe/presentnSttus/comp/PresentnSttus02';
import PresentnSttus03 from 'pages/mg/tr/cc/pe/presentnSttus/comp/PresentnSttus03';
import PresentnSttus04 from 'pages/mg/tr/cc/pe/presentnSttus/comp/PresentnSttus04';
import PresentnSttus05 from 'pages/mg/tr/cc/pe/presentnSttus/comp/PresentnSttus05';
import PresentnSttus06 from 'pages/mg/tr/cc/pe/presentnSttus/comp/PresentnSttus06';
import PresentnSttus07 from 'pages/mg/tr/cc/pe/presentnSttus/comp/PresentnSttus07';
import CmAplyAsmtPjtco from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPjtco';
import ReturnPrvonshPopup from 'pages/mg/tr/cc/pe/presentnSttus/popup/ReturnPrvonshPopup';

const PresentnSttusContainer = ({ ojtKey, setPageType }) => {
  const [returnPrvonshPopupOpen, setReturnPrvonshPopupOpen] = useState(false);

  const [aplyAsmtPjtcoOpen, setAplyAsmtPjtcoOpen] = useState(true);
  const [ojtCodi, setOjtCodi] = useState({
    a1: '아무개',
    a2: '010-1111-1111',
    a3: 'abc@naver.com',
  });
  const [ojtFileInq, setOjtFileInq] = useState({
    a1: '-',
    a2: '',
    a3: '',
    a4: '',
    b1: '-',
    b2: '',
    c1: '-',
    c2: '',
    d1: '적합',
    d2: '2022년 스마트공장 보급 확산 사업 공고_기초(코디 지원) 사업비 과다함.',
  });
  const [arrFileInq, setArrFileInq] = useState([]);
  const aplyAsmtPjtcoShow = () => {
    setAplyAsmtPjtcoOpen(true);
  };
  const aplyAsmtPjtcoClose = () => {
    setAplyAsmtPjtcoOpen(false);
  };

  const listClick = () => {
    setPageType('LIST');
  };
  const rejectClick = () => {
    setReturnPrvonshPopupOpen(true);
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 20; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '',
        c: '',
        d: '',
        e: '',
      });
    }
    // console.log('tmp1: ', tmp1);
    setArrFileInq(tmp1);
    // Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
  }, []);

  const [tabItems, setTabItems] = useState([
    {
      label: '과제기본정보',
      key: '과제기본정보',
      children: (
        <>
          {/* 과제기본 도입기업 공급기업 */}
          <PresentnSttus01 />
          {/* 코디네이터 */}
          <PresentnSttus02 ojtCodi={ojtCodi} />
        </>
      ),
    },
    {
      label: '파일조회',
      key: '파일조회',
      children: (
        <>
          <PresentnSttus03 ojtFileInq={ojtFileInq} arrFileInq={arrFileInq} />
        </>
      ),
    },
    {
      label: '사업비내역',
      key: '사업비내역',
      children: (
        <>
          <PresentnSttus04 />
          <CmAplyAsmtPjtco editable={false} />
        </>
      ),
    },
    {
      label: '원가계산 검토의견',
      key: '원가계산 검토의견',
      children: (
        <>
          <PresentnSttus05 />
          <PresentnSttus06 />
        </>
      ),
    },
    {
      label: '원가의뢰 및 할인금액내역',
      key: '원가의뢰 및 할인금액내역',
      children: <PresentnSttus07 />,
    },
  ]);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs items={tabItems} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            size="large"
            onClick={rejectClick}
            className="eu-btn-process-error"
          >
            반려
          </Button>
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
      <ReturnPrvonshPopup
        returnPrvonshPopupOpen={returnPrvonshPopupOpen}
        setReturnPrvonshPopupOpen={setReturnPrvonshPopupOpen}
      />
    </>
  );
};

export default React.memo(PresentnSttusContainer);
