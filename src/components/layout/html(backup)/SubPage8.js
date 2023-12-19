import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";
import { DownloadOutlined, } from "@ant-design/icons";

import SubPage7_1 from 'components/layout/html/SubPage7_1';
import SubPage7_2 from 'components/layout/html/SubPage7_2';
import SubPage7_3 from 'components/layout/html/SubPage7_3';
import SubPage7_4 from 'components/layout/html/SubPage7_4';


const SubPage8 = ({ children }) => {

  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '전체',
    b: '전체',
    c: '전체',
    d: '전체',
    e: '전체',
    f: '전체',
    g: '전체',
    h: '',
    i: '전체',
    j: '',
    k: '전체',
    l: '전체',
    m: '전체',
  });
  // 검색조건 입력 change 메소드
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  // 2019 ~ 2021 선정 테이블
  const obj1 = {
    header: ["구분", "기업명", "다운로드",],
    data: [
      {rowspan: "5",  a1: "성장_신규구축으로 혁신 성장",        a2: "에이치엔에스하이텍㈜",      a3: "성장", },
      {rowspan: "",   a1: "성장_신규구축으로 혁신 성장",        a2: "㈜엘브리지",               a3: "성장", },
      {rowspan: "",   a1: "성장_신규구축으로 혁신 성장",        a2: "제이엠푸드㈜",             a3: "성장", },
      {rowspan: "",   a1: "성장_신규구축으로 혁신 성장",        a2: "㈜케이이씨 구미사업장",     a3: "성장", },
      {rowspan: "",   a1: "성장_신규구축으로 혁신 성장",        a2: "㈜힘펠",                   a3: "성장", },
      {rowspan: "5",  a1: "비약_고도화로 비약적 발전",          a2: "동아연필㈜",               a3: "비약", },
      {rowspan: "",   a1: "비약_고도화로 비약적 발전",          a2: "㈜비츠로넥스텍",            a3: "비약", },
      {rowspan: "",   a1: "비약_고도화로 비약적 발전",          a2: "아주스틸㈜",                a3: "비약", },
      {rowspan: "",   a1: "비약_고도화로 비약적 발전",          a2: "엠에스이㈜",                a3: "비약", },
      {rowspan: "",   a1: "비약_고도화로 비약적 발전",          a2: "㈜한중엔시에스",            a3: "비약", },
      {rowspan: "4",  a1: "상생_상생협력으로 가치 함께",        a2: "대전열병합발전㈜",          a3: "상생", },
      {rowspan: "",   a1: "상생_상생협력으로 가치 함께",        a2: "새한주식회사",              a3: "상생", },
      {rowspan: "",   a1: "상생_상생협력으로 가치 함께",        a2: "㈜코젠바이오텍",            a3: "상생", },
      {rowspan: "",   a1: "상생_상생협력으로 가치 함께",        a2: "㈜풍림파마텍",              a3: "상생", },
      {rowspan: "2",  a1: "친화_근로자의 안전과 휴식 친화",     a2: "㈜삼현",                   a3: "친화", },
      {rowspan: "",   a1: "친화_근로자의 안전과 휴식 친화",     a2: "㈜오토닉스",               a3: "친화", },
      {rowspan: "4",  a1: "연계_업종별 솔루션 특화",            a2: "㈜세일사",                 a3: "연계", },
      {rowspan: "",   a1: "연계_업종별 솔루션 특화",            a2: "㈜에치와이 평택공장",       a3: "연계", },
      {rowspan: "",   a1: "연계_업종별 솔루션 특화",            a2: "일동제약㈜",               a3: "연계", },
      {rowspan: "",   a1: "연계_업종별 솔루션 특화",            a2: "진양제약㈜",               a3: "연계", },
    ],
  }

  return(
    <>
      {/* 우수구축사례 */}
      {/* 홍보관 > 우수구축사례 */}

      <div className="usr-serch-bor-form">
        <div className="mr-20">
          SIMP 지원사업 플랫폼에서는 추진 성과를 널리 알리기 위해 매년 우수구축사례를 선정하고 있습니다.
        </div>
        <Select
          style={{ maxWidth: "260px" }}
          className="ml-auto"
          // getPopupContainer={trigger => trigger.parentNode}
          dropdownAlign={{ offset: [0, 0] }}
          onChange={(value) => {
            ojtSrchCndChange(value, 'a');
          }}
          options={[
            {
              value: '전체',
              label: '전체',
            },
          ]}
          value={ojtSrchCnd?.a}
        />
      </div>

      <div className="headline mtb-30">2019 ~ 2021 선정</div>
      <div className="usr-table-info">
          <table key={''} summary="테이블정보">
            <colgroup>
              <col width={'30%'} />
              <col width={'35%'} />
              <col width={'35%'} />
            </colgroup>
            <thead>
              {obj1.header.map((item) => {
                return (<th>{item}</th>)
              })}
            </thead>
            <tbody>
              {obj1.data.map((item) => {
                return(
                  <tr>
                    {item.rowspan > 0 && <td className="bold bg" rowSpan={item.rowspan}>{item.a1}</td>}
                    <td className="border-r">{item.a2}</td>
                    {item.rowspan > 0 && 
                      <td className="text-c" rowSpan={item.rowspan}>
                        <Button className="eu-btn-pdf">{item.a3}.PDF<DownloadOutlined /></Button>
                      </td>
                    }
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>




      


    
    </>
  )
}

export default SubPage8;