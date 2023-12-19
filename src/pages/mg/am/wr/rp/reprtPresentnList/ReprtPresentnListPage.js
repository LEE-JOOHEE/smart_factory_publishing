import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import ReprtPresentnListContainer from 'pages/mg/am/wr/rp/reprtPresentnList/ReprtPresentnListContainer';

const ReprtPresentnListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>보고서제출현황(착수보고)</TitlePage>
      <ReprtPresentnListContainer />
    </BaseLayout>
  );
};

export default ReprtPresentnListPage;
