import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_12 = ({ children }) => {


  return(
    <>
      {/* 부처협업형 스마트공장 tab */}
      {/* 사업안내 > 지원사업 소개 > 부처협업형 스마트공장 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">관계부처와 협업을 통해 국가 전략산업 육성 또는 산업안전 등 현안해결과 연계하여 스마트공장 구축을 지원하여 사업의 전략성 강화</div>
        <div className="dot-text">중기부는 스마트공장 구축을 지원하고, 해당부처는 R&Dㆍ인증·판로·컨설팅 등 기업지원서비스를 추가로 지원</div>
        
        <div className="tit-blue mt-30">지원분야</div>
        <div className="dot-text">
          국가 전략산업 육성 또는 산업안전 등 국민이 체감할 수 있는 분야
          <p className="mb-0">* 구체적인 분야는 상세 사업공고(‘23.2)를 통해 안내할 계획</p>
        </div>

        <div className="tit-blue mt-30">지원대상</div>
        <div className="dot-text">해당 지원분야의 중소ㆍ중견기업</div>

        <div className="tit-blue mt-30">지원절차</div>
        <div className="dot-text">
          (1단계) 사업 운영기관 추천(협업부처) 및 선정(중기부) → (2단계) 운영기관이 지원기업 선정 → (3단계) 스마트공장(중기부) 및 기업지원서비스(협업부처)를 패키지 지원
          <p className="mb-0">* 운영기관은 매칭된 정부지원금의 5% 이내를 운영비로 책정 가능</p>
          <p className="mb-0">* 정부지원금 위탁운영에 결격사유가 없는 공공·민간기관이며, 협업부처의 협의를 거쳐 R&Dㆍ인증·판로·컨설팅 등 기업지원서비스 제공이 가능한 기관</p>
        </div>

        <div className="tit-blue mt-30">지원규모 : 70억원</div>

        <div className="tit-blue mt-20">지원조건</div>
        <div className="usr-table-info text-c mb-30">
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
                <td className="bold">고도화1(동일수준)</td>
                <td>최대 6개월, 0.5억원</td>
                <td>50% 이내</td>
              </tr>
              <tr>
                <td className="bold">고도화1</td>
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

export default SubPage2_12;