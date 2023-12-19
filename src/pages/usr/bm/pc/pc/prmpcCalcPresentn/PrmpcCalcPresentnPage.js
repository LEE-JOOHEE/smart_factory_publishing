import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import PrmpcCalcPresentnContainer from 'pages/usr/bm/pc/pc/prmpcCalcPresentn/PrmpcCalcPresentnContainer';
import PrmpcCalcDetailContainer from 'pages/usr/bm/pc/pc/prmpcCalcDetail/PrmpcCalcDetailContainer';

const PrmpcCalcPresentnPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>원가계산 제출</TitlePage>
      {pageType === 'LIST' ? (
        <PrmpcCalcPresentnContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <PrmpcCalcDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default PrmpcCalcPresentnPage;
