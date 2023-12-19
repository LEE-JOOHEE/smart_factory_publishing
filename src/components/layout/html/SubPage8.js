import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";
import { DownloadOutlined, } from "@ant-design/icons";

import SubPage8_1 from 'components/layout/html/SubPage8_1';
import SubPage8_2 from 'components/layout/html/SubPage8_2';

const SubPage8 = ({ children }) => {

  // 이미지 데이터
  const [ dataImage, setDataIamge ] = useState([
    {
      imgPath: "css/images/user-icons/user-dummy-img/dummy-1.png",
      tit: "(주)부성",
      text: "30년의 경험과 노하우를 첨단기술에 녹여내 최상의 제품을 구현하다",
    },
    {
      imgPath: "css/images/user-icons/user-dummy-img/dummy-2.png",
      tit: "(주)엘브리지",
      text: "직물, 편조원단, 의료복 염색 가공법직물, 편조원단, 의료복 염색 가공법직물, 편조원단, 의료복 염색 가공법",
    },
    {
      imgPath: "css/images/user-icons/user-dummy-img/dummy-3.png",
      tit: "(주)삼천산업",
      text: "가정용 전기기기 제조업",
    },
    {
      imgPath: "css/images/user-icons/user-dummy-img/dummy-4.png",
      tit: "(주)샤인광학",
      text: "광학렌즈 제조, 국내외 판매",
    },
    {
      imgPath: "css/images/user-icons/user-dummy-img/dummy-5.png",
      tit: "㈜아주화장품",
      text: "해외서 더 인정받는 강소기업, 스마트공장으로 글로벌 도약의 발판을 다지다",
    },
    {
      imgPath: "css/images/user-icons/user-dummy-img/dummy-6.png",
      tit: "에이비메디컬㈜",
      text: "스마트공장으로 진공채혈관 생산확대, 국내외 시장공략에 나서다",
    },
    {
      imgPath: "css/images/user-icons/user-dummy-img/dummy-7.png",
      tit: "㈜에타",
      text: "깨끗한 얼음물 한 모금을 지키기 위한 집념으로 MES를 구축하다",
    },
    {
      tit: "위니코니㈜",
      text: "반세기의 노하우, 공기주입 생활용품 전문기업으로 거듭나다",
    },
    {
      tit: "㈜지피엔",
      text: "QR코드로 공정 현황이 한눈에, PCB 시장 아우르는 신뢰의 파트너십 구축",
    },
    {
      tit: "태경산업㈜",
      text: "국내 소재산업 스마트공장의 성공적 모델이 되자!",
    },
    {
      tit: "한국상용트럭㈜",
      text: "트럭 특장차 업계의 No. 1 생산 관리의 패러다임을 스마트하게 바꾸다",
    },
  ])

  // 년도 option
  const now = new Date();
  const years = [];
  for(let y = now.getFullYear(); y >= 2015; y-= 1){
    years.push(y);
  }

  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2018 년',
  });
  // 검색조건 입력 change 메소드
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  // 우수구축사례 탭(tab)
  const [tabItemsCaseUsr, setTabItemsCaseUsr] = useState([
    { 
      label: "START UP", 
      key: "START UP",
      children: <SubPage8_1 dataImage={dataImage}/>,
    },
    { 
      label: "JUMP UP", 
      key: "JUMP UP",
      // 업체(이미지) 클릭했을때 상세보기 페이지 구현
      children: <SubPage8_2 dataImage={dataImage} />,
    },
    { 
      label: "PAIR UP", 
      key: "PAIR UP",
      children: <div className="headline">PAIR UP</div>,
    },
  ]);

  return(
    <>
      {/* 우수구축사례 */}
      {/* 홍보관 > 우수구축사례 */}

      <div className="usr-serch-bor-form mb-20">
        <div className="mr-20">
          SIMP 지원사업 플랫폼에서는 추진 성과를 널리 알리기 위해 매년 우수구축사례를 선정하고 있습니다.
        </div>
        <Select
          style={{ maxWidth: "260px" }}
          className="ml-auto"
          getPopupContainer={trigger => trigger.parentNode}
          dropdownAlign={{ offset: [0, 0] }}
          onChange={(value) => {
            ojtSrchCndChange(value, 'a');
          }}
          options={years.map((item) => ({
            label: `${item} 년`,
            value: `${item} 년`,
          }))}
          value={ojtSrchCnd?.a}
        />
      </div>

      {/* 탭이 있을때 (2016년 ~ 2018년) */}
      <Tabs items={tabItemsCaseUsr} className="eu-usr-tab column6" />

      {/* 탭이 없음 (2015년 화면) */}
      {/* <div className="pt-20">
        <SubPage8_1 />
      </div> */}



    
    </>
  )
}

export default SubPage8;