import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import PrmpcSprvisnPresentnContainer from 'pages/usr/bm/pc/ps/prmpcSprvisnPresentn/PrmpcSprvisnPresentnContainer';
import PrmpcSprvisnDetailContainer from 'pages/usr/bm/pc/ps/prmpcSprvisnDetail/PrmpcSprvisnDetailContainer';

const PrmpcSprvisnPresentnPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>원가감리 제출</TitlePage>
      {pageType === 'LIST' ? (
        <PrmpcSprvisnPresentnContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <PrmpcSprvisnDetailContainer
          ojtKey={ojtKey}
          setPageType={setPageType}
        />
      )}
    </BaseLayout>
  );
};

export default PrmpcSprvisnPresentnPage;
