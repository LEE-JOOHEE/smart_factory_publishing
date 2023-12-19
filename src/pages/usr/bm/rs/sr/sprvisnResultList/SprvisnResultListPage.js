import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import SprvisnResultListContainer from 'pages/usr/bm/rs/sr/sprvisnResultList/SprvisnResultListContainer';
import SprvisnCorecActplnContainer from 'pages/usr/bm/rs/sr/sprvisnCorecActpln/SprvisnCorecActplnContainer';
import SprvisnCorecCnfirmContainer from 'pages/usr/bm/rs/sr/sprvisnCorecCnfirm/SprvisnCorecCnfirmContainer';
import SprvisnCorecResultContainer from 'pages/usr/bm/rs/sr/sprvisnCorecResult/SprvisnCorecResultContainer';
import SprvisnLastResultContainer from 'pages/usr/bm/rs/sr/sprvisnLastResult/SprvisnLastResultContainer';

const SprvisnResultListPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>감리결과 목록</TitlePage>
      {pageType === 'LASTRESULT' ? (
        <SprvisnLastResultContainer ojtKey={ojtKey} setPageType={setPageType} />
      ) : pageType === 'CORECACTPLN' ? (
        <SprvisnCorecActplnContainer
          ojtKey={ojtKey}
          setPageType={setPageType}
        />
      ) : pageType === 'CORECRESULT' ? (
        <SprvisnCorecResultContainer
          ojtKey={ojtKey}
          setPageType={setPageType}
        />
      ) : pageType === 'CORECCONFIRM' ? (
        <SprvisnCorecCnfirmContainer
          ojtKey={ojtKey}
          setPageType={setPageType}
        />
      ) : (
        <SprvisnResultListContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      )}
    </BaseLayout>
  );
};

export default SprvisnResultListPage;
