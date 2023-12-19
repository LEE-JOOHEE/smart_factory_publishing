import React, { useState } from 'react';
import { Button, Col, Input, Modal, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import TextArea from 'antd/lib/input/TextArea';
import { ojtChange } from 'components/common/Common';
const AgremChangeRcept05 = ({
  saveClick = () => Modal.info({ title: '변경 저장' }),
}) => {
  const [ojtEtc, setOjtEtc] = useState({});

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>변경 전 범위 변경</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <TextArea
            value={ojtEtc?.a1}
            onChange={(e) => ojtChange(e.target.value, 'a1', setOjtEtc)}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>변경 후 범위 변경</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <TextArea
            value={ojtEtc?.a2}
            onChange={(e) => ojtChange(e.target.value, 'a2', setOjtEtc)}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button className="eu-btn-crud-fine" size="small" onClick={saveClick}>
            저장
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeRcept05;
