import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';
import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';

import tbImg8_1 from 'css/images/testbed-img/testbed-img-8-1.png';


const SubPage25_1_3_3 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 전남목포 tab - AI 데이터 분석시스템 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap mt-20 mb-60">
            <div className="dot-text pb-6">세라믹 원료처리 공정의  공정 최적화 (품질예측)</div>
            <div className="dot-text pb-6">생산관리 시스템의 공정데이터 파라메터 분석 및 모니터링 연계</div>
            <div className="dot-text pb-6">분석결과 및 생성 추천 레시피 생산관리시스템과 연계</div>
            <div className="dot-text pb-6">공정 레시피 관련 사용자 의사결정 지원</div>
            <div className="dot-text pb-0">설비 보전위한 장비 이상 예상시 예측 데이터 제공</div>
          </div>

          <div className="tb-img-wrap scroll-x-auto">
            <div className="tb-img"><img src={tbImg8_1} alt="AI 데이터 분석시스템1" /></div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_3_3;