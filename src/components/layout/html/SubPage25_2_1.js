import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';
import centerImgMokpo2 from 'css/images/testbed-img/center-img-Mokpo2.png';

import tbImg17_1 from 'css/images/testbed-img/testbed-img-17-1.png';
import tbImg17_2 from 'css/images/testbed-img/testbed-img-17-2.png';
import tbImg17_3 from 'css/images/testbed-img/testbed-img-17-3.png';
import tbImg17_4 from 'css/images/testbed-img/testbed-img-17-4.png';

const SubPage25_2_1 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab - 전남목포 tab */}
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

                <div className="location-wrap active" style={{top: "498px", left: "144px"}}>
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
                  <img src={centerImgMokpo2} alt="센터이미지 전남유틸리티자원공유센터" />
                </div>
                <div className="center-info">
                  <div className="th">위치</div>
                  <div className="td">목포시 대양동 1195-1, 1195-2</div>
                  <div className="th">구축기간</div>
                  <div className="td">2019년 11월 13일 ~ 2021년 12월 20일</div>
                  <div className="th">구축예산</div>
                  <div className="td">1,700,000,000원</div>
                  <div className="th">주관기관</div>
                  <div className="td">(재)전라남도정보문화산업진흥원</div>
                </div>

              </div>
            </div>
          </div>

          <div className="sub-tab-cont-wrap mt-60">
            <div className="headline">역할</div>
            <div className="org-chart-wrap-bdr">
            유틸리티 기업지원 기반 조성사업으로 조선산업 관련 지원기반이 취약한 목포 지역 내 설계해석 및 생산설비를 
            공유할 수 있는 전남유틸리티자원공유센터를 구축하였고, 공통운영 플랫폼 구축 및 운영, 
            엔지니어링 지원, 교육훈련, 네트워크 활성화 등 지원사업 수행으로 중소기업 경쟁력 강화 및 지역 경쟁력 활성화에 기여하고 있다.
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
                    <td>행정동</td>
                    <td>사무실, 교육실, 회의실 등</td>
                    <td>638㎡</td>
                    <td rowSpan={4}>1,022㎡</td>
                  </tr>
                  <tr>
                    <td>연구동</td>
                    <td>공유 장비 및 이동 장비 등</td>
                    <td className="border-r">322㎡</td>
                  </tr>
                  <tr>
                    <td>자재창고</td>
                    <td>기자재 및 제품 보관</td>
                    <td className="border-r">50㎡</td>
                  </tr>
                  <tr>
                    <td>창고시설</td>
                    <td>AIR 장비(장비 보조)</td>
                    <td className="border-r">12㎡</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="tb-cont mt-40">
            <div className="tb-cont-img border-b grid-col-2 gap-col-60 ptb-40">
              <div className="tb-img-wrap">
                <div className="tb-img flex-1"><img src={tbImg17_1} alt="" /></div>
                <div className="flex-col pl-20 flex-1">
                  <div className="tit text-blue2 p-0 pb-10">설계 · 해석(SW) 장비</div>
                  <div>AM CAD, 심센터 CAE 등 조선산업 특화 프로그램으로 클라우드 기반 시스템을 구축 및 장비공유 지원</div>
                </div>
              </div>
              <div className="tb-img-wrap">
                <div className="tb-img flex-1"><img src={tbImg17_2} alt="" /></div>
                <div className="flex-col pl-20 flex-1">
                  <div className="tit text-blue2 p-0 pb-10">생산자동화 장비</div>
                  <div>3차원 로봇형상 가공기, 레이저 절단기, CNC절곡기, 레이저 용접기 등 스마트 생산 시스템 구축 및 장비공유 지원</div>
                </div>
              </div>
            </div>
            <div className="tb-cont-img border-b border-t-0 grid-col-2 gap-col-60 ptb-40">
              <div className="tb-img-wrap">
                <div className="tb-img flex-1"><img src={tbImg17_3} alt="" /></div>
                <div className="flex-col pl-20 flex-1">
                  <div className="tit text-blue2 p-0 pb-10">정도관리 장비</div>
                  <div>3차원 계측기와 SW 연계 장비로 선박 블록간 3차원 정도측정 시스템 구축 및 장비공유 지원</div>
                </div>
              </div>
              <div className="tb-img-wrap">
                <div className="tb-img flex-1"><img src={tbImg17_4} alt="" /></div>
                <div className="flex-col pl-20 flex-1">
                  <div className="tit text-blue2 p-0 pb-10">재료성능평가장비</div>
                  <div>전기식동적시험시스템, 유압냉각시스템, 저온챔버 등 재료성능평가 시스템 구축 및 장비공유 지원</div>
                </div>
              </div>
            </div>
          </div>

          
        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2_1;