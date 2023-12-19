import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import tbImg15_1 from 'css/images/testbed-img/testbed-img-15-1.png';

const SubPage25_1_2_4 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 부산 tab - 공장 안전관리 시스템 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap">
            <div className="headline">공장 내 작업자 안전사고 통합 감지시스템</div>
            <div className="dot-text pb-6">무선센서 네트워크 기술을 이용한 유해물질 감지 및 이벤트 감지 시스템 개발</div>
            <div className="dot-text pb-6">다 채널 Sensing Data에 대한 실시간 모니터링 및 저장 시스템 구축</div>
            <div className="dot-text pb-6">웹페이지기반의 모니터링(반응형) 및 공정별 차트, 그래프 표시 시스템 구축</div>
            <div className="dot-text pb-6">안전관리 임계치 실시간으로 체크하여 안전 및 위험상황 분석 시스템 개발</div>
            <div className="dot-text pb-0">위험상황의 수치 모니터링 화면에 위험상황 알람 시스템 개발</div>

            <div className="tb-cont border-all mt-40 p-30">
              <div className="tb-img-wrap justify-center">
                <div className="tb-img"><img src={tbImg15_1} alt="안전사고 통합 감지시스템1" /></div>
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_2_4;