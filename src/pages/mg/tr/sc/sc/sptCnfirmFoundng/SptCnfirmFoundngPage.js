import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import SptCnfirmFoundngContainer from 'pages/mg/tr/sc/sc/sptCnfirmFoundng/SptCnfirmFoundngContainer';

const SptCnfirmFoundngPage = () => {
  return (
    <BaseLayout>
      <TitlePage>현장확인계획수립</TitlePage>
      <SptCnfirmFoundngContainer />
    </BaseLayout>
  );
};

export default SptCnfirmFoundngPage;
