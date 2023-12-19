import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import TaskInfoPopup from 'pages/mg/tr/cc/pe/presentnSttus/popup/TaskInfoPopup';

const PresentnSttus01 = ({ ojt, clickable = true }) => {
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({
    a1: '2022-12A-027-000000',
    a2: '고도화',
    a3: '스마트공장 고도화',
    a4: '일터혁신컨설팅',
    a5: '스마트공장 고도화',
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

  const [taskInfoPopupOpen, setTaskInfoPopupOpen] = useState(false);
  useEffect(() => {
    if (ojt) {
      //데이터 바인딩
      setOjtAsmtBscInfo();
      setOjtIndcEntPic();
      setOjtSplyEntPic();
    }
  }, [ojt]);
  //과제 접수 현황 클릭
  const taskInfoClick = () => {
    setTaskInfoPopupOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={2}>
              {clickable ? (
                <Button
                  className="eu-btn-link"
                  size="small"
                  type="link"
                  onClick={taskInfoClick}
                >
                  {ojtAsmtBscInfo?.a1}
                </Button>
              ) : (
                ojtAsmtBscInfo?.a1
              )}
            </Descriptions.Item>
            <Descriptions.Item label="과제구분">
              {ojtAsmtBscInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={2}>
              {ojtAsmtBscInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="신청자">
              {ojtAsmtBscInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              {ojtAsmtBscInfo?.a5}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title mt-30">
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
      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>공급기업담당자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="법인명(상호)" span={2}>
              {ojtSplyEntPic?.a}
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
      />
    </>
  );
};

export default PresentnSttus01;
