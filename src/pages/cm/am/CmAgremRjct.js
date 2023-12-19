import React, { useEffect, useState } from 'react';
import { Button, Col, Input, Modal, Row } from 'antd';
import 'css/Common.css';

const { TextArea } = Input;
const CmAgremRjct = ({ cmAgremRjctOpen, setSmAgremRjctOpen }) => {
  const closeClick = () => {
    setSmAgremRjctOpen(false);
  };
  const rjctClick = () => {
    Modal.info({
      title: '반려 클릭',
    });
  };

  const [ojtRjct, setOjtRjct] = useState({});

  const ojtSrchCndChange = (value, column) => {
    setOjtRjct((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  useEffect(() => {
    if (ojtRjct) {
      console.log('ojtRjct : ', ojtRjct);
    }
  }, [ojtRjct]);

  return (
    <>
      <Modal
        key="cmAgremRjctOpen"
        open={cmAgremRjctOpen}
        title="평가위원 평가결과 반려 사유 입력"
        onCancel={closeClick}
        width={800}
        footer={[
          <Button
            key={'rjctClick'}
            className="eu-btn-popup-process-error"
            onClick={rjctClick}
          >
            반려
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
          <Row className="eu-row-comp-title"></Row>
          <Col span={24}>
            <TextArea
              rows={8}
              onChange={(evt) => {
                ojtSrchCndChange(evt.target.value, 'a');
              }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CmAgremRjct;
