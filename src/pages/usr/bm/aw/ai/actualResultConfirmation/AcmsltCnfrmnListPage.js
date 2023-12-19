import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import AcmsltCnfrmnListContainer from 'pages/usr/bm/aw/ai/actualResultConfirmation/AcmsltCnfrmnListContainer';
const AcmsltCnfrmnListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>실적확인서 발급</TitlePage>
      <AcmsltCnfrmnListContainer />
    </BaseLayout>
  );
};

export default AcmsltCnfrmnListPage;
