import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import SuplyMtchgStatsContainer from 'pages/mg/bm/mm/ss/suplyMtchgStats/SuplyMtchgStatsContainer';

const SuplyMtchgStatsPage = () => {
  return (
    <BaseLayout>
      <TitlePage>공급기업 매칭통계</TitlePage>
      <SuplyMtchgStatsContainer />
    </BaseLayout>
  );
};

export default SuplyMtchgStatsPage;
