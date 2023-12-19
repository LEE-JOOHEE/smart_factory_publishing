import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';
import mapSpot from 'css/images/user-icons/mic-info-map-spot.svg';

import tbImg14_1 from 'css/images/testbed-img/testbed-img-14-1.png';

const SubPage25_1_2_3 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 부산 tab - 액상제품 제조공정 시스템 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap">
            <div className="headline">투입 / 이송 / 세척 / 주입 / 포장 자동화 장비 구축</div>

            <div className="headline mt-40">검사(용량, 이물질, 라벨 내용 등) 자동화 장비 구축</div>
            <div className="dot-text pb-0">생산이력 관리와 유통기한 표시 및 이물 검사 시스템</div>

            <div className="headline mt-40">액상제품 제조공정 관리 데이터 산출 및 데이터 활용 시스템 개발</div>
            <div className="dot-text pb-6">OPC-UA를 사용하여 데이터 수집 및 실시간 모니터링 체계 구축</div>
            <div className="dot-text pb-0">제조공정 빅데이터 분석 및 MES 시스템 연동</div>

            <div className="tb-cont border-all mt-40 p-30">
              <div className="tb-img-wrap justify-center">
                <div className="tb-img"><img src={tbImg14_1} alt="액상제품 제조공정 관리1" /></div>
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_2_3;