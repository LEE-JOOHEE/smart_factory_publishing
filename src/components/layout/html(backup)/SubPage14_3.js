import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import ciMeaning from 'css/images/user-icons/ci-meaning.png';
import ciKoRow from 'css/images/user-icons/ci-ko-row.png';
import ciEnRow from 'css/images/user-icons/ci-en-row.png';
import ciKoCol from 'css/images/user-icons/ci-ko-col.png';
import ciKoEnCol from 'css/images/user-icons/ci-ko-en-col.png';
import ciEnCol from 'css/images/user-icons/ci-en-col.png';
import ciOnlyLogo from 'css/images/user-icons/ci-only-logo.png';

const SubPage14_3 = ({ children }) => {

  return(
    <>

      {/* CI소개 (tab) */}
      {/* 기관소개 > CI소개 */}
      <Row>
        <Col span={24}>

          <div className="intro-ci">

            <div className="headline mt-20 mb-8">CI 의미</div>
            <div className="scroll-x-auto mb-14">
              <img src={ciMeaning} alt="CI의미" />
            </div>
            <div className="font-17 lh-170">
              심플한 형태로 스마트하고 명쾌한 이미지를 전달하는 KOSMO의 워드마크는 K의 세로획을 느낌표로 표현하여 새로운 생각과 아이디어, 혁신의 이미지를 형상화하였다. 
              <br/>사명 첫 글자에 적용된 Point는 혁신의 시작점이란 상징성을 지니며 우리나라 제조 혁신을 리딩해가는 KOSMO의 모습을 담았다. 
              <br/>또한 Blue를 주색으로 하여 전문성과 신뢰, 상생을 표현하였으며, 주색과 함께 사용된 Sky Blue는 기술력과 혁신을 상징한다.
            </div>

            <div className="headline mt-60">국영문 가로</div>
            <div className="grid-col-2">
              <div className="ci-wrap">
                <div className="ci-bg">
                  <img src={ciKoRow} alt="CI 국문 가로" />
                </div>
                <div className="flex-row-center gap-10 flex-wrap">
                  <button className="eu-btn-excel-download">AI 다운로드</button>
                  <button className="">PNG 다운로드</button>
                </div>
              </div>
              <div className="ci-wrap">
                <div className="ci-bg">
                  <img src={ciEnRow} alt="CI 영문 가로" />
                </div>
                <div className="flex-row-center gap-10 flex-wrap">
                  <button className="eu-btn-excel-download">AI 다운로드</button>
                  <button className="eu-btn-excel-download">PNG 다운로드</button>
                </div>
              </div>
            </div>

            <div className="headline mt-50">국영문 세로</div>
            <div className="grid-col-2">
              <div className="ci-wrap">
                <div className="ci-bg">
                  <img src={ciKoCol} alt="CI 국문 세로" />
                </div>
                <div className="flex-row-center gap-10 flex-wrap">
                  <button className="eu-btn-excel-download">AI 다운로드</button>
                  <button className="eu-btn-excel-download">PNG 다운로드</button>
                </div>
              </div>
              <div className="ci-wrap">
                <div className="ci-bg">
                  <img src={ciKoEnCol} alt="CI 국영문 세로" />
                </div>
                <div className="flex-row-center gap-10 flex-wrap">
                  <button className="eu-btn-excel-download">AI 다운로드</button>
                  <button className="eu-btn-excel-download">PNG 다운로드</button>
                </div>
              </div>
            </div>

            <div className="headline mt-50">영문 세로</div>
            <div className="grid-col-2">
              <div className="ci-wrap">
                <div className="ci-bg">
                  <img src={ciEnCol} alt="CI 영문 세로" />
                </div>
                <div className="flex-row-center gap-10 flex-wrap">
                  <button className="eu-btn-excel-download">AI 다운로드</button>
                  <button className="eu-btn-excel-download">PNG 다운로드</button>
                </div>
              </div>
              <div className="ci-wrap">
                <div className="ci-bg">
                  <img src={ciOnlyLogo} alt="CI 영문 로고" />
                </div>
                <div className="flex-row-center gap-10 flex-wrap">
                  <button className="eu-btn-excel-download">AI 다운로드</button>
                  <button className="eu-btn-excel-download">PNG 다운로드</button>
                </div>
              </div>
            </div>

          </div>
            
        </Col>
      </Row>

    </>
  )
}

export default SubPage14_3;