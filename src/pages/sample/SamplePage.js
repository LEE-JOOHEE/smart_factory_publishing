import React, { useEffect, useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Modal, Radio, Row, Switch, Tabs } from 'antd';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import Sample01 from 'pages/sample/comp/Sample01';
import Sample_modal from 'pages/sample/comp/Sample_modal';
import Sample_baseLayout from 'pages/sample/comp/Sample_baseLayout';
import Sample_uniqueLayout from 'pages/sample/comp/Sample_uniqueLayout';
import Sample_comp from 'pages/sample/comp/Sample_comp';
import Sample_form from 'pages/sample/comp/Sample_form';
import Sample_tabs from 'pages/sample/comp/Sample_tabs';
import Sample_button from 'pages/sample/comp/Sample_button';
import Sample_icon from 'pages/sample/comp/Sample_icon';
import Sample_table from 'pages/sample/comp/Sample_table';
import Sample_more from 'pages/sample/comp/Sample_more';
import Sample_usr from 'pages/sample/comp/Sample_usr';

const SamplePage = () => {
  const [editable, setEditable] = useState(false);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };

  const [activeTabKey, setActiveTabKey] = useState(1);
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <BaseLayout>
      <TitlePage>Editable Sample Page</TitlePage>
      
      {/* 퍼블리싱 가이드 시작 */}
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs 
            type="card"
            onChange={onTabChange}
            activeKey={activeTabKey}
            items={[
              {
                label: '버튼 디자인',
                key: 1,
                children: (
                  <Sample_button setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '모달 layout',
                key: 2,
                children: (
                  <Sample_modal setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '일반 layout',
                key: 3,
                children: (
                  <Sample_baseLayout setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '다른 layout',
                key: 4,
                children: (
                  <Sample_uniqueLayout setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '컴포넌트 디자인',
                key: 5,
                children: (
                  <Sample_comp setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '폼 디자인',
                key: 6,
                children: (
                  <Sample_form setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '탭 디자인',
                key: 7,
                children: (
                  <Sample_tabs setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '아이콘 디자인',
                key: 8,
                children: (
                  <Sample_icon setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '테이블 디자인',
                key: 9,
                children: (
                  <Sample_table setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '[관리자]추가요청',
                key: 10,
                children: (
                  <Sample_more setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '[사용자] 화면가이드',
                key: 11,
                children: (
                  <Sample_usr setActiveTabKey={setActiveTabKey} />
                ),
              },
            ]}
          />
        </Col>
      </Row>

      <br /><br /><br /><br />
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          Editable : {editable ? 'On' : 'Off'}
          <br />
          <Switch
            checked={editable}
            onChange={(value) => {
              setEditable(value);
            }}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Sample01 searchClick={searchClick} editable={editable} />
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default SamplePage;
