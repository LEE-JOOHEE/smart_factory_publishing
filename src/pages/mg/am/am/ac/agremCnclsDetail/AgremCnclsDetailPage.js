import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import AgremCnclsDetailContainer from 'pages/mg/am/am/ac/agremCnclsDetail/AgremCnclsDetailContainer';

const AgremCnclsDetailPage = () => {
  return (
    <BaseLayout>
      <TitlePage>협약체결</TitlePage>
      <AgremCnclsDetailContainer />
    </BaseLayout>
  );
};

export default AgremCnclsDetailPage;
