import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import visionArrowIcon from 'css/images/user-icons/vision-arrow-icon.png';

const SubPage14_2 = ({ children }) => {

  return(
    <>

      {/* 비전 및 목표 (tab) */}
      {/* 기관소개 > 비전 및 목표 */}
      <Row>
        <Col span={24}>

          <div className="visionAndGoal">

            <div className="section-1 mt-20">
              <div className="grid-col-3 gap-24">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <div className="title">비전</div>
                  <div className="text-c mb-24">
                    <img src={visionArrowIcon} alt="비전 및 목표 방향 아이콘" />
                  </div>
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="grid-col-3 gap-24 w-fit m-auto">
                <div className="col-span-3">
                  <div className="sub-title">AI,슈퍼컴 기반의 중소기업 스마트제조혁신 선순환 체계 구축으로 삶의 질 향상</div>
                </div>
              </div>
            </div>

            <div className="section-2 mtb-60">
              <div className="grid-col-3 gap-24">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <div className="title">경영목표</div>
                  <div className="text-c mb-24">
                    <img src={visionArrowIcon} alt="비전 및 목표 방향 아이콘" />
                  </div>
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="grid-col-3 gap-24">
                <div className="sub-title">스마트공장 3만개 보급</div>
                <div className="sub-title">스마트공장 고도화 수준  (Level 3이상) 25%달성</div>
                <div className="sub-title">AI데이터 허브구축</div>
              </div>
            </div>

            <div className="section-3">
              <div className="grid-col-3 gap-24">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <div className="title">전략목표 및 과제</div>
                  <div className="text-c mb-24">
                    <img src={visionArrowIcon} alt="비전 및 목표 방향 아이콘" />
                  </div>
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="grid-col-3 gap-24">
                <div className="sub-title-2dep-wrap">
                  <div className="sub-title-2dep">
                    <div className="flex-row-center flex-wrap">
                      <div className="mr-4">중소기업 제조혁신</div>
                      <div>신사업모델 창출</div>
                    </div>
                    <span>고도화 실현</span>
                  </div>
                  <div className="list-wrap">
                    <div className="m-auto">
                      <div className="list">전략기획 강화</div>
                      <div className="list">표준정립을 통한 연계성 강화</div>
                      <div className="list">스마트제조기술 고도화</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sub-title-2dep">
                    <div className="flex-row-center flex-wrap">
                      <div className="mr-4">중소기업 스마트화</div>
                      <div>보급확산</div>
                    </div>
                    <span>지원체계 혁신</span>
                  </div>
                  <div className="list-wrap">
                    <div className="m-auto">
                      <div className="list">스마트공장 수준별 보급 활성화</div>
                      <div className="list">민.관.지역 협력 지원체계 강화</div>
                      <div className="list">스마트공장 종합지원시스템 운영</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sub-title-2dep">
                    <div className="flex-row-center flex-wrap">
                      <div className="mr-4">중소기업 성과제고</div>
                      <div>및 확산으로</div>
                    </div>
                    <span>기업경쟁력 강화</span>
                  </div>
                  <div className="list-wrap">
                    <div className="m-auto">
                      <div className="list">성과분석 및 사후지원체계 구축</div>
                      <div className="list">성과확산 및 대국민 인식 제고</div>
                      <div className="list">스마트제조 빅데이터 수집</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
        </Col>
      </Row>

    </>
  )
}

export default SubPage14_2;