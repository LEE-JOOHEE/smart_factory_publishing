import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import ReprtRceptListContainer from 'pages/mg/rm/mc/rr/reprtRceptList/ReprtRceptListContainer';
import ReprtRceptDetailContainer from 'pages/mg/rm/mc/rr/reprtRceptList/ReprtRceptDetailContainer';

const ReprtRceptListPage = () => {
  const [pageType, setPageType] = useState('LIST');
  const [ojtKey, setOjtKey] = useState({});
  return (
    <BaseLayout>
      <TitlePage>보고서접수(중간보고서검토)</TitlePage>
      {pageType && pageType === 'LIST' ? (
        <ReprtRceptListContainer
          setPageType={setPageType}
          ojtKey={ojtKey}
          setOjtKey={setOjtKey}
        />
      ) : (
        <ReprtRceptDetailContainer
          setPageType={setPageType}
          ojtKey={ojtKey}
          setOjtKey={setOjtKey}
        />
      )}
    </BaseLayout>
  );
};

export default ReprtRceptListPage;
