import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import InsttResultRegistContainer from 'pages/mg/bm/im/sr/insttResultRegist/InsttResultRegistContainer';

const InsttResultRegistPage = () => {
  return (
    <BaseLayout>
      <TitlePage>기관선정평가결과등록</TitlePage>
      <InsttResultRegistContainer />
    </BaseLayout>
  );
};

export default InsttResultRegistPage;
