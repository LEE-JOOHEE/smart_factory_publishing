import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import BsnsBudgetManageContainer from 'pages/mg/bm/bm/bc/bsnsBudgetManage/BsnsBudgetManageContainer';

const BsnsBudgetManagePage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업별특성관리</TitlePage>
      <BsnsBudgetManageContainer />
    </BaseLayout>
  );
};

export default BsnsBudgetManagePage;
