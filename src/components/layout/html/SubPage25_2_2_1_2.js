import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import tbImg18_1 from 'css/images/testbed-img/testbed-img-18-1.png';
import tbImg18_2 from 'css/images/testbed-img/testbed-img-18-2.png';


const SubPage25_2_2_1_2 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab - 울산 tab
          안전분야 공유서비스(4종) tab - 법정의무 설비안전 관리시스템 공유서비스 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

            <div className="tb-img-wrap scroll-x-auto ptb-10">
              <div className="tb-img">
                <img src={tbImg18_1} alt="법정의무 설비안전 관리시스템 공유서비스" />
              </div>
            </div>

            <div className="headline mt-50">WEB-APP 기반 법정의무 설비 안전관리 서비스</div>
            <div className="tb-img-wrap scroll-x-auto ptb-10">
              <div className="tb-img">
                <img src={tbImg18_2} alt="WEB-APP 기반 법정의무 설비 안전관리 서비스" />
              </div>
            </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2_2_1_2;