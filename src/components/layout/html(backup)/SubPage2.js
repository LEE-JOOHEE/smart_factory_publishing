import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

import SubPage2_1 from 'components/layout/html/SubPage2_1';
import SubPage2_2 from 'components/layout/html/SubPage2_2';
import SubPage2_3 from 'components/layout/html/SubPage2_3';
import SubPage2_4 from 'components/layout/html/SubPage2_4';
import SubPage2_5 from 'components/layout/html/SubPage2_5';
import SubPage2_6 from 'components/layout/html/SubPage2_6';
import SubPage2_7 from 'components/layout/html/SubPage2_7';
import SubPage2_8 from 'components/layout/html/SubPage2_8';


const SubPage2 = ({ children }) => {

  const [tabItemsContUsr, setTabItemsContUsr] = useState([
    { 
      label: "기초 및 고도화 지원", 
      key: "기초 및 고도화 지원",
      children: <SubPage2_1/>,
    },
    {
      label: "대중소상생형 스마트공장 지원", 
      key: "대중소상생형 스마트공장 지원",
      children: <SubPage2_2/>,
    },
    {
      label: "업종별 스마트공장 구축지원 사업", 
      key: "업종별 스마트공장 구축지원 사업",
      children: <SubPage2_3/>,
    },
    {
      label: "데이터 분석 기반 스마트공장 구축지원 사업", 
      key: "데이터 분석 기반 스마트공장 구축지원 사업",
      children: <SubPage2_4/>,
    },
    {
      label: "스마트공장 수준확인제도", 
      key: "스마트공장 수준확인제도",
      children: <SubPage2_5/>,
    },
    {
      label: "권역별 스마트공장 테스트베드 구축 ", 
      key: "권역별 스마트공장 테스트베드 구축 ",
      children: <SubPage2_6/>,
    },
    {
      label: "스마트화 역량강화", 
      key: "스마트화 역량강화",
      children: <SubPage2_7/>,
    },
    {
      label: "클라우드기반 솔루션개발", 
      key: "클라우드기반 솔루션개발",
      children: <SubPage2_8/>,
    },
  ]);


  return(
    <>
      {/* 지원사업소개 Tab(유관사업안내) */}
      {/* 사업안내 > 지원사업소개(유관사업안내) */}
      <Row>
        <Col span={24}>
          <Tabs items={tabItemsContUsr} className="eu-usr-tab" />
        </Col>
      </Row>

    </>
  )
}

export default SubPage2;