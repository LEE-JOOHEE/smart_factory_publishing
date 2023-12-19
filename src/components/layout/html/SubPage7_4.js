import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";

const SubPage7_4 = ({ children }) => {

  return(
    <>
      {/* 스마트공장소개 */}
      {/* 홍보관 > 노동환경개선 tab */}
      
      <div class="sub-tab-cont-wrap">
        <div class="headline">노사파트너십 프로그램 지원 사업</div>
        <div class="org-chart-wrap-bdr">협력적 노사관계 확산, 일터혁신 등을 도모하기 위한 ‘노사파트너십프로그램(노사 공동 수행)’ 소요 비용 일부를 지원합니다.</div>

        <div class="tit-blue mt-20">지원내용</div>
        <div class="dot-text">단위 사업장 3천만원, 단체 사업장 4천만원 한도로 지원&nbsp;&nbsp;&nbsp;*총 프로그램 예산액 일부(10% / 대기업·공공 30% 이상) 자체부담</div>

        <div class="tit-blue mt-40">지원대상</div>
        <div class="dot-text">신청자격 제외사유*에 해당되지 않는 사업장(단체 포함) &nbsp;&nbsp;&nbsp;*지원금 목적 외 사용 또는 3년 연속 지원 이후 1년 미경과</div>

        <div class="tit-blue mt-40">지원분야(프로그램 중 2가지 이상 필수 선택)</div>
        <div class="usr-table-info mt-10">
          <table key="" summary="테이블정보">
            <colgroup>
              <col width="40%" />
              <col width="60%" />
            </colgroup>
            <thead>
              <tr>
                <th>분야</th>
                <th>필수 프로그램 세부내용(예시)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. 공생발전 프로그램</td>
                <td>
                  <div>1-1 대·중소기업 공생발전 프로그램</div>
                </td>
              </tr>
              <tr>
                <td>2. 정규직·비정규직 협력증진</td>
                <td>
                  <div class="pb-10">2-1 정규직·비정규직 양극화 완화 프로그램</div>
                  <div>2-2 비정규직·파견·사내 하도급 근로자의 복리후생 증진 프로그램</div>
                </td>
              </tr>
              <tr>
                <td>3. (고용노동분야) 정책적·사회적 이슈 프로그램</td>
                <td>
                  <div class="pb-10">3-1 상생협력의 노사관계 구축</div>
                  <div class="pb-10">3-2 장시간 근로개선 및 정년연장 등 함께 일하기</div>
                  <div>3-3 합리적 임금체계 개편 프로그램</div>
                </td>
              </tr>
              <tr>
                <td>4. 노사의 사회적 책임 실천 프로그램</td>
                <td>
                  <div>4-1 비정규직·파견·하도급 근로자 등 취약계층 및 지역 내 사회적약자 배려 등</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="tit-blue mt-40">신청</div>
        <div class="dot-text">노사발전재단 www.nosa.or.kr</div>

        <div class="tit-blue mt-40">문의</div>
        <div class="dot-text">노사발전재단 : 02-6021-1058~62</div>

        <div class="headline mt-50">일터혁신 컨설팅 지원 사업</div>
        <div class="org-chart-wrap-bdr">스마트공장의 생산성 및 근로자의 삶의 질 향상을 위하여 맞춤형 전문컨설팅을 지원합니다.</div>

        <div class="tit-blue mt-40">지원내용</div>
        <div class="dot-text">인사관리시스템 개선 등 사업장 맞춤형 컨설팅을 무료*지원&nbsp;&nbsp;&nbsp;*근로자수 1,000명 이상 사업장은 비용 일부(30%) 부담</div>

        <div class="tit-blue mt-40">(컨설팅 분야) 최대 3개 영역 지원</div>
        <div class="usr-table-info mt-10">
          <table key="" summary="테이블정보">
            <colgroup>
              <col width="15%" />
              <col width="20%" />
              <col width="65%" />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>영역</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="9" class="bold bg">컨설팅 분야</td>
                <td class="pl-40">
                  <div>임금체계개선</div>
                </td>
                <td class="pl-40">
                  <div>직무·능력·역할 중심의 임금체계 개선 등 합리적인 임금체계 개선</div>
                </td>
              </tr>
              <tr>
                <td class="pl-40">
                  <div>평가체계개선</div>
                </td>
                <td class="pl-40">
                  <div>고용, 평가, 승징, 배치전환 등을 위해 공정하고 합리적인 평가체계를 구축하여 인적자원관리시스템 구축 및 내부 공정성 확보</div>
                </td>
              </tr>
              <tr>
                <td class="pl-40">
                  <div>평생학습체계구축</div>
                </td>
                <td class="pl-40">
                  <div>경영전략(비전, 목표, 핵심가치 등)에 따른 교육체계 수립, 인재 확보 및 지속 가능한 경영발전 구현</div>
                </td>
              </tr>
              <tr>
                <td class="pl-40">
                  <div>노사파트너십체계구축</div>
                </td>
                <td class="pl-40">
                  <div>노사관계 전략 수립, 상생적 파트너쉽 기반 구축 및 운영 프로그램 설계 등을 통한 노사상생의 변화 추구</div>
                </td>
              </tr>
              <tr>
                <td class="pl-40">
                  <div>작업조직/작업환경개선</div>
                </td>
                <td class="pl-40">
                  <div>직무수행자의 역할과 자율 확대, 과업 통합, 참여 확대 등을 통한 생산주체로서의 근로자 현장 책임 경영 구현</div>
                </td>
              </tr>
              <tr>
                <td class="pl-40">
                  <div>장시간근로개선</div>
                </td>
                <td class="pl-40">
                  <div>교대제, 유연근무제 등 사업장 여건에 맞는 근로시간 단축 방안 마련</div>
                </td>
              </tr>
              <tr>
                <td class="pl-40">
                  <div>고용문화개선</div>
                </td>
                <td class="pl-40">
                  <div>조직문화 진단을 통한 남녀 모두 일하기 좋은 고용 문화 개선 지원</div>
                </td>
              </tr>
              <tr>
                <td class="pl-40">
                  <div>청년고용안정체계구축</div>
                </td>
                <td class="pl-40">
                  <div>장년근로자의 고용안정을 위한 인사관리제도 개선</div>
                </td>
              </tr>
              <tr>
                <td class="pl-40">
                  <div>안전일터조성(신규)</div>
                </td>
                <td class="pl-40">
                  <div>기업의 작업환경, 보건, 안전실태에 대한 점검 및 안전대응 역량 강화지원</div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <div class="tit-blue mt-40">지원대상</div>
        <div class="dot-text">고용보험에 가입하고 보험료를 체납하지 않은 사업장(스마트공장 선정우대)</div>

        <div class="tit-blue mt-40">지원절차</div>
        <div class="dot-text">노사발전재단 홈페이지에서 온라인 신청 및 스마트공장 구축 및 고도화 사업 신청 시 일터혁신 컨설팅 지원사업 희망 여부 체크</div>
        <div class="dot-text">(컨설팅 수행기관) 13개 전문 컨설팅 기관에서 수행</div>

        <div class="usr-table-info mt-30" style={{ borderWidth: "1px"}}>
          <table key="" summary="테이블정보">
            <colgroup>
              <col width="20%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <tbody>
              <tr>
                <td rowspan="5" class="bold bg">수행기관</td>
                <td>노사발전재단</td>
                <td>미래노사상생지원협회</td>
                <td>씨엔피컨설팅</td>
              </tr>
              <tr>
                <td>아이엔제이컨설팅</td>
                <td>에이치피씨컨설팅</td>
                <td>에프엠어오시에이츠-호인사노무법인(컨소시엄)</td>
              </tr>
              <tr>
                <td>엑스퍼트컨셀팅-안전보건진흥원 (컨소시엄)</td>
                <td>열린노무법인</td>
                <td>이언컨설팅그룹</td>
              </tr>
              <tr>
                <td>한국공인노무사회</td>
                <td>한국능률협회컨설팅</td>
                <td>한국생산성본부</td>
              </tr>
              <tr>
                <td>한국표준협회</td>
                <td></td>
                <td></td>
              </tr>


            </tbody>
          </table>
        </div>

        <div class="tit-blue mt-40">문의</div>
        <div class="dot-text">노사발전재단 HR개발팀 : 02-6021-1027, 1229, 1167, 1187</div>

        <div class="headline mt-50">클린사업장 조성 지원 사업</div>
        <div class="org-chart-wrap-bdr">기술 재정적 능력이 취약한 산재보험가입 50인 미만 사업장 및 공사금액 20억원 미만 건설현장, 산업단지를 대상으로 유해 위험요인 개선을 위한 자금을 지원합니다.</div>

        <div class="tit-blue mt-40">지원대상 및 지원조건</div>
        <div class="dot-text">근로자를 고용하여 산업재해보상보험에 가입하고 보험료 체납이 없는 50명 미만의 다음 적용 사업장 중 자금지원 요청 사업장</div>

        <div class="font-18 font-bold-500 mt-40">&#9312;50인 미만 소규모 사업장(건설업은 공사금액 20억원 미만 건축공사)으로 위험성평가 인정사업장, 고용부 공단 민간대행기관의 감독 점검 기술지원 사업장 중 자금지원 요청 사업장</div>
        <div class="dot-text mt-20">제조 서비스업 : 최대 2,000만원&nbsp;&nbsp;&nbsp;*지원품목 : 위험기계 방호장치, 작업공정개선설비, 환기설비, 직업병 예방설비 등</div>
        <div class="dot-text">
          건설업 : 현장 당 최대 2,000만원
          <p className="mb-0">*지원품목 : 소규모 건설현장에서 다발하는 추락재해 예방을 위한 안전시설(시스템비계, 안전방망 등)</p>
          <p className="mb-0">*총 프로그램 예산액 일부(10% / 대기업·공공 30% 이상) 자체부담</p>
        </div>
        
        <div class="dot-text">
          해당 사업장의 시설개선 총 비용 중 사업주 부담금 50%, 보조금 50%(매칭펀드방식)
          <p className="mb-0">*단, 제조·서비스업은 10인 미만 사업장은 총 비용 중 보조금 70% 지원, 건설업은 공사금액 20억원 미만을 대상으로 총 비용 중 보조금 50~65% 지원</p>
        </div>
        <div class="dot-text">
          사망사고 고위험 개선 : 사망사고 등 급박한 유해 위험요인이 있거나 고용노동부의 감독, 
          공단의 기술지원 결과 시급히 개선이 필요한 사업장에서 해당 유해 위험요인 개선하는 경우
          <p className="mb-0">소요비용의 70%, 사업장 당 최대 2,000만원 까지 지원(고소작업대, 이동식 크레인 방호장치 지원 포함)</p>
        </div>
        
        <div class="font-18 font-bold-500 mt-40">&#9313;산업단지 산재예방시설을 신규로 지원받고자 하는 산업단지 내 입주 사업장 또는 산업단지 관리주체</div>
        <div class="dot-text mt-20">고소작업대 및 이동식크레인 방호장치 설치비용 지원(아웃트리거 감지센서, 모니터, 각도 거리센서, 로드셀 등)&nbsp;&nbsp;&nbsp;*사업장 당 2,000만원 한도(차대번호별 중복지원 불가), 소요비용의 70%</div>

        <div class="tit-blue mt-40">참고사항</div>
        <div class="dot-text">점검 감독 기술지원 등과 연계하여 기술 자금 교육 등을 포괄적으로 지원</div>
        <div class="dot-text">보조 대상자는 보조심사위원회의 ‘보조대상자 우선순위’에 따라 결정</div>
        <div class="dot-text">자금지원 이후 3년간 보조지원 설비 가동 상태를 확인하고 사업장 유해 위험요인에 대해 사후 기술지원</div>
      
        <div class="tit-blue mt-40">신청</div>
        <div class="dot-text">한국산업안전보건공단 클린사업 홈페이지 clean.kosha.or.kr</div>

        <div class="tit-blue mt-40">문의</div>
        <div class="dot-text">한국산업안전보건공단 : 1544-3088</div>

      </div>
    
    </>
  )
}

export default SubPage7_4;