import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import { useLocation } from 'react-router';
import TaskReqstDetailContainer from 'pages/usr/bm/tr/tr/taskReqstDetail/TaskReqstDetailContainer';

const TaskReqstDetailPage = () => {
  const location = useLocation();
  return (
    <BaseLayout>
      <TitlePage>과제신청</TitlePage>
      <TaskReqstDetailContainer location={location} />
    </BaseLayout>
  );
};

export default TaskReqstDetailPage;
