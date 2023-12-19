import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import ReprtRceptDetailContainer from 'pages/mg/am/wr/rr/reprtRceptDetail/ReprtRceptDetailContainer';

const ReprtRceptDetailPage = () => {
  return (
    <BaseLayout>
      <TitlePage>보고서접수(착수보고서접수)</TitlePage>
      <ReprtRceptDetailContainer />
    </BaseLayout>
  );
};

export default ReprtRceptDetailPage;
