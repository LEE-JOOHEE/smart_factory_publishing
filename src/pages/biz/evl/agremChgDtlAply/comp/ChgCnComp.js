import React, { useState } from 'react';
import { Descriptions, Input, Checkbox, Col, Row, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';

const { TextArea } = Input;

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const saveButtonClick = () => {
  Modal.info({
    title: 'saveButtonClick',
  });
};
const deleteButtonClick = () => {
  Modal.info({
    title: 'deleteButtonClick',
  });
};

const ChgCnComp = ({}) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>변경 내용</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={saveButtonClick}
          >
            저장
          </Button>
          <Button
            className="eu-btn-crud-error"
            size="small"
            onClick={deleteButtonClick}
          >
            삭제
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="변경(전)">
              <TextArea rows={4} />
            </Descriptions.Item>
            <Descriptions.Item label="변경(후)" span={2}>
              <TextArea rows={4} />
            </Descriptions.Item>
            <Descriptions.Item label="사유" span={3}>
              <Input />
            </Descriptions.Item>
            <Descriptions.Item label="변경항목" span={3}>
              <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                <Checkbox value="1">인력변경</Checkbox>
                <Checkbox value="2">H/W,S/W변경</Checkbox>
                <Checkbox value="3">일정변경</Checkbox>
                <Checkbox value="4">범위변경</Checkbox>
                <Checkbox value="5">기타변경</Checkbox>
              </Checkbox.Group>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default ChgCnComp;
