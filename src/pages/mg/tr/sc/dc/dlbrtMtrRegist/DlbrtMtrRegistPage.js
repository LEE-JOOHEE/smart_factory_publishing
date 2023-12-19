import React, { useState, useEffect } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs, Button } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import DlbrtMtrRegistContainer from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/DlbrtMtrRegistContainer';

const DlbrtMtrRegistPage = () => {
  return (
    <BaseLayout>
      <TitlePage>심의위원회 안건등록</TitlePage>
      <DlbrtMtrRegistContainer />
    </BaseLayout>
  );
};

export default DlbrtMtrRegistPage;
