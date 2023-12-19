import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Input, Space, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import SuplyEntrprsPopup from 'pages/usr/bm/tr/tr/taskReqstBass/popup/SuplyEntrprsPopup';

const TaskReqstBass03 = () => {
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

  // 팝업 선택 key
  const popupSelectClick = (key) => {
    Modal.info({ title: `key: ${JSON.stringify(key)}` });
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
        <Col span={24}>
          <Space>
            <TitleComp>공급기업 담당자</TitleComp>
            <Button
              size="small"
              className="eu-usr-btn-crud-fine"
              onClick={() => {
                setOpen(true);
              }}
            >
              공급기업 검색
            </Button>
          </Space>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="*법인명(상호)" span={1.5}>
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a1');
                }}
                value={ojtSplyEnt?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*사업자등록부서" span={1.5}>
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a2');
                }}
                value={ojtSplyEnt?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*성명" span={1.5}>
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a3');
                }}
                value={ojtSplyEnt?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*부서" span={1.5}>
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a4');
                }}
                value={ojtSplyEnt?.a4}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*직위" span={1.5}>
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a5');
                }}
                value={ojtSplyEnt?.a5}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*전화번호" span={1.5}>
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a6');
                }}
                value={ojtSplyEnt?.a6}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*핸드폰" span={1.5}>
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a7');
                }}
                value={ojtSplyEnt?.a7}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*이메일" span={1.5}>
              <Input
                placeholder=""
                onChange={(e) => {
                  ojtSplyEntChange(e.target.value, 'a8');
                }}
                value={ojtSplyEnt?.a8}
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

export default TaskReqstBass03;
