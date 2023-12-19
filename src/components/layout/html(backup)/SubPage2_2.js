import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_2 = ({ children }) => {


  return(
    <>
      {/* 유관사업안내 */}
      {/* 대중소상생형 스마트공장 지원 tab */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">민간이 협업하면 정부가 후원하는 상생형 스마트공장 구축을 추진하여 대‧중소기업 동반성장 및 민간의 자발적 확산체계 마련</div>
        
        <div className="tit-blue mt-30">지원규모 : 825개 내외 <span>(신규구축 671개, 고도화 154개)</span></div>
        
        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          주관기관(대기업 등)이 중소․중견기업과 협력하여 스마트공장을 구축*할 경우, 정부가 구축비용의 일부를 지원
          <p className="mb-0">*제품설계‧생산 공정 개선 등을 위한 IoT 등 첨단기술이 적용된 스마트공장 솔루션 구축 및 솔루션 연동 자동화장비‧제어기‧센서 등</p>
        </div>
        <div className="dot-text">주관기관이 타 기관(협업기관)과 컨소시엄을 이루어 참여할 경우, 협업기관에 한해 중소․중견기업 모집·선정 등 운영에 소요되는 사업비 지원</div>

        <div className="tit-blue mt-30">지원조건</div>
        <div className="dot-text">
          유형1)  주관기관과 중소·중견기업이 총 사업비의70%를 부담하면 정부가 30% 지원
          <span className="ml-20">*주관기관은 총 사업비의 30% 이상을 부담하여야 함</span>
        </div>
        <div className="dot-text mb-20">
          유형2)  중소기업이 레벨1~2 수준(2천만원 내외) 스마트공장을 구축·확장할 경우 기업 부담 없이 정부와 대기업이 100% 지원
          <span className="ml-20">*지원 : 정부 50%(최대 1천만원), 대기업 50%</span>
        </div>
        <div className="usr-table-info">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'40%'} />
              <col width={'20%'} />
              <col width={'20%'} />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>정부</th>
                <th>대기업</th>
                <th>중소.중견기업</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">총 구축비용</td>
                <td className="text-c">30%
                  <span className="ml-20">(기초: 최대 0.42억원), (고도화1: 최대 1.2억원)</span>
                </td>
                <td className="text-c">70%</td>
                <td className="text-c">70%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40">지원조건</div>
        <div className="dot-text">9개월 내외</div>

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
              <div className="items-2 side-r"><div className="i-inner">주관기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">대기업 등</div></div>
            </div>
            <div className="col-span-1 column5" style={{ marginTop: "202px"}}>
              <div className="items-3 side-l"><div className="i-inner">감리기관</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">원가계산기관</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">스마트 평가위원단</div></div>

              <div className="items-2 mt-30 side-l"><div className="i-inner">협업기관(컨소시엄 시)</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-1"><div className="i-inner">비영리단체</div></div>
              <div className="line-l-lg"></div>
            </div>
          </div>
        </div>

        <div className="tit-blue mt-40">전담기관</div>
        <div className="dot-text">주관기관 모집·선정, 사업관리 및 운영, 구축지원, 사업완료 점검, 예산 집행 등의 업무수행</div>

        <div className="tit-blue mt-30">주관기관</div>
        <div className="dot-text">지원금 출연, 사업운영, 중소․중견기업 추천·선정, 전문인력 지원, 추진점검, 사업비 집행 관리 등의 업무수행</div>

        <div className="tit-blue mt-30">협업기관</div>
        <div className="dot-text">정부-대기업 지원금 위탁운영, 중소․중견기업 추천·선정, 사업비 집행, 구축관리 등의 업무수행</div>

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
                  <span className="order">3</span>주관기관 선정
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
                대기업 등(협업기관)
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">7</span>사업추진
                </div>
                대기업(협업기관)
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">8</span>사업완료·정산 보고 및 평가
                </div>
                대기업(협업기관),전담기관
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SubPage2_2;