import React, { useState } from 'react';
import { Col, Descriptions, Row, Modal, Button, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import DescriptionRequired from 'components/layout/DescriptionRequired';
import { ojtChange } from 'components/common/Common';
const AgremChangeRcept04 = ({
  saveClick = () => Modal.info({ title: '변경 저장' }),
}) => {
  const [ojtSplyEnt, setOjtSplyEnt] = useState({
    a1: '공급기업 법인명(상호)',
    a2: '1234567890',
    a3: '김철수',
    a4: '관리부',
    a5: '연구원',
    a6: '042-111-1111',
    a7: '010-1111-1111',
    a8: 'abc@naver.com',
    a11: '공급기업 법인명(상호)',
    a12: '1234567890',
    a13: '김철수',
    a14: '관리부',
    a15: '연구원',
    a16: '042-111-1111',
    a17: '010-1111-1111',
    a18: 'abc@naver.com',
  });

  const searchClick = () => {
    Modal.info({
      title:
        '공급기업 검색 팝업 필요 / 140604P04_협약변경상세(공급기업선택)팝업 사용',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>변경 전 공급기업 변경</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col span={12}>공급기업 담당자</Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item
              label={<DescriptionRequired>법인명</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a1', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>사업자등록부서</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a2', setOjtSplyEnt);
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
                  ojtChange(e.target.value, 'a3', setOjtSplyEnt);
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
                  ojtChange(e.target.value, 'a4', setOjtSplyEnt);
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
                  ojtChange(e.target.value, 'a5', setOjtSplyEnt);
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
                  ojtChange(e.target.value, 'a6', setOjtSplyEnt);
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
                  ojtChange(e.target.value, 'a7', setOjtSplyEnt);
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
                  ojtChange(e.target.value, 'a8', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a8}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>변경 후 공급기업 변경</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          공급기업 담당자
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={searchClick}
          >
            공급기업 검색
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item
              label={<DescriptionRequired>법인명</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a11', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a11}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>사업자등록부서</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a12', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a12}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>성명</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a13', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a13}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>부서</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a14', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a14}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>직위</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a15', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a15}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>전화번호</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a16', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a16}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>핸드폰</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a17', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a17}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>이메일</DescriptionRequired>}
              span={1.5}
            >
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtChange(e.target.value, 'a18', setOjtSplyEnt);
                }}
                value={ojtSplyEnt?.a18}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          ※ 공급기업이 검색되지 않는 경우 해당 업체에 연락하여, 스마트공장
          포털에 회원가입 요청하시기 바랍니다.
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

export default AgremChangeRcept04;
