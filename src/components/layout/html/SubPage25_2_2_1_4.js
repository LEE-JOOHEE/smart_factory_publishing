import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import tbImg20_1 from 'css/images/testbed-img/testbed-img-20-1.png';


const SubPage25_2_2_1_4 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab - 울산 tab
          안전분야 공유서비스(4종) tab - VR기반 안전교육 공유 서비스 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap">
            <div className="org-chart-wrap-bdr mb-30">화학사고 사례, 공정작업 절차 체험 등 실효성 높은 실감형(VR) 
              안전교육 콘텐츠 교육지원. &nbsp;&nbsp;
              (기 구축된 VR콘텐츠 6편 및 구축 메타버스 활용 울산내 중소중견기업 대상으로 교육지원)
            </div>
            <div className="tb-img-wrap scroll-x-auto ptb-10">
              <div className="tb-img">
                <img src={tbImg20_1} alt="정량적 위험성평가시스템 공유서비스" />
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2_2_1_4;