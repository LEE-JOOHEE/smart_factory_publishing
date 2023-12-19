import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Radio,
  Row,
  Select,
  Table,
  Tabs,
  Modal,
  Space,
  Tag,
  Layout,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import {  } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Sample_tabs = ({ ojtGroupCodes, searchClick, editable = false }) => {

  const [tabItems, setTabItems] = useState([
    {label: "대메뉴1", key: "대메뉴1",},
    {label: "대메뉴2", key: "대메뉴2",},
    {label: "대메뉴메뉴3", key: "대메뉴메뉴3",},
    {label: "대메뉴4", key: "대메뉴4",},
  ]);
  const [tabItemsNav, setTabItemsNav] = useState([
    {label: "사업별", key: "사업별",},
    {label: "지역별", key: "지역별",},
    {label: "규모별", key: "규모별",},
    {label: "매출별", key: "매출별",},
  ]);
  const [tabItemsCont, setTabItemsCont] = useState([
    {label: "화면1", key: "화면1",},
    {label: "화면2", key: "화면2",},
    {label: "화면3", key: "화면3",},
    {label: "화면4", key: "화면4",},
  ]);
  const [tabItemsGuide, setTabItemsGuide] = useState([
    {label: "메뉴얼1", key: "메뉴얼1",},
    {label: "메뉴얼2", key: "메뉴얼2",},
    {label: "메뉴얼3", key: "메뉴얼3",},
    {label: "메뉴얼4", key: "메뉴얼4",},
  ]);

  const [tabItemsTestBed, setTabItemsTestBed] = useState([
    { 
      label: "권역별 스마트공장 테스트베드 구축", 
      key: "권역별 스마트공장 테스트베드 구축",
      // children: <SubPage25_1/>,
    },
    { 
      label: "유틸리티성 자원 공유 지원사업", 
      key: "유틸리티성 자원 공유 지원사업",
      // children: <SubPage25_2/>,
    },
    { 
      label: "제조기술융합센터 테스트베드 구축", 
      key: "제조기술융합센터 테스트베드 구축",
      // children: <SubPage25_3/>,
    },
  ]);

  const [tabItemsTestBedLocal, setTabItemsTestBedLocal] = useState([
    { 
      label: "전남목포", 
      key: "전남목포",
      // children: <SubPage25_2_1/>,
    },
    { 
      label: "울산", 
      key: "울산",
      // children: <SubPage25_2_2/>,
    },
  ]);
  
  const [tabItemsTestBedSwitch, setTabItemsTestBedSwitch] = useState([
    { 
      label: "안전분야 공유서비스(4종)", 
      key: "안전분야 공유서비스(4종)",
      // children: <SubPage25_2_2_1/>,
    },
    { 
      label: "설비분야(5종)", 
      key: "설비분야(5종)",
      // children: <SubPage25_2_2_2/>,
    },
  ]);

  return(
    <>
      <Row className="eu-row-comp-title mt-20">
        <Col span={24}>
          <TitleComp>탭(Tabs) 디자인 샘플</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24} className="font-16-400">
          Tab 기능은 헤더탭(eu-header-tab), 네비탭(eu-nav-tab), 컨텐츠탭(eu-content-tab) 3가지로 구성을 나누었고, 
          <br/>용도에 따라 추가될수 있음. className을 어떻게 적용하는지에 따라 색상이나 크기와 모양이 다른 샘플들을 제공합니다.
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>1. 헤더 탭(eu-header-tab)</TitleComp>
          <div className="font-16-400">
            공통적으로 헤더에 대메뉴 생성할때 쓰여질 헤더탭은 자주 쓰이지 않는다.
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <Header className="eu-header-tab">
            <Tabs items={tabItems} />
          </Header>
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            {`<Header className="`}<span className="text-red">eu-header-tab</span>{`">`}
            <br/>&nbsp;&nbsp;{`<Tabs items={tabItems} />`}
            <br/>{`</Header>`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
        <TitleComp>2. 네비 탭(eu-nav-tab)</TitleComp>
          <div className="font-16-400">
            컨텐츠 탭보다 더 큰페이지를 전환할때 사용할 목적의 탭.
            <br/>베이스 레이아웃의 main content 안쪽 화면 전환을 위한 것으로 nav-tab 으로 이름정의.  
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <Tabs items={tabItemsNav} className="eu-nav-tab" />
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            <span className="text-red">{`<Tabs`} </span>
            {`items={tabItemsNav} className="`}
            <span className="text-red">eu-nav-tab</span>{`" />`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
        <TitleComp>3. 컨텐츠 탭(eu-content-tab)</TitleComp>
          <div className="font-16-400">
            컨텐츠(섹션: eu-row-page-comp-layout) 내에서 화면 전환을 위한 Tab메뉴
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Tabs items={tabItemsCont} className="eu-content-tab" />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            <span className="text-red">{`<Tabs`} </span>
            {`items={tabItemsCont} className="`}
            <span className="text-red">eu-content-tab</span>{`" />`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
        <TitleComp>4. 사용자 탭(eu-usr-tab) - 반응형 탭</TitleComp>
          <div className="font-16-400">
            사용자페이지에서 사용하는 Tab메뉴<br/>
            <span className="text-red">넓은 4컬럼(기본값) / 좁은 6컬럼</span>
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Tabs items={tabItemsCont} className="eu-usr-tab" />
            </Col>
            <Col span={24}>
              <div className="font-16-400">
                <span className="text-red">{`<Tabs`} </span>
                {`items={tabItemsCont} className="`}
                <span className="text-red">eu-usr-tab</span>{`" />`}
              </div>
            </Col>

            <Col span={24} className="mt-40">
              <Tabs items={tabItemsCont} className="eu-usr-tab column6" />
            </Col>
            <Col span={24}>
              <div className="font-16-400">
                <span className="text-red">{`<Tabs`} </span>
                {`items={tabItemsCont} className="`}
                <span className="text-red">eu-usr-tab column6</span>{`" />`}
              </div>
            </Col>

            <Col span={24} className="border-all p-30 mt-40">
              <h4 className="text-gray-700">테스트베드 추가 작업중... (CSS 적용완료)</h4>
              <Col span={24}>
                <Tabs items={tabItemsTestBed} className="eu-usr-tab test-bead" />
              </Col>
              <Col span={24}>
                <Tabs items={tabItemsTestBedLocal} className="eu-testbed-local-tab" />
              </Col>
              <Col span={24}>
                <Tabs items={tabItemsTestBedSwitch} type="card" className="eu-testbed-switch-tab" />
              </Col>
            </Col>
            <Col span={24} className="mt-30">
              <div className="font-16-400">
                <span className="text-red">{`<Tabs`} </span>
                {`items={tabItemsCont} className="`}
                <span className="text-red">eu-testbed-local-tab</span>{`" />`}
              </div>
            </Col>
            <Col span={24}>
              <div className="font-16-400">
                <span className="text-red">{`<Tabs`} </span>
                {`type="`}<span className="text-red">card</span>
                {`" items={tabItemsCont} className="`}
                <span className="text-red">eu-testbed-switch-tab</span>{`" />`}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={24}>
        <TitleComp>5. 안트디자인 카드 탭(card-tab)</TitleComp>
          <div className="font-16-400">
            안트디자인에서 기본적으로 제공하는 카드스타일 탭
            <br/><span className="text-red">※ 관리자/사용자 디자인 화면에서(퍼블리싱 할때) 카드탭은 사용하지 않는다.</span>
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <Tabs items={tabItemsGuide} type="card" />
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            <span className="text-red">{`<Tabs`} </span>
            {`items={tabItemsGuide} type="`}
            <span className="text-red">card</span>{`" />`}
          </div>
        </Col>
      </Row>


    </>
  );
}
  
export default Sample_tabs;