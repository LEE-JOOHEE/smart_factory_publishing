import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import SubPage25_2_2_1_1 from 'components/layout/html/SubPage25_2_2_1_1.js';
import SubPage25_2_2_1_2 from 'components/layout/html/SubPage25_2_2_1_2.js';
import SubPage25_2_2_1_3 from 'components/layout/html/SubPage25_2_2_1_3.js';
import SubPage25_2_2_1_4 from 'components/layout/html/SubPage25_2_2_1_4.js';

const SubPage25_2_2_1 = ({ children }) => {

  const [tabItemsTestBedSwitch, setTabItemsTestBedSwitch] = useState([
    { 
      label: "법정의무 안전보건 관리시스템 공유서비스", 
      key: "법정의무 안전보건 관리시스템 공유서비스",
      children: <SubPage25_2_2_1_1/>,
    },
    { 
      label: "법정의무 설비안전 관리시스템 공유서비스", 
      key: "법정의무 설비안전 관리시스템 공유서비스",
      children: <SubPage25_2_2_1_2/>,
    },
    { 
      label: "정량적 위험성평가시스템 공유서비스", 
      key: "정량적 위험성평가시스템 공유서비스",
      children: <SubPage25_2_2_1_3/>,
    },
    { 
      label: "VR기반 안전교육 공유 서비스", 
      key: "VR기반 안전교육 공유 서비스",
      children: <SubPage25_2_2_1_4/>,
    },
  ]);

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab - 울산 tab - 안전분야 공유서비스(4종) tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <Tabs items={tabItemsTestBedSwitch} className="eu-usr-tab test-bed" />

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2_2_1;