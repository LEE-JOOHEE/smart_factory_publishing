import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';

import SubPage11_1 from 'components/layout/html/SubPage11_1';

const SubPage11 = ({ children }) => {

  const [tabItemsMemberUsr, setTabItemsMemberUsr] = useState([
    { 
      label: "전문가정보*", 
      key: "전문가정보*",
      children: <SubPage11_1/>,
    },
    { 
      label: "전문분야*", 
      key: "전문분야*",
      children: [
        <div className="headline req-r mb-14">기업진단</div>
      ],
    },
    { 
      label: "학력사항*", 
      key: "학력사항*",
      children: [
        <div className="headline req-r mb-14">학력사항</div>
      ],
    },
    { 
      label: "경력사항*", 
      key: "경력사항*",
      children: [
        <div className="headline req-r mb-14">경력사항</div>
      ],
    },
    { 
      label: "연구논문", 
      key: "연구논문",
      children: [
        <div className="headline mb-14">연구논문</div>
      ],
    },
    { 
      label: "자격포상", 
      key: "자격포상",
      children: [
        <div className="headline mb-14">자격포상</div>
      ],
    },
  ]);

  return(
    <>

      {/* 전문가신청 (tab) */}
      {/* 회원정보 > 전문가신청 */}
      <Row>
        <Col span={24}>
          <Tabs items={tabItemsMemberUsr} className="eu-usr-tab column6" />
        </Col>
      </Row>






    </>
  )
}

export default SubPage11;