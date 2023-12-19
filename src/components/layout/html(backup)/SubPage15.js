import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import mapSample from 'css/images/map-sample.png';

const SubPage15 = ({ children }) => {

  const obj1 = {
    header: ["이름","직위","담당업무","전화번호"],
    data: [
      {group: '제조혁신 기획실', a1: '윤만영', a2: '실장',   a3: '010-2380-7713',  a4: ['제조혁신기획실 업무총괄',],}, 
      {group: '제조혁신 기획실', a1: '송치평', a2: '팀장',   a3: '010-3009-5359',  a4: ['경영기획 업무 총괄',],}, 
      {group: '제조혁신 기획실', a1: '한결'	, a2: '책임',   a3: '010-8345-4644',  a4: ['스마트 제조혁신 중장기 계획 수립 및 지원정책 연구', '정책 기획 관련 요구자료 대응'],},
      {group: '제조혁신 기획실', a1: '남혜진', a2: '선임',   a3: '010-6639-0650',  a4: ['정책자문위원회 운영 및 관리', '해외정책 모니터링 및 조사, 간행물 발간',],},
      {group: '제조혁신 기획실', a1: '김혜림', a2: '선임',   a3: '010-2246-4064',  a4: ['스마트 제조혁신 신규사업 발굴 및 기획', '제조혁신 정책 통계 관리',],},
      {group: '제조혁신 기획실', a1: '신준영', a2: '주임',   a3: '010-9947-9098',  a4: ['스마트공장 표준 개발 및 확산 총괄', '표준기술자문위원회·분과 운영 및 관리', '해외기관 협력네트워크 발굴 및 구축',],},
      {group: '제조혁신 기획실', a1: '박정익', a2: '주임',   a3: '010-7917-2170',  a4: ['추진단 경영 관련 요구자료 대응', '예·결산, 국회 등 대내외 대응', '추진단 예산 편성·운용',],},
      {group: '제조혁신 기획실', a1: '한민지', a2: '주임',   a3: '010-3589-4811',  a4: ['추진단 기관 홍보 및 행사 기획', '스마트제조혁신 포상 운영 관리',],},
      {group: '제조혁신 기획실', a1: '신아영', a2: '사무원', a3: '010-2479-0321',  a4: ['단장실 의전', '인장관리', '단장님 지시사항 관리 등',],},
      {group: '제조혁신 기획실', a1: '임대현', a2: '운전원', a3: '010-9426-7934',  a4: ['단장 수행', '기관차량 관리',],},
      {group: '제조혁신 기획실', a1: '배세빈', a2: '인턴',   a3: '010-9099-7626',  a4: ['제조혁신기획실 업무지원',],},
      {group: '제조혁신 기획실', a1: '김민준', a2: '인턴',   a3: '010-4294-2399',  a4: ['제조혁신기획실 업무지원',],},

      {group: '제조데이터 전략실', a1: '배상우', a2: '실장',  a3: '010-3807-7396', a4: ['제조데이터전략실 업무총괄',],},
      {group: '제조데이터 전략실', a1: '임규식', a2: '책임',  a3: '010-4381-3699', a4: ['데이터인프라구축사업 관리', '신규사업 기획 및 대내외 자료 대응 ',],},
      {group: '제조데이터 전략실', a1: '문종근', a2: '주임',  a3: '010-7154-1414', a4: ['제조데이터 촉진자 양성사업 운영', '대내외 자료 대응',],},
      {group: '제조데이터 전략실', a1: '이재현', a2: '주임',  a3: '010-6730-8086', a4: ['AI 컨설팅·실증사업 관리', '지역특화 제조데이터 활성화 사업 운영',],},
      {group: '제조데이터 전략실', a1: '장용희', a2: '주임',  a3: '010-9724-7779', a4: ['메타버스팩토리 실증사업 관리', '신규사업 기획',],},
      {group: '제조데이터 전략실', a1: '김초희', a2: '주임',  a3: '010-8362-3835', a4: ['AI 컨설탕·실증사업 관리', '제조데이터 촉진자 양성사업 관리',],},

      {group: '보급 확산실', a1: '양홍석', a2: '실장',  a3: '010-4617-9926', a4: ['보급확산실 총괄','','',],},
      {group: '보급 확산실', a1: '이민영', a2: '책임',  a3: '010-7364-1892', a4: ['선도형 스마트공장 기획 총괄','선도형 스마트공장 사업 및 평가 관리(투자연계형)','스마트 마이스터 기획·관리',],},
      {group: '보급 확산실', a1: '신형인', a2: '책임',  a3: '010-4452-2773', a4: ['선도형 스마트공장 사업 기획(상생형, 공급망연계형, 디지털클러스터, K-등대)','선도형 스마트공장 사업 및 평가 관리','대·내외 자료대응',],},
      {group: '보급 확산실', a1: '임인근', a2: '선임',  a3: '010-9930-5411', a4: ['선도형 스마트공장 사업 기획(일반형, 부처협업형, 탄소중립)','선도형 스마트공장 사업 및 평가 관리','대내외 자료대응',],},
      {group: '보급 확산실', a1: '박형민', a2: '주임',  a3: '010-9885-5917', a4: ['스마트공장 수준확인제도 기획·관리','스마트공장 교육 기획·관리','',],},
      {group: '보급 확산실', a1: '최훈석', a2: '주임',  a3: '010-4715-1026', a4: ['선도형 스마트공장 사업 및 평가 관리(대중소상생형, 공급망연계형, K-등대)','시범공장 견학 운영 관리','',],},
      {group: '보급 확산실', a1: '윤상하', a2: '주임',  a3: '010-6394-4067', a4: ['선도형 스마트공장 사업 및 평가 관리(일반형, 부처협업형)','스마트 전문가 pool 운영 관리','스마트공장 보급·확산 정산·환수 관리',],},
      {group: '보급 확산실', a1: '김선아', a2: '주임',  a3: '010-9166-8806', a4: ['선도형 스마트공장 사업 및 평가 관리(일반형, 탄소중립형)','원가계산기관 및 감리기관 운영 관리','',],},
      {group: '보급 확산실', a1: '김홍기', a2: '주임',  a3: '010-2776-8650', a4: ['제재조치 운영 TF 업무지원(~23.2.28)','','',],},
      {group: '보급 확산실', a1: '이진형', a2: '주임',  a3: '010-8784-1068', a4: ['제재조치 운영 TF 업무지원(~23.3.31)','','',],},
      {group: '보급 확산실', a1: '박진우', a2: '인턴',  a3: '010-2687-7735', a4: ['스마트공장 보급확산 사업 지원','','',],},

      {group: '혁신기반 조정실', a1: '곽문현', a2: '실장',  a3: '',              a4: ['혁신기반조성실 업무총괄','','',],},
      {group: '혁신기반 조정실', a1: '이재우', a2: '책임',  a3: '010-3043-2772', a4: ['스마트공장 R&D 업무총괄','제조혁신 R&D 신규사업 기획','',],},
      {group: '혁신기반 조정실', a1: '이정환', a2: '주임',  a3: '010-9753-8710', a4: ['스마트 제조혁신 R&D 총괄','유망기술 발굴 및 기술동향 조사','현장수요형·스마트센서R&D 지원','제재조치 운영 TF 업무지원(~23.3.31)',],},
      {group: '혁신기반 조정실', a1: '황윤아', a2: '주임',  a3: '010-5098-6712', a4: ['스마트센서 선도프로젝트 R&D 총괄','스마트 제조혁신 R&D 지원','현장수요형 스마트공장 R&D 지원',],},
      {group: '혁신기반 조정실', a1: '김소원', a2: '주임',  a3: '010-5261-3864', a4: ['현장수요형 스마트공장 R&D 총괄','스마트 제조혁신 R&D 지원','스마트센서 선도프로젝트 R&D 지원',],},
      {group: '혁신기반 조정실', a1: '차철원', a2: '책임',  a3: '010-9890-0916', a4: ['제조혁신 기반조성 사업 기획 총괄','공급기업 육성전략 수립 및 역량진단 연구','스마트제조혁신 법제화 대응',],},
      {group: '혁신기반 조정실', a1: '장종준', a2: '주임',  a3: '010-5144-5898', a4: ['제조기술융합센터 테스트베드 구축 사업관리','권역별 테스트베드 구축 사업관리','유틸리티성 자원공유 지원 사업관리',],},
      {group: '혁신기반 조정실', a1: '백경민', a2: '책임',  a3: '010-6399-8551', a4: ['제조혁신 디지털 지원사업 기획','클라우드형스마트공장 종합솔루션 총괄','클라우드기반 솔루션개발 사업 총괄','스마트공장 사업관리시스템 구축운영 총괄',],},
      {group: '혁신기반 조정실', a1: '김희수', a2: '주임',  a3: '010-9658-1158', a4: ['제조데이터공동활용플랫폼 R&D 총괄','클라우드기반 솔루션개발 사업관리','클라우드형 스마트공장 종합솔루션 지원',],},
      {group: '혁신기반 조정실', a1: '최욱진', a2: '주임',  a3: '010-9810-2626', a4: ['스마트공장 사업관리시스템 구축ㆍ운영 관리','시스템 민원ㆍSR 관리 및 RCMS 연계 관리','디지털라이브러리 및 로그기록 수집 운영 관리',],},

      {group: '스마트 사후관리실', a1: '이찬형',    a2: '실장',     a3: '010-3791-5582', a4: ['스마트사후관리실 총괄','','',],},
      {group: '스마트 사후관리실', a1: '김보민',    a2: '팀장',     a3: '010-2501-4036', a4: ['스마트공장&R&D 사후관리 실무총괄','특별점검 운영계획 수립·관리','스마트공장 문제과제 점검·사후관리 계획',],},
      {group: '스마트 사후관리실', a1: '김형도',    a2: '전문위원', a3: '010-2953-0802', a4: ['행정심판 및 소송 총괄 및 대응','수사의뢰 및 사후관리 지원(법률자문 등)','스마트공장 사후관리관련 규정 제·개정 검토',],},
      {group: '스마트 사후관리실', a1: '김다슬린',  a2: '주임',     a3: '010-3693-7337', a4: ['스마트공장 로그기록 관리 계획, 운영','대내외 신고․민원 대응 및 특별점검','특별점검반 관리·지원',],},
      {group: '스마트 사후관리실', a1: '이선진',    a2: '주임',     a3: '010-2319-8659', a4: ['문제과제 제재(환수) 관리, 채권추심','스마트공장 금융지원, 인재채용관 운영','',],},
      {group: '스마트 사후관리실', a1: '이승미',    a2: '인턴',     a3: '010-3432-2450', a4: ['스마트사후관리실 업무지원','','',],},
      {group: '스마트 사후관리실', a1: '이정환',    a2: '주임',     a3: '010-9753-8710', a4: ['제재 조치운영TF','제재조치 운영 계획','제재조치위원회 구성 및 운영','제재조치 이행관리(참여제한, 환수, 수사의뢰)'],},
      {group: '스마트 사후관리실', a1: '김홍기',    a2: '주임',     a3: '010-2776-8650', a4: ['제재 조치운영TF','제재조치 운영 계획','제재조치위원회 구성 및 운영','제재조치 이행관리(참여제한, 환수, 수사의뢰)'],},
      {group: '스마트 사후관리실', a1: '이진형',    a2: '주임',     a3: '010-8784-1068', a4: ['제재 조치운영TF','제재조치 운영 계획','제재조치위원회 구성 및 운영','제재조치 이행관리(참여제한, 환수, 수사의뢰)'],},
      
      {group: 'DX기획 그룹', a1: '정호용', a2: '그룹장',    a3: '010-3246-1769', a4: ['DX기획그룹 총괄','','',],},
      {group: 'DX기획 그룹', a1: '강경미', a2: '전문위원',  a3: '010-3525-0826', a4: ['중소기업 정보화수준조사 총괄','국가전략기술 프로젝트(가상제조) 대응 및 지원','가상제조 예타대응 및 지원',],},
      {group: 'DX기획 그룹', a1: '권준영', a2: '전문위원',  a3: '010-9224-9093', a4: ['중소기업 디지털전환 신규사업 발굴·기획','중소기업 디지털전환 중장기 전략 기획','디지털전환 지수개발 총괄',
        '추진단 소관 정책자문단 운영·관리','중소기업 디지털전환 관련 정책연구','기타 중소기업 디지털전환 관련 업무',],},
    ]
  }

  const [newParam, setNewParam] = useState('제조혁신 기획실');
  const clickHandler = (param) => {
    setNewParam(`${param}`)
  }

  return(
    <>

      {/* 조직도 */}
      {/* 기관소개 > 조직도 */}
      <Row>
        <Col span={24}>

          <div className="intro-org-chart">
            <div className="org-chart-wrap">
              <div className="grid-col-1 grid-center">
                <div className="items-5"><div className="">스마트제조혁신추진단장</div></div>
                <div className="line-b-lg"></div>
                <div className="items-2"><div className="">제조혁신본부</div></div>
                <div className="line-b-sm"></div>
              </div>

              <div className="grid-col-6 gap-20">
                <div className="col-span-1">
                  <div className="line-b-sm"></div>
                  <div className="items-1 flex-row-center">
                    <div className="link" onClick={() => clickHandler("제조혁신 기획실")}>제조혁신 기획실</div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="line-b-sm"></div>
                  <div className="items-1 flex-row-center">
                    <div className="link" onClick={() => clickHandler("제조데이터 전략실")}>제조데이터 전략실</div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="line-b-sm"></div>
                  <div className="items-1 flex-row-center">
                    <div className="link" onClick={() => clickHandler("보급 확산실")}>보급 확산실</div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="line-b-sm"></div>
                  <div className="items-1 flex-row-center">
                    <div className="link" onClick={() => clickHandler("혁신기반 조정실")}>혁신기반 조정실</div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="line-b-sm"></div>
                  <div className="items-1 flex-row-center">
                    <div className="link" onClick={() => clickHandler("스마트 사후관리실")}>스마트 사후관리실</div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="line-b-sm"></div>
                  <div className="items-1 flex-row-center">
                    <div className="link" onClick={() => clickHandler("DX기획 그룹")}>DX기획 그룹</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-16-400 text-gray-700 mt-30 flex-row flex-wrap">
              <span className="ml-auto">해당부서를 클릭하시면 자세한 정보를</span>
              <span className="pl-4">확인하실 수 있습니다.</span>
            </div>
          </div>


            <div className="headline mt-46">{newParam}</div>
            <div className="usr-table-info">
              <table key={''} summary="테이블정보">
                <colgroup>
                  <col width={'15%'} />
                  <col width={'15%'} />
                  <col width={'40%'} />
                  <col width={'20%'} />
                </colgroup>
                <thead>
                  <tr>
                    {obj1.header.map((item) => {
                      return <th>{item}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/* 2023-03-06 조제봉 부장님으로 부터 메일로 전달받은 조직도 수정요청.hwp 파일 데이터 기반 */}
                  {obj1.data.map((item, index) => {
                    if(item.group === newParam){
                      return (
                        <tr>
                          <td className="bold">{item.a1}</td>
                          <td className="text-c">{item.a2}</td>
                          <td>
                            {item.a4.map((itemWork, index) => {
                              return(
                                <>
                                  {itemWork === '' ? <div className=""></div>
                                    : <div className="dot-text pb-0">{itemWork}</div>}
                                </>
                              )
                            })}
                          </td>
                          <td className="text-c">{item.a3}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>

        </Col>
      </Row>


      {/* 찾아오시는 길 */}
      {/* 기관소개 > 찾아오시는 길 */}
      {/* <Row>
        <Col span={24}>

          <div className="headline">스마트제조혁신추진단</div>
          <div className="map-api-wrap" style={{ width: '100%', height: '624px', border: '1px solid #DDD'}}>
            <img src={mapSample} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover'}} />
          </div>

          <div className="mt-34">
            <div className="font-18 font-bold-400 text-gray-500 flex-row flex-wrap">
              <div className="font-bold-500 mr-26 text-black">주소</div>
              세종특별자치시 집현중앙로 79, 스마트제조혁신추진단
            </div>
          </div>
          
        </Col>
      </Row> */}

    </>
  )
}

export default SubPage15;