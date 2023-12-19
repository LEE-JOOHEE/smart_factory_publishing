import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import ObjcReqstRceptContainer from 'pages/mg/em/or/or/objcReqstRcept/ObjcReqstRceptContainer';

const ObjcReqstRceptPage = () => {
  return (
    <BaseLayout>
      <TitlePage>이의신청접수</TitlePage>
      <ObjcReqstRceptContainer />
    </BaseLayout>
  );
};

export default ObjcReqstRceptPage;
