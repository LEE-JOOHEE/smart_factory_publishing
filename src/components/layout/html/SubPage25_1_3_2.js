import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';
import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';

import tbImg5_1 from 'css/images/testbed-img/testbed-img-5-1.png';
import tbImg6_1 from 'css/images/testbed-img/testbed-img-6-1.png';
import tbImg7_1 from 'css/images/testbed-img/testbed-img-7-1.png';


const SubPage25_1_3_2 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 전남목포 tab - CPS 시스템 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap mt-20 mb-60">
            <div className="dot-text pb-6">세라믹 프레스 공정의 작업조건 및 순서 등에 대한 문제 사전 검토</div>
            <div className="dot-text pb-6">제품, 공정, 장비간 불부합 문제 가시화</div>
            <div className="dot-text pb-6">장비와 작업에 대해 실시간 동기화 및 모니터링</div>
            <div className="dot-text pb-6">VR 기반의 작업자 교육 기능 제공</div>
            <div className="dot-text pb-0">실제 유사 가상환경 교육</div>
          </div>

          <div className="tb-cont grid-col-2 gap-40">
            <div className="tb-cont-img">
              <div className="tit">현장 프레스 장비</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg5_1} alt="현장 프레스 장비1" /></div>
              </div>
            </div>
            <div className="tb-cont-img">
              <div className="tit">CPS 시뮬레이션</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg6_1} alt="CPS 시뮬레이션1" /></div>
              </div>
            </div>
            <div className="tb-cont-img">
              <div className="tit">장비데이터 동기화</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg7_1} alt="장비데이터 동기화1" /></div>
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_3_2;