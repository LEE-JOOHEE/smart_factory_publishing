import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_18 = ({ children }) => {


  return(
    <>
      {/* 제조데이터 촉진자 양성 tab */}
      {/* 사업안내 > 지원사업 소개 > 제조데이터 촉진자 양성 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">
          중소·중견 제조기업의 재직자 대상으로 인공지능·데이터 활용 교육을 지원하여 제조데이터 촉진자*로 육성, 현장의 스마트화 촉진
          <p className="mb-0">* 도입기업의 현장문제와 해결방법에 대해 공급기업 전문가와 소통할 수 있는 직원</p>
        </div>

        <div className="tit-blue mt-30">지원규모</div>
        <div className="dot-text">100명(교육비 무료)</div>
        
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">
          인공지능 솔루션 실증, 스마트공장 고도화 사업에 선정된 중소·중견기업의 재직자
          <p className="mb-0">* 선도형 디지털 클러스터, 고도화2 스마트공장, K-스마트등대공장 등</p>
        </div>

        <div className="tit-blue mt-30">교육기관</div>
        <div className="dot-text">한국과학기술원(KAIST)</div>

        <div className="tit-blue mt-20">교육 과정</div>
        <div className="dot-text">생산공정 최적화, 품질 예측, 설비고장 사전진단(예지보전) 등 제조 현장 적용 중심의 인공지능·데이터 활용 교육</div>
        <div className="dot-text">(교육) 인공지능 기초, 문제 유형별 분석 방법론, 문제해결 사례 학습 및 실습 등 비대면 교육과정 운영</div>
        <div className="dot-text">
          (현장실습) 이론 교육 내용을 자사 현장에서 발생하는 제조데이터를 활용하여 직접 적용(인공지능 마이스터와 1:1 코칭)
          <p className="mb-0">* 교육기관 및 교육대상 관련하여 일부 내용 변경 가능(세부사업별 공고문 확인 필요)</p>
        </div>

      </div>
    </>
  )
}

export default SubPage2_18;