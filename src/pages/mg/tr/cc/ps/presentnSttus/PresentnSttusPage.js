import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import PresentnSttusContainer from 'pages/mg/tr/cc/ps/presentnSttus/PresentnSttusContainer';

const PresentnSttusPage = () => {
  return (
    <BaseLayout>
      <TitlePage>원가감리검토</TitlePage>
      <PresentnSttusContainer />
    </BaseLayout>
  );
};

export default PresentnSttusPage;
