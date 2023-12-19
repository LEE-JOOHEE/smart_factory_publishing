import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import CnFirmInsttListContainer from 'pages/mg/am/ci/ci/cnfirmInsttList/CnfirmInsttListContainer';
import CnfirmInsttDetailContainer from 'pages/mg/am/ia/ci/cnfirmInsttDetail/CnfirmInsttDetailContainer';

const CnfirmInsttListPage = () => {
  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');
  return (
    <BaseLayout>
      <TitlePage>
        {pageType === 'LIST' ? '수준확인사업' : '확인기관 배정'}
      </TitlePage>
      {pageType === 'LIST' ? (
        <CnFirmInsttListContainer
          setOjtKey={setOjtKey}
          setPageType={setPageType}
        />
      ) : (
        <CnfirmInsttDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
      )}
    </BaseLayout>
  );
};

export default CnfirmInsttListPage;
