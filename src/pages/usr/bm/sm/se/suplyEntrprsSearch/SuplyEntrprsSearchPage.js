import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import SuplyEntrprsSearchContainer from 'pages/usr/bm/sm/se/suplyEntrprsSearch/SuplyEntrprsSearchContainer';

const SuplyEntrprsSearchPage = () => {
  return (
    <BaseLayout>
      <TitlePage>공급기업검색</TitlePage>
      <SuplyEntrprsSearchContainer />
    </BaseLayout>
  );
};

export default SuplyEntrprsSearchPage;
