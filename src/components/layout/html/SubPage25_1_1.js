import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';
import centerImgJecheon from 'css/images/testbed-img/center-img-Jecheon.png';

import tbImg11_1 from 'css/images/testbed-img/testbed-img-11-1.png';
import tbImg11_2 from 'css/images/testbed-img/testbed-img-11-2.png';
import tbImg11_3 from 'css/images/testbed-img/testbed-img-11-3.png';
import tbImg11_4 from 'css/images/testbed-img/testbed-img-11-4.png';

const SubPage25_1_1 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 충북제천 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          {/* 충북제천 */}
          <div className="mic-info-wrap flex-row gap-30">
            <div className="mic-map-wrap">
              <div className="mic-map-bg">

                <div className="location-wrap active" style={{top: "215px", left: "306px"}}>
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
                  <img src={centerImgJecheon} alt="센터이미지 충북제천" />
                </div>
                <div className="center-info">
                  <div className="th">위치</div>
                  <div className="td">제천시 바이오밸리 內 / 4,485㎡ </div>
                  <div className="th">주요내용</div>
                  <div className="td">
                    디지털트윈 기반  메타팩토리 테스트베드 구축
                    <br/>바이오/기능성 화장품 후공정  라인 구축
                    <br/>탄소중립형 레이저 정밀기계 가공분야 공정 구축 
                    <br/>(수송기계, 2차전지, 스마트IT 부품 등)
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="tb-cont grid-col-4 gap-20 mt-40">
            <div className="tb-img-wrap flex-col">
              <div className="tb-img"><img src={tbImg11_1} alt="" /></div>
              <div className="font-16-500 mt-20 text-c">레이저 정밀 가공 시스템</div>
            </div>
            <div className="tb-img-wrap flex-col">
              <div className="tb-img"><img src={tbImg11_2} alt="" /></div>
              <div className="font-16-500 mt-20 text-c">화장품 충진 포장 라인</div>
            </div>
            <div className="tb-img-wrap flex-col">
              <div className="tb-img"><img src={tbImg11_3} alt="" /></div>
              <div className="font-16-500 mt-20 text-c">통합플랫폼 / 관제실</div>
            </div>
            <div className="tb-img-wrap flex-col">
              <div className="tb-img"><img src={tbImg11_4} alt="" /></div>
              <div className="font-16-500 mt-20 text-c">CGMP 청정실</div>
            </div>
          </div>

          <div className="usr-table-info mt-62">
            <table key={''} summary="테이블정보">
              <colgroup>
                <col width={'40%'} />
                <col width={'60%'} />
              </colgroup>
              <thead>
                <tr>
                  <th>구축업종</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pl-40">
                    메타팩토리 테스트 베드
                    <div className="font-bold-500 text-black">통합 플랫폼 지향</div>
                  </td>
                  <td>
                    <div className="dot-text pb-0">디지털트윈 기반 테스트베드 구축</div>
                    <div className="dot-text pb-0">AAS기반 데이터 수집 및 저장 솔루션 구축</div>
                    <div className="dot-text pb-0">실시간 스마트 제조관리시스템(MES) 구축</div>
                  </td>
                </tr>
                <tr>
                  <td className="pl-40">
                    탄소중립형 레이저 정밀가공
                    <div className="font-bold-500 text-black">디지털 전환</div>
                  </td>
                  <td>
                    <div className="dot-text pb-0">지역 특화 제조산업인 정밀기계가공 분야의 저탄소 제조업 테스트베드 구축</div>
                  </td>
                </tr>
                <tr>
                  <td className="pl-40">
                    바이오/기능성 화장품
                    <div className="font-bold-500 text-black">그린 메타팩토리</div>
                  </td>
                  <td>
                    <div className="dot-text pb-0">지역특화 화장품 산업의 빅데이터 플랫폼 설계</div>
                    <div className="dot-text pb-0">충북 바이오 인프라와 테스트베드의 연계성장형 “그린 메타팩토리”구축</div>
                  </td>
                </tr>
                <tr>
                  <td className="pl-40">
                    기업 애로기술 지원
                    <div className="font-bold-500 text-black">산·학·연 컨소시엄</div>
                  </td>
                  <td>
                    <div className="dot-text pb-0">중부권 스마트공장 테스트베드 컨소시엄 구성 </div>
                    <div className="dot-text pb-0">레이저 정밀기계장비 관련 지원 프로그램 운영</div>
                    <div className="dot-text pb-0">설계 플랫폼을 활용한 가상 시뮬레이션 지원</div>
                  </td>
                </tr>
                <tr>
                  <td className="pl-40">
                    스마트 공장 고도화 지원  확대를 위한
                    <div className="font-bold-500 text-black">ICT 융합 교육 프로그램</div>
                  </td>
                  <td>
                    <div className="dot-text pb-0">AR/VR 시뮬레이션 화장품 교육 프로그램 구축</div>
                    <div className="dot-text pb-0">레이저 장비 운용 비대면 교육 프로그램 구축</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_1;