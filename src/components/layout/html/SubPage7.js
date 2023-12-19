import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";

import SubPage7_1 from 'components/layout/html/SubPage7_1';
import SubPage7_2 from 'components/layout/html/SubPage7_2';
import SubPage7_3 from 'components/layout/html/SubPage7_3';
import SubPage7_4 from 'components/layout/html/SubPage7_4';


const SubPage7 = ({ children }) => {

  const [tabItemsContUsr, setTabItemsContUsr] = useState([
    { 
      label: "정책금융지원", 
      key: "정책금융지원",
      children: <SubPage7_1/>,
    },
    { 
      label: "인력개발", 
      key: "인력개발",
      children: <SubPage7_2/>,
    },
    { 
      label: "ICT기반지원", 
      key: "ICT기반지원",
      children: <SubPage7_3/>,
    },
    { 
      label: "노동환경개선", 
      key: "노동환경개선",
      children: <SubPage7_4/>,
    },
  ]);


  return(
    <>
      {/* 스마트공장소개 */}
      {/* 홍보관 > 유관사업안내 */}
      <Row>
        <Col span={24}>
          <Tabs items={tabItemsContUsr} className="eu-usr-tab" />
        </Col>
      </Row>
    
    </>
  )
}

export default SubPage7;