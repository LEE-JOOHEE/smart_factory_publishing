import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import PrpslManageContainer from 'pages/usr/bm/ie/pm/prpslManage/PrpslManageContainer';

const PrpslManagePage = () => {
  return (
    <BaseLayout>
      <TitlePage>제안서관리</TitlePage>
      <PrpslManageContainer />
    </BaseLayout>
  );
};

export default PrpslManagePage;
