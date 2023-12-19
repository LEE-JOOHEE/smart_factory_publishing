import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';
import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';

import tbImg9_1 from 'css/images/testbed-img/testbed-img-9-1.png';
import tbImg10_1 from 'css/images/testbed-img/testbed-img-10-1.png';


const SubPage25_1_3_4 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 전남목포 tab - CPS 시스템 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap mt-20 mb-60">
            <div className="dot-text pb-6">유틸리티 설비 종합 모니터링 관제시스템 구축</div>
            <div className="dot-text pb-6">전력, 냉각수, 가스, 급배수 등의 모니터링을 위한 센서 설치 및 상태 데이터 수집</div>
            <div className="dot-text pb-6">실시간 모니터링 및 관제를 통해 이상 발생시 즉각 대처하여 사전예방</div>
            <div className="dot-text pb-6">실시간 전력 네트위크 기기 모니터링</div>
            <div className="dot-text pb-0">전력품질 분석(전압, 전류, 역률, 전기량, 고조파 등)</div>
          </div>

          <div className="tb-cont grid-col-2 gap-40">
            <div className="tb-cont-img">
              <div className="tit">유틸리티 모니터링</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg9_1} alt="유틸리티 모니터링1" /></div>
              </div>
            </div>
            <div className="tb-cont-img">
              <div className="tit">에너지 관리(EMS) 시스템</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg10_1} alt="에너지 관리(EMS) 시스템1" /></div>
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_3_4;