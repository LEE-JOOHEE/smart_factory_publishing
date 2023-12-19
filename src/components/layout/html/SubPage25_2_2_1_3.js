import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import tbImg19_1 from 'css/images/testbed-img/testbed-img-19-1.png';


const SubPage25_2_2_1_3 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab - 울산 tab
          안전분야 공유서비스(4종) tab - 정량적 위험성평가시스템 공유서비스 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap">
            <div className="tit-blue">개념</div>
            <div className="dot-text pb-6">정량적 위험성 평가 수행의 법적 요구, 중소기업 SW 구매 부담</div>
            <div className="dot-text pb-0">사고의 발생빈도와 피해정도를계산하여 위험성이 높은 순으로 관리 위험성(Risk): 발생빈도(Likelihood)X 피해정도(Consequence)</div>

            <div className="tit-blue mt-50">개념</div>
            <div className="tb-img-wrap scroll-x-auto ptb-10">
              <div className="tb-img">
                <img src={tbImg19_1} alt="정량적 위험성평가시스템 공유서비스" />
              </div>
            </div>

            <div className="headline mt-50">주요내용</div>
            <div className="tit-blue">정량적 위험성평가서비스 기업지원</div>
            <div className="dot-text pb-6">정량적 위험성평가수행을 위한 SW구축</div>
            <div className="dot-text pb-0">정량적 위험성평가SW 중소기업 공유 서비스 지원</div>

            <div className="tit-blue mt-30">정량적 위험성평가 수행가능 안전관리 교육지원</div>
            <div className="dot-text pb-6">중소기업 안전관리 전문가 교육 프로그램</div>
            <div className="dot-text pb-0">정량적 위험성평가전문 교육 프로그램</div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2_2_1_3;