import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import ExcBsnsDetailContainer from 'pages/mg/tr/re/re/excBsnsDetail/ExcBsnsDetailContainer';

const ExcBsnsDetailPage = () => {
  return (
    <BaseLayout>
      <TitlePage>요건검토</TitlePage>
      <ExcBsnsDetailContainer />
    </BaseLayout>
  );
};

export default ExcBsnsDetailPage;
