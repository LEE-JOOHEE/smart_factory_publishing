import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import EvlIxManageContainer from 'pages/smg/sm/em/em/evlIxManage/EvlIxManageContainer';

const EvlIxManagePage = () => {
  return (
    <BaseLayout>
      <TitlePage>평가지표관리</TitlePage>
      <EvlIxManageContainer />
    </BaseLayout>
  );
};

export default EvlIxManagePage;
