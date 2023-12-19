import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import BsnsActplnExmntContainer from 'pages/usr/bm/sm/ba/bsnsActplnExmnt/BsnsActplnExmntContainer';
import BsnsActplnDetailContainer from 'pages/usr/bm/sm/ba/bsnsActplnDetail/BsnsActplnDetailContainer';

const BsnsActplnExmntPage = () => {
  const [ojtKey, setOjtKey] = useState([]);
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>사업계획서 검토</TitlePage>
      {pageType === 'LIST' ? (
        <BsnsActplnExmntContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <BsnsActplnDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default BsnsActplnExmntPage;
