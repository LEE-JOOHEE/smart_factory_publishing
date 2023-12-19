import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";
import { checkNavigable } from "react-slick/lib/utils/innerSliderUtils";

const SubPage3 = ({ children }) => {

  // 사업별 담당자
  const obj1 = {
    header: ["구분", "세부사업명", "전문(관리)기관", "연락처"],
    data: [
      /*{ 0 }*/  {a1: '스마트공장 구축(일반형)', a2: '정부일반형 스마트공장',                a3: '스마트제조혁신 추진단', tel: ['044-300-0951', '044-300-0957','044-300-0959']},
      /*{ 1 }*/  {a1: '스마트공장 구축(일반형)', a2: '대중소 상생형 스마트공장(기초,고도화)', a3: '스마트제조혁신 추진단', tel: ['044-300-0958', '044-300-0954']},
      /*{ 2 }*/  {a1: '스마트공장 구축(특화형)', a2: '부처협업형 스마트공장',                a3: '스마트제조혁신 추진단', tel: ['044-300-0959', '044-300-0957',]},
      /*{ 3 }*/  {a1: '스마트공장 구축(특화형)', a2: '탄소중립형 스마트공장',                a3: '중소벤처기업 진흥공단', tel: ['055-751-9588', '',]},
      /*{ 4 }*/  {a1: '스마트공장 구축(특화형)', a2: '투자연계형 스마트공장',                a3: '스마트제조혁신 추진단', tel: ['044-300-0960', '',]},
      /*{ 5 }*/  {a1: '스마트공장 구축(특화형)', a2: '로봇활용 제조혁신지원',                a3: '한국로봇산업 진흥원',   tel: ['053-210-9552~6', '',]},
      /*{ 6 }*/  {a1: '협업형 스마트공장 구축',  a2: '공급망 연계형 스마트공장',             a3: '스마트제조혁신 추진단', tel: ['044-300-0953', '044-300-0954',]},
      /*{ 7 }*/  {a1: '제조데이터 활용지원',     a2: '인공지능 컬설팅 및 실증',              a3: '스마트제조혁신 추진단', tel: ['044-300-0944', '',]},
      /*{ 8 }*/  {a1: '제조데이터 활용지원',     a2: '제조데이터 촉진자 양성',               a3: '스마트제조혁신 추진단', tel: ['044-300-0942', '',]},
      /*{ 9 }*/  {a1: '공급기업 얼라이언스',     a2: '클라우드형 스마트공장 종합솔루션',      a3: '스마트제조혁신 추진단', tel: ['044-300-0972', '',]},
      /*{ 10 }*/ {a1: '수준확인·컨설팅 등 기타', a2: '스마트공장 수준확인',                  a3: '스마트제조혁신 추진단', tel: ['044-300-0956', '',]},
      /*{ 11 }*/ {a1: '수준확인·컨설팅 등 기타', a2: '스마트마이스터 활용지원',               a3: '스마트제조혁신 추진단', tel: ['044-300-0956', '',]},
      /*{ 12 }*/ {a1: '수준확인·컨설팅 등 기타', a2: '스마트공장 AS지원',                     a3: '중소벤처기업 진흥공단', tel: ['055-751-9587', '',]},

      /*{ 14 }*/ {a1: '',                      a2: '디지털클러스터',                        a3: '스마트제조혁신 추진단', tel: ['044-300-0954', '',]},
      /*{ 15 }*/ {a1: '',                      a2: '데이터인프라구축사업',                  a3: '스마트제조혁신 추진단', tel: ['044-300-0946', '',]},
      /*{ 16 }*/ {a1: '',                      a2: '제조데이터 촉진자 양성사업',            a3: '스마트제조혁신 추진단', tel: ['044-300-0942', '',]},
      /*{ 17 }*/ {a1: '',                      a2: 'AI 컨설팅·실증사업',                   a3: '스마트제조혁신 추진단', tel: ['044-300-0944', '',]},
      /*{ 18 }*/ {a1: '',                      a2: '지역특화 제조데이터 활성화 사업',        a3: '스마트제조혁신 추진단', tel: ['044-300-0944', '',]},
      /*{ 19 }*/ {a1: '',                      a2: '메타버스팩토리 실증사업',                a3: '스마트제조혁신 추진단', tel: ['044-300-0943', '',]},
      /*{ 20 }*/ {a1: '',                      a2: '클라우드형 종합솔루션 사업',              a3: '스마트제조혁신 추진단', tel: ['044-300-0972', '',]},
    ]
  }

  // 업무별 담당자
  const obj2 = {
    header: ["구분", "세부내용", "전문(관리)기관", "연락처"],
    data: [
      /*{ 0 }*/  {a1: '시스템오류',        a2: ['권한설정','비밀번호','정보변경'],   a3: ['스마트제조혁신 추진단','사업관리시스템-알림참여마당–공지사항-984번 게시물 확인 우선안내'], tel: ['044-998-0418']},
      /*{ 1 }*/  {a1: '시스템오류',        a2: ['회원가입','로그수집 오류'],       a3: '스마트제조혁신 추진단', tel: ['044-998-0418']},
      /*{ 2 }*/  {a1: '전문가 관리',       a2: '',                           a3: '스마트제조혁신 추진단', tel: ['044-300-0959']},
      /*{ 3 }*/  {a1: '수준 확인',         a2: '',                           a3: '스마트제조혁신협회', tel: ['02-3473-3775']},
      /*{ 4 }*/  {a1: '수준 확인',         a2: '',                           a3: '대한상공회의소', tel: ['02-6050-3854']},
      /*{ 5 }*/  {a1: '수준확인 심사원',    a2: '',                          a3: '한국표준협회', tel: ['02-6240-4872']},
      /*{ 6 }*/  {a1: '로그수집 관리',     a2: '',                           a3: '스마트제조혁신 추진단', tel: ['044-300-0987']},
      /*{ 7 }*/  {a1: '사후관리',          a2: '',                           a3: '스마트제조혁신 추진단', tel: ['044-300-0981']},
      /*{ 8 }*/  {a1: 'RCMS',             a2: '',                           a3: '스마트제조혁신 추진단', tel: ['1661-5855']},
      /*{ 9 }*/  {a1: '홍보 및 행사',      a2: '',                           a3: '스마트제조혁신 추진단', tel: ['044-300-0927']},
      /*{ 10 }*/ {a1: '협약문의',          a2: '',                           a3: '사업을 확인하여, 담당자 안내 필요', tel: ['']},
      /*{ 11 }*/ {a1: '기타문의',          a2: '',                           a3: '스마트제조혁신 추진단', tel: ['044-300-0973']},
    ]
  }

  // 지역별 문의처(스마트제조혁신센터)
  const obj3 = {
    header: ["지역", "기관명", "연락처"],
    data: [           
      {a1: '서울',      a2: '서울스마트제조혁신센터',         a3: '02-944-6032'}
      ,{a1: '부산',      a2: '부산스마트제조혁신센터',         a3: '051-974-9155'}
      ,{a1: '대구',      a2: '대구스마트제조혁신센터',         a3: '053-602-1863'}
      ,{a1: '경북',      a2: '경북스마트제조혁신센터',         a3: '053-819-3055'}
      ,{a1: '포항',      a2: '포항스마트제조혁신센터',         a3: '054-223-2243'}
      ,{a1: '광주',      a2: '광주스마트제조혁신센터',         a3: '062-602-0202'}
      ,{a1: '전남',      a2: '전남스마트제조혁신센터',         a3: '061-729-2583'}
      ,{a1: '제주',      a2: '제주스마트제조혁신센터',         a3: '064-720-3039'}
      ,{a1: '경기',      a2: '경기스마트제조혁신센터',         a3: '031-500-3100'}
      ,{a1: '경기북부',  a2: '경기북부스마트제조혁신센터',     a3: '031-539-5140'}
      ,{a1: '인천',      a2: '인천스마트제조혁신센터',         a3: '032-260-0621~4, 0628'}
      ,{a1: '대전',      a2: '대전스마트제조혁신센터',         a3: '042-930-4351'}
      ,{a1: '충남',      a2: '충남스마트제조혁신센터',         a3: '041-589-0719'}
      ,{a1: '세종',      a2: '세종스마트제조혁신센터',         a3: '044-850-2154'}
      ,{a1: '울산',      a2: '울산스마트제조혁신센터',         a3: '052-219-8588'}
      ,{a1: '강원',      a2: '강원스마트제조혁신센터',         a3: '033-248-5682'}
      ,{a1: '충북',      a2: '충북스마트제조혁신센터',         a3: '043-270-2813~4'}
      ,{a1: '전북',      a2: '전북스마트제조혁신센터',         a3: '063-832-6049'}
      ,{a1: '경남',      a2: '경남스마트제조혁신센터',         a3: '1811-8297'}
    ]
  }

  return(
    <>
      {/* 담당자연락처 */}
      {/* 사업안내 > 담당자연락처 */}
      <Row>
        <Col span={24}>
          <div className="headline">사업별 담당자</div>
          <div className="usr-table-info text-c">
            <table key={''} summary="사업별 담당자">
              <colgroup>
                <col width={'30%'} />
                <col width={'30%'} />
                <col width={'20%'} />
                <col width={'20%'} />
              </colgroup>
              <thead>
                {obj1.header.map((item) => {
                  return <th>{item}</th>;
                })}
              </thead>
              <tbody>
                {/* <tr>
                  <td rowSpan={2}>스마트공장 구축(일반형)</td>
                  <td>정부일반형 스마트공장</td>
                  <td rowSpan={2}>스마트제조혁신 추진단</td>
                  <td>044-300-0951<br/>044-300-0957<br/>044-300-0959</td>
                </tr>
                <tr>
                  <td>대중소 상생형 스마트공장(기초,고도화)</td>
                  <td>044-300-0958<br/>044-300-0954</td>
                </tr> */}

                <tr>
                  <td className="bold" rowSpan={2}>{obj1.data[0].a1}</td>
                  <td>{obj1.data[0].a2}</td>
                  <td rowSpan={2}>{obj1.data[0].a3}</td>
                  <td>{obj1.data[0].tel[0]}<br/>{obj1.data[0].tel[1]}<br/>{obj1.data[0].tel[2]}</td>
                </tr>
                <tr>
                  <td>{obj1.data[1].a2}</td>
                  <td>{obj1.data[1].tel[0]}<br/>{obj1.data[1].tel[1]}<br/></td>
                </tr>

                <tr>
                  <td className="bold" rowSpan={4}>{obj1.data[2].a1}</td>
                  <td>{obj1.data[2].a2}</td>
                  <td>{obj1.data[2].a3}</td>
                  <td>{obj1.data[2].tel[0]}<br/>{obj1.data[2].tel[1]}</td>
                </tr>
                <tr>
                  <td>{obj1.data[3].a2}</td>
                  <td>{obj1.data[3].a3}</td>
                  <td>{obj1.data[3].tel[0]}</td>
                </tr>
                <tr>
                  <td>{obj1.data[4].a2}</td>
                  <td>{obj1.data[4].a3}</td>
                  <td>{obj1.data[4].tel[0]}</td>
                </tr>
                <tr>
                  <td>{obj1.data[5].a2}</td>
                  <td>{obj1.data[5].a3}</td>
                  <td>{obj1.data[5].tel[0]}</td>
                </tr>

                <tr>
                  <td className="bold">{obj1.data[6].a1}</td>
                  <td>{obj1.data[6].a2}</td>
                  <td>{obj1.data[6].a3}</td>
                  <td>{obj1.data[6].tel[0]}<br/>{obj1.data[6].tel[1]}</td>
                </tr>

                <tr>
                  <td className="bold" rowSpan={2}>{obj1.data[7].a1}</td>
                  <td>{obj1.data[7].a2}</td>
                  <td rowSpan={2}>{obj1.data[7].a3}</td>
                  <td>{obj1.data[7].tel[0]}</td>
                </tr>
                <tr>
                  <td>{obj1.data[8].a2}</td>
                  <td>{obj1.data[8].tel[0]}</td>
                </tr>

                <tr>
                  <td className="bold">{obj1.data[9].a1}</td>
                  <td>{obj1.data[9].a2}</td>
                  <td>{obj1.data[9].a3}</td>
                  <td>{obj1.data[9].tel[0]}</td>
                </tr>

                <tr>
                  <td className="bold" rowSpan={3}>{obj1.data[10].a1}</td>
                  <td>{obj1.data[10].a2}</td>
                  <td rowSpan={2}>{obj1.data[10].a3}</td>
                  <td rowSpan={2}>{obj1.data[10].tel[0]}</td>
                </tr>
                <tr>
                  <td style={{borderRight: '1px solid #DDDDDD'}}>{obj1.data[11].a2}</td>
                </tr>
                <tr>
                  <td>{obj1.data[12].a2}</td>
                  <td>{obj1.data[12].a3}</td>
                  <td>{obj1.data[12].tel[0]}</td>
                </tr>

                <tr>
                  <td className="bold" colSpan={2}>{obj1.data[13].a2}</td>
                  <td>{obj1.data[13].a3}</td>
                  <td>{obj1.data[13].tel[0]}</td>
                </tr>

                {obj1.data.map((item, index) => {
                  if(index > 13){
                    return (
                      <tr>
                        <td className="bold"  colSpan={2}>{item.a2}</td>
                        <td>{item.a3}</td>
                        <td>{item.tel[0]}</td>
                      </tr>
                    );
                  }
                })}

              </tbody>
            </table>
          </div>

          <div className="headline mt-50">업무별 담당자</div>
          <div className="usr-table-info text-c">
            <table key={''} summary="지역별 담당자">
              <colgroup>
                <col width={'20%'} />
                <col width={'30%'} />
                <col width={'30%'} />
                <col width={'20%'} />
              </colgroup>
              <thead>
                <tr>
                  {obj2.header.map((item) => {
                    return <th>{item}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bold">{obj2.data[0].a1}</td>
                  <td>{obj2.data[0].a2[0]}<br/>{obj2.data[0].a2[1]}<br/>{obj2.data[0].a2[2]}</td>
                  <td>{obj2.data[0].a3[0]}<br/>{obj2.data[0].a3[1]}</td>
                  <td>{obj2.data[0].tel[0]}</td>
                </tr>
                <tr>
                  <td className="bold">{obj2.data[1].a1}</td>
                  <td>{obj2.data[1].a2[0]}<br/>{obj2.data[1].a2[1]}</td>
                  <td>{obj2.data[1].a3}</td>
                  <td>{obj2.data[1].tel[0]}</td>
                </tr>
                <tr>
                  <td className="bold" colSpan={2}>{obj2.data[2].a1}</td>
                  <td>{obj2.data[2].a3}</td>
                  <td>{obj2.data[2].tel[0]}</td>
                </tr>
                <tr>
                  <td className="bold" colSpan={2} rowSpan={2}>{obj2.data[3].a1}</td>
                  <td>{obj2.data[3].a3}</td>
                  <td>{obj2.data[3].tel[0]}</td>
                </tr>
                <tr>
                  <td>{obj2.data[4].a3}</td>
                  <td>{obj2.data[4].tel[0]}</td>
                </tr>
                
                {obj2.data.map((item, index) => {
                  if(index > 4 && index < 10){
                    return (
                      <tr>
                        <td className="bold"  colSpan={2}>{item.a1}</td>
                        <td>{item.a3}</td>
                        <td>{item.tel[0]}</td>
                      </tr>
                    );
                  }
                })}

                <tr>
                  <td className="bold" colSpan={2}>{obj2.data[10].a1}</td>
                  <td colSpan={2}>{obj2.data[10].a3}</td>
                </tr>
                <tr>
                  <td className="bold" colSpan={2}>{obj2.data[11].a1}</td>
                  <td>{obj2.data[11].a3}</td>
                  <td>{obj2.data[11].tel[0]}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="headline mt-50">지역별 문의처(스마트제조혁신센터)</div>
          <div className="usr-table-info text-c">
            <table key={''} summary="지역별 담당자">
              <colgroup>
                <col width={'20%'} />
                <col width={'40%'} />
                <col width={'40%'} />
              </colgroup>
              <thead>
                <tr>
                  {obj3.header.map((item) => {
                    return <th>{item}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {obj3.data.map((item) => {
                  return (
                    <tr>
                      <td className="bold">{item.a1}</td>
                      <td>{item.a2}</td>
                      <td>{item.a3}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage3;