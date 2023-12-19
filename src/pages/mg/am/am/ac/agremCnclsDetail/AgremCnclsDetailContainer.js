import React, { useState } from 'react';

import { Button, Col, Modal, Row, Tabs } from 'antd';
import 'css/Common.css';
import AgremCnclsDetail01 from 'pages/mg/am/am/ac/agremCnclsDetail/comp/AgremCnclsDetail01';
import AgremCnclsDetail02 from 'pages/mg/am/am/ac/agremCnclsDetail/comp/AgremCnclsDetail02';
import AgremCnclsDetail03 from 'pages/mg/am/am/ac/agremCnclsDetail/comp/AgremCnclsDetail03';
import AgremCnclsDetail04 from 'pages/mg/am/am/ac/agremCnclsDetail/comp/AgremCnclsDetail04';

const AgremCnclsDetailContainer = () => {
  const [ojtAgremCnclsInfo, setOjtAgremCnclsInfo] = useState({
    a1: '1',
    a2: '2021년 스마트공장 고도화',
    a3: '2022-I2S-015-000155',
    a4: '유클리드소프트_2021년 스마트화 역량강화사업 지원기업(코디지원)',
    a5: '유클리드소프트',
    a6: '(주)공급기업',
    a7: '5,000,000',
    a8: '2021-06-02 ~ 2022-06-01',
    a9: '2021-06-02 ~ 2021-12-01',
    a10: '2021-12-02 ~ 2022-06-01',
  });

  const [arrBizCt, setArrBizCt] = useState([
    {
      a1: '지급액',
      a21: '2,500,000',
      a22: '2,500,000',
      a31: '2,500,000',
    },
  ]);
  const [arrInptHnf, setArrInptHn] = useState([
    {
      a1: '응용SW 개발자',
      a2: '홍길동',
      a3: '2021-08-23~2021-11-29',
      a4: '30/30',
      a5: '',
    },
  ]);
  const listClick = () => {
    Modal.info({ title: '목록 클릭 / 협약 체결 화면으로 이동' });
  };
  return (
    <>
      {/* <Row className="eu-row-page-comp-layout"> */}
        {/* <Col span={24}> */}
          {/*  상단 버튼 4종류  */}
          {/* <AgremCnclsDetail01 /> */}
        {/* </Col> */}
      {/* </Row> */}
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/*  과제기본정보 / 사업기간  */}
          <AgremCnclsDetail02 ojtAgremCnclsInfo={ojtAgremCnclsInfo} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/*  사업비지급 / 투입인력   */}
          <AgremCnclsDetail03 arrBizCt={arrBizCt} arrInptHnf={arrInptHnf} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/*  전자협약서 서명   */}
          <AgremCnclsDetail04 />{' '}
        </Col>
      </Row>
      <Row className="eu-row-page-btn-layout">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
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

export default React.memo(AgremCnclsDetailContainer);
