import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import SubPage14_1 from 'components/layout/html/SubPage14_1';
import SubPage14_2 from 'components/layout/html/SubPage14_2';
import SubPage14_3 from 'components/layout/html/SubPage14_3';

const SubPage14 = ({ children }) => {

  const [tabItemsIntroduction, setTabItemsIntroduction] = useState([
    { 
      label: "스마트제조혁신추진단 소개", 
      key: "스마트제조혁신추진단 소개",
      children: <SubPage14_1/>,
    },
    { 
      label: "비전 및 목표", 
      key: "비전 및 목표",
      children: <SubPage14_2/>,
    },
    { 
      label: "CI소개", 
      key: "CI소개",
      children: <SubPage14_3/>,
    },
  ]);

  return(
    <>

      {/* 기관소개 탭(tab) */}
      {/* 기관소개 > 스마트제조혁신추진단 소개 / 비전 및 목표 / CI소개 */}
      <Row>
        <Col span={24}>

          <Tabs items={tabItemsIntroduction} className="eu-usr-tab" />
          
        </Col>
      </Row>

    </>
  )
}

export default SubPage14;