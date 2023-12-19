import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import InsttRcritExmntContainer from 'pages/mg/bm/im/ie/insttRcritExmnt/InsttRcritExmntContainer';
import InsttRcritDetailContainer from 'pages/mg/bm/im/ie/insttRcritDetail/InsttRcritDetailContainer';

const InsttRcritExmntPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>기관모집요건검토</TitlePage>
      {pageType === 'LIST' ? (
        <InsttRcritExmntContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <InsttRcritDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default InsttRcritExmntPage;
