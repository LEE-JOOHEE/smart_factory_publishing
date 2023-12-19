import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import BsnsPblancContainer from 'pages/usr/bg/ba/ma/bsnsPblanc/BsnsPblancContainer';

const BsnsPblancPage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업공고</TitlePage>
      <BsnsPblancContainer />
    </BaseLayout>
  );
};

export default BsnsPblancPage;
