import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import SubPage17_3 from "components/layout/html/SubPage17_3";

const SubPage20 = ({ children }) => {

  return(
    <>

      {/* 개인정보변경 */}
      {/* 회원정보 > 개인정보변경 */}
      <Row>
        <Col span={24}>
          
          {/* 회원가입 3단계 - 사용자정보입력 재사용 */}
          {/* ★★★ 확인/가입취소 버튼은 없어야 합니다. ★★★
              (회원가입 과정에서 버튼 구조를 따로 뺏어야됬나 봅니다...) */}
          <SubPage17_3 />

        </Col>
        <Col span={24}>
          <div className="headline mb-14 mt-60">소속기관 정보</div>
          <div className="eu-custom-description-table text-c">
            <table key={''} summary="테이블정보" style={{minWidth: "1000px"}}>
              <colgroup>
                <col width={'20%'} />
                <col width={'10%'} />
                <col width={'40%'} />
                <col width={'15%'} />
                <col width={'15%'} />
              </colgroup>
              <thead>
                <tr>
                  <th className="header ptb-12">소속기관명</th>
                  <th className="header ptb-12">대표자명</th>
                  <th className="header ptb-12">주소</th>
                  <th className="header ptb-12">전화번호</th>
                  <th className="header ptb-12 border-r-0">팩스번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(주)유클리드소프트</td>
                  <td>채은경</td>
                  <td>대전광역시 서구 대덕대로317번길 20 (월평동)</td>
                  <td>042-488-6589</td>
                  <td>042-367-0126</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col span={24}>
          <div className="org-chart-wrap-bdr mt-50 ptb-30 plr-40">
            <div className="font-17 font-bold-500">
              소속기관 변경이 필요하신 경우 아래 항목을 첨부하여 메일(smart-factory@tipa.or.kr)로 요청 바랍니다.
            </div>
            <div className="font-17 font-bold-400 text-gray-500">
              * (주의사항) 소속기관이 공급기업인 사용자가 소속기관 변경을 원하는 경우 회원 탈퇴 및 재가입을 하셔야 합니다.
              <div className="mt-20">
                1. 아이디
                <br/>2. 이름
                <br/>3. 기관명(변경 전/후)
                <br/>4. 연락처
                <br/>5. 고용보험가입증명서 또는 4대보험증명서
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} className="mt-50">
          <div className="flex-row-center btn-mob">
            <Button className="eu-btn-process-warning btn-h-50 plr-34" >개인인증</Button>
            <Button className="eu-btn-process-error btn-h-50 plr-48">수정</Button>
          </div>
        </Col>
      </Row>  

    </>
  )
}

export default SubPage20;