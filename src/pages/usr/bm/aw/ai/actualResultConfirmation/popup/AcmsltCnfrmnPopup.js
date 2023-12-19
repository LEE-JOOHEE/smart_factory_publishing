import React from 'react';
import { Button, Col, Descriptions, Input, Modal, Row, Space } from 'antd';

import 'css/CommonUsr.css';
const AcmsltCnfrmnPopup = ({
  acmsltCnfrmnPopupOpen,
  setAcmsltCnfrmnPopupOpen,
}) => {
  const confirmClick = () => {};
  const closeClick = () => {
    setAcmsltCnfrmnPopupOpen(false);
  };

  return (
    <>
      <Modal
        open={acmsltCnfrmnPopupOpen}
        title="실적확인서 발급"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            key={'confirmClick'}
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-fine"
            onClick={confirmClick}
          >
            발급 신청
          </Button>,
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="증명서사용도(25자이내)" span={3}>
                <Space>
                  <Input></Input>
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="제출처(25자이내)" span={3}>
                <Space>
                  <Input></Input>
                </Space>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AcmsltCnfrmnPopup;
