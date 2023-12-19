import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import ReprtExmntListContainer from 'pages/usr/bm/rs/re/reportExamination/ReprtExmntListContainer';
import ReprtExmntOutsetContainer from 'pages/usr/bm/rs/re/reportExamination/ReprtExmntOutsetContainer';
import ReprtExmntMiddleContainer from 'pages/usr/bm/rs/re/reportExamination/ReprtExmntMiddleContainer';
import ReprtExmntComptContainer from 'pages/usr/bm/rs/re/reportExamination/ReprtExmntComptContainer';
import ReprtExmntLastContainer from 'pages/usr/bm/rs/re/reportExamination/ReprtExmntLastContainer';

const ReprtExmntListPage = () => {
  /*
  목록 : REPRT_EXMNT_LIST
  착수계검토 : REPRT_EXMNT_OUTSET
  중간보고서 : REPRT_EXMNT_MIDDLE
  완료보고서 : REPRT_EXMNT_COMPT
  최종완료보고서 : REPRT_EXMNT_LAST
 
  */
  const [ojtKey, setOjtKey] = useState({});

  const [pageType, setPageType] = useState('REPRT_EXMNT_LIST');

  const containerRender = (pageType) => {
    switch (pageType) {
      case 'REPRT_EXMNT_LIST':
        return (
          <>
            <TitlePage>보고서 검토</TitlePage>
            <ReprtExmntListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'REPRT_EXMNT_OUTSET':
        return (
          <>
            <TitlePage>착수계 검토</TitlePage>
            <ReprtExmntOutsetContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'REPRT_EXMNT_MIDDLE':
        return (
          <>
            <TitlePage>중간보고서 검토</TitlePage>
            <ReprtExmntMiddleContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'REPRT_EXMNT_COMPT':
        return (
          <>
            <TitlePage>완료보고서 검토</TitlePage>
            <ReprtExmntComptContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'REPRT_EXMNT_LAST':
        return (
          <>
            <TitlePage>최종보고서 검토</TitlePage>
            <ReprtExmntLastContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      default:
        return (
          <>
            <TitlePage>보고서 검토</TitlePage>
            <ReprtExmntListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
    }
  };

  return <BaseLayout>{containerRender(pageType)}</BaseLayout>;
};

export default ReprtExmntListPage;
