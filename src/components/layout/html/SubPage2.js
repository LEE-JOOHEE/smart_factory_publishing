import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

import SubPage2_10 from 'components/layout/html/SubPage2_10.js';
import SubPage2_11 from 'components/layout/html/SubPage2_11.js';
import SubPage2_12 from 'components/layout/html/SubPage2_12.js';
import SubPage2_13 from 'components/layout/html/SubPage2_13.js';
import SubPage2_14 from 'components/layout/html/SubPage2_14.js';
import SubPage2_15 from 'components/layout/html/SubPage2_15.js';
import SubPage2_16 from 'components/layout/html/SubPage2_16.js';
import SubPage2_17 from 'components/layout/html/SubPage2_17.js';
import SubPage2_18 from 'components/layout/html/SubPage2_18.js';
import SubPage2_19 from 'components/layout/html/SubPage2_19.js';
import SubPage2_20 from 'components/layout/html/SubPage2_20.js';
import SubPage2_21 from 'components/layout/html/SubPage2_21.js';
import SubPage2_22 from 'components/layout/html/SubPage2_22.js';


const SubPage2 = ({ children }) => {

  const [tabItemsContUsr, setTabItemsContUsr] = useState([
    { 
      label: "정부일반형 스마트공장", 
      key: "정부일반형 스마트공장",
      children: <SubPage2_10/>,
    },
    { 
      label: "대중소 상생형 스마트공장", 
      key: "대중소 상생형 스마트공장",
      children: <SubPage2_11/>,
    },
    { 
      label: "부처협업형 스마트공장", 
      key: "부처협업형 스마트공장",
      children: <SubPage2_12/>,
    },
    { 
      label: "탄소중립형 스마트공장", 
      key: "탄소중립형 스마트공장",
      children: <SubPage2_13/>,
    },
    { 
      label: "투자연계형 스마트공장", 
      key: "투자연계형 스마트공장",
      children: <SubPage2_14/>,
    },
    { 
      label: "로봇활용 제조혁신지원", 
      key: "로봇활용 제조혁신지원",
      children: <SubPage2_15/>,
    },
    { 
      label: "공급망 연계형 스마트공장", 
      key: "공급망 연계형 스마트공장",
      children: <SubPage2_16/>,
    },
    { 
      label: "인공지능 컨설팅 및 실증", 
      key: "인공지능 컨설팅 및 실증",
      children: <SubPage2_17/>,
    },
    { 
      label: "제조데이터 촉진자 양성", 
      key: "제조데이터 촉진자 양성",
      children: <SubPage2_18/>,
    },
    { 
      label: "클라우드형 스마트공장 종합솔루션", 
      key: "클라우드형 스마트공장 종합솔루션",
      children: <SubPage2_19/>,
    },
    { 
      label: "스마트공장 수준확인", 
      key: "스마트공장 수준확인",
      children: <SubPage2_20/>,
    },
    { 
      label: "스마트마이스터 활용지원", 
      key: "스마트마이스터 활용지원",
      children: <SubPage2_21/>,
    },
    { 
      label: "스마트공장 AS지원", 
      key: "스마트공장 AS지원",
      children: <SubPage2_22/>,
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