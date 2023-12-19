import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import BsnsActplnRequstContainer from 'pages/usr/bm/ie/br/bsnsActplnRequst/BsnsActplnRequstContainer';

const BsnsActplnRequstPage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업계획서요청</TitlePage>
      <BsnsActplnRequstContainer />
    </BaseLayout>
  );
};

export default BsnsActplnRequstPage;
