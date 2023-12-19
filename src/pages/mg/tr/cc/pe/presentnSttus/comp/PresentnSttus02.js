import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Descriptions, Input } from 'antd/lib';

const PresentnSttus02 = ({ ojtCodi }) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>코디네이터 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="성명" span={3}>
              {ojtCodi?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="핸드폰" span={2}>
              {ojtCodi?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="이메일" span={1}>
              {ojtCodi?.a3}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PresentnSttus02;
