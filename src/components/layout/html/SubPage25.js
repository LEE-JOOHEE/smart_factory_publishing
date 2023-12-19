import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import SubPage25_1 from 'components/layout/html/SubPage25_1.js';
import SubPage25_2 from 'components/layout/html/SubPage25_2.js';
import SubPage25_3 from 'components/layout/html/SubPage25_3.js';

const SubPage25 = ({ children }) => {

  const [tabItemsTestBed, setTabItemsTestBed] = useState([
    { 
      label: "권역별 스마트공장 테스트베드 구축", 
      key: "권역별 스마트공장 테스트베드 구축",
      children: <SubPage25_1/>,
    },
    { 
      label: "유틸리티성 자원 공유 지원사업", 
      key: "유틸리티성 자원 공유 지원사업",
      children: <SubPage25_2/>,
    },
    { 
      label: "제조기술융합센터 테스트베드 구축", 
      key: "제조기술융합센터 테스트베드 구축",
      children: <SubPage25_3/>,
    },
  ]);

  return(
    <>

      {/* 테스트베드 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <Tabs items={tabItemsTestBed} className="eu-usr-tab test-bead" />
          

        </Col>
      </Row>

    </>
  )
}

export default SubPage25;