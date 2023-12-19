import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import AgremCnclsListContainer from 'pages/mg/am/am/ac/agremCnclsList/AgremCnclsListContainer';

const AgremCnclsListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>협약 체결</TitlePage>
      <AgremCnclsListContainer />
    </BaseLayout>
  );
};

export default AgremCnclsListPage;
