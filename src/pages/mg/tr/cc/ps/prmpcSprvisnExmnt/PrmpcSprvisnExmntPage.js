import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import PrmpcSprvisnExmntContainer from 'pages/mg/tr/cc/ps/prmpcSprvisnExmnt/PrmpcSprvisnExmntContainer';
import PresentnSttusContainer from 'pages/mg/tr/cc/ps/presentnSttus/PresentnSttusContainer';

const PrmpcSprvisnExmntPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>원가감리 검토</TitlePage>
      {pageType === 'LIST' ? (
        <PrmpcSprvisnExmntContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <PresentnSttusContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default PrmpcSprvisnExmntPage;
