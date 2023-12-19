import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import PblancUpdtContainer from 'pages/mg/bm/pm/pa/pblancUpdt/PblancUpdtContainer';

const PblancUpdtPage = () => {
  return (
    <BaseLayout>
      <TitlePage>공고관리</TitlePage>
      <PblancUpdtContainer />
    </BaseLayout>
  );
};

export default PblancUpdtPage;
