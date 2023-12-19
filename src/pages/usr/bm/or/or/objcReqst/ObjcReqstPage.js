import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import ObjcReqstContainer from 'pages/usr/bm/or/or/objcReqst/ObjcReqstContainer';

const ObjcReqstPage = () => {
  return (
    <BaseLayout>
      <TitlePage>이의신청</TitlePage>
      <ObjcReqstContainer />
    </BaseLayout>
  );
};

export default ObjcReqstPage;
