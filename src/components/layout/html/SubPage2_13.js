import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_13 = ({ children }) => {


  return(
    <>
      {/* 탄소중립형 스마트공장 tab */}
      {/* 사업안내 > 지원사업 소개 > 탄소중립형 스마트공장 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">탄소저감에 효과적인 특화 스마트공장 구축 지원을 통해 에너지 효율 향상과 저탄소 경제체계로의 전환을 지원</div>

        <div className="tit-blue mt-30">지원규모 : 30억원</div>
        
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">
          국내 중소·중견 기업
          <p className="mb-0">* 뿌리기술(14개 업종), 고탄소 배출업종</p>
        </div>

        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          에너지 진단·설계 컨설팅, ICT 기반 탄소저감 공정혁신, 고효율 설비 개체 등을 패키지 지원
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

export default SubPage2_13;