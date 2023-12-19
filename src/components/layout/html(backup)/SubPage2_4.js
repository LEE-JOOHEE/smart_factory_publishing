import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_4 = ({ children }) => {


  return(
    <>
      {/* 유관사업안내 */}
      {/* 데이터 분석 기반 스마트공장 구축지원 사업 tab */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">표준 기반의 양질의 데이터 수집 장치와 데이터 분석 솔루션 도입을 통해 DNA(Data, Network, AI) 기반의 제조혁신 촉진</div>
        
        <div className="tit-blue mt-30">지원규모</div>
        <div className="dot-text">수행기관 모집규모에 따라 유동적으로 배정</div>
        
        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text pb-6">AIㆍ빅데이터 등 중소기업 제조 데이터 특화 분석 솔루션 도입 및 자동화 장비‧제어기‧센서 등 구축 지원</div>
        <div className="dot-text mb-20">수행기관은 중소ㆍ중견기업 모집ㆍ선정 등에 필요한 운영비 지원</div>
        <div className="usr-table-info">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'80%'} />
            </colgroup>
            <thead>
              <tr>
                <th>분야</th>
                <th>지원내용 (예시)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">공정 가공 분석</td>
                <td>
                  <div className="dot-text pb-0">제조설비 가공 조건 분석</div>
                  <div className="dot-text pb-0">제조 단계의 4M* 조건 분석
                    <span className="ml-20">*인적자원(MAN), 재료(Material), 설비(Machine), 방법(Method)</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bold">공장 운영 분석</td>
                <td>
                  <div className="dot-text pb-0">생산‧품질‧설치 운영 분석</div>
                  <div className="dot-text pb-0">물류‧재고 운영 분석</div>
                  <div className="dot-text pb-0">안전‧환경‧에너지 운영 분석</div>
                  <div className="dot-text pb-0">공장운영비용 분석</div>
                </td>
              </tr>
              <tr>
                <td className="bold">제품/고객 분석</td>
                <td>
                  <div className="dot-text pb-0">제품개발 분석</div>
                  <div className="dot-text pb-0">기술/실험 분석</div>
                  <div className="dot-text pb-0">제조 서비스 분석</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40 pb-20">지원조건</div>
        <div className="usr-table-info">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'80%'} />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>지원내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">기초</td>
                <td>
                  <div className="dot-text pb-0">최대 0.7억원, 총 사업비의 50% 이내 지원</div>
                </td>
              </tr>
              <tr>
                <td className="bold">고도화1</td>
                <td>
                  <div className="dot-text pb-0">최대 2억원, 총 사업비의 50% 이내 지원</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40">지원기간</div>
        <div className="dot-text">최대 9개월 (단, 연장신청을 통해 최대 3개월 연장가능)</div>

        <div className="headline mt-50">추진체계</div>
        <div className="org-chart-wrap">
          <div className="grid-col-3 justify-center responsive">
            <div className="col-span-1 column6"></div>
            <div className="col-span-1 column4">
              <div className="items-2"><div className="i-inner">총괄기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">중소벤처기업부</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2 side-r"><div className="i-inner">전담기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">스마트제조혁신추진단</div></div>
              <div className="line-b-xl"></div>
              <div className="items-2 side-r"><div className="i-inner">수행기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1 h-auto"><div className="i-inner">공공·민간단체<br/>(비영리단체)</div></div>
            </div>
            <div className="col-span-1 column5" style={{ marginTop: "202px"}}>
              <div className="items-3 side-l"><div className="i-inner">감리기관</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">원가계산기관</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">스마트 평가위원단</div></div>

              <div className="items-2 mt-30 side-l"><div className="i-inner">컨소시엄</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-1"><div className="i-inner">도입기업·공급기업</div></div>
              <div className="line-l-lg"></div>
            </div>
          </div>
        </div>

        <div className="tit-blue mt-40">전담기관</div>
        <div className="dot-text">수행기관 모집·선정, 사업관리 및 운영, 구축지원, 사업완료 점검, 예산 집행 등의 업무수행</div>

        <div className="tit-blue mt-30">주관기관</div>
        <div className="dot-text">사업운영, 정부 지원금 위탁운영 중소․중견기업 선정, 전문인력 지원, 추진점검, 사업비 집행 관리, 구축관리 등의 업무수행</div>

        <div className="headline mt-50">추진절차</div>
        <div className="procedure-wrap">
          <div className="grid-col-12 gap-col-38 gap-row-30">
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">1</span>사업공고
                </div>
                중소벤처기업부
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">2</span>신청접수
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">3</span>수행기관 선정
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">4</span>협약체결
                </div>
                전담기관·수행기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">5</span>정부지원금 교부
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">6</span>지원기업 모집·선정
                </div>
                수행기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">7</span>사업추진
                </div>
                수행기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">8</span>사업완료·정산 보고 및 평가
                </div>
                수행기관, 전담기관
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SubPage2_4;