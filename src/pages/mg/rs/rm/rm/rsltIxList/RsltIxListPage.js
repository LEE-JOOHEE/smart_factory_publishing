import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import RsltIxListContainer from 'pages/mg/rs/rm/rm/rsltIxList/RsltIxListContainer';

const RsltIxListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>성과지표관리</TitlePage>
      <RsltIxListContainer />
    </BaseLayout>
  );
};

export default RsltIxListPage;
