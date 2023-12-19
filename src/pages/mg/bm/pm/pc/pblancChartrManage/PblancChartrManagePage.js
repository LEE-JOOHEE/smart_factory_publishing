import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import PblancChartrManageContainer from 'pages/mg/bm/pm/pc/pblancChartrManage/PblancChartrManageContainer';

const PblancChartrManagePage = () => {
  return (
    <BaseLayout>
      <TitlePage>공고별특성관리</TitlePage>
      <PblancChartrManageContainer />
    </BaseLayout>
  );
};

export default PblancChartrManagePage;
