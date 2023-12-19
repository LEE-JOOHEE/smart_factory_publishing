import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";

const SubPage7_3 = ({ children }) => {

  return(
    <>
      {/* 스마트공장소개 */}
      {/* 홍보관 > ICT기반지원 tab */}
      
      <div className="sub-tab-cont-wrap">
        <div className="headline">데이터 바우처 지원</div>
        <div className="org-chart-wrap-bdr">중소기업 등이 데이터를 기반으로 다양한 사업을 추진하여 경쟁력을 높일 수 있도록 지원합니다.</div>

        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">데이터 활용에 어려움을 겪는 중소․벤처기업, 소상공인 및 1인 창조기업을 대상으로 데이터 구매․가공 바우처 지원</div>

        <div className="tit-blue mt-40">지원내용</div>
        <div className="dot-text">대상별(CEO, 재직자)․수준별(현장, 전문인력) 눈높이에 맞는 실습 중심의 교육과정 운영 *스마트공장 도입전략, 제조현장 관리기술, 요소기술, 융합기술 분야 등 실습kit를 활용한 교육과정 개설</div>

        <div className="tit-blue mt-40">지원규모</div>
        <div className="dot-text">구매부문 : 데이터 구입비 - 최대 1,800만원</div>
        <div className="dot-text">가공부문 : 일반 가공 - 최대 4,500만원, AI 가공 - 최대 7,000만원 *민간 매칭 방식(정부지원 75%, 민간자부담 25%)으로 지원</div>

        <div className="tit-blue mt-40">신청기간</div>
        <div className="dot-text">1차 수요공모 : ’19년 3월 ~ 4월(한국데이터산업진흥원 접수)</div>
        <div className="dot-text">2차 수요공모 : ’19년 5월 ~ 6월(분야별 수행기관 접수)</div>

        <div className="tit-blue mt-40">신청</div>
        <div className="dot-text">데이터스토어 www.datastore.or.kr</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">과학기술정보통신부 융합신산업과 : 02-2110-2849</div>
        <div className="dot-text">이노비즈협회 4차산업혁명추진팀 : 031-628-9617</div>
        <div className="dot-text">한국데이터산업진흥원 : 02-3708-5444</div>
        <div className="dot-text">데이터바우처 지원사업 대표번호 : 1833-22462</div>
        
        <div className="headline mt-50">스마트공장 보안 취약점 점검 지원</div>
        <div className="org-chart-wrap-bdr">ICT를 도입한 스마트공장의 보안강화를 위한 보안 취약점 점검 및 조치방안 등을 지원합니다.</div>

        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">
          스마트 시범공장 선정기업 및 기 구축 스마트 시범공장 대상으로 보안 취약점 점검 및 컨설팅을 희망하는 기업 수요조사
          <p className="mb-0">*수요조사 기간 : 19.3.27 ~ 4.5 (중기부 협조로 스마트공장 보급‧확산 사업을 통해 솔루션을 도입하거나 장비를 구매한 기업수요 파악)</p>
        </div>

        <div className="tit-blue mt-40">지원규모</div>
        <div className="dot-text">기업 당 최대 1억원 지원 (’19년 2개 기업 내외, ’20년부터 확대)</div>

        <div className="tit-blue mt-40">지원기간</div>
        <div className="dot-text">19.6 ~ 11월 (6개월)</div>

        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text">
          보안취약점 점검 : 스마트공장의 업무망 및 제어망, 산업용 IoT 기기 대상 운영환경 및 보안현황 점검
          <p className="mb-0">*기업자원관리솔루션, 공급사슬관리솔루션, 제조현장 운영시스템, 제품개발 및 공정개발지원시스템, 현장자동화 기기 등 취약점 점검</p>
        </div>
        <div className="dot-text">보안컨설팅 : 보안 취약점 점검 결과를 바탕으로 위협 분석 및 스마트공장 보안강화를 위한 조치방안 마련 지원</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">과학기술정보통신부 정보보호산업과 : 02-2110-2922</div>
        <div className="dot-text">한국인터넷진흥원 : 061-820-1292</div>
        
        <div className="headline mt-50">인터넷침해대응센터 연락망 구축</div>
        <div className="org-chart-wrap-bdr">홈페이지 24시간 상시모니터링 및 침해사고에 대비한 신고접수, 상황전파 연락망 구축</div>

        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text">
          상시모니터링 : 인터넷침해대응센터 24시간 종합상황실 상시 운영을 통한 홈페이지 이상징후 실시간 모니터링
          <p className="mb-0">*홈페이지 내 악성코드 은닉여부 탐지 및 조치</p>
        </div>
        <div className="dot-text">연락망 구축 : 해킹사고, 피싱사고, 웜/바이러스사고에 대한 신고접수 및 상황전파</div>

        <div className="tit-blue mt-40">지원규모</div>
        <div className="dot-text">침해사고 : 인터넷침해신고센터(118) 또는 인터넷보호나라(www.kcert.or.kr)를 통해 상시접수</div>
        <div className="dot-text">상시모니터링 및 상황전파 연락망 : ’19년 스마트 시범공장 선정기업 및 기 구축 스마트 시범공장 반영추진</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">과학기술정보통신부 사이버침해대응과 : 02-2110-2925</div>
        <div className="dot-text">한국인터넷진흥원 : 118</div>
        <div className="dot-text">인터넷보호나라(www.boho.or.kr)</div>

        <div className="headline mt-50">현장수요형 스마트공장 기술 개발</div>
        <div className="org-chart-wrap-bdr">중소기업의 제조현장 고도화를 위해 클라우드 기반의 데이터 플랫폼 및 생산현장 노하우 디지털화 기술개발을 지원합니다.</div>

        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text">(클라우드 기반 데이터 플랫폼 기술개발) 국내 제조 중소기업 현장에 적합한 클라우드 기반 스마트공장 고도화 플랫폼 개발</div>
        <div className="dot-text">(K-앱시스트) 생산현장 노하우 디지털화 및 스마트공장 정보를 연계한 제품․서비스 개발 지원</div>

        <div className="tit-blue mt-40">지원규모</div>
        <div className="dot-text">신규 16개 과제 내외, 36억원</div>
        <div className="dot-text">과제 당 총 사업비의 65% 이내(6억원 이하) 및 최대 2년간 지원</div>

        <div className="tit-blue mt-40">지원대상</div>
        <div className="dot-text">중소기업기본법 제2조에 의한 중소기업</div>

        <div className="tit-blue mt-40">지원절차</div>
        <div className="procedure-wrap small odd">
          <div className="grid-col-12 gap-col-38 gap-row-52">
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">1.사업공고</div>
                중소벤처기업부
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">2.신청접수</div>
                (온라인)주관기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">3.서면평가</div>
                전문기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items arrowicon-bt">
                <div className="text-order-small">4.심층평가</div>
                전문기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items arrowicon-rt">
                <div className="text-order-small">8.최종평가, 사후관리</div>
                전문기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items arrowicon-rt">
                <div className="text-order-small">7.과제관리, 최종점검</div>
                전문기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items arrowicon-rt">
                <div className="text-order-small">6.협약 및 자금지원</div>
                주관/전문기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">5.선정결과 보고 및 통보</div>
                전문기관
              </div>
            </div>

          </div>
        </div>
      </div>
    
    </>
  )
}

export default SubPage7_3;