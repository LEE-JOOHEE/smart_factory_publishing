import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import PblancManageContainer from 'pages/mg/bm/pm/pa/pblancManage/PblancManageContainer';
import PblancRegistContainer from 'pages/mg/bm/pm/pa/pblancRegist/PblancRegistContainer';
import PblancUpdtContainer from 'pages/mg/bm/pm/pa/pblancUpdt/PblancUpdtContainer';

const PblancManagePage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>공고관리</TitlePage>
      {pageType === 'LIST' ? (
        <PblancManageContainer setPageType={setPageType} />
      ) : (
        <PblancRegistContainer setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default PblancManagePage;
