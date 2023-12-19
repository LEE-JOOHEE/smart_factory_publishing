import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_16 = ({ children }) => {


  return(
    <>
      {/* 공급망 연계형 스마트공장 tab */}
      {/* 사업안내 > 지원사업 소개 > 공급망 연계형 스마트공장 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">
          성장성과 일자리 창출 가능성 등이 높은 지역선도기업 등을 중심으로 가치사슬 기업간 데이터·네트워크로 연결하는 공급망(SCM) 연계형 스마트공장 보급을 통해 디지털 제조혁신 생태계 조성
        </div>
        <div className="dot-text">
          대표기업(지역선도기업, 지역스타기업 등)을 중심으로 전후방 가치사슬이 밀접하게 연계되어 있는 참여기업 간 협업구조로 구성
          <p className="mb-0">* (예시1) 소재·부품 → 모듈 → 완성품 등을 분담하여 생산하는 제조기업 간 연계</p>
          <p className="mb-0">* (예시2) 연구개발 → 설계 → 구매(조달) → 제조 → 유통(물류) → 판매 → 서비스(A/S) 등 제조 전반의 기업 간 연계</p>
        </div>
        
        <div className="tit-blue mt-30">지원규모 : 100억원</div>
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">대표기업, 참여기업, 기획기관으로 구성된 컨소시엄</div>
        
        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">(대표‧참여기업) 협업체 중심의 공동·협업 스마트시스템 구축 및 개별 스마트공장 보급 지원</div>
        <div className="dot-text">
          스마트공장 구축비를 ’개별기업 → 기업군 묶음의 일괄지원*’ 방식으로 전환, 구축비 잔액을 활용하여 공동·협업 스마트시스템 지원
          <p className="mb-0">* (예시) 기업당 2억원 한도(고도화1 기준), 개별 스마트공장 보급(1.4억원), 공동⸱협업시스템 (0.6억원) → 5개 기업 턴키 지원시, (개별보급) 7억원(1.4억원 x 5개) + (공동⸱협업) 3억원(0.6억원 x 5개)</p>
        </div>
        <div className="dot-text">
          (기획기관) 전략수립 및 새로운 비즈니스 발굴 등 클러스터 관리 등에 필요한 운영비 지원
          <p className="mb-0">* 선정된 클러스터의 총 사업비 5% 이내에서 운영비 책정 가능</p>
        </div>

        <div className="tit-blue mt-30">지원조건</div>
        <div className="usr-table-info text-c mb-30">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'35%'} />
              <col width={'15%'} />
              <col width={'25%'} />
              <col width={'25%'} />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th colSpan={2}>지원기간 및 지원한도</th>
                <th>정부지원금 비중</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>개별 스마트공장 구축 + 공동·협업스마트시스템 구축</td>
                <td>고도화1(동일수준)	</td>
                <td>최대 6개월, 0.5억원</td>
                <td>50% 이내</td>
              </tr>
              <tr>
                <td>고도화1</td>
                <td>최대 9개월, 2억원</td>
                <td>50% 이내</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dot-text">
          ‘동일수준’은 수준향상 없이(중간1→중간1, 중간2→중간2) 재신청하는 경우. 단, 목표수준을 초과 달성했던 기업
          <p className="mb-0">(기초사업 완료 후 구축시스템스마트화수준이 중간1이상으로 측정된 기업)의 경우 1회에 한해 목표수준에 맞는 지원금 지원</p>
        </div>
        <div className="dot-text">
          협약기간은 구축완료 후 집중AS기간(6개월) 포함하여 체결
        </div>
        <div className="dot-text">
          위 금액은 정부출연금으로, 중진공의 정책자금과 연계해 추가적으로 융자지원 가능
        </div>
      </div>

    </>
  )
}

export default SubPage2_16;