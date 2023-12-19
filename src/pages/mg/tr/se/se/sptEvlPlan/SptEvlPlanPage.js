import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import SptEvlPlanContainer from 'pages/mg/tr/se/se/sptEvlPlan/SptEvlPlanContainer';

const SptEvlPlanPage = () => {
  return (
    <BaseLayout>
      <TitlePage>현장평가계획수립</TitlePage>
      <SptEvlPlanContainer />
    </BaseLayout>
  );
};

export default SptEvlPlanPage;
