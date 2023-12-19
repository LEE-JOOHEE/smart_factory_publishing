import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import IndcSportSttusContainer from 'pages/mg/tr/re/ie/indcSportSttus/IndcSportSttusContainer';

const IndcSportSttusPage = () => {
  return (
    <BaseLayout>
      <TitlePage>도입기업 지원현황</TitlePage>
      <IndcSportSttusContainer />
    </BaseLayout>
  );
};

export default IndcSportSttusPage;
