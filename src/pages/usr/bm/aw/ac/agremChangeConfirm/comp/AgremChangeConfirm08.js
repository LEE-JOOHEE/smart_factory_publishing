import React, { useState } from 'react';
import { Col, Row, Descriptions, Input, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';
import DescriptionRequired from 'components/layout/DescriptionRequired';
import SuplyEntrprsPopup from 'pages/usr/bm/tr/tr/taskReqstBass/popup/SuplyEntrprsPopup';

const AgremChangeConfirm08 = () => {
  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };
  // 팝업 선택 key
  const popupSelectClick = (key) => {
    Modal.info({ title: `key: ${JSON.stringify(key)}` });
  };
  const [ojtChgSplyEnt, setOjtChgSplyEnt] = useState({
    a1: '공급기업 법인명(상호)',
    a2: '1234567890',
    a3: '김철수',
    a4: '관리부',
    a5: '연구원',
    a6: '042-111-1111',
    a7: '010-1111-1111',
    a8: 'abc@naver.com',
    b1: '공급기업 법인명(상호)',
    b2: '1234567890',
    b3: '김철수',
    b4: '관리부',
    b5: '연구원',
    b6: '042-111-1111',
    b7: '010-1111-1111',
    b8: 'abc@naver.com',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>변경 전 공급기업 변경</TitleComp>
          <div>공급기업 담당자</div>
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
                onChange={(e) => {
                  ojtChange(e.target.value, 'a1', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>사업자등록번호</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a2', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>성명</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a3', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>부서</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a4', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.a4}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>직위</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a5', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.a5}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>전화번호</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a6', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.a6}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>핸드폰</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a7', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.a7}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>이메일</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a8', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.a8}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>변경 후 공급기업 변경</TitleComp>
          <br />
          공급기업 담당자
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={() => {
              setOpen(true);
            }}
          >
            공급기업 검색
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
                onChange={(e) => {
                  ojtChange(e.target.value, 'b1', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.b1}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>사업자등록번호</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b2', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.b2}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>성명</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b3', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.b3}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>부서</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b4', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.b4}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>직위</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b5', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.b5}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>전화번호</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b6', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.b6}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>핸드폰</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b7', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.b7}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>이메일</DescriptionRequired>}
              span={1.5}
            >
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b8', setOjtChgSplyEnt);
                }}
                value={ojtChgSplyEnt?.b8}
              />
            </Descriptions.Item>
          </Descriptions>
          ※ 공급기업이 검색되지 않는 경우 해당 업체에 연락하여, 스마트공장
          포털에 회원가입 요청하시기 바랍니다.
        </Col>
      </Row>
      <SuplyEntrprsPopup
        open={open}
        closeClick={closeClick}
        popupSelectClick={popupSelectClick}
      />
    </>
  );
};

export default AgremChangeConfirm08;
