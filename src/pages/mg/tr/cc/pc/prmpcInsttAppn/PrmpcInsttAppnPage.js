import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import PrmpcInsttAppnContainer from 'pages/mg/tr/cc/pc/prmpcInsttAppn/PrmpcInsttAppnContainer';

const PrmpcInsttAppnPage = () => {
  return (
    <BaseLayout>
      <TitlePage>원가계산기관 지정</TitlePage>
      <PrmpcInsttAppnContainer />
    </BaseLayout>
  );
};

export default PrmpcInsttAppnPage;
