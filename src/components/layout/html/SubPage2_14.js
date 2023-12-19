import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_14 = ({ children }) => {


  return(
    <>
      {/* 투자연계형 스마트공장 tab */}
      {/* 사업안내 > 지원사업 소개 > 투자연계형 스마트공장 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">민간 투자유치를 통해 인공지능, 제조데이터 분석 등 공급기술 역량이검증된 유망 공급기업의 스마트공장 구축사업 참여 및 사업화 지원</div>

        <div className="tit-blue mt-30">지원규모 : 36억원, 2개내외 운영사 선정(공급기업 3개사씩 추천권 부여)</div>
        <div className="dot-text">운영사 선정 후 그 운영기관이 공급기업을 추천</div>
        <div className="dot-text">2년 주기로 실적을 평가하여 계속 지정 여부를 결정하며, 매년 운영성과 점검을 통해 공급기업 추천 T/O 재배분</div>
        
        <div className="tit-blue mt-30">지원대상 : 국내 중소․중견 제조기업 및 투자유치(예정) 공급기업</div>
        <div className="dot-text">
          운영사 투자를 유치(투자확약 포함)한 기업으로 인공지능 알고리즘, 제조데이터 분석 및 비전 인식 등 스마트 제조혁신 분야 중점 지원
        </div>
        <div className="dot-text">
          공급기업은 VC 등으로부터 공고일 기준 최근 3년 이내, 5억원 이상 투자유치 필요(공고일 기준 1년 이내 투자 예정도 가능. 단, 기간 내 투자유치 실패 시 협약 해약)
        </div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          운영사가 추천한 공급기업에 대해 스마트공장 구축 및 고도화 사업에 우선적으로 참여할 수 있도록 최대 3개 과제(국비 최대 6억원)를 지원
        </div>

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

export default SubPage2_14;