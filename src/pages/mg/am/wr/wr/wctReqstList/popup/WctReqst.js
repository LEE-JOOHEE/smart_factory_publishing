import React from 'react';
import { Button, Col, Descriptions, Input, Modal, Row, Tabs } from 'antd';
import 'css/Common.css';

const { TextArea } = Input;
const WctReqst = ({ wctReqstOpen, setWctReqstOpen }) => {
  const confirmClick = () => {
    setWctReqstOpen(false);
  };
  const closeClick = () => {
    setWctReqstOpen(false);
  };

  return (
    <Modal
      open={wctReqstOpen}
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
          반려
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
      <Descriptions size="small" bordered>
        <Descriptions.Item label="반려내용" span={3}>
          <TextArea />
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default WctReqst;
