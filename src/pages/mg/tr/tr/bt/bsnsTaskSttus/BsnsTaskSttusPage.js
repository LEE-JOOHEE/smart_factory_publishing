import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import BsnsTaskSttusContainer from 'pages/mg/tr/tr/bt/bsnsTaskSttus/BsnsTaskSttusContainer';

const BsnsTaskSttusPage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업별과제진행현황</TitlePage>
      <BsnsTaskSttusContainer />
    </BaseLayout>
  );
};

export default BsnsTaskSttusPage;
