import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";

const SubPage7_2 = ({ children }) => {

  return(
    <>
      {/* 스마트공장소개 */}
      {/* 홍보관 > 인력개발 tab */}
      
      <div className="sub-tab-cont-wrap">
        <div className="headline">스마트공장 거점 특성화고 지정</div>
        <div className="org-chart-wrap-bdr">스마트공장 분야 전문인력 양성을 위해 스마트공장 거점 특성화고를 대상으로 교육장비 구축 및 교육과정 운영비 등을 지원합니다.</div>

        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text">실습교육이 가능한 시설 구축 및 교육과정 운영비 등 지원</div>

        <div className="tit-blue mt-40">지원기간</div>
        <div className="dot-text">2년(지원기간 종료 후, 성과평가를 실시하여 연장여부 결정)</div>

        <div className="tit-blue mt-40">지원조건</div>
        <div className="dot-text">
          거점 특성화고 당 평균 1억원 내외 지원
          <p className="mb-0">*(1차년도) 시설 구축 및 교육과정 개발․운영 (거점학교 중심)</p>
          <p className="mb-0">&nbsp;&nbsp;(2차년도) 공동 프로그램 추가 운영 (협력학교로 확대)</p>
        </div>

        <div className="tit-blue mt-20">문의</div>
        <div className="dot-text">중소벤처기업부 인력지원과 : 042-481-4467</div>
        <div className="dot-text">중소벤처기업진흥공단 기업인력지원처 : 055-751-9865</div>
        
        <div className="headline mt-50">마이스터고 특화 교육과정 운영</div>
        <div className="org-chart-wrap-bdr">
          <p className="text-black">중소벤처기업부 소관 국립마이스터고(3개교)에서 스마트공장 관련 자격증 취득 및 장비 노하우 습득 중심의 교육과정을 운영합니다.</p>
          <p className="font-16 mb-0">*중기부 소관 국립마이스터고(3개교) : 구미전자공고, 부산기계공고, 전북기계공고</p>
        </div>

        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">중기부 소관 국립마이스터고(3개교) 재학생</div>

        <div className="tit-blue mt-40">지원내용</div>
        <div className="dot-text">
          (자격증 취득) 스마트공장과 관련된 산업기사 자격증 취득이 가능한 ‘과정평가형’ 교육과정 운영
          <p className="mb-0">*(’18) 생산자동화, 전자산업기사 분야(구미전자공고) → (~’20) 교육과정 및 대상학교 확대(국립마이스터고 3개교)</p>
        </div>
        <div className="dot-text">
          (장비 교육) PLC 분야 등의 해외 유수 장비제조업체에서 교육과정을 이수한 교사가 
          학생들을 대상으로 공장 자동화, 장비 오류 탐색 및 수리 능력 배양 교육을 실시
          <p className="mb-0">*(’18) PLC, 로봇 분야(전북기계공고) → (~’20) 장비분야 및 대상학교 확대(국립마이스터고 3개교)</p>
        </div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">중소벤처기업부 인력지원과 : 042-481-4467</div>

        <div className="headline mt-50">스마트공장 영마이스터 학과 신설</div>
        <div className="org-chart-wrap-bdr">중소기업 인재양성을 지원하고 장기재직 및 인력유입을 유도하기 위해 중소기업 및 근로자, 대학 간 계약을 토대로 기업이 필요로 하는 학위 과정을 지원합니다.</div>

        <div className="tit-blue mt-20">운영규모</div>
        <div className="dot-text">`19년 4개 학과 선정 및 운영지원 예정 *중소기업인력지원사업종합관리시스템(sanhakin.mss.go.kr) 참조</div>

        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text">
          직업계고 출신 우수인재를 대상으로 중소․중견기업과 채용약정 전제로 스마트공장 분야 
          전문학사 학위과정 참여시 대학 운영지원 →(대학) 학과운영비 (학기별 35백만원)
          <p className="mb-0">*평가결과 등에 따라 차등 지원 →(학생) 기준등록금* 전액</p>
          <p className="mb-0">*전국 대학의 학위별 평균등록금(교육부)의 60% 수준으로 매년 책정</p>
          <p className="mb-0">※ 참여학생은 졸업 후 약정기업 의무근무(2년 이상)</p>
        </div>

        <div className="tit-blue mt-20">문의</div>
        <div className="dot-text">중소벤처기업부 인력지원과 : 042-481-4467</div>
        <div className="dot-text">중소벤처기업진흥공단 : 055-751-9818</div>

        <div className="headline mt-50">조기취업형 계약학과</div>
        <div className="org-chart-wrap-bdr">대학에서의 기업맞춤형 집중교육과 기업이 요구하는 현장 실무능력 배양 교육을 결합한 조기취업형 계약학과 운영을 지원합니다.</div>

        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text">산업체의 수요를 반영한 맞춤형 교육과정을 개발 운영</div>
        <div className="dot-text">대학과 기업 간 공동 연구개발(R&D) 및 기술사업화 프로젝트 등 지원</div>
        

        
        <div className="tit-blue mt-40">선정대학(스마트공장 분야)</div>
        <div className="usr-table-info mt-10">
          <table key="" summary="테이블정보">
            <colgroup>
              <col width="20%" />
              <col width="40%" />
              <col width="20%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <tr>
                <th>대학명</th>
                <th>신청학과</th>
                <th>학생모집인원</th>
                <th>참여기업</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className="bold bg">한양대(ERICA)</td>
                <td>
                  <div className="pb-0">로봇융합(로봇공학, 기계, 전자)</div>
                </td>
                <td>
                  <div className="text-c">55명</div>
                </td>
                <td>
                  <div className="text-c">40개</div>
                </td>
              </tr>
              <tr>
                <td className="bold bg">경일대</td>
                <td>
                  <div className="pb-0">스마트팩토리융합(전기, 기계, 컴공)</div>
                </td>
                <td>
                  <div className="text-c">30명</div>
                </td>
                <td>
                  <div className="text-c">26개</div>
                </td>
              </tr>
              <tr>
                <td className="bold bg">전남대</td>
                <td>
                  <div className="pb-0">스마트융합공정공학(전자통신, 컴공, 멀티미디어)</div>
                </td>
                <td>
                  <div className="text-c">25명</div>
                </td>
                <td>
                  <div className="text-c">25개</div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40">운영원칙</div>
        <div className="dot-text">3년 6학기제</div>

        <div className="tit-blue mt-40">지원기간</div>
        <div className="dot-text">’18년~’23년, 4+2년(준비기간 1년 포함)</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">교육부 교육일자리총괄과 : 044-203-6880, 6885</div>
        <div className="dot-text">한국산업기술진흥원 중소기업인력팀 : 02-6009-3391</div>

        <div className="headline mt-50">4차 산업혁명 혁신선도대학</div>
        <div className="org-chart-wrap-bdr">4차 산업혁명 시대를 맞아 창의적, 문제해결형 인재양성을 위한 대학 내 교육과정, 교육방법, 교육환경의 혁신적 변화를 선도적으로 추진하고, 이를 대학 전반으로 확산합니다.</div>

        <div className="tit-blue mt-40">운영규모</div>
        <div className="usr-table-info mt-10" style={{ borderWidth: "1px"}}>
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width="20%" />
              <col width="80%" />
            </colgroup>
            <tbody>
              <tr>
                <td className="bold bg">교육과정</td>
                <td>
                  <div>
                    <div className="bold text-l pb-10 font-16">*기존 교육과정을 4차 산업혁명 친화적 커리큘럼으로 개편</div>
                    <div className="dot-text">4차 산업혁명 기초교과 : 4차 산업혁명 유망 분야 기술과 비즈니스 모델에 관한 이해 및 미래 인재 핵심역량 강화를 위한 일반적 교육과정</div>
                    <div className="dot-text">4차 산업혁명 준문교과 : 4차 산업혁명 특화분야의 산업선도형 전문 인력 양성을 위한 전공 심화교육과정</div>
                    <div className="dot-text">어드벤처 디자인(Adventure Design) : 문제해결능력 함양 및 학습진로 설계를 위한 1, 2학년 학생 대상 자기주도형 프로젝트교과</div>
                    <div className="dot-text pb-0">학과 간 교육과정을 개방하고 공유하여 학생의 자발적 선택적 융합 학습 기회 확대</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bold bg">교육방법</td>
                <td>
                  <div>
                    <div className="dot-text">온라인 공개강좌를 통한 온 오프라인 연계 교육, 거꾸로 학습(Flipped Learming), 프로젝트 기반수업 등 활용</div>
                    <div className="dot-text pb-0">자기진단 평가, 토론평가, 목표 달성중심 평가 등 질적 평가 중심 학생평가체제 개선을 추진</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bold bg">교육방법</td>
                <td>
                  <div>
                    <div className="dot-text">시설과 기자재를 선진화하고 실험실과 강의실 환경 개선과 같은 물리적 환경을 개선</div>
                    <div className="dot-text pb-0">교육과정 개발과 교수법 혁신 활동 실적을 교원 업적평가에 반영하고 학사제도도 유연화하는 제도적 환경 개선 추진</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40">선정대학(스마트공장 분야)</div>
        <div className="usr-table-info mt-10">
          <table key="" summary="테이블정보">
            <colgroup>
              <col width="50%" />
              <col width="40%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th>과제명 </th>
                <th>수행기관</th>
                <th>교육인원</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold text-l font-bold-400">중소 방산업체의 스마트공장 구현을 위한 협동로봇테크니션 및 컨설터트 양성과정</td>
                <td>
                  <div className="text-c">광운대학교 산학협력단</div>
                </td>
                <td>
                  <div className="text-c">48명</div>
                </td>
              </tr>
              <tr>
                <td className="bold text-l font-bold-400">스마트패토리 조선해양 엔지니어링 S/W 개발자 인력양성 과정</td>
                <td>
                  <div className="text-c">디에스엠이정보시스템(주)</div>
                </td>
                <td>
                  <div className="text-c">48명</div>
                </td>
              </tr>
              <tr>
                <td className="bold text-l font-bold-400">스마트공장 CPS 지향형 지능로봇 관제기술 개발 과정</td>
                <td>
                  <div className="text-c">대한상공회의소 충남인력개발원</div>
                </td>
                <td>
                  <div className="text-c">24명</div>
                </td>
              </tr>
              <tr>
                <td className="bold text-l font-bold-400">프로젝트 기반의 산업별 맞춤형 스마트팩토리 SW개발 실무자 양성 과정</td>
                <td>
                  <div className="text-c">한국품질재단</div>
                </td>
                <td>
                  <div className="text-c">48명</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="font-16 mt-10 text-gray-500">*수행기관을 통해 자체 교육생 모집</div>

        <div className="tit-blue mt-40">교육기관</div>
        <div className="dot-text">6개월 이내</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">과학기술정보통신부 소프트웨어정책과 : 02-2110-1859</div>
        <div className="dot-text">정보통신기획평가원 : 042-612-8456</div>

        <div className="headline mt-50">사회맞춤형 산학협력 선도전문대학(LINC+) - 사회맞춤형학과 중점형</div>
        <div className="org-chart-wrap-bdr">학생의 취업난과 기업의 구인난을 완화하기 위해 대학 교육과정을 사회 수요와 밀접하게 연계된 사회맞춤형으로 개편하는 것을 지원합니다.</div>

        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text">지속가능한 사회맞춤형학과 선도모델 확립 및 전문대학 내 확산</div>
        <div className="dot-text">대학 내 협약산업체와 유사한 미러형 실습환경 구축을 지원하고, 협약산업체와 연계한 PBL, 현장실습, OJT 등을 통한 현장 밀착형 교육 기회 제공</div>

        <div className="tit-blue mt-40">지원규모</div>
        <div className="dot-text">총 44개학교(스마트공장 등 신산업 분야 관련 21개학과)</div>

        <div className="tit-blue mt-40">지원기간</div>
        <div className="dot-text">’19년 ~ ’21년</div>

        <div className="tit-blue mt-40">지원절차</div>
        <div className="procedure-wrap small">
          <div className="grid-col-12 gap-col-38 gap-row-30">
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">공동 선발</div>
                인재상 도출, 인재선발
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">공동 설계</div>
                교육과정 개발, 교재 공통개발
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">공동운영</div>
                PBL, 현장실습, 신학교원 교육참여
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">취업 연계</div>
                취업 약정, 산업체 협력관계
              </div>
            </div>

          </div>
        </div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">지속가능한 사회맞춤형학과 선도모델 확립 및 전문대학 내 확산</div>
        <div className="dot-text">대학 내 협약산업체와 유사한 미러형 실습환경 구축을 지원하고, 협약산업체와 연계한 PBL, 현장실습, OJT 등을 통한 현장 밀착형 교육 기회 제공</div>

        <div className="headline mt-50">산업단지 스마트공장 전문인력 양성</div>
        <div className="org-chart-wrap-bdr">산학융합지구 내 스마트공장 전문인력 양성시설(스마트랩)을 구축하여 고부가가치 청년일자리 확충을 지원합니다.</div>

        <div className="tit-blue mt-20">지원내용</div>
        <div className="dot-text">스마트공장 운영․설계․코디․컨설팅 등을 종합적으로 수행할 수 있는 전문인력을 양성하는 현장실습교육 시설을 구축․운영</div>
        <div className="dot-text">(교육과정 설계․운영) 지역 특화산업과 연계한 스마트공장 5대 핵심분야* 통합교육과정을 대학생(구직 희망자 포함) 대상으로 교육과 취업을 연계&nbsp;&nbsp;&nbsp;*자동생산, 머신/딥러닝, 공장자동화, 생산관리, 데이터분석</div>
        <div className="dot-text">(채용 매칭) 산단 내 스마트공장 도입기업과 교육 수료생을 매칭하는 온․오프라인 일자리 지원 센터를 통해 취업 지원&nbsp;&nbsp;&nbsp;*산업인력단지공단의 기업․교육수료생 연계서비스를 활용한 전문인력 채용매칭 플랫폼 운영</div>

        <div className="tit-blue mt-40">지원대상</div>
        <div className="dot-text">중소벤처기업부 기술정책과 : 042-481-4402</div>

        <div className="headline mt-50">스마트공장 운영설계 전문인력 양성</div>
        <div className="org-chart-wrap-bdr">스마트공장 핵심 기반기술 개발 및 고도화된 스마트공장 운영설계를 위한 융합형 교육을 통해 스마트 제조분야 전문인력 양성을 지원합니다.</div>

        <div className="tit-blue mt-20">주요내용</div>
        <div className="dot-text">산업수요 업종별 맞춤형 교육과정 개발 및 운영</div>
        <div className="dot-text">산업체와 연계한 프로그램 운영(산학연계 프로젝트 연구, 국내외 인턴십 과정 활용)</div>
        <div className="dot-text">교육 인프라 연계 실습을 통한 전문인력 양성</div>

        <div className="tit-blue mt-40">교과대상</div>
        <div className="dot-text">관련 전공 4년제(전일제) 졸업자 또는 제조업 관련 종사자</div>

        <div className="tit-blue mt-40">양성기관</div>
        <div className="dot-text">한국산업기술대학교, 경희대학교, 충북대학교, 동아대학교, 성균관대학교, 한국생산성본부 등 *(석사)4학기, (박사)6학기</div>

        <div className="tit-blue mt-40">신청절차</div>
        <div className="dot-text">양성기관의 입학절차(시기, 방법 등)에 따라 각 기관에 신청</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">산업통상자원부 산업일자리혁신과 : 044-203-4222</div>
        <div className="dot-text">산업기술진흥원 산업인력혁신팀 : 02-6009-3234</div>

        <div className="headline mt-50">산업인공지능 전문인력 양성</div>
        <div className="org-chart-wrap-bdr">인공지능 기술을 제조에 융합하여 기존 산업 분야의 변화를 도모할 수 있는 활용 응용 중심의 산업인공지능 석 박사 양성을 지원합니다.</div>

        <div className="tit-blue mt-20">주요내용</div>
        <div className="dot-text">제조현장 문제해결형 교육을 위한 산업데이터 교육 플랫폼 구축</div>
        <div className="dot-text">스마트제조 해커톤 대회 개최</div>
        <div className="dot-text">산업인공지능 교과목 개발 등</div>

        <div className="tit-blue mt-40">양성기관</div>
        <div className="dot-text">한국산업기술대학교, 경희대학교, 충북대학교, 동아대학교, 성균관대학교, 한국생산성본부 등 *(석사)4학기, (박사)6학기</div>

        <div className="tit-blue mt-40">지원기간</div>
        <div className="dot-text">’24년 2월말 까지</div>

        <div className="tit-blue mt-40">신청절차</div>
        <div className="dot-text">양성기관의 입학절차(시기, 방법 등)에 따라 각 기관에 신청</div>

      </div>
    
    </>
  )
}

export default SubPage7_2;