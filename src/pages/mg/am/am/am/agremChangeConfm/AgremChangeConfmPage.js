import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import AgremChangeConfmContainer from 'pages/mg/am/am/am/agremChangeConfm/AgremChangeConfmContainer';

const AgremChangeConfmPage = () => {
  return (
    <BaseLayout>
      <TitlePage>협약변경(상세-승인)</TitlePage>
      <AgremChangeConfmContainer />
    </BaseLayout>
  );
};

export default AgremChangeConfmPage;
