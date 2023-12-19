import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_1 = ({ children }) => {


  return(
    <>
      {/* 유관사업안내 */}
      {/* 기초 및 고도화 지원 tab */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">국내 현실에 적합한 다양한 형태의 스마트공장 도입 및 고도화 지원을 통한 중소‧중견기업의 제조혁신 지원</div>
        
        <div className="tit-blue mt-30">지원규모 : 3,300개 내외 <span>(신규구축 2,683개, 고도화 617개)</span></div>
        <div className="dot-text">고도화2 사업: 20개 내외</div>
        
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">도입기업과 공급기업이 컨소시엄 구성</div>

        <div className="tit-blue mt-30">신청자격</div>
        <div className="font-16-500 mb-8">신규구축</div>
        <div className="dot-text pb-6">도입기업 : 스마트공장 미 구축기업</div>
        <div className="dot-text pb-6">국내 중소·중견 제조기업 
          <span className="ml-20">*｢독점규제 및 공정거래에 관한 법률｣ 제14조제1항에 따른 상호출자제한기업집단에 속하는 기업(대기업)은 제외</span>
        </div>
        <div className="dot-text">공급기업 : 스마트공장 보급기술 및 역량을 보유한 기업</div>
        <div className="font-16-500 mb-8 mt-10">고도화</div>
        <div className="dot-text pb-6">도입기업 : 스마트공장 기 구축기업</div>
        <div className="dot-text pb-6">국내 중소·중견 제조기업
          <span className="ml-20">*｢독점규제 및 공정거래에 관한 법률｣ 제14조제1항에 따른 상호출자제한기업집단에 속하는 기업(대기업)은 제외</span>
        </div>
        <div className="dot-text">공급기업 : 스마트공장 보급기술 및 역량을 보유한 기업</div>

        <div className="tit-blue mt-30 pb-20">지원내용</div>
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
                <div className="dot-text pb-0">
                  스마트공장 미구축 기업을 대상으로 솔루션 및 연동 설비의 최초구축 지원
                  <p className="mb-0">*제품설계‧생산공정 개선 등을 위해 IoT, 5G, 빅데이터, AR·VR, 클라우드 등 첨단기술을 적용한<br/>
                    스마트공장 솔루션 구축 및 구축에 필요한(솔루션 연동) 자동화장비‧제어기‧센서 등 지원</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="bold">고도화1</td>
              <td>
                <div className="dot-text pb-0">
                  기 구축 스마트공장의 활용도와 보급수준 향상을 위한 기존 시스템의 고도화 및 스마트공장 설비와 연계시스템의 추가 구축·연동
                  <p className="mb-0">
                    *생산공정 및 제조환경변화 등으로 인한 기 구축 시스템의 기능개선 및 필요기능의 추가 도입<br/>
                    *IoT, 5G, 빅데이터, AR·VR, 클라우드 기술 적용 및 실시간 모니터링 범위확대 등을 위한 설비의 추가 도입·시스템 연동<br/>
                    *스마트공장 적용범위 확대를 위한 연계시스템 추가 구축 및 기존 시스템과의 연동
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="bold">고도화2</td>
              <td>
                <div className="dot-text">스마트공장의 활용도와 수준 향상을 위한 기존 시스템의 고도화 및 스마트공장 설비와 연계시스템의 추가 구축·연동 (제조 데이터 수집·저장 인프라 구축 등 포함)</div>
                <div className="dot-text pb-0">
                  제조 데이터 실시간 수집·분석, 설비·공정·시스템의 실시간 연동으로 생산 최적화를 구현할 수 있도록 첨단 기술 도입 및 시스템 구축 지원
                  <p className="mb-0">*IoT, 스마트센서, 로봇·자동화설비, 5G, Big Data, AR·VR, AI, Cloud Computing 등</p>
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
                  <div className="dot-text pb-0">
                    최대 2억원, 총 사업비의 50% 이내 지원
                    <p className="mb-0">*중간 1 이상 구축 기업은 보안솔루션 구축 또는 연동 필수</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bold">고도화2</td>
                <td>
                  <div className="dot-text pb-0">
                    기업당 최대 4억원, 총 사업비의 50% 이내 지원
                    <p className="mb-0">*보안솔루션 구축 또는 연동 필수</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40">지원기간</div>
        <div className="dot-text">최대 6개월 (단, 연장신청을 통해 최대 3개월 연장가능)</div>
        <div className="dot-text">고도화2: 최대 1년</div>


        <div className="headline mt-50">추진체계</div>
        <div className="org-chart-wrap">
          <div className="grid-col-3 justify-center">
            <div className="col-span-1 column1" style={{ marginTop: "33px"}}>
              <div className="line-t-lg side-r"></div>
              <div className="items-2 side-r"><div className="i-inner">지역 추진협의회</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">지방청(지역총괄) 등</div></div>
            </div>
            <div className="col-span-1 column2">
              <div className="items-2 side-l"><div className="i-inner">사업총괄</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">중소벤처기업부</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2 side-r"><div className="i-inner">전담기관</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">스마트제조혁신추진단</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2 side-l"><div className="i-inner">제조혁신센터</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">지역테크노파크</div></div>
              <div className="line-b-lg"></div>
              <div className="items-2"><div className="i-inner">컨소시엄</div></div>
              <div className="line-b-sm"></div>
              <div className="items-1"><div className="i-inner">도입기업·공급기업</div></div>
            </div>
            <div className="col-span-1 column3" style={{ marginTop: "202px"}}>
              <div className="items-4 side-l"><div className="i-inner">운영위원회</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">스마트제조혁신추진단</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">전문감리기관</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">원가계산기관</div></div>
              <div className="line-b-sm-no"></div>
              <div className="items-3 side-l"><div className="i-inner">코디네이터</div></div>
              <div className="line-l-lg"></div>
            </div>
          </div>
        </div>

        <div className="headline mt-50">추진절차</div>
        <div className="tit-blue pb-20">신규구축 일반과제</div>
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
                  <span className="order">3</span>요건검토
                </div>
                제조혁신센터
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">4</span>선정평가(원가계산 포함)
                </div>
                제조혁신센터
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">5</span>협약 및 사업착수
                </div>
                전담기관, 제조혁신센터, 도입·공급기업
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">6</span>중간점검
                </div>
                제조혁신센터
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">7</span>최종점검·감리
                </div>
                제조혁신센터, 전문감리기관
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order">
                  <span className="order">8</span>완료보고
                </div>
                제조혁신센터, 전담기관
              </div>
            </div>
          </div>
        </div>

        <div className="font-16-500 mt-40">*코디네이터 지원 과제 및 고도화 2 사업의 추진절차는 사업 공고문을 참조하시길 바랍니다.</div>
      </div>

    </>
  )
}

export default SubPage2_1;