import React from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import BsnsSeManageContainer from 'pages/mg/bm/bm/bm/bsnsSeManage/BsnsSeManageContainer';

const BsnsSeManagePage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업구분관리</TitlePage>
      <BsnsSeManageContainer />
    </BaseLayout>
  );
};

export default BsnsSeManagePage;
