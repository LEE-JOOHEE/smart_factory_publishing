import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import PrmpcCalcExmntContainer from 'pages/usr/bm/pc/pe/prmpcCalcExmnt/PrmpcCalcExmntContainer';
import PrmpcExmntDetailContainer from 'pages/usr/bm/pc/pe/prmpcExmntDetail/PrmpcExmntDetailContainer';

const PrmpcCalcExmntPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>원가계산 검토</TitlePage>
      {pageType === 'LIST' ? (
        <PrmpcCalcExmntContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <PrmpcExmntDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default PrmpcCalcExmntPage;
