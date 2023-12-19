import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import ChckResultInqireContainer from 'pages/usr/bm/cr/cr/chckResultInqire/ChckResultInqireContainer';

const ChckResultInqirePage = () => {
  return (
    <BaseLayout>
      <TitlePage>점검결과조회</TitlePage>
      <ChckResultInqireContainer />
    </BaseLayout>
  );
};

export default ChckResultInqirePage;
