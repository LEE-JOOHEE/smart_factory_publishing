import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import tbImg12_1 from 'css/images/testbed-img/testbed-img-12-1.png';
import tbImg12_2 from 'css/images/testbed-img/testbed-img-12-2.png';
import tbImg12_3 from 'css/images/testbed-img/testbed-img-12-3.png';


const SubPage25_1_2_1 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 권역별 스마트공장 테스트베드 구축 tab - 부산 tab - 조립공정 스마트제조 시스템 (3종) tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="tb-cont sub-tab-cont-wrap">
            <div className="grid-col-3 gap-row-36">
              
              <div className="tb-cont-img border-r plr-30">
                <div className="tit text-blue2 plr-0 pt-40">스마트 재고관리 시스템</div>
                <div className="dot-text pb-6">입고부품(가공품, 부품) 창고 인프라 및 자동화 장치 구축</div>
                <div className="dot-text pb-6">조립 완제품 보관을 위한 창고 인프라 및 자동출하 장치 구축</div>
                <div className="dot-text pb-0">부품 입출고 관리 시스템(MES) 및 연동 솔루션 개발</div>
                <div className="tb-img-wrap justify-center mt-30">
                  <div className="tb-img"><img src={tbImg12_1} alt="스마트 재고관리 시스템1" /></div>
                </div>
              </div>

              <div className="tb-cont-img border-r plr-30">
                <div className="tit text-blue2 plr-0 pt-40">스마트 작업지시 시스템</div>
                  <div className="dot-text pb-6">셀 생산 시스템 맞춤형 스마트 작업대 하드웨어 구축</div>
                  <div className="dot-text pb-6">AR 기반 작업지시 시스템 및 생산관리 시스템 개발</div>
                  <div className="dot-text pb-0">영상정보 송수신용 통신(5G) 인프라 및 통합운영 시스템 개발</div>
                <div className="tb-img-wrap justify-center mt-30">
                  <div className="tb-img"><img src={tbImg12_2} alt="스마트 작업지시 시스템1" /></div>
                </div>
              </div>

              <div className="tb-cont-img plr-30">
                <div className="tit text-blue2 plr-0 pt-40">스마트 비전검사 시스템</div>
                  <div className="dot-text pb-6">가공품 표면상태 및 치수검사를 위한 비전검사 시스템 구축</div>
                  <div className="dot-text pb-6">비전검사 데이터를 활용한 인공지능 알고리즘 개발</div>
                  <div className="dot-text pb-0">공정운영 솔루션과 연계를 통한 공정제어 기능 개발</div>
                <div className="tb-img-wrap justify-center mt-30">
                  <div className="tb-img"><img src={tbImg12_3} alt="스마트 비전검사 시스템1" /></div>
                </div>
              </div>

            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_1_2_1;