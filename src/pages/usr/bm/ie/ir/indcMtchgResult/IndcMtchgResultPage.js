import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import IndcMtchgResultContainer from 'pages/usr/bm/ie/ir/indcMtchgResult/IndcMtchgResultContainer';

const IndcMtchgResultPage = () => {
  return (
    <BaseLayout>
      <TitlePage>도입기업 매칭결과</TitlePage>
      <IndcMtchgResultContainer />
    </BaseLayout>
  );
};

export default IndcMtchgResultPage;
