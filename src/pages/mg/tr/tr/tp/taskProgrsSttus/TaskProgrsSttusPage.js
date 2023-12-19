import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import TaskProgrsSttusContainer from 'pages/mg/tr/tr/tp/taskProgrsSttus/TaskProgrsSttusContainer';

const TaskProgrsSttusPage = () => {
  return (
    <BaseLayout>
      <TitlePage>과제진행현황</TitlePage>
      <TaskProgrsSttusContainer />
    </BaseLayout>
  );
};

export default TaskProgrsSttusPage;
