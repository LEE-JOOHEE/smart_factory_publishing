import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import ReprtRceptListContainer from 'pages/mg/am/wr/rr/reprtRceptList/ReprtRceptListContainer';

const ReprtRceptListPage = () => {
  return (
    <BaseLayout>
      <TitlePage>보고서접수(착수보고서접수)</TitlePage>
      <ReprtRceptListContainer />
    </BaseLayout>
  );
};

export default ReprtRceptListPage;
