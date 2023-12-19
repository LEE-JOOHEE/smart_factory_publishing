import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';
import centerImgBusan from 'css/images/testbed-img/center-img-Busan.png';
import SubPage25_1_2_1 from 'components/layout/html/SubPage25_1_2_1.js';
import SubPage25_1_2_2 from 'components/layout/html/SubPage25_1_2_2.js';
import SubPage25_1_2_3 from 'components/layout/html/SubPage25_1_2_3.js';
import SubPage25_1_2_4 from 'components/layout/html/SubPage25_1_2_4.js';
import SubPage25_1_2_5 from 'components/layout/html/SubPage25_1_2_5.js';

const SubPage25_1_2 = ({ children }) => {

  const [tabItemsTestBedContent, setTabItemsTestBedContent] = useState([
    { 
      label: "조립공정 스마트제조 시스템 (3종)", 
      key: "조립공정 스마트제조 시스템 (3종)",
      children: <SubPage25_1_2_1/>,
    },
    { 
      label: "금속제품 제조공정 시스템", 
      key: "금속제품 제조공정 시스템",
      children: <SubPage25_1_2_2/>,
    },
    { 
      label: "액상제품 제조공정 시스템", 
      key: "액상제품 제조공정 시스템",
      children: <SubPage25_1_2_3/>,
    },
    { 
      label: "공장 안전관리 시스템", 
      key: "공장 안전관리 시스템",
      children: <SubPage25_1_2_4/>,
    },
    { 
      label: "제조공정 빅데이터 분석 시스템", 
      key: "제조공정 빅데이터 분석 시스템",
      children: <SubPage25_1_2_5/>,
    },
  ]);

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 부산 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          {/* 부산 */}
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

                <div className="location-wrap active" style={{top: "467px", left: "445px"}}>
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

                <div className="location-wrap" style={{top: "516px", left: "96px"}}>
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
                  <img src={centerImgBusan} alt="센터이미지 부산" />
                </div>
                <div className="center-info">
                  <div className="th">위치</div>
                  <div className="td">부산광역시 강서구 과학산단1로 60번길 31 부산테크노파크 1동</div>
                  <div className="th">구축기간</div>
                  <div className="td">2019년 4월 ~ 2020년 12월</div>
                  <div className="th">추진기관</div>
                  <div className="td">
                    추진부처-중소벤처기업부
                    <br/>전담기관-중소기업기술정보진흥원
                    <br/>지자체-부산광역시
                    <br/>주관기관-(재)부산테크노파크
                  </div>
                  <div className="th">구축예산</div>
                  <div className="td">총 80억       - 1차년도 : 25억원   -2차년도 : 55억원</div>
                </div>

              </div>
            </div>
          </div>

          <div className="sub-tab-cont-wrap mt-60">
            <div className="headline">역할</div>
            <div className="org-chart-wrap-bdr">
              부산지역의 안정적인 스마트공장 보급‧확산과 구축 후 사후관리 등을 통해 스마트  제조혁신과 스마트제조 기반 산업 육성을 위한 거점 
            </div>

            <div className="headline mt-50">구축내용</div>
            <div className="dot-text pb-6">조립공정 스마트제조 시스템</div>
            <div className="dot-text pb-6">금속제품 제조공정 시스템</div>
            <div className="dot-text pb-6">액상제품 제조공정 시스템</div>
            <div className="dot-text pb-6">공장 안전관리 시스템</div>
            <div className="dot-text pb-0 mb-40">제조공정 빅데이터 분석 시스템</div>

            <div className="headline mt-50">공간현황</div>
            <div className="usr-table-info text-c mb-60">
              <table key={''} summary="테이블정보">
                <colgroup>
                  <col width={'20%'} />
                  <col width={'30%'} />
                  <col width={'20%'} />
                  <col width={'30%'} />
                </colgroup>
                <thead>
                  <tr>
                    <th>공간</th>
                    <th>용도</th>
                    <th>면적</th>
                    <th>합계</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>관제실</td>
                    <td>견학 및 관제 공간</td>
                    <td>157.5㎡</td>
                    <td rowSpan={2}>905.20㎡</td>
                  </tr>
                  <tr>
                    <td>장비실</td>
                    <td>장비활용 및 실증 공간</td>
                    <td className="border-r">747.7㎡</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Tabs items={tabItemsTestBedContent} className="eu-usr-tab test-bed" />



        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_2;