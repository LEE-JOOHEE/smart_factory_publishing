import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import BsnsManageInqireContainer from 'pages/mg/tr/tr/bm/bsnsManageInqire/BsnsManageInqireContainer';

const BsnsManageInqirePage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업관리대장 조회</TitlePage>
      <BsnsManageInqireContainer />
    </BaseLayout>
  );
};

export default BsnsManageInqirePage;
