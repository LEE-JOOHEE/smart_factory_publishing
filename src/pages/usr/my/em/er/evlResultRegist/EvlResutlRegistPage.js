import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import EvlResultRegistContainer from 'pages/usr/my/em/er/evlResultRegist/EvlResultRegistContainer';
import SptEvlRgrContainer from 'pages/usr/my/em/er/sptEvlRgr/SptEvlRgrContainer';
import SptEvlFatherContainer from 'pages/usr/my/em/er/sptEvlFather/SptEvlFatherContainer';
import SptCnfirmRegistContainer from 'pages/usr/my/em/er/sptCnfirmRegist/SptCnfirmRegistContainer';

const EvlResutlRegistPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>평가결과등록</TitlePage>
      {pageType === 'LIST' ? (
        <EvlResultRegistContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : pageType === 'sptEvlRgr' ? (
        <SptEvlRgrContainer ojtKey={ojtKey} setPageType={setPageType} />
      ) : pageType === 'sptEvlFather' ? (
        <SptEvlFatherContainer ojtKey={ojtKey} setPageType={setPageType} />
      ) : (
        <SptCnfirmRegistContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default EvlResutlRegistPage;
