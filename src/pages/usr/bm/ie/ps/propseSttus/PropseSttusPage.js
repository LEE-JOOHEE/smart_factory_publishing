import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import PropseSttusContainer from 'pages/usr/bm/ie/ps/propseSttus/PropseSttusContainer';

const PropseSttusPage = () => {
  return (
    <BaseLayout>
      <TitlePage>제안요청현황</TitlePage>
      <PropseSttusContainer />
    </BaseLayout>
  );
};

export default PropseSttusPage;
