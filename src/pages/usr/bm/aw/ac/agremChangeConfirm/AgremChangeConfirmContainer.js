import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, Tabs } from 'antd';
import 'css/CommonUsr.css';
import AgremChangeConfirm01 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm01';
import AgremChangeConfirm02 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm02';
import AgremChangeConfirm03 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm03';
import AgremChangeConfirm04 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm04';
import AgremChangeConfirm05 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm05';
import AgremChangeConfirm06 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm06';
import AgremChangeConfirm07 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm07';
import AgremChangeConfirm08 from 'pages/usr/bm/aw/ac/agremChangeConfirm/comp/AgremChangeConfirm08';

const AgremChangeConfirmContainer = ({ ojtKey, setPageType }) => {
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({});
  const [arrAtchFile, setArrAtchFile] = useState([]);

  const [tabItems, setTabItems] = useState([
    {
      label: '사업비 변경',
      key: '사업비 변경',
      children: <AgremChangeConfirm05 />,
    },
    {
      label: '도입기업 공장 주소변경',
      key: '도입기업 공장 주소변경',
      children: <AgremChangeConfirm06 />,
    },
    {
      label: '구축기간 변경(1개월이외)',
      key: '구축기간 변경(1개월이외)',
      children: <AgremChangeConfirm07 />,
    },
    {
      label: '공급기업 변경',
      key: '공급기업 변경',
      children: <AgremChangeConfirm08 />,
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
    let tmp = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp.push({
        key: idx,
        a1: '변경신청 첨부문서',
        a2: 'hwp, docx, pdf, zip',
      });
    }
    setArrAtchFile(tmp);
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
          <AgremChangeConfirm03 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeConfirm04 arrAtchFile={arrAtchFile} />
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

export default React.memo(AgremChangeConfirmContainer);
