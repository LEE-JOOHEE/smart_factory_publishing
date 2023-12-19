import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';

import PrmpcCalcExmntContainer from 'pages/mg/tr/cc/pe/prmpcCalcExmnt/PrmpcCalcExmntContainer';
import PresentnSttusContainer from 'pages/mg/tr/cc/pe/presentnSttus/PresentnSttusContainer';

const PrmpcCalcExmntPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>원가계산검토</TitlePage>
      {pageType === 'LIST' ? (
        <PrmpcCalcExmntContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <PresentnSttusContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default PrmpcCalcExmntPage;
