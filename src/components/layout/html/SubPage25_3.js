import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';
import centerImgCheonan from 'css/images/testbed-img/center-img-Cheonan.png';

import tbImg22_1 from 'css/images/testbed-img/testbed-img-22-1.png';
import tbImg22_2 from 'css/images/testbed-img/testbed-img-22-2.png';
import tbImg23_1 from 'css/images/testbed-img/testbed-img-23-1.png';
import tbImg24_1 from 'css/images/testbed-img/testbed-img-24-1.png';
import tbImg24_2 from 'css/images/testbed-img/testbed-img-24-2.png';
import tbImg25_1 from 'css/images/testbed-img/testbed-img-25-1.png';
import tbImg25_2 from 'css/images/testbed-img/testbed-img-25-2.png';

const SubPage25_3 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 제조기술융합센터 테스트베드 구축 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          {/* 충남 천안 */}
          <div className="mic-info-wrap flex-row gap-30">
            <div className="mic-map-wrap">
              <div className="mic-map-bg">

                <div className="location-wrap" style={{top: "215px", left: "306px"}}>
                  <a href={"/#"} className="flex-col item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>충북 제천</b></div>
                  </a>
                </div>

                <div className="location-wrap active" style={{top: "243px", left: "230px"}}>
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
                  <img src={centerImgCheonan} alt="센터이미지 충남천안" />
                </div>
                <div className="center-info">
                  <div className="th">위치</div>
                  <div className="td">충청남도 천안시 서북구 불당동 9602 (지하1층, 지상 6층)</div>
                  <div className="th">구축기간</div>
                  <div className="td">2021 ~ 2024년 10월</div>
                  <div className="th">구축예산</div>
                  <div className="td">230억</div>
                  <div className="th">역할/구축 내용</div>
                  <div className="td">
                    클라우드 통합시스템 구축으로 중소기업 디지털 데이터 
                    <br/>제조기술 융합 지원 환경 조성 
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="sub-tab-cont-wrap mt-60">
            <div className="headline">시연공간 운영(데모룸) - 홍보 / 교육</div>
            <div className="org-chart-wrap-bdr">
              <div className="dot-text font-17">
                본사업 통해서 구축되는 모든 솔루션이 시현공간(데로룸)에 구축되는 
                시연장비(비전장비, 수치제어장비, MCT,성형/사출장비)에서 데모할수 있게 운영 
                <br/>→ 기업이 쉽게 이해하고 장비/솔루션 필요성 유도
              </div>
              <div className="dot-text font-17 pb-4">장비/솔루션 운영에 필요한 교육 지원</div>
            </div>

            <div className="tb-cont mt-40">
              <div className="grid-col-2 gap-40">
                <div className="tb-img-wrap justify-center border-all p-10">
                  <div className="tb-img"><img src={tbImg22_1} alt="시연공간 운영1" /></div>
                </div>
                <div className="tb-img-wrap justify-center border-all p-10">
                  <div className="tb-img"><img src={tbImg22_2} alt="시연공간 운영2" /></div>
                </div>
              </div>

              <div className="headline mt-60">장비 / 솔루션</div>
              <div className="tit-blue">클라우드 통합솔루션</div>
              <div className="grid-col-2 gap-40 mt-6">
                <div className="tb-img-wrap flex-row-center border-all p-10">
                  <div className="tb-img"><img src={tbImg23_1} className="h-full contain" alt="클라우드 통합솔루션1" /></div>
                </div>

                <div className="usr-table-info">
                  <table key={''} summary="테이블정보" style={{minWidth: '600px'}}>
                    <thead>
                      <tr>
                        <th>솔루션</th>
                        <th>내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg bold">ERP</td>
                        <td>영업관리, 수출/수입,인사/급여,회계/원가</td>
                      </tr>
                      <tr>
                        <td className="bg bold">MES</td>
                        <td>공정관리, 설비관리</td>
                      </tr>
                      <tr>
                        <td className="bg bold">QMS</td>
                        <td>작업표준/검사기준서, 수입검사, 공정검사, 입고검사</td>
                      </tr>
                      <tr>
                        <td className="bg bold">SPC</td>
                        <td>단중계측, 버니어켈리퍼스 측정정보 MES연계</td>
                      </tr>
                      <tr>
                        <td className="bg bold">생산계획 솔루션</td>
                        <td>다품종소량생산형 중소제조기업에 적합한 생산계획 시스템</td>
                      </tr>
                      <tr>
                        <td className="bg bold">표준원가 솔루션</td>
                        <td>원가표준관리체제를 기반으로 물동관리와연계한 표준원가관리 체제</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tit-blue mt-40 mb-6">D.N.A 서비스 확대를 위한 솔루션 지원 확대</div>
              <div className="usr-table-info">
                <table key={''} summary="테이블정보">
                  <thead>
                    <tr>
                      <th>솔루션</th>
                      <th>내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg bold">도면 정보전환, 활용 : 2D, 3D</td>
                      <td>사용 중인 CAD 시스템에서 자재조달 및 생산에 필요한 제품코드, 자재코드, BOM정보를 시스템 기반으로 자동으로 추출하여 활용</td>
                    </tr>
                    <tr>
                      <td className="bg bold">디지털트윈작업표준서</td>
                      <td>3D기반 디지털트원기술을활용한작업표준서를저비용으로운영가능한시스템을구축</td>
                    </tr>
                    <tr>
                      <td className="bg bold">제조데이터품질관리시스템 (DQM)</td>
                      <td>마스터 데이터 등 제조데이터품질 점검 솔루션</td>
                    </tr>
                    <tr>
                      <td className="bg bold">RPA (Robotic  Process Automation)</td>
                      <td>단순 반복적으로 발생하는 업무 프로세스 자동화 구축 지원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid-col-2 gap-40 mt-30">
                <div className="tb-img-wrap justify-center border-all p-10">
                  <div className="tb-img"><img src={tbImg24_1} alt="D.N.A 서비스 확대21" /></div>
                </div>
                <div className="tb-img-wrap justify-center border-all p-10">
                  <div className="tb-img"><img src={tbImg24_2} alt="D.N.A 서비스 확대2" /></div>
                </div>
              </div>

              <div className="tit-blue mt-40 mb-6">분석서비스</div>
              <div className="usr-table-info">
                <table key={''} summary="테이블정보">
                  <thead>
                    <tr>
                      <th>솔루션</th>
                      <th>내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg bold">제조데이터분석 시스템</td>
                      <td>“클라우드통합운영시스템”을통하여 수집한 제조데이터를 분석서비스제공하는 범용 솔루션</td>
                    </tr>
                    <tr>
                      <td className="bg bold">제조공정 문제해결형분석시스템</td>
                      <td>
                        제조현장의제품별, 설비별, 작업자별, 요인별4M(제품, 설비, 작업자, 방법요인)별 
                        Raw-data와 생산량, Cycle time, 비가동, 불량, 부적합, 공수/시간의 핵심성과지표 관리 데이터를 
                        유기적으로 연결하여 제조공정의 변화관리 시스템
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid-col-2 gap-40 mt-30">
                <div className="tb-img-wrap justify-center border-all p-10">
                  <div className="tb-img"><img src={tbImg25_1} alt="D.N.A 서비스 확대21" /></div>
                </div>
                <div className="tb-img-wrap justify-center border-all p-10">
                  <div className="tb-img"><img src={tbImg25_2} alt="D.N.A 서비스 확대2" /></div>
                </div>
              </div>

            </div>
          </div>


        </Col>
      </Row>

    </>
  )
}

export default SubPage25_3;