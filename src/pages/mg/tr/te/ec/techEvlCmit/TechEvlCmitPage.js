import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import TechEvlCmitContainer from 'pages/mg/tr/te/ec/techEvlCmit/TechEvlCmitContainer';

const TechEvlCmitPage = () => {
  return (
    <BaseLayout>
      <TitlePage>평가위원회</TitlePage>
      <TechEvlCmitContainer />
    </BaseLayout>
  );
};
export default TechEvlCmitPage;
