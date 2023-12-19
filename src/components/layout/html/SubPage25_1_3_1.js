import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';
import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';

import tbImg1_1 from 'css/images/testbed-img/testbed-img-1-1.png';
import tbImg1_2 from 'css/images/testbed-img/testbed-img-1-2.png';
import tbImg2_1 from 'css/images/testbed-img/testbed-img-2-1.png';
import tbImg2_2 from 'css/images/testbed-img/testbed-img-2-2.png';
import tbImg3_1 from 'css/images/testbed-img/testbed-img-3-1.png';
import tbImg3_2 from 'css/images/testbed-img/testbed-img-3-2.png';
import tbImg4_1 from 'css/images/testbed-img/testbed-img-4-1.png';
import tbImg4_2 from 'css/images/testbed-img/testbed-img-4-2.png';


const SubPage25_1_3_1 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 전남목포 tab - 생산관리 시스템 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap mt-20 mb-60">
            <div className="dot-text pb-6">장비 데이터 DB화를 위한 전처리 시스템 구축</div>
            <div className="dot-text pb-6">제조 일정 수립의 효율성 제고를 위한 스마트 스케줄링 시스템 탑재</div>
            <div className="dot-text pb-6">제조레시피 소실방지와 오적용 사고예방을 위한 레시피 관리시스템 탑재</div>
            <div className="dot-text pb-6">설비보전, 공구 및 계측기 관리, 자재 및 제조이력추적관리 시스템 탑재</div>
            <div className="dot-text pb-0">설비 데이터 분석 및 모니터링 시스템 탑재</div>
          </div>

          <div className="tb-cont grid-col-2 gap-40">
            <div className="tb-cont-img">
              <div className="tit">장비 모니터링</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg1_1} alt="장비 모니터링1" /></div>
                <div className="tb-img"><img src={tbImg1_2} alt="장비 모니터링2" /></div>
              </div>
            </div>
            <div className="tb-cont-img">
              <div className="tit">실시간 데이터 오류 감지 및 분석</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg2_1} alt="실시간 데이터 오류 감지 및 분석1" /></div>
                <div className="tb-img"><img src={tbImg2_2} alt="실시간 데이터 오류 감지 및 분석2" /></div>
              </div>
            </div>
            <div className="tb-cont-img">
              <div className="tit">레시피 관리시스템</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg3_1} alt="레시피 관리시스템1" /></div>
                <div className="tb-img"><img src={tbImg3_2} alt="레시피 관리시스템2" /></div>
              </div>
            </div>
            <div className="tb-cont-img">
              <div className="tit">스마트 스케줄링 시스템</div>
              <div className="tb-img-wrap">
                <div className="tb-img"><img src={tbImg4_1} alt="스마트 스케줄링 시스템1" /></div>
                <div className="tb-img"><img src={tbImg4_2} alt="스마트 스케줄링 시스템2" /></div>
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_3_1;