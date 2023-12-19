import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import IndcEntrprsManageContainer from 'pages/usr/bm/ie/im/indcEntrprsManage/IndcEntrprsManageContainer';

const IndcEntrprsManagePage = () => {
  return (
    <BaseLayout>
      <TitlePage>도입기업 관리</TitlePage>
      <IndcEntrprsManageContainer />
    </BaseLayout>
  );
};

export default IndcEntrprsManagePage;
