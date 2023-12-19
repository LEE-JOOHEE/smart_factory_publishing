import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import SuplyEntrprsMtchgContainer from 'pages/mg/bm/mm/sm/suplyEntrprsMtchg/SuplyEntrprsMtchgContainer';

const SuplyEntrprsMtchgPage = () => {
  return (
    <BaseLayout>
      <TitlePage>공급기업 매칭현황</TitlePage>
      <SuplyEntrprsMtchgContainer />
    </BaseLayout>
  );
};

export default SuplyEntrprsMtchgPage;
