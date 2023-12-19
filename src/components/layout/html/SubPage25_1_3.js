import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';
import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';

import SubPage25_1_3_1 from 'components/layout/html/SubPage25_1_3_1.js';
import SubPage25_1_3_2 from 'components/layout/html/SubPage25_1_3_2.js';
import SubPage25_1_3_3 from 'components/layout/html/SubPage25_1_3_3.js';
import SubPage25_1_3_4 from 'components/layout/html/SubPage25_1_3_4.js';
import centerImgMokpo from 'css/images/testbed-img/center-img-Mokpo.png';

const SubPage25_1_3 = ({ children }) => {

  const [tabItemsTestBedContent, setTabItemsTestBedContent] = useState([
    { 
      label: "생산관리 시스템", 
      key: "생산관리 시스템",
      children: <SubPage25_1_3_1/>,
    },
    { 
      label: "CPS 시스템", 
      key: "CPS 시스템",
      children: <SubPage25_1_3_2/>,
    },
    { 
      label: "AI 데이터 분석시스템", 
      key: "AI 데이터 분석시스템",
      children: <SubPage25_1_3_3/>,
    },
    { 
      label: "유틸리티 및 에너지관리 시스템", 
      key: "유틸리티 및 에너지관리 시스템",
      children: <SubPage25_1_3_4/>,
    },
  ]);

  

  return(
    <>
      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 전남목포 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          {/* 전남목포 */}
          <div className="mic-info-wrap flex-row gap-30">
            <div className="mic-map-wrap">
              <div className="mic-map-bg">

                <div className="location-wrap" style={{top: "215px", left: "306px"}}>
                  <a href={"/#"} className="flex-col item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>충북 제천</b></div>
                  </a>
                </div>

                <div className="location-wrap" style={{top: "243px", left: "230px"}}>
                  <a href="#/" className="flex-col item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>충남 천안</b></div>
                  </a>
                </div>

                <div className="location-wrap" style={{top: "410px", left: "482px"}}>
                  <a href="#/" className="flex-col item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>울산</b></div>
                  </a>
                </div>

                <div className="location-wrap" style={{top: "467px", left: "445px"}}>
                  <a href="#/" className="flex-col item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>부산</b></div>
                  </a>
                </div>

                <div className="location-wrap" style={{top: "498px", left: "144px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>전남유틸리티자원공유센터</b></div>
                  </a>
                </div>

                <div className="location-wrap active" style={{top: "516px", left: "96px"}}>
                  <a href="#/" className="flex-col item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>전남 목포</b></div>
                  </a>
                </div>

              </div>
            </div>

            <div className="mic-center-wrap">
              <div className="mic-center">

                <div className="center-img">
                  <img src={centerImgMokpo} alt="센터이미지 전남목포" />
                </div>
                <div className="center-info">
                  <div className="th">위치</div>
                  <div className="td">전남 목포시 대양로 25 전남테크노파크</div>
                  <div className="th">주요내용</div>
                  <div className="td">2020. 4. 1 ~ 2022. 3.</div>
                  <div className="th">구축예산</div>
                  <div className="td">전남테크노파크</div>
                </div>

              </div>
            </div>
          </div>

          <div className="sub-tab-cont-wrap mt-60">
            <div className="headline">역할</div>
            <div className="org-chart-wrap-bdr">중소제조기업의 스마트공장 구축 및 고도화 촉진 첨단세라믹 현장밀착형 스마트공장 기술지원 지역거점 역할 수행</div>

            <div className="headline mt-50">구축내용</div>
            <div className="dot-text pb-6">세라믹 제조 장비 스마트화</div>
            <div className="dot-text pb-6">세라믹 제조 공정의 데이터 수집·분석 시스템 구축</div>
            <div className="dot-text pb-0 mb-60">세라믹 제조공정의 효율적 괸리위한 솔루션 시스템 구축</div>
          </div>

          <Tabs items={tabItemsTestBedContent} className="eu-usr-tab test-bed" />
          
        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_3;