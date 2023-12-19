import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs, Button, Modal } from 'antd';

import TitlePage from 'components/layout/TitlePage';
import AsmtBscInfoComp from 'pages/biz/evl/agremChgDtlAply/comp/AsmtBscInfoComp';
import ChgCnComp from 'pages/biz/evl/agremChgDtlAply/comp/ChgCnComp';
import RltDcmntComp from 'pages/biz/evl/agremChgDtlAply/comp/RltDcmntComp';
import RvWOpnnComp from 'pages/biz/evl/agremChgDtlAply/comp/RvWOpnnComp';
import HnfChgComp from 'pages/biz/evl/agremChgDtlAply/comp/HnfChgComp';
import HwSwChgComp from 'pages/biz/evl/agremChgDtlAply/comp/HwSwChgComp';
import SchdlChgComp from 'pages/biz/evl/agremChgDtlAply/comp/SchdlChgComp';
import ScpChgComp from 'pages/biz/evl/agremChgDtlAply/comp/ScpChgComp';
import EtcChgComp from 'pages/biz/evl/agremChgDtlAply/comp/EtcChgComp';
import 'css/Common.css';

const onTabChange = (key) => {
  Modal.info({
    title: key,
  });
};

const EvlRsltRegPage = () => {
  const acceptBtnClick = () => {
    Modal.info({
      title: 'acceptBtnClick',
    });
  };
  const rejectBtnClick = () => {
    Modal.info({
      title: 'rejectBtnClick',
    });
  };
  return (
    <BaseLayout>
      <TitlePage>평가결과등록</TitlePage>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <AsmtBscInfoComp />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ChgCnComp />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <RltDcmntComp />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs
            onChange={onTabChange}
            type="card"
            items={[
              {
                label: '인력변경',
                key: 1,
                children: <HnfChgComp />,
              },
              {
                label: 'H/W,S/W변경',
                key: 2,
                children: <HwSwChgComp />,
              },
              {
                label: '일정변경',
                key: 3,
                children: <SchdlChgComp />,
              },
              {
                label: '범위변경',
                key: 4,
                children: <ScpChgComp />,
              },
              {
                label: '기타변경',
                key: 5,
                children: <EtcChgComp />,
              },
            ]}
          />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <RvWOpnnComp />
        </Col>
      </Row>

      <Row className="eu-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-btn-process-fine"
            onClick={acceptBtnClick}
          >
            접수
          </Button>
          <Button
            size="large"
            className="eu-btn-process-error"
            onClick={rejectBtnClick}
          >
            반려
          </Button>
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default EvlRsltRegPage;
