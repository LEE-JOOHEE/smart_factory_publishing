import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import LevelCnfrmnPresentnContainer from 'pages/usr/bm/aw/lp/levelPresentation/LevelCnfrmnPresentnContainer';
import LevelCnfrmnDetailContainer from 'pages/usr/bm/aw/lp/levelPresentation/LevelCnfrmnDetailContainer';

const LevelCnfrmnPresentnPage = () => {
  /*
  확인 : LEVEL_CNFRMN_PRESENTN
  상세 : LEVEL_CNFRMN_DETAIL
 
  */
  const [ojtKey, setOjtKey] = useState({});

  const [pageType, setPageType] = useState('LEVEL_CNFRMN_PRESENTN');

  const containerRender = (pageType) => {
    switch (pageType) {
      case 'LEVEL_CNFRMN_PRESENTN':
        return (
          <>
            <TitlePage>수준확인결과 제출</TitlePage>
            <LevelCnfrmnPresentnContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'LEVEL_CNFRMN_DETAIL':
        return (
          <>
            <TitlePage>수준확인결과 제출</TitlePage>
            <LevelCnfrmnDetailContainer
              ojtKey={ojtKey}
              setPageType={setPageType}
            />
          </>
        );
      default:
        return (
          <>
            <TitlePage>수준확인결과 제출</TitlePage>
            <LevelCnfrmnPresentnContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
    }
  };

  return <BaseLayout>{containerRender(pageType)}</BaseLayout>;
};

export default LevelCnfrmnPresentnPage;
