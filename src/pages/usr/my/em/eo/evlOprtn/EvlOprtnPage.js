import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import EvlOprtnContainer from 'pages/usr/my/em/eo/evlOprtn/EvlOprtnContainer';
import EvlMfcmmRegistContainer from 'pages/usr/my/em/eo/evlMfcmmRegist/EvlMfcmmRegistContainer';
import EvlCharmnEvlContainer from 'pages/usr/my/em/eo/evlCharmnEvl/EvlCharmnEvlContainer';

const EvlOprtnPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>평가실시</TitlePage>
      {pageType === 'LIST' ? (
        <EvlOprtnContainer setOjtKey={setOjtKey} setPageType={setPageType} />
      ) : pageType === 'charmnEvl' ? (
        <EvlCharmnEvlContainer ojtKey={ojtKey} setPageType={setPageType} />
      ) : (
        <EvlMfcmmRegistContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default EvlOprtnPage;
