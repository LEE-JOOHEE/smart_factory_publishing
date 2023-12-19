import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_5 = ({ children }) => {


  return(
    <>
      {/* 유관사업안내 */}
      {/* 스마트공장 수준확인제도 tab */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">스마트공장 확인제도 시행을 통해 중소·중견기업의 스마트화 수준을 확인·검증하여 스마트공장 자발적 보급·확산 기반 조성</div>
        
        <div className="tit-blue mt-30">지원규모</div>
        <div className="dot-text">1,190개사(11억원) 이내</div>
        
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text pb-6">기업 자체역량(스마트공장 사업* 미참여)으로 스마트공장을 구축한 기업 및 기 구축 후 자체 구축을 통해 수준 상승 기업</div>
        <div className="dot-text mb-20">
          *‘14~’19년 스마트공장 구축 지원사업에 참여 이력이 없는 기업으로 
          스마트공장 사업관리시스템(www.smart-factory.kr)에서 참여여부 확인가능(사업안내 → 도입기업 지원현황)
        </div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">기업에 최적화된 스마트공장 구축 및 고도화 추진을 위하여, 기업의 제조수준을 객관적으로 진단하고 고도화를 위한 가이드라인 제시</div>

        <div className="tit-blue mt-30">지원조건</div>
        <div className="dot-text">기업당 80만원 지원(전액 정부지원)</div>

        <div className="headline mt-50">추진체계</div>
        <div className="org-chart-wrap" style={{height: "550px"}}>
          <div className="grid-col-3 justify-center">
            <div className="col-span-1"></div>
            <div className="col-span-1 column7">
              <div className="items-2"><div className="i-inner">총괄기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">중소벤처기업부</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2 side-r"><div className="i-inner">전담기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">스마트제조혁신추진단</div></div>
              <div className="line-b-sm" style={{height: "30px"}}></div>

              <div className="itmes-inline">
                <div className="items-1 left"><div className="i-inner">확인기관</div></div>
                <div className="items-1 right"><div className="i-inner">확인기관</div></div>
              </div>
            </div>
            <div className="col-span-1 column8" style={{ marginTop: "202px"}}>
              <div className="items-3 side-l"><div className="i-inner">운영위원회</div></div>
            </div>
          </div>
        </div>

        <div className="tit-blue mt-40">전담기관</div>
        <div className="dot-text">스마트공장 수준확인제도 및 심사원 운영관리, 운영위원회 운영, 진단모델 개발 및 제도개편 기획 등</div>

        <div className="tit-blue mt-30">운영위원회</div>
        <div className="dot-text">확인기관 선정 및 제외, 진단모델 및 매뉴얼 개선 등 수준확인제도 운영과 관련된 주요사항 심의</div>

        <div className="tit-blue mt-30">확인기관</div>
        <div className="dot-text">진단모델 개발, 기업모집 홍보, 현장진단·컨설팅 수행, 심사원 육성 프로그램 운영, 수준확인제도 확산을 위한 제도홍보 등</div>
      </div>

    </>
  )
}

export default SubPage2_5;