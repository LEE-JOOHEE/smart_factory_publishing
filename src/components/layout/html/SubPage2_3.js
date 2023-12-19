import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_3 = ({ children }) => {


  return(
    <>
      {/* 유관사업안내 */}
      {/* 업종별 스마트공장 구축지원 사업 tab */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">유사 제조공정·업종 등을 가진 중소·중견기업들이 스마트공장 공통 솔루션을 구축하여 기업간 연계성을 강화</div>
        
        <div className="tit-blue mt-30">지원규모</div>
        <div className="dot-text">운영기관 모집규모에 따라 유동적으로 배정</div>
        
        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text pb-6">제조공정(업종)별 특화 솔루션 및 솔루션 연동 자동화장비·제어기·센서 등 구축 지원</div>
        <div className="dot-text mb-20">운영기관은 중소․중견기업 모집·선정 등에 필요한 운영비 지원</div>
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
                <td className="bold">식품</td>
                <td>
                  <div className="dot-text pb-0">
                    식약처 시스템 연계 등 표준시스템 개발 및 보급
                    <p className="mb-0">EX) 식품이력추적관리시스템, 온습도관리시스템, HACCP 위생관리, 자동화 시스템 등</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bold">전자부품</td>
                <td>
                  <div className="dot-text pb-0">
                    휴대전화 부품가공 등 재해유발공정 진단․개선 및 유해 화학물질 모니터링
                    <p className="mb-0">EX) 작업자 위험노출 최소화를 위한 공정진단 시스템 등</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bold">자동차 등 기계부품</td>
                <td>
                  <div className="dot-text pb-0">
                    부품 품질 및 성능 향상, 미래 자동차 부품 등 신제품·신공정 개발을 위한 가상성능시험, 가상공정배치, 가상생산 등 사이버물리생산시스템 도입 등
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bold">전자부품</td>
                <td>
                  <div className="dot-text pb-0">
                    기타업종 및 공통공정에 시스템 개선이 필요한 경우
                    <p className="mb-0">EX) 섬유, 조선기자재, 도금, 인쇄, 열처리, 표면처리, 소성가공, 용접접합 등</p>
                  </div>
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
              <tr>
                <td className="bold">고도화2</td>
                <td>
                  <div className="dot-text pb-0">최대 4억원, 총 사업비의 50% 이내 지원</div>
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
              <div className="items-2"><div className="i-inner">전담기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">스마트제조혁신추진단</div></div>
              <div className="line-b-xl"></div>
              <div className="items-2 side-r"><div className="i-inner">주관기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1 h-auto"><div className="i-inner">도입기업 또는<br/>컨소시엄(도입·공급기업)</div></div>
            </div>
            <div className="col-span-1 column5" style={{ marginTop: "202px"}}>
              <div className="items-3 side-l"><div className="i-inner">감리기관</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">원가계산기관</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">스마트 평가위원단</div></div>
              <div className="line-l-lg"></div>
            </div>
          </div>
        </div>

        <div className="tit-blue mt-40">전담기관</div>
        <div className="dot-text">주관기관 모집·선정, 사업관리 및 운영, 구축지원, 사업완료 점검, 예산 집행 등의 업무수행</div>

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
                  <span className="order">3</span>운영기관 선정
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">4</span>협약체결
                </div>
                전담기관·대기업 등(협업기관)
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
                운영기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">7</span>사업추진
                </div>
                운영기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">8</span>사업완료·정산 보고 및 평가
                </div>
                운영기관, 전담기관
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SubPage2_3;