import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import ReprtPresentnListContainer from 'pages/usr/bm/rs/rr/reportPresentation/ReprtPresentnListContainer';
import ReprtPresentnComptContainer from 'pages/usr/bm/rs/rr/reportPresentation/ReprtPresentnComptContainer';
import ReprtPresentnMiddleContainer from 'pages/usr/bm/rs/rr/reportPresentation/ReprtPresentnMiddleContainer';
import ReprtPresentnOutsetContainer from 'pages/usr/bm/rs/rr/reportPresentation/ReprtPresentnOutsetContainer';
import ReprtPresentnLastContainer from 'pages/usr/bm/rs/rr/reportPresentation/ReprtPresentnLastContainer';

const ReprtPresentnListPage = () => {
  /*
  목록 : REPRT_PRESENTN_LIST
  착수계제출 : REPRT_PRESENTN_OUTSET
  중간보고서 : REPRT_PRESENTN_MIDDLE
  완료보고서 : REPRT_PRESENTN_COMPT
  최종완료보고서 : REPRT_PRESENTN_LAST
 
  */
  const [ojtKey, setOjtKey] = useState({});

  const [pageType, setPageType] = useState('REPRT_PRESENTN_LIST');

  const containerRender = (pageType) => {
    switch (pageType) {
      case 'REPRT_PRESENTN_LIST':
        return (
          <>
            <TitlePage>보고서 제출</TitlePage>
            <ReprtPresentnListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'REPRT_PRESENTN_OUTSET':
        return (
          <>
            <TitlePage>착수계 제출</TitlePage>
            <ReprtPresentnOutsetContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'REPRT_PRESENTN_MIDDLE':
        return (
          <>
            <TitlePage>중간보고서 제출</TitlePage>
            <ReprtPresentnMiddleContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'REPRT_PRESENTN_COMPT':
        return (
          <>
            <TitlePage>완료보고서 제출</TitlePage>
            <ReprtPresentnComptContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'REPRT_PRESENTN_LAST':
        return (
          <>
            <TitlePage>최종보고서 제출</TitlePage>
            <ReprtPresentnLastContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      default:
        return (
          <>
            <TitlePage>보고서 제출</TitlePage>
            <ReprtPresentnListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
    }
  };

  return <BaseLayout>{containerRender(pageType)}</BaseLayout>;
};

export default ReprtPresentnListPage;
