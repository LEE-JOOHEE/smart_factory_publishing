import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import SprvisnChangeListContainer from 'pages/usr/bm/rs/sr/supervisionChange/SprvisnChangeListContainer';
import SprvisnChangeReqstContainer from 'pages/usr/bm/rs/sr/supervisionChange/SprvisnChangeReqstContainer';
import SprvisnChangeDtlsContainer from 'pages/usr/bm/rs/sr/supervisionChange/SprvisnChangeDtlsContainer';
import SprvisnChangeDetailContainer from 'pages/usr/bm/rs/sr/supervisionChange/SprvisnChangeDetailContainer';

const SprvisnChangeListPage = () => {
  /*
  감리변경 목록 : SPRVISN_CHANGE_LIST
  감리변경 신청 : SPRVISN_CHANGE_REQST
  감리변경 내역 : SPRVISN_CHANGE_DTLS
  감리변경 상세 : SPRVISN_CHANGE_DETAIL
  */
  const [ojtKey, setOjtKey] = useState({});

  const [pageType, setPageType] = useState('SPRVISN_CHANGE_LIST');

  const containerRender = (pageType) => {
    switch (pageType) {
      case 'SPRVISN_CHANGE_LIST':
        return (
          <>
            <TitlePage>감리변경(목록)</TitlePage>
            <SprvisnChangeListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'SPRVISN_CHANGE_REQST':
        return (
          <>
            <TitlePage>감리변경(신청)</TitlePage>
            <SprvisnChangeReqstContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'SPRVISN_CHANGE_DTLS':
        return (
          <>
            <TitlePage>감리변경(내역)</TitlePage>
            <SprvisnChangeDtlsContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      case 'SPRVISN_CHANGE_DETAIL':
        return (
          <>
            <TitlePage>감리변경(상세)</TitlePage>
            <SprvisnChangeDetailContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
      default:
        return (
          <>
            <TitlePage>감리변경(목록)</TitlePage>
            <SprvisnChangeListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          </>
        );
    }
  };

  return <BaseLayout>{containerRender(pageType)}</BaseLayout>;
};

export default SprvisnChangeListPage;
