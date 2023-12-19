import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import RqisitExmntContainer from 'pages/mg/tr/re/re/rqisitExmnt/RqisitExmntContainer';

const RqisitExmntPage = () => {
  return (
    <BaseLayout>
      <TitlePage>요건검토</TitlePage>
      <RqisitExmntContainer />
    </BaseLayout>
  );
};

export default RqisitExmntPage;
