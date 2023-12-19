import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import SprvisorAppnListContainer from 'pages/usr/bm/rs/sa/sprvisorAppnList/SprvisorAppnListContainer';

const SprvisorAppnListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>감리원 지정</TitlePage>
      <SprvisorAppnListContainer />
    </BaseLayout>
  );
};

export default SprvisorAppnListPage;
