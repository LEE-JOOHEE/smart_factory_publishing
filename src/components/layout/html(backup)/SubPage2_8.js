import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_8 = ({ children }) => {


  return(
    <>
      {/* 유관사업안내 */}
      {/* 클라우드기반 솔루션개발 tab */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">중소기업의 경영·생산현장에 클라우드 기반으로 저비용·고효율 정보 시스템 구축을 지원하여 중소기업 정보화 경영 저변 확산</div>
        
        <div className="tit-blue mt-30">21년 지원규모</div>
        <div className="dot-text">신규 솔루션 개발 5개</div>
        
        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          (공동활용 솔루션 과제) 클라우드 기반으로 다수의 중소기업이 공동활용 가능한 업무용 솔루션 구축 지원
          <p className="mb-0">*예시)  ① 회원사 공동 AS관리, 자재관리, 수발주, 납품, 유통 등 공동활용 업무</p>
          <p className="mb-0">*예시)  ② 정부(지자체, 공공기관)와 연계한 신고, 승인, 배정 업무</p>
          <p className="mb-0">*예시)  ③ 자원관리, 제품개발, 공급관리 등 수기로 진행되던 업무의 정보화</p>
        </div>

        <div className="tit-blue mt-30">지원조건</div>
        <div className="dot-text pb-20">총 사업비의 70%이내에서 최대 1.4억원까지 6개월 간 지원</div>
        <div className="usr-table-info text-c">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'20%'} />
              <col width={'40%'} />
              <col width={'20%'} />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>정부지원한도</th>
                <th>민간부담금</th>
                <th>공모유형</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">공동활용 솔루션 과제</td>
                <td>최대 1.4억원</td>
                <td>총 사업비의 30% 이상 도입기업 현금 부담</td>
                <td>자유공모</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dot-text mt-30 mb-10">
          (공동활용 솔루션 과제) 클라우드 기반으로 다수의 중소기업이 공동활용 가능한 업무용 솔루션 구축 지원
          <p className="mb-0">*예시)  ① 회원사 공동 AS관리, 자재관리, 수발주, 납품, 유통 등 공동활용 업무</p>
          <p className="mb-0">*예시)  ② 정부(지자체, 공공기관)와 연계한 신고, 승인, 배정 업무</p>
          <p className="mb-0">*예시)  ③ 자원관리, 제품개발, 공급관리 등 수기로 진행되던 업무의 정보화</p>
        </div>
        <div className="usr-table-info text-c">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'20%'} />
              <col width={'40%'} />
              <col width={'20%'} />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th colSpan={2}>경영혁신플랫폼 클라우드 서비스 제공</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">IaaS</td>
                <td>서버 및 스토리지 등</td>
                <td>솔루션 운영을 위한 클라우드 컴퓨팅 환경</td>
                <td rowSpan={2}>최대 2년 지원</td>
              </tr>
              <tr>
                <td className="bold">PaaS</td>
                <td>OS</td>
                <td style={{borderRight: "1px solid #DDDDDD"}}>Linux 계열(CentOS, Ubuntu 등)</td>
              </tr>
              <tr>
                <td className="bold">SaaS</td>
                <td>공동활용솔루션</td>
                <td>총사업비의 최대 1.4억원 지원</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40">지원대상</div>
        <div className="dot-text pb-20">
          중소기업을 회원사로 하는 협·단체 또는 중소기업
          <p className="mb-0">*협·단체 : 중소기업을 회원사로 하는 협동조합(전국·지방·사업), 협동조합연합회(업종·지역), 업종별 협회 및 단체</p>
          <p className="mb-0">*「중소기업기본법」 제2조에 따른 중소기업</p>
        </div>
        <div className="usr-table-info">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'80%'} />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>지원내용 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">도입기업(주관기관)</td>
                <td>중소기업을 회원사로 하는 협·단체 또는 공동활용솔루션을 이용 가능한 다수의 중소기업(4개사 이상)</td>
              </tr>
              <tr>
                <td className="bold">공급기업</td>
                <td>클라우드 기반 솔루션 보급 기술 및 역량을 보유한 IT기업</td>
              </tr>
              <tr>
                <td className="bold">컨소시엄 구성</td>
                <td>도입기업, 공급기업 컨소시엄 구성 필수 (공급기업은 1개사만 참여 가능)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="headline mt-50">추진체계</div>
        <div className="org-chart-wrap">
          <div className="grid-col-3 justify-center responsive2">
            <div className="col-span-1 column6"></div>
            <div className="col-span-1 column10">
              <div className="items-2"><div className="i-inner">시업총괄</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">중소벤처기업부</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2"><div className="i-inner">전담기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1 side-r"><div className="i-inner">스마트제조혁신추진단</div></div>
              <div className="line-b-xl"></div>
              <div className="items-1"><div className="i-inner">컨소시엄</div></div>
            </div>
            <div className="col-span-1 column10" style={{ marginTop: "202px"}}>
              <div className="items-2"><div className="i-inner">경영혁신플랫폼</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-1 side-l"><div className="i-inner">운영센터</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-1 side-l"><div className="i-inner">상담센터</div></div>
              <div className="line-l-lg"></div>
            </div>
          </div>
        </div>

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
                컨소시엄
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">3</span>현장조사
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">4</span>심사평가
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">5</span>과제 선정 및 원가계산
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">6</span>협약체결
                </div>
                컨소시엄 - 전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">7</span>사업관리 및 플랫폼 교육
                </div>
                전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">8</span>과제수행
                </div>
                컨소시엄
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">9</span>감리진행
                </div>
                감리기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">10</span>완료보고
                </div>
                컨소시엄
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">11</span>운영관리 협약
                </div>
                컨소시엄 - 전담기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">12</span>서비스오픈 및 운영관리
                </div>
                컨소시엄 - 전담기관
              </div>
            </div>
          </div>
        </div>

        <div className="font-16-500 text-blue mt-40">※ 클라우드기반 솔루션개발은 「it.smplatform.go.kr」에서 신청·접수 가능</div>



        {/* <div className="tit-blue"></div>
        <div className="dot-text"></div> */}

      </div>

    </>
  )
}

export default SubPage2_8;