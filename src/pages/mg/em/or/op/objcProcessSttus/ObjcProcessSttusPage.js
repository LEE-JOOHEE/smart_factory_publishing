import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import ObjcProcessSttusContainer from 'pages/mg/em/or/op/objcProcessSttus/ObjcProcessSttusContainer';

const ObjcProcessSttusPage = () => {
  return (
    <BaseLayout>
      <TitlePage>이의신청 처리현황</TitlePage>
      <ObjcProcessSttusContainer />
    </BaseLayout>
  );
};

export default ObjcProcessSttusPage;
