import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import WctPymntListContainer from 'pages/mg/am/wr/wc/wctPymntList/WctPymntListContainer';

const WctPymntListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업비 지급내역</TitlePage>
      <WctPymntListContainer />
    </BaseLayout>
  );
};

export default WctPymntListPage;
