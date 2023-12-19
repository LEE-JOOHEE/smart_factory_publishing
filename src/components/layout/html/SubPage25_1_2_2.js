import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import tbImg13_1 from 'css/images/testbed-img/testbed-img-13-1.png';


const SubPage25_1_2_2 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 부산 tab - 금속제품 제조공정 시스템 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap">
            <div className="headline">가공 / 조립 시스템</div>
            <div className="dot-text pb-6">가공계획 입력 및 제어 자동화를 위한 통합운영 시스템 구축</div>
            <div className="dot-text pb-6">금속가공(MCT, 선반 등) 및 조립 자동화 인프라 구축</div>
            <div className="dot-text pb-0">가공 생산계획 자동수립을 위한 유연가공 솔루션 개발</div>

            <div className="headline mt-40">사출 시스템</div>
            <div className="dot-text pb-6">가공계획 입력 및 제어 자동화를 위한 통합운영 시스템</div>
            <div className="dot-text pb-6">사출공정(사출기, 원료배합기 등) 자동화 인프라 구축</div>
            <div className="dot-text pb-0">가공 생산계획 자동수립을 위한 유연가공 솔루션 개발</div>

            <div className="headline mt-40">랙 시스템</div>
            <div className="dot-text pb-0">QR코드 관리를 통한 작업데이터를 전송하여 원자재 입고와 완제품을 보관 및 적정재고관리 등 데이터 관리 시스템 개발</div>

            <div className="tb-cont border-all mt-40 p-30">
              <div className="tb-img-wrap justify-center">
                <div className="tb-img"><img src={tbImg13_1} alt="랙 시스템1" /></div>
              </div>
            </div>
          </div>

          

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_2_2;