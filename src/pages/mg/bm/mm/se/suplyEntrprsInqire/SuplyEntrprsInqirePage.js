import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import SuplyEntrprsInqireContainer from 'pages/mg/bm/mm/se/suplyEntrprsInqire/SuplyEntrprsInqireContainer';

const SuplyEntrprsInqirePage = () => {
  return (
    <BaseLayout>
      <TitlePage>공급기업조회</TitlePage>
      <SuplyEntrprsInqireContainer />
    </BaseLayout>
  );
};

export default SuplyEntrprsInqirePage;
