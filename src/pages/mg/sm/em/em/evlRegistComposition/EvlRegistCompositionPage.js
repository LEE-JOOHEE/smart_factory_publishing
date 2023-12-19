import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

const EvlRegistCompositionPage = () => {
  return (
    <BaseLayout>
      <TitlePage>EvlRegistComposition</TitlePage>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
        {/*  컴포넌트   */}
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default EvlRegistCompositionPage;
