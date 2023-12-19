import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import ChckResultRegistContainer from 'pages/usr/my/em/cr/chckResultRegist/ChckResultRegistContainer';
import AnytmChckRegistContainer from 'pages/usr/my/em/cr/anytmChckRegist/AnytmChckRegistContainer';
import ComptChckRegistContainer from 'pages/usr/my/em/cr/comptChckRegist/ComptChckRegistContainer';
import MiddleChckRegistContainer from 'pages/usr/my/em/cr/middleChckRegist/MiddleChckRegistContainer';
import YrycEvlRegistContainer from 'pages/usr/my/em/cr/yrycEvlRegist/YrycEvlRegistContainer';

const ChckResultRegistPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>점검결과등록</TitlePage>
      {pageType === 'LIST' ? (
        <ChckResultRegistContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : pageType === 'middle' ? (
        <MiddleChckRegistContainer ojtKey={ojtKey} setPageType={setPageType} />
      ) : pageType === 'compt' ? (
        <ComptChckRegistContainer ojtKey={ojtKey} setPageType={setPageType} />
      ) : pageType === 'anytm' ? (
        <AnytmChckRegistContainer ojtKey={ojtKey} setPageType={setPageType} />
      ) : (
        <YrycEvlRegistContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default ChckResultRegistPage;
