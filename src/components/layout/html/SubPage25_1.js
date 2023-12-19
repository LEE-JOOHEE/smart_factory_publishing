import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import SubPage25_1_1 from 'components/layout/html/SubPage25_1_1.js';
import SubPage25_1_2 from 'components/layout/html/SubPage25_1_2.js';
import SubPage25_1_3 from 'components/layout/html/SubPage25_1_3.js';

const SubPage25_1 = ({ children }) => {

  const [tabItemsTestBedLocal, setTabItemsTestBedLocal] = useState([
    { 
      label: "충북제천", 
      key: "충북제천",
      children: <SubPage25_1_1/>,
    },
    { 
      label: "부산", 
      key: "부산",
      children: <SubPage25_1_2/>,
    },
    { 
      label: "전남목포", 
      key: "전남목포",
      children: <SubPage25_1_3/>,
    },
  ]);

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          {/* 충북제천 / 부산 / 전남목포 tab */}
          <Tabs items={tabItemsTestBedLocal} className="eu-testbed-local-tab" />

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1;