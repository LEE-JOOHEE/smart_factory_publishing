import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import RcmsDtaListContainer from 'pages/mg/am/wr/rc/rcmsDtaList/RcmsDtaListContainer';

const RcmsDtaListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>RCMS제출자료</TitlePage>
      <RcmsDtaListContainer />
    </BaseLayout>
  );
};

export default RcmsDtaListPage;
