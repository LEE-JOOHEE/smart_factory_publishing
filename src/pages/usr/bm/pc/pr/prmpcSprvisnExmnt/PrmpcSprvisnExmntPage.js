import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import PrmpcSprvisnExmntContainer from 'pages/usr/bm/pc/pr/prmpcSprvisnExmnt/PrmpcSprvisnExmntContainer';
import PrmpcExmntDetailContainer from 'pages/usr/bm/pc/pr/prmpcExmntDetail/PrmpcExmntDetailContainer';

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
        <PrmpcExmntDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default PrmpcSprvisnExmntPage;
