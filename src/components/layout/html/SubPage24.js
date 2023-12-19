import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';
import centerLogo from 'css/images/logo-user-main.png';
// import centerImg from 'css/images/user-icons/user-dummy-img/dummy-solution.png';
import centerImg from 'css/images/user-icons/user-dummy-img/dummy-2.png';

const SubPage24 = ({ children }) => {

  return(
    <>

      {/* 제조혁신센터 소개 */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>
          
          <div className="mic-info-wrap flex-row gap-30">
            <div className="mic-map-wrap">
              <div className="mic-map-bg">

                <div className="location-wrap" style={{top: "84px", left: "46px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot order-2"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>경기북부</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "88px", left: "296px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>경기</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "139px", left: "19px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot order-2"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>인천</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "143px", left: "245px"}}>
                  <a href="#/" className="flex-col gap-4">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>서울</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "128px", left: "390px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>강원</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "223px", left: "128px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot order-2"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>충북</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "262px", left: "40px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot order-2"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>충남</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "301px", left: "100px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot order-2"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>대전</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "266px", left: "274px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>세종</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "228px", left: "450px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>경북</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "331px", left: "493px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>포항</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "395px", left: "482px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>울산</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "462px", left: "470px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>부산</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "364px", left: "227px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot order-2"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>대구</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "398px", left: "75px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot order-2"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>전북</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "456px", left: "30px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot order-2"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>광주</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "526px", left: "245px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>전남</b> 스마트제조혁신센터</div>
                  </a>
                </div>
                <div className="location-wrap" style={{top: "621px", left: "200px"}}>
                  <a href="#/" className="flex-row item-center gap-6">
                    <div className="spot"><img src={mapSpot} alt="위치 아이콘" /></div>
                    <div className="label"><b>제주</b> 스마트제조혁신센터</div>
                  </a>
                </div>

              </div>
            </div>

            <div className="mic-center-wrap">
              <div className="mic-center">
                <div className="center-tit">
                  <div className="center-logo"><img src={centerLogo} alt="센터 로고" /></div>
                  서울 스마트제조혁신센터
                </div>
                <div className="center-img">
                  {/* <img src={centerImg} alt="센터 이미지" /> */}
                  <img src={"https://www.smart-factory.kr/lib/images/tpHongbo/sjtp_bg.jpg"} alt="센터 이미지" />
                </div>
                <div className="center-info">
                  <div className="th">위치</div>
                  <div className="td">세종특별자치시 조치원읍 군청로 93 SB플라자(장영실과학기술지원센터) 4층</div>
                  {/* <div className="td">세종특별자치시</div> */}
                  <div className="th">홈페이지 (국문)</div>
                  <div className="td"><a href="/#" className="underline">http://sjtp.or.kr/</a></div>
                  <div className="th">홈페이지(영문)</div>
                  <div className="td"></div>
                  <div className="th">대표연락처</div>
                  <div className="td">044-850-2100</div>
                  <div className="th">팩스</div>
                  <div className="td">044-850-2177</div>
                </div>
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage24;