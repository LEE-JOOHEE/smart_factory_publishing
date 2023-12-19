import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import InsttRcritManageContainer from 'pages/mg/bm/im/ir/insttRcritManage/InsttRcritManageContainer';
import InsttRcritRegistContainer from 'pages/mg/bm/im/ir/insttRcritRegist/InsttRcritRegistContainer';

const InsttRcritManagePage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>기관모집공고관리</TitlePage>
      {pageType === 'LIST' ? (
        <InsttRcritManageContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <InsttRcritRegistContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default InsttRcritManagePage;
