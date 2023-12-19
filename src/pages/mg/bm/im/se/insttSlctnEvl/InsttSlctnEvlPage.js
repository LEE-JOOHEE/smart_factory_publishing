import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import InsttSlctnEvlContainer from 'pages/mg/bm/im/se/insttSlctnEvl/InsttSlctnEvlContainer';

const InsttSlctnEvlPage = () => {
  return (
    <BaseLayout>
      <TitlePage>기관선정평가결과등록</TitlePage>
      <InsttSlctnEvlContainer />
    </BaseLayout>
  );
};

export default InsttSlctnEvlPage;
