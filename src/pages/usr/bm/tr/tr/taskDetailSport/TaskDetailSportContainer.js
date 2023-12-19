import React, { useState, useEffect } from 'react';
import { Col, Row, Tabs } from 'antd';
import 'css/CommonUsr.css';
import SportAtchDocContainer from 'pages/usr/bm/tr/tr/sportAtchDoc/SportAtchDocContainer';
import SportBassInfoContainer from 'pages/usr/bm/tr/tr/sportBassInfo/SportBassInfoContainer';
import SportNeedMatterContainer from 'pages/usr/bm/tr/tr/sportNeedMatter/SportNeedMatterContainer';

const TaskDetailSportContainer = () => {
  const [tabItems, setTabItems] = useState([
    {
      label: '기본정보',
      key: '기본정보',
      children: <SportBassInfoContainer />,
    },
    {
      label: 'AS 필요사항',
      key: 'AS 필요사항',
      children: <SportNeedMatterContainer />,
    },
    {
      label: '첨부문서',
      key: '첨부문서',
      children: <SportAtchDocContainer />,
    },
  ]);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <Tabs items={tabItems} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(TaskDetailSportContainer);
