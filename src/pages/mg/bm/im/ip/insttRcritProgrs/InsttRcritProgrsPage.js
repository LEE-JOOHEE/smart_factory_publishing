import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import InsttRcritProgrsContainer from 'pages/mg/bm/im/ip/insttRcritProgrs/InsttRcritProgrsContainer';

const InsttRcritProgrsPage = () => {
  return (
    <BaseLayout>
      <TitlePage>기관모집공고진행현황</TitlePage>
      <InsttRcritProgrsContainer />
    </BaseLayout>
  );
};

export default InsttRcritProgrsPage;
