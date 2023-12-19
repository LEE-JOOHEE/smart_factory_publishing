import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import InsttAgremExmntContainer from 'pages/mg/bm/ia/ia/insttAgremExmnt/InsttAgremExmntContainer';
import InsttAgremDetailContainer from 'pages/mg/bm/ia/ia/insttAgremDetail/InsttAgremDetailContainer';

const InsttAgremExmntPage = () => {
  const [ojtKey, setOjtKey] = useState([]);
  const [pageType, setPageType] = useState('LIST');

  return (
    <BaseLayout>
      <TitlePage>기관협약 제출/검토</TitlePage>
      {pageType === 'LIST' ? (
        <InsttAgremExmntContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <InsttAgremDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default InsttAgremExmntPage;
