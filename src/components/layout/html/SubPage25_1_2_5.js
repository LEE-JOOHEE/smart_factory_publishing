import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import tbImg16_1 from 'css/images/testbed-img/testbed-img-16-1.png';

const SubPage25_1_2_5 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 부산 tab - 제조공정 빅데이터 분석 시스템 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap">
            <div className="h5 text-blue2 lh-170 keep-all mb-20">
              제조공정 빅 데이터 분석 시스템은 금속제품 생산을 위한 자동창고, 사출 공정,  MCT가공 공정, 조립공정, 포장공정과 
              액상 제품 생산을 위한 액상 제품 제조공정을 운영 및 분석, <br/>생산 운영 시스템과 제조 데이터 분석시스템 개발
            </div>
            <div className="dot-text pb-6">각 공정별로 작업지시와 제조데이터 및 품질데이터 관리</div>
            <div className="dot-text pb-6">액상제품 제조공정 시스템의 작업지시와 제조데이터 및 품질데이터 관리</div>
            <div className="dot-text pb-6">
              사출 공정의 금형 및 사출 성형기로부터의 정형 데이터와 사출 제품 머신 비전 이미지 데이터 등의 빅 데이터 분석에 필요한 데이터 리스트를 도출 
            </div>
            <div className="dot-text pb-0">
            설비 상태 및 제품 상태 분석에 용이한 데이터를 수집하여, 사출 속도, 압력, 거리, 온도 등의 데이터는 추후 알고리즘 고도화를 통한 설비 건전성 분석, 불량률 예측 분석 데이터 활용
            </div>

            <div className="tb-cont border-all mt-40 p-30">
              <div className="tb-img-wrap justify-center">
                <div className="tb-img mt-10"><img src={tbImg16_1} alt="제조공정 빅데이터 분석 시스템1" /></div>
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_2_5;