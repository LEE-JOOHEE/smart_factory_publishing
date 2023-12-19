import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import TaskReqstBass01 from 'pages/usr/bm/tr/tr/taskReqstBass/comp/TaskReqstBass01';
import TaskReqstBass02 from 'pages/usr/bm/tr/tr/taskReqstBass/comp/TaskReqstBass02';
import TaskReqstBass03 from 'pages/usr/bm/tr/tr/taskReqstBass/comp/TaskReqstBass03';
import TaskReqstBass04 from 'pages/usr/bm/tr/tr/taskReqstBass/comp/TaskReqstBass04';
import TaskReqstBass05 from 'pages/usr/bm/tr/tr/taskReqstBass/comp/TaskReqstBass05';
import { useHistory } from 'react-router-dom';

const TaskReqstBassContainer = ({ ojtKey }) => {
  const history = useHistory();
  const lstClick = () => {
    history.push('/usr/bm/tr/tr/smsDspth');
  };

  const saveClick = () => {
    Modal.info({ title: '저장' });
  };

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
  });
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstBass01 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstBass02 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstBass03 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstBass04 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstBass05 />
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

export default React.memo(TaskReqstBassContainer);
