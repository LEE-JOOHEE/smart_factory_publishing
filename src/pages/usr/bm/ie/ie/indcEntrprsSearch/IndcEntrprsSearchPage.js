import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import IndcEntrprsSearchContainer from 'pages/usr/bm/ie/ie/indcEntrprsSearch/IndcEntrprsSearchContainer';

const IndcEntrprsSearchPage = () => {
  return (
    <BaseLayout>
      <TitlePage>도입기업 검색</TitlePage>
      <IndcEntrprsSearchContainer />
    </BaseLayout>
  );
};

export default IndcEntrprsSearchPage;
