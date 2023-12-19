import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import AgremPlanListContainer from 'pages/mg/am/am/ap/agremPlanList/AgremPlanListContainer';

const AgremPlanListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>협약계획</TitlePage>
      <AgremPlanListContainer />
    </BaseLayout>
  );
};

export default AgremPlanListPage;
