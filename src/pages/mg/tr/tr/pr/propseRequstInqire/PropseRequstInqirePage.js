import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import PropseRequstInqireContainer from "pages/mg/tr/tr/pr/propseRequstInqire/PropseRequstInqireContainer"

const PropseRequstInqirePage = () => {
  return (
    <BaseLayout>
      <TitlePage>제안요청서 조회</TitlePage>
        <PropseRequstInqireContainer/>
    </BaseLayout>
  );
};

export default PropseRequstInqirePage;
