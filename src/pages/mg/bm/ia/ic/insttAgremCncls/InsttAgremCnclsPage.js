import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import InsttAgremCnclsContainer from 'pages/mg/bm/ia/ic/insttAgremCncls/InsttAgremCnclsContainer';
import SignProgrsInsttContainer from 'pages/mg/bm/ia/ic/signProgrsInstt/SignProgrsInsttContainer';

const InsttAgremCnclsPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>기관협약 체결</TitlePage>
      {pageType === 'LIST' ? (
        <InsttAgremCnclsContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <SignProgrsInsttContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default InsttAgremCnclsPage;
