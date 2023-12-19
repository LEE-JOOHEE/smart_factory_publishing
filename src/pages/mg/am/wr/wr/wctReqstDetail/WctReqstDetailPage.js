import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import WctReqstDetailContainer from 'pages/mg/am/wr/wr/wctReqstDetail/WctReqstDetailContainer';

const WctReqstDetailPage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업비신청 관리(상세)</TitlePage>
      <WctReqstDetailContainer />
    </BaseLayout>
  );
};

export default WctReqstDetailPage;
