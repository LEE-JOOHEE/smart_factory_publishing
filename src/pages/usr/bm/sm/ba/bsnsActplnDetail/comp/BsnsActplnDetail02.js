import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Input, Space, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import DescriptionRequired from 'components/layout/DescriptionRequired';
import 'css/CommonUsr.css';

const BsnsActplnDetail02 = () => {
  const [ojtSplyEnt, setOjtSplyEnt] = useState({});
  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };
  const ojtSplyEntChange = (value, column) => {
    setOjtSplyEnt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const saveClick = () => {
    Modal.info({ title: `저장 : ${JSON.stringify(ojtSplyEnt)}` });
  };

  useEffect(() => {
    setOjtSplyEnt({
      a1: '공급기업 법인명(상호)',
      a2: '1234567890',
      a3: '김철수',
      a4: '관리부',
      a5: '연구원',
      a6: '042-111-1111',
      a7: '010-1111-1111',
      a8: 'abc@naver.com',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>공급기업 담당자</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            onClick={saveClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item
              label={<DescriptionRequired>법인명(상호)</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a1');
                }}
                value={ojtSplyEnt?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>*사업자등록부서</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a2');
                }}
                value={ojtSplyEnt?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>성명</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a3');
                }}
                value={ojtSplyEnt?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>부서</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a4');
                }}
                value={ojtSplyEnt?.a4}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>직위</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a5');
                }}
                value={ojtSplyEnt?.a5}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>전화번호</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a6');
                }}
                value={ojtSplyEnt?.a6}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>핸드폰</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a7');
                }}
                value={ojtSplyEnt?.a7}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>이메일</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a8');
                }}
                value={ojtSplyEnt?.a8}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default BsnsActplnDetail02;
