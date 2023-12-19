import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import TaskDetailSportContainer from 'pages/usr/bm/tr/tr/taskDetailSport/TaskDetailSportContainer';

const TaskDetailSportPage = () => {
  return (
    <BaseLayout>
      <TitlePage>과제신청</TitlePage>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <TaskDetailSportContainer />
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default TaskDetailSportPage;
