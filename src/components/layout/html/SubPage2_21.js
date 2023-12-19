import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_21 = ({ children }) => {


  return(
    <>
      {/* 스마트마이스터 활용지원 tab */}
      {/* 사업안내 > 지원사업 소개 > 스마트마이스터 활용지원 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">대기업 등 현장 경험이 풍부한 전문가를 파견하여 제조현장 개선, 기술애로 해결 등 경험과 노하우를 스마트공장 구축 중소·중견기업에 전수</div>

        <div className="headline mt-50">운영기관 모집
          <span className="font-bold-500 text-black">(‘23.1월 별도 공모)</span>
        </div>
        <div className="tit-blue">모집기관</div>
        <div className="dot-text">
          마이스터 사업 전반(수요 발굴 및 홍보, 마이스터 관리·교육, 사업 신청·접수, 컨설팅 지원 등)을 추진할 수 있는 역량을 보유한 기관(컨소시엄 가능)
        </div>
        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          참여기업 모집, 우수 마이스터 확보 및 관리, 성과관리 등에 필요한 사업비·운영비 지원
        </div>

        <div className="headline mt-50">참여기업 모집
          <span className="font-bold-500 text-black">(운영기관 선정 후 별도 공지)</span>
        </div>
        <div className="tit-blue">지원규모: 37.8억원</div>
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">스마트공장 구축 또는 구축 예정 중소․중견 제조기업</div>
        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          스마트공장 구축 전략 및 고도화 로드맵 수립, 구축 후 활용도 제고, 구축과정 애로 해결 등 스마트공장 구축지도
        </div>
        <div className="dot-text">
          제조현장 개선, 기술애로 해결 등 대기업 제조 노하우 전수
        </div>
        <div className="tit-blue mt-30">지원조건</div>
        <div className="dot-text">기업당 마이스터 최대 6개월 파견(총 인건비의 10% 기업부담)</div>
        <div className="usr-table-info text-c mt-10">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'20%'} />
              <col width={'20%'} />
              <col width={'20%'} />
              <col width={'20%'} />
              <col width={'20%'} />
            </colgroup>
            <thead>
              <tr>
                <th rowSpan={2}>구분</th>
                <th rowSpan={2}>지원방법</th>
                <th rowSpan={2}>지원기간</th>
                <th colSpan={2} className="border-b">사업비(분담비율)</th>
              </tr>
              <tr>
                <th>정부지원</th>
                <th>민간부담</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">기본</td>
                <td>마이스터 1인 x 8회</td>
                <td>1개월</td>
                <td>252만원(90%)</td>
                <td>28만원(10%)</td>
              </tr>
              <tr>
                <td className="bold">심화</td>
                <td>마이스터팀 x 24회</td>
                <td>3개월</td>
                <td>756만원(90%)</td>
                <td>84만원(10%)</td>
              </tr>
              <tr>
                <td className="bold">종합</td>
                <td>마이스터팀 x 48회</td>
                <td>6개월</td>
                <td>1,512만원(90%)</td>
                <td>168만원(10%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default SubPage2_21;