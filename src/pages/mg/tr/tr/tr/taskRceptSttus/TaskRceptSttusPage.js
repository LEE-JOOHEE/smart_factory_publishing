import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import TaskRceptSttusContainer from 'pages/mg/tr/tr/tr/taskRceptSttus/TaskRceptSttusContainer';

const TaskRceptSttusPage = () => {
  return (
    <BaseLayout>
      <TitlePage>과제접수현황</TitlePage>
      <TaskRceptSttusContainer />
    </BaseLayout>
  );
};

export default TaskRceptSttusPage;
