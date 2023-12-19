import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import WctReqstContainer from 'pages/usr/bm/aw/wr/wctReqst/WctReqstContainer';
import WctReqstDetailContainer from 'pages/usr/bm/aw/wr/wctReqstDetail/WctReqstDetailContainer';

const WctReqstPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>사업비 신청</TitlePage>
      {pageType === 'LIST' ? (
        <WctReqstContainer setOjtKey={setOjtKey} setPageType={setPageType} />
      ) : (
        <WctReqstDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default WctReqstPage;
