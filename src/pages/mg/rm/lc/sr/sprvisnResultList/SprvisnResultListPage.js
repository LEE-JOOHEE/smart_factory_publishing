import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import SprvisnResultListContainer from 'pages/mg/rm/lc/sr/sprvisnResultList/SprvisnResultListContainer';
import SprvisnLastResultContainer from 'pages/mg/rm/lc/sr/sprvisnResultList/SprvisnLastResultContainer';
import SprvisnCorecPlanContainer from 'pages/mg/rm/lc/sr/sprvisnResultList/SprvisnCorecPlanContainer';
import SprvisnCorecResultContainer from 'pages/mg/rm/lc/sr/sprvisnResultList/SprvisnCorecResultContainer';
import SprvisnCorecCnfirmContainer from 'pages/mg/rm/lc/sr/sprvisnResultList/SprvisnCorecCnfirmContainer';

const SprvisnResultListPage = () => {
  /*
  확인 : SPRVISN_RESULT_LIST
  결과서 : SPRVISN_LAST_RESULT
  시정조치계획서 : SPRVISN_COREC_PLAN
  시정조치결과서 : SPRVISN_COREC_RESULT
  시정조치결과확인서 : SPRVISN_COREC_CNFIRM
  */
  const [ojtKey, setOjtKey] = useState({});

  const [pageType, setPageType] = useState('SPRVISN_RESULT_LIST');

  const containerRender = (pageType) => {
    switch (pageType) {
      case 'SPRVISN_RESULT_LIST':
        return (
          <>
            <TitlePage>감리결과 확인</TitlePage>
            <SprvisnResultListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'SPRVISN_LAST_RESULT':
        return (
          <>
            <TitlePage>감리결과 확인(최종감리결과서)</TitlePage>
            <SprvisnLastResultContainer
              ojtKey={ojtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'SPRVISN_COREC_PLAN':
        return (
          <>
            <TitlePage>감리결과 확인(시정조치계획서)</TitlePage>
            <SprvisnCorecPlanContainer
              ojtKey={ojtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'SPRVISN_COREC_RESULT':
        return (
          <>
            <TitlePage>감리결과 확인(시정조치결과서)</TitlePage>
            <SprvisnCorecResultContainer
              ojtKey={ojtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'SPRVISN_COREC_CNFIRM':
        return (
          <>
            <TitlePage>감리결과 확인(시정조치결과확인서)</TitlePage>
            <SprvisnCorecCnfirmContainer
              ojtKey={ojtKey}
              setPageType={setPageType}
            />
          </>
        );
      default:
        return (
          <>
            <TitlePage>감리결과 확인</TitlePage>
            <SprvisnResultListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
    }
  };

  return <BaseLayout>{containerRender(pageType)}</BaseLayout>;
};

export default SprvisnResultListPage;
