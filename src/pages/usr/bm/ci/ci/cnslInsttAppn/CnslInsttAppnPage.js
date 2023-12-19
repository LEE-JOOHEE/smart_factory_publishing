import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import CnslInsttAppnContainer from 'pages/usr/bm/ci/ci/cnslInsttAppn/CnslInsttAppnContainer';

const CnslInsttAppnPage = () => {
  return (
    <BaseLayout>
      <TitlePage>컨설팅기관 지정</TitlePage>
      <CnslInsttAppnContainer />
    </BaseLayout>
  );
};

export default CnslInsttAppnPage;
