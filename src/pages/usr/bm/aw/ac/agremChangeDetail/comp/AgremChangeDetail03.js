import React, { useState } from 'react';
import { Col, Row, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const AgremChangeDetail03 = ({ setPageType }) => {
  const slfAprvClick = () => {
    setPageType('ONSLF');
  };
  const chgAprvClick = () => {
    setPageType('CONFIRM');
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>협약 변경 신청</TitleComp>
          <div style={{ color: 'red' }}>
            변경요청항목명을 확인 후 협약변경을 신청 해주시기 바랍니다
          </div>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={12}>
          자체변경처리
          <div style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-usr-btn-crud-fine"
              onClick={slfAprvClick}
            >
              자체변경등록
            </Button>
          </div>
        </Col>
        <Col span={12}>
          승인변경처리
          <div style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-usr-btn-crud-fine"
              onClick={chgAprvClick}
            >
              변경승인등록
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeDetail03;
