import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal } from 'antd';
import 'css/CommonUsr.css';
import TaskReqstCnsrtm01 from 'pages/usr/bm/tr/tr/taskReqstCnsrtm/comp/TaskReqstCnsrtm01';
import TaskReqstCnsrtm02 from 'pages/usr/bm/tr/tr/taskReqstCnsrtm/comp/TaskReqstCnsrtm02';
import { useHistory } from 'react-router-dom';
const TaskReqstCnsrtmContainer = () => {
  const history = useHistory();
  const lstClick = () => {
    history.push('/usr/bm/tr/tr/smsDspth');
  };

  const saveClick = () => {
    Modal.info({ title: '저장' });
  };
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstCnsrtm01 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstCnsrtm02 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-usr-btn-process-default"
            onClick={lstClick}
          >
            목록
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-fine"
            onClick={saveClick}
          >
            저장
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(TaskReqstCnsrtmContainer);
