import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import PropseInqireContainer from 'pages/mg/tr/tr/pi/propseInqire/PropseInqireContainer';

const PropseInqirePage = () => {
  return (
    <BaseLayout>
      <TitlePage>제안서조회</TitlePage>
      <PropseInqireContainer />
    </BaseLayout>
  );
};

export default PropseInqirePage;
