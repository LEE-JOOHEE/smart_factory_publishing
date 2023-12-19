import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import SmsDspthContainer from 'pages/usr/bm/tr/tr/smsDspth/SmsDspthContainer';

const SmsDspthPage = () => {
  return (
    <BaseLayout>
      <TitlePage>과제신청</TitlePage>
      <SmsDspthContainer />
    </BaseLayout>
  );
};

export default SmsDspthPage;
