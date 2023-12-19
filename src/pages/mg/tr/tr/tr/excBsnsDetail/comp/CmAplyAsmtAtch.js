import React, { useState } from 'react';
import { Button, Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const CmAplyAsmtAtch = ({ key, editable = false }) => {
  return (
    <>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부문서</TitleComp>
        </Col>
        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button size="small" className="eu-btn-crud-fine">
              수정
            </Button>
          </Col>
        )}
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}></Col>
      </Row>
    </>
  );
};

export default CmAplyAsmtAtch;
