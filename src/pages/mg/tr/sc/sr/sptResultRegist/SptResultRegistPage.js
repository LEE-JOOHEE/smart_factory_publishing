import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import SptResultRegistContainer from 'pages/mg/tr/sc/sr/sptResultRegist/SptResultRegistContainer';

const SptResultRegistPage = () => {
  return (
    <BaseLayout>
      <TitlePage>현장확인결과등록</TitlePage>
      <SptResultRegistContainer />
    </BaseLayout>
  );
};

export default SptResultRegistPage;
