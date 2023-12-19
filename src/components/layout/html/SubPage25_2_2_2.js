import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import tbImg21_1 from 'css/images/testbed-img/testbed-img-21-1.png';

const SubPage25_2_2_2 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab - 울산 tab - 설비분야(5종) tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap">
            <div className="headline mt-20">설비분야</div>
            <div className="tb-img-wrap scroll-x-auto ptb-10">
              <div className="tb-img">
                <img src={tbImg21_1} alt="설비분야" />
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2_2_2;