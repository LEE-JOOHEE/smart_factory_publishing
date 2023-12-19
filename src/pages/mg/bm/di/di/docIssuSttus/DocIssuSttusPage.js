import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import DocIssuSttusContainer from 'pages/mg/bm/di/di/docIssuSttus/DocIssuSttusContainer';
import DocIssuInqireContainer from 'pages/mg/bm/di/di/docIssuInqire/DocIssuInqireContainer';

const DocIssuSttusPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>
        {pageType === 'LIST' ? '문서발급현황' : '문서발급 상세내역 조회'}
      </TitlePage>
      {pageType === 'LIST' ? (
        <DocIssuSttusContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <DocIssuInqireContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default DocIssuSttusPage;
