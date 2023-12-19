import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import SptEvlRegistContainer from 'pages/mg/tr/se/sr/sptEvlRegist/SptEvlRegistContainer';

const SptEvlRegistPage = () => {
  return (
    <BaseLayout>
      <TitlePage>현장평가결과등록</TitlePage>
      <SptEvlRegistContainer />
    </BaseLayout>
  );
};

export default SptEvlRegistPage;
