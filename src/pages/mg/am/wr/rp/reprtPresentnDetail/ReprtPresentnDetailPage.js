import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import ReprtPresentnDetailContainer from 'pages/mg/am/wr/rp/reprtPresentnDetail/ReprtPresentnDetailContainer';

const ReprtPresentnDetailPage = () => {
  return (
    <BaseLayout>
      <TitlePage>착수보고서제출현황</TitlePage>
      <ReprtPresentnDetailContainer />
    </BaseLayout>
  );
};

export default ReprtPresentnDetailPage;
