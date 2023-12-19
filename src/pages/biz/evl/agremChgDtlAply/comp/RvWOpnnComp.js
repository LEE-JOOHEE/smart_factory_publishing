import React, { useState } from 'react';
import { Descriptions, Input, Col, Row, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';

const { TextArea } = Input;

const RvWOpnnComp = () => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>검토의견</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button className="eu-btn-crud-fine" size="small">
            저장
          </Button>
          <Button className="eu-btn-crud-error" size="small">
            삭제
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="검토의견">
              <TextArea rows={4} />
            </Descriptions.Item>
            <Descriptions.Item label="반려사유" span={2}>
              <TextArea rows={4} />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default RvWOpnnComp;
