import React, { useState, useEffect } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import BsnsExpitmTaxitmContainer from 'pages/mg/bm/bm/bc/bsnsExpitmTaxitm/BsnsExpitmTaxitmContainer';
const BsnsExpitmTaxitmPage = () => {
  return (
    <BaseLayout>
      <TitlePage>사업별특성관리</TitlePage>
      <BsnsExpitmTaxitmContainer />
    </BaseLayout>
  );
};

export default BsnsExpitmTaxitmPage;
