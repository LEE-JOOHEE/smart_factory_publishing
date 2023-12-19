import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";

import infoImage1 from 'css/images/user-icons/info-image-1.png';
import infoImage2 from 'css/images/user-icons/info-image-2.png';

const SubPage6 = ({ children }) => {


  return(
    <>
      {/* 스마트공장소개 */}
      {/* 홍보관 > 스마트공장소개 */}

      <div className="headline mb-12">정의</div>
      <div className="eu-text">
        스마스마트공장은 제품의 기획부터 판매까지 모든 생산과정을 ICT(정보통신)기술로 통합해 
        최소 비용과 시간으로 고객 맞춤형 제품을 생산하는 사람 중심의 첨단 지능형 공장이다.
      </div>
      <div className="eu-img-wrap">
        <img src={infoImage1} alt="스마크공장소개이미지" className="eu-img mt-50 mb-60" />
      </div>

      <div className="headline mt-60 mb-12">적용 범위</div>
      <div className="tit-blue font-bold-500">제품을 생산하는 공정만 바뀐다고 해서 ‘스마트공장’ 일까? 아니다.</div>
      <div className="eu-text">
        스마트공장은 제품 기획·개발부터 양산까지, 주문에서부터 완제품 출하까지 제조 관련 모든 과정을 말한다.
        <br/>응용 시스템뿐 아니라 현장자동화와 제어자동화 영역까지 공장 운영의 모든 부분을 포함하는 것이다.
      </div>
      <div className="eu-img-wrap">
        <img src={infoImage2} alt="스마크공장소개단계별" className="eu-img mtb-70" />
      </div>

      <div className="headline mt-60 mb-12">단계별로 본 스마트공장</div>
      <div className="eu-text">
        스마트공장의 ICT 기술의 활용 정도 및 역량 등에 따라 ‘구축시스템 스마트화 수준(기초 – 중간1 - 중간2 – 고도)’을 구분하고 있다.
        <br/>*기업의 종합적인 스마트 역량을 측정하여 ‘기업제조혁신역량 수준(Level 1 ~ 5)’으로 구분하고 있다.
        <br/>스마트공장 도입을 고민 중인 기업이라면, 첫 단계부터 고도 수준을 걱정할 필요는 없다.
        <br/>스마트공장은 기업의 여력이나 상황에 따라 점진적으로 구현 가능하기 때문에 기업의 사정에 따라 적절한 수준 및 기능을 선택해 집중 하는 것이 중요하다.
        <br/>현재 많은 중소기업들이 비교적 적은 비용으로 쉽게 시작할 수 있는 기초 단계를 구축하고 있으며 기대 이상의 성과에 만족하고 있다.
        <br/>기초 단계라 해도 실시간 만들어지는 제품을 바로 집계해 관리할 수 있고 자재 이력관리(lot-tracking)까지 가능하다.
        <br/>이 정도면 스마트공장 도입 전과 후, 확실히 다르지 않을까?
      </div>

      <div className="tit-blue mt-50" style={{color: "#303F9F"}}>기업에 맞는 단계적 구축이 가능합니다.</div>
      <div className="usr-table-info text-c">
        <table key={''} summary="테이블정보">
          <colgroup>
            <col width={'12%'} />
            <col width={'16%'} />
            <col width={'16%'} />
            <col width={'16%'} />
            <col width={'24%'} />
            <col width={'16%'} />
          </colgroup>
          <thead>
            <tr>
              <th>구분</th>
              <th>현장자동화</th>
              <th>공장운영</th>
              <th>기업자원관리</th>
              <th>제품개발</th>
              <th>공급사슬관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bold" rowSpan={2}>고도</td>
              <td colSpan={4}>IoT / IoS 기반의 CPS화</td>
              <td rowSpan={2}>인터넷 공간 상의 비즈니스<br/>CPS 네트워크 협업</td>
            </tr>
            <tr>
              <td>IoT / IoS 화</td>
              <td colSpan={3} style={{borderRight:"1px solid #DDD"}}>IoT / IoS (모듈)화 빅데이터 기반의 진단 및 운영</td>
            </tr>
            <tr>
              <td className="bold">중간2</td>
              <td>설비제어 자동화</td>
              <td>설비제어 자동화</td>
              <td>실시간 공장제어</td>
              <td>시뮬레이션과 일괄 프로세스 자동화</td>
              <td>다품종 개발 협업</td>
            </tr>
            <tr>
              <td className="bold">중간1</td>
              <td>설비데이터 자동집계</td>
              <td>설비데이터 자동집계</td>
              <td>실시간 의사결정</td>
              <td>기술 정보 생성 자동화와 협업</td>
              <td>다품종 생산 협업</td>
            </tr>
            <tr>
              <td className="bold">기초</td>
              <td>실적집계 자동화</td>
              <td>실적집계 자동화</td>
              <td>공정물류 관리(POP)</td>
              <td>서버를 통한 기술/납기 관리</td>
              <td>단일 모기업 의존</td>
            </tr>
            <tr>
              <td className="bold">ICT 미적용</td>
              <td>수작업</td>
              <td>수작업</td>
              <td>수작업</td>
              <td>수작업</td>
              <td>전화와 이메일 협업</td>
            </tr>
          
          </tbody>
        </table>
      </div>

      <div className="headline mt-60 mb-12">5대 요건</div>
      <div className="eu-text">
        아래는 스마트공장을 구성하고 수준 별로 발전시킴에 있어서 꼭 필요한 다섯 가지 조건이다.
      </div>
      <div className="five-req grid-col-4 gap-30 mt-50 pb-10">
        <div className="col-span-1">
          <div className="five-req-tit">4M + 1E의 디지털화</div>
        </div>
        <div className="col-span-3">
          <div className="five-req-text">
            4M+1E의 각 요소 (Man, Machin-ery, Material, Method, Environ-ment) 들의 
            <br/>실시간으로 디지털 값을 인지하고, 측정 가능한 정보를 제공해야 하며, 통신을 통해 대화가 가능해야 함
          </div>
        </div>

        <div className="col-span-1">
          <div className="five-req-tit">지능화</div>
        </div>
        <div className="col-span-3">
          <div className="five-req-text">
            알고리즘 또는 인공지능 등의 솔루션을 이용, 최적해 또는 예측가능한 해를 제공해야 함
          </div>
        </div>

        <div className="col-span-1">
          <div className="five-req-tit">통합</div>
        </div>
        <div className="col-span-3">
          <div className="five-req-text">
            사회망과 가치사슬을 통해 단대단 (End-to-end) 의 정보 교류가 이뤄지도록 하는 수평적 통합과 
            <br/>최하위 수준인 기계장치부터 기업비즈니스 수준까지 수직적 통합을 지향
          </div>
        </div>

        <div className="col-span-1">
          <div className="five-req-tit">엔지니어링 지식의 창출</div>
        </div>
        <div className="col-span-3">
          <div className="five-req-text">
            지속해서 정보를 확보하고 저장한 후, 이를 바탕으로 자동화를 위한 제조 지식을 점진적으로 창출할 수 있어야함
          </div>
        </div>

        <div className="col-span-1">
          <div className="five-req-tit">스마트 시스템과의 연결</div>
        </div>
        <div className="col-span-3">
          <div className="five-req-text">
            향후에 발전할 수마트 제품들과 통신 표준에 의거해 연결이 가능해야함
          </div>
        </div>
      </div>

    
    </>
  )
}

export default SubPage6;