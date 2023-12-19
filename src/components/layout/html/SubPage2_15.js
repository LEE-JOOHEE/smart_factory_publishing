import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_15 = ({ children }) => {


  return(
    <>
      {/* 로봇활용 제조혁신지원 tab */}
      {/* 사업안내 > 지원사업 소개 > 로봇활용 제조혁신지원 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">국내 제조기업의 생산성 향상, 고부가가치화 등 제조경쟁력 강화와 로봇기업 경쟁력 제고를 위해 제조 현장에 로봇 자동화 시스템 도입 지원</div>

        <div className="tit-blue mt-30">지원규모: 181억원</div>
        
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">로봇 자동화 시스템 도입이 필요한 국내 중소․중견 제조관련 기업</div>
        <div className="dot-text">
          도입기업이 공급기업과 컨소시엄을 구성하여 사업 신청
          <p className="mb-0">* (도입기업) 제조 공정 개선을 위해 로봇 자동화 시스템 도입이 필요한 국내 중소·중견 제조관련 기업</p>
          <p className="mb-0">* (공급기업) 제조 기업에 로봇 도입을 지원할 수 있는 로봇 자동화 시스템 솔루션 보유 기업(로봇 SI기업)</p>
        </div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          제조공정 로봇 도입, 공정설계 컨설팅, 안전 검사 등 패키지 지원
        </div>

        <div className="tit-blue mt-30">지원조건 : 최대 8개월, 3억원 이내(지원 비율 50% 이내)</div>
        <div className="usr-table-info text-c">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'30%'} />
              <col width={'40%'} />
              <col width={'30%'} />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>지원기간 및 지원한도</th>
                <th>정부지원금 비중</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">로봇 도입</td>
                <td>최대 8개월, 3억원</td>
                <td>50% 이내</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default SubPage2_15;