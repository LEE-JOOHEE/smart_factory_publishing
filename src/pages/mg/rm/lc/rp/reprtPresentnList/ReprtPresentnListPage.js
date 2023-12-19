import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import ReprtPresentnListContainer from 'pages/mg/rm/lc/rp/reprtPresentnList/ReprtPresentnListContainer';
import ReprtPresentnDetailContainer from 'pages/mg/rm/lc/rp/reprtPresentnList/ReprtPresentnDetailContainer';

const ReprtPresentnListPage = () => {
  const [pageType, setPageType] = useState('LIST');
  const [ojtKey, setOjtKey] = useState({});
  return (
    <BaseLayout>
      <TitlePage>완료보고서제출현황</TitlePage>
      {pageType && pageType === 'LIST' ? (
        <ReprtPresentnListContainer
          setPageType={setPageType}
          ojtKey={ojtKey}
          setOjtKey={setOjtKey}
        />
      ) : (
        <ReprtPresentnDetailContainer
          setPageType={setPageType}
          ojtKey={ojtKey}
          setOjtKey={setOjtKey}
        />
      )}
    </BaseLayout>
  );
};

export default ReprtPresentnListPage;
