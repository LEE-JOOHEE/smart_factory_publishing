import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import TaskInfoPopup from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/TaskInfoPopup';
import SuplyDetailPopup from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/SuplyDetailPopup';
import SplemntHistPopup from 'pages/mg/tr/re/re/excBsnsDetail/popup/SplemntHistPopup';
import { ojtChange } from 'components/common/Common';

const CmAplyAsmtBsc = ({ key, editable = false, type = 'info' }) => {
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({
    a1: '4',
    a: '2022-08-30',
    b: '평가과제할당',
    c: '2022년 스마트 공장 고도화',
    d: '3',
    e: [''],
    f: '2022-12A-027-000000',
    g: '고도화',
    h: '스마트공장 고도화',
    i: '일터혁신컨설팅',
    j: '0',
    k: '',
    l: '',
    m: '기타',
    n: '기타',
    o: '기초 / 기초',
    p: '사업개요',
  });
  const [ojtIndcEntPic, setOjtIndcEntPic] = useState({
    a: '홍길동',
    b: '경영본부',
    c: '차장',
    d: '000-000-0000',
    e: '000-0000-0000',
    f: 'abc@naver.com',
  });
  const [ojtSplyEntPic, setOjtSplyEntPic] = useState({
    a: '공급기업 법인명(상호)',
    b: '132456789',
    c: '홍길동',
    d: '경영본부',
    e: '차장',
    f: '000-000-0000',
    g: '000-0000-0000',
    h: 'abc@naver.com',
  });

  const [taskInfoPopupTitle, setTaskInfoPopupTitle] = useState('');
  const [taskInfoPopupOpen, setTaskInfoPopupOpen] = useState(false);
  const [suplyDetailOpen, setSuplyDetailOpen] = useState(false);
  const [splemntHistOpen, setSplemntHistOpen] = useState(false);

  useEffect(() => {
    if (key) {
      //데이터 요청
      setOjtAsmtBscInfo();
      setOjtIndcEntPic();
      setOjtSplyEntPic();
    }
  }, [key]);

  useEffect(() => {
    setTaskInfoPopupTitle((old) => {
      switch (type) {
        case 'info':
          return '접수현황';
        case 'detail':
          return '사업관리대장 조회';
        default:
          return '접수현황';
      }
    });
  }, [type]);

  //과제 접수 현황 클릭
  const taskInfoClick = () => {
    setTaskInfoPopupOpen(true);
  };
  //과제신청 첨부문서 클릭
  const suplyEntClick = () => {
    setSuplyDetailOpen(true);
  };
  //보완이력 클릭
  const splmntHstryClick = () => {
    setSplemntHistOpen(true);
  };
  const updateClick = () => {
    Modal.info({
      title: 'update Click',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            과제기본정보
            {editable && (
              <Button
                className="eu-btn-link"
                type="link"
                onClick={splmntHstryClick}
              >
                보완이력 : {ojtAsmtBscInfo?.a1}건
              </Button>
            )}
          </TitleComp>
        </Col>
        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              className="eu-btn-crud-fine"
              onClick={updateClick}
            >
              수정
            </Button>
          </Col>
        )}
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="제출일" span={2}>
              {ojtAsmtBscInfo?.a}
            </Descriptions.Item>
            <Descriptions.Item label="진행상태">
              {ojtAsmtBscInfo?.b}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={2}>
              {ojtAsmtBscInfo?.c}
            </Descriptions.Item>
            <Descriptions.Item label="사업기간">
              <div className="flex-row item-center">
                <div>작수일로부터</div>
                <div className="ml-16 mr-8">
                  <Input
                    disabled={!editable}
                    value={ojtAsmtBscInfo?.d}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'd', setOjtAsmtBscInfo)
                    }
                    type="number"
                  />
                </div>
                <div>일</div>
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="고도화유형" span={3}>
              <Checkbox.Group
                disabled={!editable}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtAsmtBscInfo?.e}
                onChange={(value) => ojtChange(value, 'e', setOjtAsmtBscInfo)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={2}>
              <Button
                className="eu-btn-link"
                size="small"
                type="link"
                onClick={taskInfoClick}
              >
                {ojtAsmtBscInfo?.f}
              </Button>
            </Descriptions.Item>
            <Descriptions.Item label="과제구분">
              <Select
                disabled={!editable}
                placeholder="현장컨설팅 배정 선택"
                onChange={(value) => ojtChange(value, 'g', setOjtAsmtBscInfo)}
                options={[
                  {
                    value: '고도화',
                    label: '고도화',
                  },
                ]}
                value={ojtAsmtBscInfo?.g}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={2}>
              {ojtAsmtBscInfo?.h}
            </Descriptions.Item>
            <Descriptions.Item label="컨설팅지원사업">
              {ojtAsmtBscInfo?.i}
            </Descriptions.Item>
            <Descriptions.Item label="총사업비(원)" span={2}>
              {ojtAsmtBscInfo?.j} 원
            </Descriptions.Item>
            <Descriptions.Item label="지원요청금액(원)">
              {ojtAsmtBscInfo?.k} 원
            </Descriptions.Item>
            <Descriptions.Item label="기 구축 시스템" span={2}>
              <Input
                disabled={!editable}
                value={ojtAsmtBscInfo?.l}
                onChange={(e) =>
                  ojtChange(e.target.value, 'l', setOjtAsmtBscInfo)
                }
              />
            </Descriptions.Item>
            <Descriptions.Item label="추가(개선) 시스템">
              {ojtAsmtBscInfo?.m}
            </Descriptions.Item>
            <Descriptions.Item label="도입(고도화) 시스템" span={2}>
              {ojtAsmtBscInfo?.n}
            </Descriptions.Item>
            <Descriptions.Item label="목표수준(전 / 후)">
              {ojtAsmtBscInfo?.o}
            </Descriptions.Item>
            <Descriptions.Item label="사업개요" span={3}>
              {ojtAsmtBscInfo?.p}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>도입기업 담당자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="성명" span={2}>
              {ojtIndcEntPic?.a}
            </Descriptions.Item>
            <Descriptions.Item label="부서">
              {ojtIndcEntPic?.b}
            </Descriptions.Item>
            <Descriptions.Item label="직위" span={2}>
              {ojtIndcEntPic?.c}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호">
              {ojtIndcEntPic?.d}
            </Descriptions.Item>
            <Descriptions.Item label="핸드폰" span={2}>
              {ojtIndcEntPic?.e}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {ojtIndcEntPic?.f}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>공급기업담당자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="법인명(상호)" span={2}>
              <Button
                className="eu-btn-link"
                size="small"
                type="link"
                onClick={suplyEntClick}
              >
                {ojtSplyEntPic?.a}
              </Button>
            </Descriptions.Item>
            <Descriptions.Item label="사업자등록번호">
              {ojtSplyEntPic?.b}
            </Descriptions.Item>
            <Descriptions.Item label="성명" span={2}>
              {ojtSplyEntPic?.c}
            </Descriptions.Item>
            <Descriptions.Item label="부서">
              {ojtSplyEntPic?.d}
            </Descriptions.Item>
            <Descriptions.Item label="직위" span={2}>
              {ojtSplyEntPic?.e}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호">
              {ojtSplyEntPic?.f}
            </Descriptions.Item>
            <Descriptions.Item label="핸드폰" span={2}>
              {ojtSplyEntPic?.g}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {ojtSplyEntPic?.h}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <TaskInfoPopup
        setTaskInfoPopupOpen={setTaskInfoPopupOpen}
        taskInfoPopupOpen={taskInfoPopupOpen}
        taskInfoPopupTitle={taskInfoPopupTitle}
      />
      <SuplyDetailPopup
        suplyDetailOpen={suplyDetailOpen}
        setSuplyDetailOpen={setSuplyDetailOpen}
      />
      <SplemntHistPopup
        splemntHistOpen={splemntHistOpen}
        setSplemntHistOpen={setSplemntHistOpen}
      />
    </>
  );
};

export default CmAplyAsmtBsc;
