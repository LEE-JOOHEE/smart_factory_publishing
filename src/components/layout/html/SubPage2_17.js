import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_17 = ({ children }) => {


  return(
    <>
      {/* 인공지능 컨설팅 및 실증 tab */}
      {/* 사업안내 > 지원사업 소개 > 인공지능 컨설팅 및 실증 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">제조 현장에서 다수 사용되는 AI 표준모델, 알고리즘 등을 활용, 기업별 AI 솔루션 기술검증 및 현장적용 지원</div>

        <div className="tit-blue mt-30">지원규모 : 70억원</div>
        
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">인공지능을 활용한 공정개선 의지가 강하고 컨설팅 및 실증을 지원받고자 하는 중소·중견 제조기업</div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          AI전문가, 공정전문가 등을 기업에 파견하여 문제해결을 위한 AI활용 방법 탐색, 최적 솔루션 및 공급기업 추천 등 컨설팅
        </div>
        <div className="dot-text">공급기업이 도출된 해결방법을 활용하여 문제해결 실증</div>

        <div className="tit-blue mt-30">지원조건</div>
        <div className="usr-table-info text-c">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'30%'} />
              <col width={'20%'} />
              <col width={'20%'} />
              <col width={'30%'} />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>지원 기업수</th>
                <th>지원기간 및 지원한도</th>
                <th>정부지원금 비중</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">인공지능 컨설팅 및 실증</td>
                <td>100개사 내외</td>
                <td>6개월, 7천만원</td>
                <td>80~90% 이내</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default SubPage2_17;