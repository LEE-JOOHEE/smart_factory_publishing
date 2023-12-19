import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_11 = ({ children }) => {


  return(
    <>
      {/* 대중소 상생형 스마트공장 tab */}
      {/* 사업안내 > 지원사업 소개 > 대중소 상생형 스마트공장 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">민간이 협업하면 정부가 함께하는 상생형 스마트공장 구축을 추진하여 대‧중소기업 동반성장 및 민간의 자발적 확산체계 마련</div>
        
        <div className="headline mt-50">주관기관/협업기관 모집</div>
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">
          중소․중견기업과 협력하여 스마트공장 구축지원이 가능한 대기업·중견기업·공공기관·민간기관(협업기관과 컨소시엄 가능)
          <p className="mb-0">* 주관기관의 현물출자 인정(주관기관 출연금의 20% 이내)</p>
        </div>
        <div className="dot-text">협업기관은 정부 지원금 위탁운영에 결격사유가 없고 스마트공장 보급·확산 역량을 소유한 공공·민간기관</div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          주관기관(대기업 등)이 중소․중견기업과 협력하여 스마트공장을 구축할 경우, 정부가 구축비용의 일부를 지원
        </div>
        <div className="dot-text">
          주관기관이 타 기관(협업기관)과 컨소시엄을 이루어 참여하며, 협업기관에 한해 중소․중견기업 모집·선정 등에 필요한 운영비 지원
          <p className="mb-0">* 매칭된 정부지원금의 5% 이내 협업기관 운영비로 책정 가능</p>
        </div>

        <div className="headline mt-50">참여기업 모집
          <span className="font-bold-500 text-black">(※ 주관기관 모집 후 별도 공지)</span>
        </div>
        <div className="tit-blue">지원규모 : 216억원</div>
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">국내 중소․중견 제조기업</div>
        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          제조기업의 스마트공장 구축을 위한 솔루션 및 연동설비 지원과 스마트공장 수준향상을 위한 고도화 지원
          <p className="mb-0">* 주관기관이 타 기관(협업기관)과 컨소시엄을 이루어 참여하며, 협업기관에 한해 중소․중견기업 모집·선정 등에 필요한 운영비 지원</p>
        </div>
        <div className="tit-blue mt-30">지원조건</div>
        <div className="dot-text">(유형 1) 주관기관과 중소․중견기업이 총 사업비의 70%를 부담하여 스마트공장구축 시 정부가 30%(최대 1.2억원) 지원</div>
        <div className="dot-text">(유형 2) 기초수준(최대 2,000만원) 스마트공장을 구축할 경우 기업부담 없이 정부와 대기업이 100% 지원(소기업 대상 지원)</div>
        <div className="usr-table-info text-c mt-10 mb-30">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'20%'} />
              <col width={'30%'} />
              <col width={'30%'} />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={2}>구분</th>
                <th>지원기간 및 지원한도</th>
                <th>정부지원금 비중</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2} className="bold">유형1</td>
                <td>기초(동일수준)</td>
                <td>최대 6개월, 0.3억원</td>
                <td>30% 이내</td>
              </tr>
              <tr>
                <td>고도화1</td>
                <td>최대 9개월, 1.2억원</td>
                <td>30% 이내</td>
              </tr>
              <tr>
                <td rowSpan={2} className="bold">유형2<br/>(소기업 대상)</td>
                <td>기초</td>
                <td>최대 6개월, 1천만원</td>
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

export default SubPage2_11;