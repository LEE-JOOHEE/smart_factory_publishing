import React from 'react';
import { Col, Row, Button, Modal } from 'antd';
import 'css/CommonUsr.css';
import TaskReqstPvltrt01 from 'pages/usr/bm/tr/tr/taskReqstPvltrt/comp/TaskReqstPvltrt01';
import { useHistory } from 'react-router-dom';
const TaskReqstPvltrtContainer = () => {
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
          <TaskReqstPvltrt01 />
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

export default React.memo(TaskReqstPvltrtContainer);
