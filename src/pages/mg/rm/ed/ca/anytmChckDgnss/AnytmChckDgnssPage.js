import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import AnytmChckDgnssContainer from 'pages/mg/rm/ed/ca/anytmChckDgnss/AnytmChckDgnssContainer';

const AnytmChckDgnssPage = () => {
  return (
    <BaseLayout>
      <TitlePage>수시점검 확인(기업진단 코디)</TitlePage>
      <AnytmChckDgnssContainer />
    </BaseLayout>
  );
};

export default AnytmChckDgnssPage;
