import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import AgremChangeDetail01 from 'pages/usr/bm/aw/ac/agremChangeDetail/comp/AgremChangeDetail01';
import AgremChangeDetail02 from 'pages/usr/bm/aw/ac/agremChangeDetail/comp/AgremChangeDetail02';
import AgremChangeDetail03 from 'pages/usr/bm/aw/ac/agremChangeDetail/comp/AgremChangeDetail03';

const AgremChangeDetailContainer = ({ ojtKey, setPageType }) => {
  // 협약변경 상세조회
  const [ojtAgremChgDtlInq, setOjtAgremChgDtlInq] = useState();
  // 협약변경 진행현황
  const [arrAgremChgPrgrsStts, setArrAgremChgPrgrsStts] = useState([]);

  const lstClick = () => {
    setPageType('LIST');
  };

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
    setOjtAgremChgDtlInq({
      a1: '2022-X02-000-000111',
      a2: '2022년 스마트공장 고도화',
      a3: '(주)_2020년 스마트화 역량강화사업 지원기업(코디지원)',
      a4: '홍길동',
    });
    let tmp = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: idx % 2 ? '자체변경' : '승인변경',
        a3: idx % 2 ? '작성중' : '승인',
        a4: idx % 2 ? '홍길동' : '홍길순',
        a5: '2022-02-01',
        a6: '도입기업주소변경',
        a7: '',
      });
    }
    setArrAgremChgPrgrsStts(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeDetail01 ojtAgremChgDtlInq={ojtAgremChgDtlInq} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeDetail02 arrAgremChgPrgrsStts={arrAgremChgPrgrsStts} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeDetail03 setPageType={setPageType} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-usr-btn-process-default"
            onClick={lstClick}
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(AgremChangeDetailContainer);
