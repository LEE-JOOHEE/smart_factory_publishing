import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_20 = ({ children }) => {


  return(
    <>
      {/* 스마트공장 수준확인 tab */}
      {/* 사업안내 > 지원사업 소개 > 스마트공장 수준확인 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">중소·중견 제조기업의 자발적인 스마트공장 구축 및 고도화를 유도하기 위한 스마트화 수준진단을 지원</div>
        
        <div className="headline mt-50">확인기관 및 교육·심의기관 모집(‘23.1월 별도 공모)</div>
        <div className="tit-blue mt-20">모집개요</div>
        <div className="dot-text">
          수준확인제도 운영을 위한 확인기관 및 교육·심의기관 선정
        </div>

        <div className="tit-blue mt-30">모집기관</div>
        <div className="dot-text">
          (확인기관) 수준확인 사업 전반(수요 발굴 및 홍보, 수준확인 신청 접수, 수준확인 실시, 사후관리 등)을 추진할 수 있는 역량을 보유한 기관
        </div>
        <div className="dot-text">
          (교육·심의기관) 수준확인 심사원 교육, 교육 프로그램 개발 및 수준확인 심사 결과 심의위원회 운영 등을 지원할 수 있는 역량을 보유한 기관
        </div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          (확인기관) 참여기업 모집·선정·관리 등에 필요한 사업비·운영비 지원
        </div>
        <div className="dot-text">
          (교육·심의기관) 수준확인 관련 교육 프로그램 및 통합 심의위원회 운영에 필요한 사업비·운영비 지원
        </div>

        <div className="headline mt-50">참여기업 모집
          <span className="font-bold-500 text-black">(확인기관, 교육·심의기관 선정 후 별도 공지)</span>
        </div>
        <div className="tit-blue">지원규모: 12.5억원</div>
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">중소․중견 제조기업</div>
        <div className="dot-text">기업 자체 역량(스마트공장 사업 미참여)으로 스마트공장을 구축한 기업</div>
        <div className="dot-text">정부 지원을 통해 스마트공장을 구축한 후 정부 지원 없이 자발적으로 고도화를 추진하여 스마트화 수준 상승이 기대되는 기업</div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          기업의 스마트화 수준을 확인할 수 있는 스마트공장 수준확인 지원, 수준확인서 및 진단보고서 제공
        </div>
        <div className="tit-blue mt-30">지원조건</div>
        <div className="dot-text">수준확인 비용 전액 지원</div>
      </div>

    </>
  )
}

export default SubPage2_20;