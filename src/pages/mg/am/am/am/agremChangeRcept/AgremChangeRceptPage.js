import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import AgremChangeRceptContainer from 'pages/mg/am/am/am/agremChangeRcept/AgremChangeRceptContainer';

const AgremChangeRceptPage = () => {
  return (
    <BaseLayout>
      <TitlePage>협약변경(상세-신청)</TitlePage>
      <AgremChangeRceptContainer />
    </BaseLayout>
  );
};

export default AgremChangeRceptPage;
