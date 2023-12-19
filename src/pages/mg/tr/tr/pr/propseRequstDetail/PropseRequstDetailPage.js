import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import PropseRequstDetailContainer from 'pages/mg/tr/tr/pr/propseRequstDetail/PropseRequstDetailContainer';

const PropseRequstDetailPage = () => {
  return (
    <BaseLayout>
      <TitlePage>제안요청서 상세조회</TitlePage>
      <PropseRequstDetailContainer />
    </BaseLayout>
  );
};

export default PropseRequstDetailPage;
