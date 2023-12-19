import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import LevelCnfrmnListContainer from 'pages/usr/bm/aw/lc/levelConfirmation/LevelCnfrmnListContainer';
const LevelCnfrmnListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>수준확인서 발급</TitlePage>
      <LevelCnfrmnListContainer />
    </BaseLayout>
  );
};

export default LevelCnfrmnListPage;
