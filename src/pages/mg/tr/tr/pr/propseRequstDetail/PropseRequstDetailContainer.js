import React, { useState } from 'react';

import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import PropseRequstDetail01 from 'pages/mg/tr/tr/pr/propseRequstDetail/comp/PropseRequstDetail01';
import { Button, Modal } from 'antd/lib';
import PropseRequstDetail02 from 'pages/mg/tr/tr/pr/propseRequstDetail/comp/PropseRequstDetail02';

const PropseRequstDetailContainer = () => {
  const saveClick = () => {
    Modal.info({ title: '저장 클릭' });
  };
  const reportClick = () => {
    Modal.info({ title: '제출 클릭 / 제안요청서 조회 목록으로 이동' });
  };
  const listClick = () => {
    Modal.info({ title: '목록 클릭 / 제안요청서 조회 목록으로 이동' });
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PropseRequstDetail01 />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PropseRequstDetail02 />
        </Col>
      </Row>
      <Row className="eu-row-page-btn-layout">
        <Col span={24}>
          <Button
            onClick={saveClick}
            className="eu-btn-process-default"
          >
            저장
          </Button>
          <Button
            onClick={reportClick}
            className="eu-btn-process-default"
          >
            제출
          </Button>
          <Button
            onClick={listClick}
            className="eu-btn-process-warning"
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PropseRequstDetailContainer);
