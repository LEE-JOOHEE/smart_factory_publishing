import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import AgremChangeListContainer from 'pages/mg/am/am/am/agremChangeList/AgremChangeListContainer';

const AgremChangeListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>협약변경</TitlePage>
      <AgremChangeListContainer />
    </BaseLayout>
  );
};

export default AgremChangeListPage;
