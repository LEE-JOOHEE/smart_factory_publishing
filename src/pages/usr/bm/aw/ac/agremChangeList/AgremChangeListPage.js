import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/CommonUsr.css';
import AgremChangeListContainer from 'pages/usr/bm/aw/ac/agremChangeList/AgremChangeListContainer';
import AgremChangeDetailContainer from 'pages/usr/bm/aw/ac/agremChangeDetail/AgremChangeDetailContainer';
import AgremChangeConfirmContainer from 'pages/usr/bm/aw/ac/agremChangeConfirm/AgremChangeConfirmContainer';
import AgremChangeOnslfContainer from 'pages/usr/bm/aw/ac/agremChangeOnslf/AgremChangeOnslfContainer';

const AgremChangeListPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>협약변경</TitlePage>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          {pageType === 'LIST' ? (
            <AgremChangeListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          ) : pageType === 'DETAIL' ? (
            <AgremChangeDetailContainer
              ojtKey={ojtKey}
              setPageType={setPageType}
            />
          ) : pageType === 'CONFIRM' ? (
            <AgremChangeConfirmContainer
              ojtKey={ojtKey}
              setPageType={setPageType}
            />
          ) : pageType === 'ONSLF' ? (
            <AgremChangeOnslfContainer
              ojtKey={ojtKey}
              setPageType={setPageType}
            />
          ) : (
            <AgremChangeListContainer
              setOjtKey={setOjtKey}
              setPageType={setPageType}
            />
          )}
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default AgremChangeListPage;
