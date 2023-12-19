import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal } from 'antd';
import 'css/CommonUsr.css';
import TaskReqstInfo01 from 'pages/usr/bm/tr/tr/taskReqstInfo/comp/TaskReqstInfo01';
import TaskReqstInfo02 from 'pages/usr/bm/tr/tr/taskReqstInfo/comp/TaskReqstInfo02';
import { useHistory } from 'react-router-dom';

const TaskReqstInfoContainer = () => {
  const history = useHistory();
  const [arrIndcEntFnnrStts, setIndcEntFnnrStts] = useState([]);
  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 5; idx++) {
      tmp1.push({
        key: idx,
        a: `2022-${idx}`,
      });
    }
    setIndcEntFnnrStts(tmp1);
  }, []);

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
          <TaskReqstInfo01 />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskReqstInfo02
            arrIndcEntFnnrStts={arrIndcEntFnnrStts}
            setIndcEntFnnrStts={setIndcEntFnnrStts}
          />
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

export default React.memo(TaskReqstInfoContainer);
