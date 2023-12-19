import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import EvlMfcmmFxContainer from 'pages/usr/my/em/em/evlMfcmmFx/EvlMfcmmFxContainer';

const EvlMfcmmFxPage = () => {
  return (
    <BaseLayout>
      <TitlePage>평가위원 평가일정 등록</TitlePage>
      <EvlMfcmmFxContainer />
    </BaseLayout>
  );
};

export default EvlMfcmmFxPage;
