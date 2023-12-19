import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_7 = ({ children }) => {


  return(
    <>
      {/* 유관사업안내 */}
      {/* 스마트화 역량강화 tab */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">전문 컨설팅기관의 기업진단 및 자문을 통해 스마트공장 구축 생산성 향상 등 스마트공장 구축기업의 성과 제고</div>
        
        <div className="tit-blue mt-30">지원규모</div>
        <div className="dot-text">600개사(30억원) 내외</div>
        
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">스마트공장 구축 중 기업 및 구축 예정·완료 기업</div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text pb-6">전문컨설팅 기관*의 컨설팅 방법론 및 도구를 통해 스마트공장 구축기업의 현장진단 및 구축과정 중 현장애로 해결 지원</div>
        <div className="dot-text pb-6">기본 및 심화 컨설팅(600개사) : 기업진단을 통한 스마트공장 구축 전략 수립 및 운영 등에 필요한 전문가 자문·상담 및 지도</div>
        <div className="dot-text">
          원포인트 멘토링(시범운영) : 스마트공장 구축 및 운영관련 애로사항 해소를 위해 1~2일간 멘토링식 컨설팅 지원         
          <span className="ml-20">*애로사항 접수, 현장확인 및 솔루션제공 1일</span>
        </div>

        <div className="tit-blue mt-30">지원조건</div>
        <div className="dot-text">컨설팅 타입에 따라 차등 지원</div>

        <div className="tit-blue mt-30">지원기간</div>
        <div className="dot-text pb-20">최대 4개월</div>
        <div className="usr-table-info text-c">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'30%'} />
              <col width={'30%'} />
              <col width={'20%'} />
            </colgroup>
            <thead>
              <tr>
                <th rowSpan={2}>구분</th>
                <th colSpan={2} style={{borderBottom: "1px solid #DDDDDD"}}>컨설팅 지원</th>
                <th rowSpan={2}>원포인트 멘토링 (시범운영)</th>
              </tr>
              <tr>
                <th>기본 컨설팅</th>
                <th style={{borderRight: "1px solid #DDDDDD"}}>심화컨설팅</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">총 비용</td>
                <td>500만원</td>
                <td>250만원</td>
                <td>2550만원</td>
              </tr>
              <tr>
                <td className="bold">정부지원금</td>
                <td>1,000만원</td>
                <td>500만원</td>
                <td>250만원</td>
              </tr>
              <tr>
                <td className="bold">지자체 + 민간</td>
                <td>100만원</td>
                <td>100만원</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="headline mt-50">추진체계</div>
        <div className="org-chart-wrap">
          <div className="grid-col-3 justify-center responsive2">
            <div className="col-span-1 column6"></div>
            <div className="col-span-1 column4">
              <div className="items-2"><div className="i-inner">시업총괄</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">중소벤처기업부</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2"><div className="i-inner">제조혁신센터</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1 side-r"><div className="i-inner">지역 테크노파크</div></div>
              <div className="line-b-lg"></div>
              <div className="items-1"><div className="i-inner">지원기업</div></div>
            </div>
            <div className="col-span-1" style={{ marginTop: "202px"}}>
              <div className="items-3 side-l"><div className="i-inner">컨설팅기관</div></div>
            </div>
          </div>
        </div>

        <div className="tit-blue mt-40">총괄기관</div>
        <div className="dot-text">사업총괄 및 기본계획 수립, 사업공고, 예산집행 등</div>

        <div className="tit-blue mt-30">전담기관</div>
        <div className="dot-text">
          컨설팅기관 Pool 운영‧관리, 수행기관 관리 등         
          <span className="ml-20">*컨설팅기관 : 매칭과제에 대한 컨설팅 계획수립, 컨설팅 수행 및 결과 보고서 제출 등</span>
        </div>

        <div className="tit-blue mt-30">제조혁신센터</div>
        <div className="dot-text pb-6">지자체와 협력을 통해 컨설팅 지원비용 확보, 지원기업 선정, 협약체결, 만족도조사, 최종판정 추진 등 컨설팅사업 운영</div>
        <div className="dot-text">참여 지자체 : 지방비 보조, 사업홍보 협조 등</div>

        <div className="headline mt-50">추진절차</div>
        <div className="tit-blue pb-20">컨설팅기관 모집</div>
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
                  <span className="order">4</span>컨설팅기관 등록
                </div>
                스마트공장 사업관리시스템
              </div>
            </div>
          </div>
        </div>

        <div className="tit-blue pb-20 mt-40">참여기업 모집 및 사업 추진</div>
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
                  <span className="order">2</span>신청접수(수시)
                </div>
                제조혁신센터
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">3</span>컨설팅기관 매칭
                </div>
                컨설팅기관, 신청기업
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">4</span>선정
                </div>
                제조혁신센터
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">5</span>협약체결
                </div>
                컨설팅기관, 신청기업, 제조혁신센터, 전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">6</span>완료보고
                </div>
                컨설팅기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">7</span>최종평가
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">8</span>사업완료 및 정산
                </div>
                전담기관
              </div>
            </div>
          </div>
        </div>

        



        {/* <div className="tit-blue"></div>
        <div className="dot-text"></div> */}

      </div>

    </>
  )
}

export default SubPage2_7;