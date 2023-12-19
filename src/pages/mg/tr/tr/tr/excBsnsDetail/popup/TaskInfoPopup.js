import React, { useEffect, useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Button, Col, Descriptions, Modal, Row } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import OutsetSm from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/OutsetSm';
import MiddleReprt from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/MiddleReprt';
import PrmpcCalcResult from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/PrmpcCalcResult';
import ExpertEvlResult from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/ExpertEvlResult';
import ExpertInfoPopup from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/ExpertInfoPopup';
import TaskReqstPopup from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/TaskReqstPopup';

const TaskInfoPopup = ({
  taskInfoPopupTitle = '접수현황',
  taskInfoPopupOpen,
  setTaskInfoPopupOpen,
  key,
}) => {
  //과제기본정보
  const [ojtTaskInfo, setOjtTaskInfo] = useState({
    b1: '2022-08-30',
    b2: '평가과제할당',
    b3: '2022년 스마트공장 고도화',
    b4: '2022-12A-027-000000',
    b5: '도입기업명',
    b6: '123-45-67890',
    b7: '공급기업명',
    b8: '123-45-67890',
  });
  //요건검토
  const [ojtTaskRvw, setOjtTaskRvw] = useState({
    b1: '검토 적합',
    b2: '2022-08-30',
  });

  //현장평가/실시
  const [ojtSptEvl, setOjtSptEvl] = useState({
    b1: '이영수',
    b2: '2022-05-24',
    b3: '2022-05-27',
  });
  //원가계산/감리
  const [ojtPrmpcCalc, setOjtPrmpcCalc] = useState({
    b1: '원가계산 완료',
    b2: '2022-05-24',
    b3: '2022-05-27',
    b4: '원가계산기관명',
    b5: '',
    b6: '',
  });
  //협약내역
  const [ojtAgremDsctn, setOjtAgremDsctn] = useState({
    b1: '2022-05-31',
    b2: '',
  });
  //보고서검토
  const [ojtRptpRvw, setOjtRptpRvw] = useState({
    b1: '미등록',
    b2: '미등록',
  });
  //최종감리
  const [ojtLastSpvs, setOjtLastSpvs] = useState({
    b1: ' ',
    b2: ' ',
    b3: ' ',
    b4: ' ',
    b5: ' ',
  });

  //과제신청 첨부문서 팝업
  const [rceptPdOpen, setRceptPdOpen] = useState(false);

  // 전문가 정보
  const [expertInfoPopupOpen, setExpertInfoPopupOpen] = useState(false);

  // 전문가 평가결과
  const [expertEvlResultOpen, setExpertEvlResultOpen] = useState(false);

  // 원가계산/감리결과
  const [prmpcCalcResultOpen, setPrmpcCalcResultOpen] = useState(false);

  // 착수계
  const [outsetSmOpen, setOutsetSmOpen] = useState(false);

  // 중간보고서
  const [middleReprtOpen, setMiddleReprtOpen] = useState(false);

  useEffect(() => {
    if (key) {
      setOjtTaskInfo();
    }
  }, [key]);
  const closeClick = () => {
    setTaskInfoPopupOpen(false);
  };
  const sbmsnDayClick = () => {
    setRceptPdOpen(true);
  };
  const exptClick = () => {
    setExpertInfoPopupOpen(true);
  };
  const altmntDay = () => {
    setExpertEvlResultOpen(true);
  };
  const instNmClick = () => {
    setPrmpcCalcResultOpen(true);
  };
  const outsetClick = () => {
    setOutsetSmOpen(true);
  };
  const middleRptpClick = () => {
    setMiddleReprtOpen(true);
  };

  return (
    <>
      <Modal
        title={taskInfoPopupTitle}
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        key="TaskInfoPopupPage"
        open={taskInfoPopupOpen}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            key={'confirmClick'}
            type="primary"
            className="eu-btn-popup-process-fine"
            onClick={closeClick}
          >
            확인
          </Button>,
          <Button
            key={'closeClick'}
            type="primary"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title">과제기본정보</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="제출일" span={2}>
                <Button
                  className="eu-btn-link"
                  size="small"
                  type="link"
                  onClick={sbmsnDayClick}
                >
                  {ojtTaskInfo?.b1}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item label="진행상태">
                {ojtTaskInfo?.b2}
              </Descriptions.Item>
              <Descriptions.Item label="사업명" span={2}>
                {ojtTaskInfo?.b3}
              </Descriptions.Item>
              <Descriptions.Item label="과제번호">
                {ojtTaskInfo?.b4}
              </Descriptions.Item>
              <Descriptions.Item label="도입기업" span={2}>
                {ojtTaskInfo?.b5}
              </Descriptions.Item>
              <Descriptions.Item label="사업자등록번호">
                {ojtTaskInfo?.b6}
              </Descriptions.Item>
              <Descriptions.Item label="공급기업" span={2}>
                {ojtTaskInfo?.b7}
              </Descriptions.Item>
              <Descriptions.Item label="사업자등록번호">
                {ojtTaskInfo?.b8}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">요건검토</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="요건검토상태" span={2}>
                {ojtTaskRvw?.b1}
              </Descriptions.Item>
              <Descriptions.Item label="요건검토 처리일">
                {ojtTaskRvw?.b2}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">
            <Col span={6}>현장평가/실사</Col>
            <Col span={18} className="mt-auto">
              <div className="eu-table-indicator">
                <span className="font-16-400 text-red ml-auto">
                  ※ 전문가명 : 전문가정보 조회, 배정일자 : 현장평가결과 조회
                </span>
              </div>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="(정)전문가명">
                <Button
                  className="eu-btn-link"
                  size="small"
                  type="link"
                  onClick={exptClick}
                >
                  {ojtSptEvl?.b1}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item label="배정일자">
                <Button
                  className="eu-btn-link"
                  size="small"
                  type="link"
                  onClick={altmntDay}
                >
                  {ojtSptEvl?.b2}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item label="승인일자">
                {ojtSptEvl?.b3}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">
            <Col span={4}>원가계산/감리</Col>
            <Col span={20} className="mt-auto">
              <div className="eu-table-indicator">
                <span className="font-16-400 text-red ml-auto">
                  ※ 기관명 : 원가계산/간리 결과 조회(19년 사업 중 일부 과제는 정부지원금이 0원으로 표시 될 수 있습니다.)
                </span>
              </div>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="진행상태">
                {ojtPrmpcCalc?.b1}
              </Descriptions.Item>
              <Descriptions.Item label="지정일자">
                {ojtPrmpcCalc?.b2}
              </Descriptions.Item>
              <Descriptions.Item label="승인일자">
                {ojtPrmpcCalc?.b3}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">(원가계산/감리)</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="기관명">
                <Button
                  className="eu-btn-link"
                  type="link"
                  onClick={instNmClick}
                >
                  {ojtPrmpcCalc?.b4}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item label="도입기업부담금합계">
                {ojtPrmpcCalc?.b5}
              </Descriptions.Item>
              <Descriptions.Item label="정부지원금합겨">
                {ojtPrmpcCalc?.b6}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">협약내역</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="협약일자" span={2}>
                {ojtAgremDsctn?.b1}
              </Descriptions.Item>
              <Descriptions.Item label="협약변경일자">
                {ojtAgremDsctn?.b2}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">
            <Col span={6}>보고서검토</Col>
            <Col span={18} className="mt-auto">
              <div className="eu-table-indicator">
                <span className="font-16-400 text-red ml-auto">
                  ※ 승인일자 : 감리결과 조회
                </span>
              </div>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="착수계" span={2}>
                <Button
                  className="eu-btn-link"
                  size="small"
                  type="link"
                  onClick={outsetClick}
                >
                  {ojtRptpRvw?.b1}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item label="중간보고서">
                <Button
                  className="eu-btn-link"
                  size="small"
                  type="link"
                  onClick={middleRptpClick}
                >
                  {ojtRptpRvw?.b2}
                </Button>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">최종 감리</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="기관명" span={2}>
                {ojtLastSpvs?.b1}
              </Descriptions.Item>
              <Descriptions.Item label="지정일자">
                {ojtLastSpvs?.b2}
              </Descriptions.Item>
              <Descriptions.Item label="감리 진행상태" span={2}>
                {ojtLastSpvs?.b3}
              </Descriptions.Item>
              <Descriptions.Item label="승인일자">
                {ojtLastSpvs?.b4}
              </Descriptions.Item>
              <Descriptions.Item label="감리 결과" span={3}>
                {ojtLastSpvs?.b5}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
      <TaskReqstPopup
        rceptPdOpen={rceptPdOpen}
        setRceptPdOpen={setRceptPdOpen}
      />
      <ExpertInfoPopup
        expertInfoPopupOpen={expertInfoPopupOpen}
        setExpertInfoPopupOpen={setExpertInfoPopupOpen}
      />
      <ExpertEvlResult
        expertEvlResultOpen={expertEvlResultOpen}
        setExpertEvlResultOpen={setExpertEvlResultOpen}
      />
      <PrmpcCalcResult
        prmpcCalcResultOpen={prmpcCalcResultOpen}
        setPrmpcCalcResultOpen={setPrmpcCalcResultOpen}
      />
      <OutsetSm outsetSmOpen={outsetSmOpen} setOutsetSmOpen={setOutsetSmOpen} />
      <MiddleReprt
        middleReprtOpen={middleReprtOpen}
        setMiddleReprtOpen={setMiddleReprtOpen}
      />
    </>
  );
};

export default TaskInfoPopup;
