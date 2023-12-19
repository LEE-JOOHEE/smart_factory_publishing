import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import ExcDiaryCnstntContainer from 'pages/mg/rm/ed/ed/excDiaryCnstnt/ExcDiaryCnstntContainer';

const ExcDiaryCnstntPage = () => {
  return (
    <BaseLayout>
      <TitlePage>수행일지 확인(컨설턴트)</TitlePage>
      <ExcDiaryCnstntContainer />
    </BaseLayout>
  );
};

export default ExcDiaryCnstntPage;
