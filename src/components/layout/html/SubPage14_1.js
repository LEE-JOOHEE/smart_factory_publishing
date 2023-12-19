import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import introIcon1 from 'css/images/user-icons/intro-icon-1.png';
import introIcon2 from 'css/images/user-icons/intro-icon-2.png';
import introIcon3 from 'css/images/user-icons/intro-icon-3.png';
import introIcon4 from 'css/images/user-icons/intro-icon-4.png';

const SubPage14_1 = ({ children }) => {

  const smartIntroBizData = {
    data: [
      {num: '01',  text: '스마트공장 기반조성을 위한 자금, 인력, 장비 등 지원'},
      {num: '02',  text: '스마트공장 구축을 위한 정책연구 및 중장기 기획'},
      {num: '03',  text: '스마트공장 지원사업의 수요 발굴 및 조사·분석'},
      {num: '04',  text: '스마트공장 지원사업 평가 및 관리'},
      {num: '05',  text: '스마트공장 지원사업 성과확산 등'},
      {num: '06',  text: '스마트공장 수준확인제도의 개발·보급·확산 등 지원'},
      {num: '07',  text: '스마트공장 표준의 연구개발·보급사업 및 국제표준화 활동'},
      {num: '08',  text: '스마트공장 R&D사업 기획, 평가 및 관리, 운영'},
      {num: '09',  text: '스마트공장 인력양성 및 교육훈련'},
      {num: '10',  text: '스마트공장 관련 국제교류·협력 및 해외진출의 지원'},
      {num: '11',  text: '정보화역량강화사업 기획, 평가 및 관리'},
      {num: '12',  text: '정보화 수준평가'},
      {num: '13',  text: '그밖에 추진단의 목적달성을 위하여 필요한 사업'},
    ]
  }

  return(
    <>

      {/* 스마트제조혁신추진단 소개 (tab) */}
      {/* 기관소개 > 스마트제조혁신추진단 소개 */}
      <Row>
        <Col span={24}>

          <div className="smart-intro-image mt-20">
            <div className="cont">
              <div className="title mb-42">스마트제조혁신추진단</div>
              <div className="flex-row">
                <div className="icons"><img src={introIcon1} alt="조직구성" /></div>
                <div className="label">조직구성</div>
                1단장, 1본부, 4실, 2팀
              </div>
              <div className="flex-row">
                <div className="icons"><img src={introIcon2} alt="설립일" /></div>
                <div className="label">설립일</div>
                2019년 5월 3일
              </div>
              <div className="flex-row">
                <div className="icons"><img src={introIcon3} alt="21년예산" /></div>
                <div className="label">21년예산</div>
                4,547억원
              </div>
              <div className="flex-row">
                <div className="icons"><img src={introIcon4} alt="사무실" /></div>
                <div className="label">사무실</div>
                세종특별자치시 집현중앙로 79, 스마트제조혁신추진단
              </div>
            </div>
          </div>

          {/* 사업수행 */}
          <div className="headline mt-60">사업수행</div>
          <div className="smart-intro-biz">
            <div className="grid-col-2 gap-col-76">
              <div className="list flex-col">
                {smartIntroBizData.data.map((item, index) => {
                  if(index < 7){
                    return(
                      <div className="items">
                        <span className="num">{item.num}.</span>{item.text}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="list flex-col">
                {smartIntroBizData.data.map((item, index) => {
                  if(index > 6){
                    return(
                      <div className="items">
                        <span className="num">{item.num}.</span>{item.text}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          
        </Col>
      </Row>

    </>
  )
}

export default SubPage14_1;