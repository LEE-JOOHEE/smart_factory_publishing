import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";

const SubPage7_1 = ({ children }) => {

  return(
    <>
      {/* 스마트공장소개 */}
      {/* 홍보관 > 유관사업안내 tab */}
      
      <div className="sub-tab-cont-wrap">
        <div className="headline">제조현장스마트화자금</div>
        <div className="org-chart-wrap-bdr">중소기업의 기업경쟁력 제고 및 산업 고도화 촉진을 위해 제조현장 스마트화 및 생산공정 혁신 정책자금을 지원합니다.</div>

        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">스마트공장 추진기업 중 ‘스마트공장 보급 사업’ 등 참여기업 *스마트공장 보급 사업 및 생산현장디지털화 사업 등</div>
        <div className="dot-text">4차 산업혁명 관련 신산업‧신기술 영위기업</div>
        <div className="dot-text">ICT 기반 생산 효율화를 위한 자동화 시설 도입기업</div>

        <div className="tit-blue mt-40">지원조건</div>
        <div className="dot-text">지원범위 : 시설자금(제 조현장 공정혁신 및 자동화 등 소요자금), 운전자금(시설자금을 융자받은 기업 중 시설 도입 후 소요되는 초기 가동비)</div>
        <div className="dot-text">대출금리 : 정책자금 기준금리(변동)</div>
        <div className="dot-text">대출기간 : 시설 10년(거치기간 4년 이내 포함), 운전 5년(거치기간 2년 이내 포함) *시설자금 신용대출은 거치기간 3년 이내</div>
        <div className="dot-text">대출한도 : 기업 당 시설 100억원, 운전* 연간 10억원 이내 *운전자금은 시설자금의 50% 이내로 지원하며, 시설자금과 별도 융자 불가 </div>
        <div className="dot-text">융자방식 : 중진공 직접대출 또는 금융회사 대리대출</div>

        <div className="tit-blue mt-40">운용규모</div>
        <div className="dot-text">(19년) 총 5,000억원</div>

        <div className="tit-blue mt-40">신청</div>
        <div className="dot-text">중소벤처기업진흥공단 홈페이지(www.kosmes.or.kr)</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">중소벤처기업부 기업금융과 : 042-481-4382 대출금리 : 정책자금 기준금리(변동) </div>
        <div className="dot-text">중소벤처기업진흥공단 : 055-751-9544</div>

        <div className="headline mt-50">IBK 스마트공장 지원대출</div>
        <div className="org-chart-wrap-bdr">글로벌 경쟁력이 있는 강소기업 육성을 위해 스마트공장 구축 및 운영에 필요한 자금을 적기에 공급합니다.</div>

        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">IBK 스마트공장 컨설팅 수행 기업</div>
        <div className="dot-text">｢신․기보의 스마트공장 금융지원 활성화를 위한 업무협약｣에 의한 보증서를 발급받은 기업</div>
        <div className="dot-text">스마트공장 보급 확산 사업 참여기업*스마트제조혁신추진단(舊.민관합동스마트공장추진단)으로부터 사업 참여 확인서 발급 필요</div>
        <div className="dot-text">스마트공장 구축 수요기업 *중기중앙회로부터 확인서 발급 필요</div>
        <div className="dot-text">스마트팩토리 지원 사업 대상기업 *경북창조경제혁신센터 확인서 발급 필요</div>

        <div className="tit-blue mt-40">지원내용</div>
        <div className="dot-text">스마트공장 구축기업 및 공급기업에게 저리의 자금을 지원 (최대 1.0%p까지 대출금리 추가감면 가능)</div>
        <div className="dot-text">비금융 서비스 ｢IBK 스마트공장 컨설팅｣ 우선 지원</div>
        <div className="dot-text">｢스마트공장 금융지원 활성화를 위한 업무협약｣ 에 따라 신용보증서 보증료 감면</div>
        <div className="usr-table-info mt-30">
          <table key="" summary="테이블정보">
            <colgroup>
              <col width="20%" />
              <col width="80%" />
            </colgroup>
            <thead>
              <tr>
                <th>보증기관</th>
                <th>보증료 감면 비율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">기술보증기금</td>
                <td>
                  <div className="pl-40">0.4 %p (IBK에서 0.2%p, 신용보증기금에서 0.2%p 부담)</div>
                </td>
              </tr>
              <tr>
                <td className="bold">R&D</td>
                <td>
                  <div className="pl-40">0.6 %p (IBK에서 0.2%p, 신용보증기금에서 0.4%p 부담)</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">중소기업은행 기업고객부 : 02-729-6764</div>

        <div className="headline mt-50">스마트공장 지원 특별자금</div>
        <div className="org-chart-wrap-bdr">스마트공장 구축에서 설비투자, 운영까지 전 단계별로 밀착 금융을 지원합니다.</div>

        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">중소․중견기업</div>

        <div className="tit-blue mt-20">자금용도</div>
        <div className="dot-text">스마트공장 신규 구축 또는 구입</div>
        <div className="dot-text">혁신성장 품목 관련 공장 신축 또는 구입</div>
        <div className="dot-text">스마트공장 구축을 위한 설비구입, 개보수, 증축</div>
        
        <div className="tit-blue mt-40">지원내용</div>
        <div className="dot-text">업체별 1,000억원 이내(시설자금, 10년 이내)</div>
        <div className="dot-text">공장의 개․보수를 통한 일부 공정의 스마트화 구축 비용까지 확대 적용</div>

        <div className="tit-blue mt-40">운용규모</div>
        <div className="dot-text">총 1조원</div>

        <div className="tit-blue mt-40">참고사항</div>
        <div className="dot-text">산업은행 내부 규정 등에 의한 신용평가 및 심사 절차 필요</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">산업은행 인근 영업점</div>

        <div className="headline mt-50">스마트공장 특화지원 프로그램</div>
        <div className="org-chart-wrap-bdr">제조업 경쟁력 강화를 위해 스마트공장 도입·공급 중소기업에 필요한 자금을 지원합니다.</div>

        <div className="tit-blue mt-20">지원한도</div>
        <div className="dot-text">(운전자금) 향후 1년간 추정매출의 1/6~1/2</div>
        <div className="dot-text">(시설자금) 해당 시설의 소요자금 *신･증축, 매입자금 제외</div>

        <div className="tit-blue mt-40">지원대상</div>
        <div className="dot-text">(도입기업) 스마트공장 보급 사업 선정기업, 구축완료기업, 스마트공장 수준확인기업</div>
        <div className="dot-text">(공급기업) 스마트공장 관련 설비·자동화 제품, 솔루션 등 공급기업</div>

        <div className="tit-blue mt-40">지원내용</div>
        <div className="usr-table-info mt-10">
          <table key="" summary="테이블정보">
            <colgroup>
              <col width="20%" />
              <col width="40%" />
              <col width="40%" />
            </colgroup>
            <thead>
              <tr>
                <th>보증기관</th>
                <th>협약보증</th>
                <th>우대보증</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold bg">지원대상</td>
                <td>
                  <div className="text-c">도입기업 중 선정기업, 구축완료기업</div>
                </td>
                <td>
                  <div className="text-c">도입기업, 공급기업</div>
                </td>
              </tr>
              <tr>
                <td className="bold bg">대출은행</td>
                <td>
                  <div className="text-c">기업은행, 신한은행</div>
                </td>
                <td>
                  <div className="text-c">시중은행</div>
                </td>
              </tr>
              <tr>
                <td className="bold bg">보증비율</td>
                <td>
                  <div className="text-c">95%</div>
                </td>
                <td>
                  <div className="text-c">90%</div>
                </td>
              </tr>
              <tr>
                <td className="bold bg">보증료차감</td>
                <td>
                  <div className="text-c">-0.4%</div>
                </td>
                <td>
                  <div className="text-c">-0.2%</div>
                </td>
              </tr>
              <tr>
                <td className="bold bg">보증료지원</td>
                <td>
                  <div className="text-c">-0.2%</div>
                </td>
                <td>
                  <div className="text-c">-</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tit-blue mt-40">신청절차</div>
        <div className="procedure-wrap small">
          <div className="grid-col-12 gap-col-38 gap-row-30">
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">보증상담</div>
                (영업점,인터넷)
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">신청.접수</div>
                (영업점,인터넷)
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">조사.심사</div>
                (사업장 방문)
              </div>
            </div>
            <div className="col-span-3">
              <div className="items">
                <div className="text-order-small">보증서 발급</div>
                (전자보증)
              </div>
            </div>

          </div>
        </div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">신용보증기금 신용보증부 : 053-430-4352</div>

        <div className="headline mt-50">스마트공장 구축.공급기업 전용펀드</div>
        <div className="org-chart-wrap-bdr">모태펀드 출자와 민간자금을 유치하여 벤처투자펀드를 조성하고 스마트공장 구축․공급기업에 투자를 지원합니다.</div>
        
        <div className="tit-blue mt-20">운용규모</div>
        <div className="dot-text">연간 1,000억원 규모로 ’21년까지 총 3,000억원 조성 *투자규모는 벤처투자사와 투자유치 기업이 협의하여 결정</div>

        <div className="tit-blue mt-40">지원대상</div>
        <div className="dot-text">(구축기업) 스마트공장 보급사업 수혜기업 및 민간에서 자체 조성한 스마트공장 구축기업</div>
        <div className="dot-text">(공급기업) 스마트공장 설비 S/W, 서비스 등 공급기업 및 관련 요소기술 보유기업 등</div>

        <div className="tit-blue mt-40">신청방법</div>
        <div className="dot-text">펀드가 조성되면 한국벤처투자 홈페이지에 게시(’19년 하반기 예정)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*모태펀드가 출자한 전체 펀드 정보는 한국벤처투자 홈페이지의 모태펀드 출자펀드 찾기에서 찾을 수 있음</div>

        <div className="tit-blue mt-40">문의</div>
        <div className="dot-text">중소벤처기업부 벤처투자과 : 042-481-4419</div>
        <div className="dot-text">한국벤처투자 : 02-2156-2060</div>

      </div>

    </>
  )
}

export default SubPage7_1;