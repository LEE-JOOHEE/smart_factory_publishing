import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_19 = ({ children }) => {


  return(
    <>
      {/* 클라우드형 스마트공장 종합솔루션 tab */}
      {/* 사업안내 > 지원사업 소개 > 클라우드형 스마트공장 종합솔루션 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">
          업종별 스마트화에 요구되는 솔루션을 표준화된 데이터 체계에 따라 클라우드 환경에서 패키지 형태로 개발 지원
        </div>

        <div className="tit-blue mt-30">지원규모</div>
        <div className="dot-text">1개 컨소시엄</div>
        
        <div className="tit-blue mt-30">지원대상</div>
        <div className="dot-text">
          스마트공장 솔루션 개발 역량을 갖춘 공급기업(중소기업) 컨소시엄(공급기업 3개사 이상, 클라우드 공급자 1개사 이상 필수)
          <p className="mb-0">* Public cloud 서비스가 가능한 클라우드 공급자 필수 참여</p>
          <p className="mb-0">* 컨소시엄내 솔루션 시범 적용을 위한 제조기업(도입기업) 참여 가능</p>
        </div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          업종별 대표 공정 또는 주요 생산품 제조현장의 스마트화·디지털화에 적용 가능한 MES(제조관리시스템), ERP(전사적 자원관리), PLM(제품수명주기관리), AI(인공지능 솔루션) 등의 주요 기능·솔루션을 하나의 패키지로 공급 가능한 솔루션 개발 지원
          <p className="mb-0">* Public cloud 환경에서 SaaS(서비스형 소프트웨어)형태로 솔루션 공급이 가능해야 함</p>
        </div>

        <div className="tit-blue mt-30">지원조건</div>
        <div className="dot-text">
          최대 50%지원(8.3억원)
          <p className="mb-0">* 단, 공급기업 지원사업 취지 및 책임감 확보를 위해 자부담 중 공급기업 컨소시엄이 70%이상 부담 필수(클라우드사업자 또는 컨소시엄내 도입기업 자부담 가능)</p>
          <p className="mb-0">* 공급기업의 기존 보유 소스코드, 개발도구 활용, 개발환경 제공을 위하여 민간부담금의 최대 20%까지 현물 인정</p>
        </div>

        <div className="tit-blue mt-30">유의사항</div>
        <div className="dot-text">
          업종의 대표 공정, 주요생산품 제조공정에 적용 가능한 기능을 도출하기 위하여, 관련 기업을 대상으로 스마트화·디지털화·AI적용 요구사항에 대한 사전 수요조사 필요
        </div>

      </div>
    </>
  )
}

export default SubPage2_19;