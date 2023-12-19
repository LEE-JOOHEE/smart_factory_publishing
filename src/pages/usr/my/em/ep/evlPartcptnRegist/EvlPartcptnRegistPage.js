import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import EvlPartcptnRegistContainer from 'pages/usr/my/em/ep/evlPartcptnRegist/EvlPartcptnRegistContainer';

const EvlPartcptnRegistPage = () => {
  return (
    <BaseLayout>
      <TitlePage>평가참여여부등록</TitlePage>
      <EvlPartcptnRegistContainer />
    </BaseLayout>
  );
};

export default EvlPartcptnRegistPage;
