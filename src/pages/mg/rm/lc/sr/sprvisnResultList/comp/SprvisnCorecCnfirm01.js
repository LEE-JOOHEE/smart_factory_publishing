import React, { useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Modal,
  Radio,
  Row,
  Table,
  Tabs,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SprvisnLevelPopup from 'pages/mg/rm/lc/sr/sprvisnResultList/popup/SprvisnLevelPopup';

//첨부문서
const columns = [
  {
    title: '항목',
    dataIndex: 'a1',
  },
  {
    title: '첨부파일',
    dataIndex: 'a2',
  },
  {
    title: '등록일',
    dataIndex: 'a3',
  },
  {
    title: '파일크기',
    dataIndex: 'a4',
  },
];

const SprvisnCorecCnfirm01 = ({
  ojtDetailInfo,
  arrAttchFile,
  arrPlanResult,
}) => {
  const [sprvisnLevelOpen, setSprvisnLevelOpen] = useState(false);

  const hstryClick = () => {
    setSprvisnLevelOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>과제정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtDetailInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="사업연도" span={1.5}>
              {ojtDetailInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtDetailInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              {ojtDetailInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtDetailInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtDetailInfo?.a6}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>시정조치 계획 및 결과보고서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrPlanResult}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>시정조치결과확인서</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={() => {
              hstryClick();
            }}
          >
            수준확인 저장 이력조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="구축시스템 스마트화 수준" span={3}>
              <Radio.Group disabled defaultValue={ojtDetailInfo?.a8}>
                <Radio value={'기초'}>기초</Radio>
                <Radio value={'중간1'}>중간 1</Radio>
                <Radio value={'중간2'}>중간 2</Radio>
                <Radio value={'고도화'}>고도화</Radio>
              </Radio.Group>
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 수준" span={3}>
              <Radio.Group disabled defaultValue={ojtDetailInfo?.a9}>
                <Radio value={'Level1'}>Level 1</Radio>
                <Radio value={'Level2'}>Level 2</Radio>
                <Radio value={'Level3'}>Level 3</Radio>
                <Radio value={'Level4'}>Level 4</Radio>
                <Radio value={'Level5'}>Level 5</Radio>
              </Radio.Group>
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 총점" span={3}>
              {ojtDetailInfo?.a10}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부문서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrAttchFile || []}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>

      <SprvisnLevelPopup
        setSprvisnLevelOpen={setSprvisnLevelOpen}
        sprvisnLevelOpen={sprvisnLevelOpen}
      />
    </>
  );
};

export default SprvisnCorecCnfirm01;
