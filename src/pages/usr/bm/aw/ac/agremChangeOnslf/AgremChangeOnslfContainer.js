import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, Tabs } from 'antd';
import 'css/CommonUsr.css';
import AgremChangeConfirm01 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm01';
import AgremChangeConfirm02 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm02';
import AgremChangeOnslf01 from 'pages/usr/bm/aw/ac/agremChangeOnslf/comp/AgremChangeOnslf01';
import AgremChangeOnslf02 from 'pages/usr/bm/aw/ac/agremChangeOnslf/comp/AgremChangeOnslf02';
import AgremChangeOnslf03 from 'pages/usr/bm/aw/ac/agremChangeOnslf/comp/AgremChangeOnslf03';
import AgremChangeOnslf04 from 'pages/usr/bm/aw/ac/agremChangeOnslf/comp/AgremChangeOnslf04';
import AgremChangeConfirm07 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm07';

const AgremChangeOnslfContainer = ({ ojtKey, setPageType }) => {
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({});
  const [tabItems, setTabItems] = useState([
    {
      label: '담당 책임자 변경',
      key: '담당 책임자 변경',
      children: <AgremChangeOnslf02 />,
    },
    {
      label: '도입기업 대표자 변경',
      key: '도입기업 대표자 변경',
      children: <AgremChangeOnslf03 />,
    },
    {
      label: '사업기 계좌 변경',
      key: '사업기 계좌 변경',
      children: <AgremChangeOnslf04 />,
    },
    {
      label: '구축기간 변경(1개월 이내)',
      key: '구축기간 변경(1개월 이내)',
      children: <AgremChangeConfirm07 />,
    },
  ]);
  const chgLstClick = () => {
    setPageType('DETAIL');
  };
  const asmtLstClick = () => {
    setPageType('LIST');
  };
  const saveClick = () => {
    Modal.info({ title: '저장' });
  };
  const aprvChgClick = () => {
    Modal.info({ title: '승인변경등록' });
  };
  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
    setOjtAsmtBscInfo({
      a1: '2022-X02-000-000111',
      a2: '2022년 스마트공장 고도화',
      a3: '유클리드소프트_2020년 스마트화 역량강화사업 지원기업(코디지원)',
      a4: '',
      a5: '홍길동',
    });
    // let tmp = [];
    // for (let idx = 1; idx < 50; idx++) {
    //   tmp.push({
    //     key: idx,
    //     a1: idx,
    //     a2: idx % 2 ? '자체변경' : '승인변경',
    //     a3: idx % 2 ? '작성중' : '승인',
    //     a4: idx % 2 ? '홍길동' : '홍길순',
    //     a5: '2022-02-01',
    //     a6: '도입기업주소변경',
    //     a7: '',
    //   });
    // }
    // setArrAgremChgPrgrsStts(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeConfirm01 ojtAsmtBscInfo={ojtAsmtBscInfo} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeConfirm02 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeOnslf01 />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs items={tabItems} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-usr-btn-process-default"
            onClick={chgLstClick}
          >
            변경목록
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-default"
            onClick={asmtLstClick}
          >
            과제목록
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-fine"
            onClick={saveClick}
          >
            저장
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-warning"
            onClick={aprvChgClick}
          >
            승인변경등록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(AgremChangeOnslfContainer);
