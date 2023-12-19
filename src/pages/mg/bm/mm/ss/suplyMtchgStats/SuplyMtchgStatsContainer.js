import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import SuplyStatsArea from 'pages/mg/bm/mm/ss/suplyStatsArea/SuplyStatsAreaContainer';
import SuplyStatsSlutn from 'pages/mg/bm/mm/ss/suplyStatsSlutn/SuplyStatsSlutnContainer';
import SuplyStatsLevel from 'pages/mg/bm/mm/ss/suplyStatsLevel/SuplyStatsLevelContainer';
import SuplyStatsResult from 'pages/mg/bm/mm/ss/suplyStatsResult/SuplyStatsResultContainer';
import SuplyStatsScale from 'pages/mg/bm/mm/ss/suplyStatsScale/SuplyStatsScaleContainer';
import SuplyStatsSelng from 'pages/mg/bm/mm/ss/suplyStatsSelng/SuplyStatsSelngContainer';

const SuplyMtchgStatsContainer = () => {
  const [tabItems, setTabItems] = useState([
    {
      label: '업종/지역',
      key: '업종/지역',
      children: <SuplyStatsArea />,
    },
    {
      label: '업종/솔루션',
      key: '업종/솔루션',
      children: <SuplyStatsSlutn />,
    },
    {
      label: '업종/수준(레벨)',
      key: '업종/수준(레벨)',
      children: <SuplyStatsLevel />,
    },
    {
      label: '업종/구축결과',
      key: '업종/구축결과',
      children: <SuplyStatsResult />,
    },
    {
      label: '업종/종사자규모',
      key: '업종/종사자규모',
      children: <SuplyStatsScale />,
    },
    {
      label: '업종/매출규모',
      key: '업종/매출규모',
      children: <SuplyStatsSelng />,
    },
  ]);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs items={tabItems} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SuplyMtchgStatsContainer);
