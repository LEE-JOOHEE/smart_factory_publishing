import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import WctReqstListContainer from 'pages/mg/am/wr/wr/wctReqstList/WctReqstListContainer';

const WctReqstListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업비신청 관리</TitlePage>
      <WctReqstListContainer />
    </BaseLayout>
  );
};

export default WctReqstListPage;
