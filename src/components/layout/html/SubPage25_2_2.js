import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';
import centerImgUlsan from 'css/images/testbed-img/center-img-Ulsan.png';

import SubPage25_2_2_1 from 'components/layout/html/SubPage25_2_2_1.js';
import SubPage25_2_2_2 from 'components/layout/html/SubPage25_2_2_2.js';

const SubPage25_2_2 = ({ children }) => {

  const [tabItemsTestBedSwitch, setTabItemsTestBedSwitch] = useState([
    { 
      label: "안전분야 공유서비스(4종)", 
      key: "안전분야 공유서비스(4종)",
      children: <SubPage25_2_2_1/>,
    },
    { 
      label: "설비분야(5종)", 
      key: "설비분야(5종)",
      children: <SubPage25_2_2_2/>,
    },
  ]);

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab - 울산 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          {/* 울산 */}
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

                <div className="location-wrap active" style={{top: "410px", left: "482px"}}>
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
                  <img src={centerImgUlsan} alt="센터이미지 울산" />
                </div>
                <div className="center-info">
                  <div className="th">위치</div>
                  <div className="td">울산광역시 울주군 온산읍 회학3길 38, 울산종합비즈니스센터 401호</div>
                  <div className="th">구축기간</div>
                  <div className="td">2019년 ~ 2023년</div>
                  <div className="th">주관기관</div>
                  <div className="td">
                    추진부처 - 중소벤처기업부
                    <br/>전담기관 - 중소기업기술정보진흥원
                    <br/>지자체 - 울산광역시
                    <br/>주관기관 - 울산정보산업진흥원
                    <br/>참여기관 - 울산대학교
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="sub-tab-cont-wrap mt-60">
            <div className="headline">역할</div>
            <div className="org-chart-wrap-bdr">
              투자효율이 낮아 중소기업이 개별적으로 구축하기 어려운 유틸리티성 지원을 
              공동 사용할 수 있도록 중소기업의 생산성 향상 및 국제 경쟁력 강화에 기여
            </div>
            <div className="tb-cont-img border-0 flex-row gap-col-22 mt-30">
              <div className="tit text-blue2 p-0">안전분야</div>
              법정의무 안전보건관리 등 공유서비스 4종 지원
            </div>
            <div className="tb-cont-img border-0 flex-row gap-col-22 mt-20">
              <div className="tit text-blue2 p-0">설비분야</div>
              가압장펌프 관리/예지보전 공유 서비스 등 5종 지원
            </div>

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
                    <td>공유 서비스 운영 및 통합 관제 공간</td>
                    <td>77㎡</td>
                    <td rowSpan={4}>230㎡</td>
                  </tr>
                  <tr>
                    <td>교육실</td>
                    <td>VR안전 교육 전용 공간</td>
                    <td className="border-r">67㎡</td>
                  </tr>
                  <tr>
                    <td>사무실</td>
                    <td>센터 사무 공간</td>
                    <td className="border-r">67㎡</td>
                  </tr>
                  <tr>
                    <td>회의실</td>
                    <td>전용 회의 공간</td>
                    <td className="border-r">25㎡</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Tabs items={tabItemsTestBedSwitch} type="card" className="eu-testbed-switch-tab" />
          
        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2_2;