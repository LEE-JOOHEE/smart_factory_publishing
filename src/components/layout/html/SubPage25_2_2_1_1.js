import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import asIsIcon from 'css/images/testbed-img/as-is-icon.png';
import toBeIcon from 'css/images/testbed-img/to-be-icon.png';


const SubPage25_2_2_1_1 = ({ children }) => {

  return(
    <>

      {/* 테스트베드 - 유틸리티성 자원 공유 지원사업 tab - 울산 tab
          안전분야 공유서비스(4종) tab - 법정의무 안전보건 관리시스템 공유서비스 tab */}
      {/* 홍보관 > 제조혁신센터 소개 */}
      <Row>
        <Col span={24}>

          <div className="sub-tab-cont-wrap">
            <div className="headline">안전관리 법적 요구사항</div>
            <div className="eu-custom-description-style-gray usr-table-info mb-50">
              <table key={''} summary="테이블정보">
                <tbody>
                  <tr>
                    <td className="header font-bold-500">구분</td>
                    <td className="border-r">공정 안전 보고서 (PSM)</td>
                    <td className="border-r">안정성향상 계획서 (SMS)</td>
                    <td className="border-r">위해 관리 계획서 (RMP)</td>
                    <td>장외 영향 평가서 (ORA)</td>
                  </tr>
                  <tr>
                    <td className="header font-bold-500">법적요구</td>
                    <td className="border-r">산업안전 보건법 제 49조</td>
                    <td className="border-r">고압가스 안전관리법 제 13조</td>
                    <td className="border-r">화학물질 관리법 제 41조</td>
                    <td>화학물질 관리법 제23조</td>
                  </tr>
                  <tr>
                    <td className="header font-bold-500">심사기관</td>
                    <td className="border-r">안전보건 공단 (고용노동부)</td>
                    <td className="border-r">한국가스안전공사 (산자부)</td>
                    <td className="text-c" colSpan={2}>화학물질안전원 (환경부)</td>
                  </tr>
                  <tr>
                    <td className="header font-bold-500">구성내용</td>
                    <td className="border-r">
                      <div className="dot-text pb-6 font-16-400 text-gray-600">공정안전자료</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">공정위험성평가</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">안전운전계획</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">비상조치계획</div>
                    </td>
                    <td className="border-r">
                      <div className="dot-text pb-6 font-16-400 text-gray-600">공정안전자료</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">안전성평가서</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">안전운전계획</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">비상조치계획</div>
                    </td>
                    <td className="border-r">
                      <div className="dot-text pb-6 font-16-400 text-gray-600">사고예방프로그램</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">장외평가정보</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">비상대응프로그램</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">피해복구계획</div>
                    </td>
                    <td>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">기본 평가정보</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">장외평가정보</div>
                      <div className="dot-text pb-6 font-16-400 text-gray-600">타법률 관계정보</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="as-is-to-be grid-col-2 gap-40">
            <div className="as-is">
              <img src={asIsIcon} alt="as-is" />
              <div className="flex-col ml-80">
                <div className="tit">AS-IS</div>
                  안전관리 관련 보고서를 제출하라고?
                  <br/>PSM? RMP? ORA? SMS? 뭐가 이렇게 복잡하지?
                  <br/>외주 업체에 맡겨야겠다…
              </div>
            </div>
            <div className="to-be">
              <img src={toBeIcon} alt="to-be" />
              <div className="flex-col ml-80">
                <div className="tit">TO-BE</div>
                  평상시 시스템으로 관리하니 필요할때마다
                  <br/>보고서 출력만 하면 되네!
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage25_2_2_1_1;