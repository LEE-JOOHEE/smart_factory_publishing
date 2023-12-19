import React, { useState } from 'react';
import { Col, Descriptions, Row, Modal, Button, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';

const AgremChangeRcept02 = ({
  saveClick = () => Modal.info({ title: '변경 저장' }),
}) => {
  const [ojtFctryAddr, setOjtFctryAddr] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
  });

  const searchClick = () => {
    Modal.info({ title: '우편주소찾기 클릭' });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>변경 전 도입기업 공장 주소 변경</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="도입기업 공장 주소" span={3}>
              <Input
                placeholder="우편번호"
                onChange={(e) => {
                  ojtChange(e.target.value, 'a1', setOjtFctryAddr);
                }}
                value={ojtFctryAddr?.a1}
              />
              <br />
              <Input
                placeholder="주소"
                onChange={(e) => {
                  ojtChange(e.target.value, 'a2', setOjtFctryAddr);
                }}
                value={ojtFctryAddr?.a2}
              />
              <br />
              <Input
                placeholder="상세주소"
                onChange={(e) => {
                  ojtChange(e.target.value, 'a3', setOjtFctryAddr);
                }}
                value={ojtFctryAddr?.a3}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>변경 후 도입기업 공장 주소 변경</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="도입기업 공장 주소" span={3}>
              <Input
                placeholder="우편번호"
                onChange={(e) => {
                  ojtChange(e.target.value, 'a4', setOjtFctryAddr);
                }}
                value={ojtFctryAddr?.a4}
              />
              <Button
                className="eu-btn-crud-fine"
                size="small"
                onClick={searchClick}
              >
                우편주소 찾기
              </Button>
              <br />
              <Input
                placeholder="주소"
                onChange={(e) => {
                  ojtChange(e.target.value, 'a5', setOjtFctryAddr);
                }}
                value={ojtFctryAddr?.a5}
              />
              <br />
              <Input
                placeholder="상세주소"
                onChange={(e) => {
                  ojtChange(e.target.value, 'a6', setOjtFctryAddr);
                }}
                value={ojtFctryAddr?.a6}
              />
            </Descriptions.Item>
          </Descriptions>
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

export default AgremChangeRcept02;
