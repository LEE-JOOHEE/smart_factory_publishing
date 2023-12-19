import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage2_22 = ({ children }) => {


  return(
    <>
      {/* 스마트공장 AS지원 tab */}
      {/* 사업안내 > 지원사업 소개 > 스마트공장 AS지원 */}

      <div className="sub-tab-cont-wrap">
        <div className="headline">사업개요</div>

        <div className="tit-blue">목적</div>
        <div className="dot-text">스마트공장 도입기업을 대상으로 부품교체, 소프트웨어 업그레이드 등 운영 애로사항 해결 지원을 통해 스마트공장 활용도 제고</div>

        <div className="tit-blue mt-30">지원규모: 70억원</div>
        <div className="tit-blue mt-20">지원대상</div>
        <div className="dot-text">스마트공장 보급·확산 사업에 참여하여 사업을 완료한 중소기업(수준확인 기업 포함)</div>
        <div className="tit-blue mt-30">지원내용</div>
        <div className="dot-text">
          스마트공장 운영과 관련된 H/W(부품 등) 및 S/W(솔루션 등)의 고장·결함에 대한 신속한 AS 지원
        </div>
        <div className="dot-text">
          스마트공장 도입 후 발생되는 생산품목 변경, 공정개선, 생산효율성 개선, 보안강화 등에 필요한 H/W 및 S/W 업그레이드 지원
        </div>
        <div className="dot-text">
          역량강화 교육, 도입장비 및 솔루션에 대한 사용법 전수, 활용 관리, 지속적 H/W, S/W 개선 등의 AS를 주기적·장기간(6개월 이내) 지원
        </div>
        <div className="tit-blue mt-30">지원조건</div>
        <div className="usr-table-info text-c mt-10">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'10%'} />
              <col width={'45%'} />
              <col width={'15%'} />
              <col width={'15%'} />
              <col width={'15%'} />
            </colgroup>
            <thead>
              <tr>
                <th>지원유형</th>
                <th>지원내용</th>
                <th>정부지원금</th>
                <th>지원기간</th>
                <th>지원비율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">AS지원</td>
                <td>
                  고장·결함 수리, 업그레이드 지원, 사용법 전수, 기능개선 등 활용도 제고 전 분야
                </td>
                <td>최대 20백만원	</td>
                <td>최대 6개월</td>
                <td>50% 이내</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default SubPage2_22;