import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import DlbrtResultRegistContainer from 'pages/mg/tr/sc/dr/dlbrtResultRegist/DlbrtResultRegistContainer';

const DlbrtResultRegistPage = () => {
  return (
    <BaseLayout>
      <TitlePage>심의위원회 결과등록</TitlePage>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DlbrtResultRegistContainer />
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default DlbrtResultRegistPage;
