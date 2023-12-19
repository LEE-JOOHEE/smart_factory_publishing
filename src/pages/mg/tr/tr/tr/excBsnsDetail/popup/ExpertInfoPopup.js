import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Modal, Row } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const ExpertInfoPopup = ({
  expertInfoPopupOpen,
  setExpertInfoPopupOpen,
  key,
}) => {
  const [ojtExpertInfo, setOjtExpertInfo] = useState({
    a1: '이영수',
    a2: '',
    a3: '',
    a4: '산업공학',
    a5: '010-1111-1111',
    a6: 'abc@naver.com',
    a7: '정보화분야, 스마트공장 전문가(평가위원), 자동차, 전자부품분야, 스마트서비스분야,\n 스마트공장 전문가(코디네이터), 공정전문가(데이터 인프라 구축사업)',
  });

  useEffect(() => {
    if (key) {
      // setOjtExpertInfo()
    }
  }, [key]);
  const confirmClick = () => {
    setExpertInfoPopupOpen(false);
  };
  const closeClick = () => {
    setExpertInfoPopupOpen(false);
  };

  return (
    <>
      <Modal
        open={expertInfoPopupOpen}
        title="(정 or 부)전문가정보"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            확인
          </Button>,
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title">(정 or 부)전문가정보</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="전문가명" span={2}>
                {ojtExpertInfo?.a1}
              </Descriptions.Item>
              <Descriptions.Item label="소속기관">
                {ojtExpertInfo?.a2}
              </Descriptions.Item>
              <Descriptions.Item label="직위" span={2}>
                {ojtExpertInfo?.a3}
              </Descriptions.Item>
              <Descriptions.Item label="전공">
                {ojtExpertInfo?.a4}
              </Descriptions.Item>
              <Descriptions.Item label="전화번호" span={2}>
                {ojtExpertInfo?.a5}
              </Descriptions.Item>
              <Descriptions.Item label="이메일">
                {ojtExpertInfo?.a6}
              </Descriptions.Item>
              <Descriptions.Item label="평가분야" span={3}>
                {ojtExpertInfo?.a7}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ExpertInfoPopup;
