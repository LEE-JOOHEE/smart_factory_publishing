import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import SubPage25_2_1 from 'components/layout/html/SubPage25_2_1.js';
import SubPage25_2_2 from 'components/layout/html/SubPage25_2_2.js';

const SubPage25_2 = ({ children }) => {

  const [tabItemsTestBedLocal, setTabItemsTestBedLocal] = useState([
    { 
      label: "전남목포", 
      key: "전남목포",
      children: <SubPage25_2_1/>,
    },
    { 
      label: "울산", 
      key: "울산",
      children: <SubPage25_2_2/>,
    },
  ]);

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          {/* 전남목포 / 울산 tab */}
          <Tabs items={tabItemsTestBedLocal} className="eu-testbed-local-tab" />

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2;