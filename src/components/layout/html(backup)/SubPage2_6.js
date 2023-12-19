import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_6 = ({ children }) => {


  return(
    <>
      {/* 유관사업안내 */}
      {/* 권역별 스마트공장 테스트베드 구축 tab */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">권역별 스마트공장 테스트베드를 구축하여, 현재 보급중인 스마트공장의 질적 향상 도모</div>
        
        <div className="tit-blue mt-30">지원규모 : 총 48억원</div>
        <div className="dot-text">총사업비 : 80억원(국비 48억원, 지자체 매칭 32억원)</div>
        
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">
          지역 스마트제조혁신센터(부산, 전남)
          <span className="ml-20">*수혜대상 : 지역 스마트공장 구축 및 구축예정인 중소·중견기업 등</span>
        </div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">4대 권역별 스마트공장과 관련된 기술개발 및 실증을 수행하는 테스트베드 구축․운영 지원</div>

        <div className="tit-blue mt-30">지원기간</div>
        <div className="dot-text">‘19 ~ ’23(권역별 2개년도 구축 지원)</div>

        <div className="headline mt-50">추진체계</div>
        <div className="org-chart-wrap">
          <div className="grid-col-3 justify-center responsive2">
            <div className="col-span-1 column6"></div>
            <div className="col-span-1 column9">
              <div className="items-2"><div className="i-inner">총괄기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">중소벤처기업부</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2"><div className="i-inner">전담기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1 side-r"><div className="i-inner">스마트제조혁신추진단</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2"><div className="i-inner">전담기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1 h-auto"><div className="i-inner">지역 스마트제조혁신센터(TP)</div></div>
            </div>
            <div className="col-span-1 column9" style={{ marginTop: "202px"}}>
            <div className="items-2"><div className="i-inner">지방자치단체</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1 side-l"><div className="i-inner">부산광역시, 전라남도청</div></div>
              <div className="line-t-lg"></div>
            </div>
          </div>
        </div>

        <div className="tit-blue mt-40">총괄기관</div>
        <div className="dot-text">사업총괄, 기본계획 수립 및 사업예산(국비) 교부 등</div>

        <div className="tit-blue mt-30">전담기관</div>
        <div className="dot-text">사업계획 검토·조정, 사업관리(사업비 지급 및 정산, 진도점검, 평가 등) 등</div>

        <div className="tit-blue mt-30">지자체</div>
        <div className="dot-text">사업비의 관리 및 주관기관 사업비 사용실적의 보고·협조, 사업예산(지방비) 교부 등</div>
        
        <div className="tit-blue mt-30">주관기관</div>
        <div className="dot-text">지역거점셈터(테스트베드) 구축 및 운영, 사업수행에 대한 종합적인 관리·책임 등</div>
      </div>

    </>
  )
}

export default SubPage2_6;