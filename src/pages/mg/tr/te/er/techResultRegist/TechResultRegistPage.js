import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';

import TechResultRegistContainer from 'pages/mg/tr/te/er/techResultRegist/TechResultRegistContainer';

const TechResultRegistPage = () => {
  return (
    <BaseLayout>
      <TitlePage>평가결과등록</TitlePage>
      <TechResultRegistContainer />
    </BaseLayout>
  );
};

export default TechResultRegistPage;
