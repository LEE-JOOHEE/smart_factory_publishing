import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import SuplyEntrprsMtchgContainer from 'pages/usr/bm/sm/sr/suplyEntrprsMtchg/SuplyEntrprsMtchgContainer';

const SuplyEntrprsMtchgPage = () => {
  return (
    <BaseLayout>
      <TitlePage>공급기업매칭결과</TitlePage>
      <SuplyEntrprsMtchgContainer />
    </BaseLayout>
  );
};

export default SuplyEntrprsMtchgPage;
