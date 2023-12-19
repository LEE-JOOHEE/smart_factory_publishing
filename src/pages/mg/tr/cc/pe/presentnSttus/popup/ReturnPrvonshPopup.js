import React, { useEffect, useState } from 'react';
import { Col, Descriptions, Input, Row, Tabs } from 'antd';
import 'css/Common.css';
import { Button, Modal } from 'antd/lib';
import TitleComp from 'components/layout/TitleComp';

const ReturnPrvonshPopup = ({
  returnPrvonshPopupOpen,
  setReturnPrvonshPopupOpen,
  setValue = () => {},
}) => {
  const [prvonshValue, setPrvonshValue] = useState('');

  const onPrvonshChange = (e) => {
    console.log('ReturnPrvonsh : ', e.target.value);
    setPrvonshValue(e.target.value);
  };

  const confirmClick = () => {
    setValue(prvonshValue);
    setReturnPrvonshPopupOpen(false);
  };
  const closeClick = () => {
    setReturnPrvonshPopupOpen(false);
  };

  useEffect(() => {
    if (returnPrvonshPopupOpen) setPrvonshValue('');
  }, [returnPrvonshPopupOpen]);

  return (
    <Modal
      open={returnPrvonshPopupOpen}
      title="반려 사유입력"
      onOk={confirmClick}
      onCancel={closeClick}
      width={1000}
      footer={[
        <Button
          size="middle"
          className="eu-btn-popup-process-fine"
          onClick={confirmClick}
        >
          확인
        </Button>,
        <Button
          type="primary"
          size="middle"
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          취소
        </Button>,
      ]}
    >
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>반려내용</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="반려내용 입력" span={3}>
              <Input.TextArea value={prvonshValue} onChange={onPrvonshChange} />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Modal>
  );
};

export default ReturnPrvonshPopup;
