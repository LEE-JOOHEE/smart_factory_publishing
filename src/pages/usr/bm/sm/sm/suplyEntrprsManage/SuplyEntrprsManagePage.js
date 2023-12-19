import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import SuplyEntrprsManageContainer from 'pages/usr/bm/sm/sm/suplyEntrprsManage/SuplyEntrprsManageContainer';

const SuplyEntrprsManagePage = () => {
  return (
    <BaseLayout>
      <TitlePage>공급기업관리</TitlePage>
      <SuplyEntrprsManageContainer />
    </BaseLayout>
  );
};

export default SuplyEntrprsManagePage;
