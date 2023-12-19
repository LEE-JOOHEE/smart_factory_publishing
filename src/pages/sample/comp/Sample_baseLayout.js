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
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { PlusOutlined , MinusOutlined } from '@ant-design/icons';

const Sample_baseLayout = ({ ojtGroupCodes, searchClick, editable = false }) => {

  return(
    <>
      <Row className="eu-row-comp-title mt-20">
        <Col span={24}>
          <TitleComp>일반 레이아웃</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24} className="font-16-400">
          기본적으로 레이아웃은 "eu-row-page-comp-layout" (한 섹션, 테두리) 으로 구성합니다.
          <br/><br/>
          "eu-row-page-comp-layout" 안쪽에<br/>
          "eu-row-comp-title" 제목과 "eu-row-comp-cont" 컨텐츠가 위치하는 구조입니다.
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>1. 제목만 있을때</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>제목</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title">
                <Col span={24}>
                  <TitleComp>제목</TitleComp>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>1-1. 제목만 있을때 (단위 추가)</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>사업비 지급`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="eu-unit">( 단위 : 원 / VAT별도 )</span>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title">
                <Col span={24}>
                  <TitleComp>사업비 지급
                    <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
                  </TitleComp>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>2. 제목 + 버튼</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={12}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>제목</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={12} style={{ textAlign: 'right' }}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-crud-fine">조회</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title">
                <Col span={12}>
                  <TitleComp>제목</TitleComp>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                  <Button className="eu-btn-crud-fine">조회</Button>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>3. 제목 + (오른쪽) 텍스트 1줄 일때만</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-12">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={6} className="title-0">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>제목</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={18} className="mt-auto">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="font-16-400 text-red ml-auto">※ 보충설명</span>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-12">
                <Col span={6} className="title-0">
                  <TitleComp>제목</TitleComp>
                </Col>
                <Col span={18} className="mt-auto">
                  <div className="eu-table-indicator">
                    <span className="font-16-400 text-red ml-auto">※ 보충설명</span>
                  </div>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>4. 제목 + 텍스트 여러줄, 긴 경우</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-12">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>제목</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="font-16-400 text-red">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`* 보충설명1<br/>* 보충설명2<br/>* 보충설명3`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</span>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-12">
                <Col span={24}>
                  <TitleComp>제목</TitleComp>
                </Col>
                <Col span={24}>
                  <div className="eu-table-indicator">
                    <span className="font-16-400 text-red">
                      * 보충설명1<br/>* 보충설명2<br/>* 보충설명3
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>5. 제목 + 버튼 + 텍스트 여러줄, 긴 경우</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-12">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={12}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>제목</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={12} style={{ textAlign: 'right' }}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-row-insert" icon={<PlusOutlined />}>행추가</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-row-delete" icon={<MinusOutlined />}>행삭제</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="font-16-400 text-red">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`* 보충설명1<br/>* 보충설명2<br/>* 보충설명3`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</span>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-12">
                <Col span={12}>
                  <TitleComp>제목</TitleComp>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                  <Button className="eu-btn-row-insert" icon={<PlusOutlined />}>행추가</Button>
                  <Button className="eu-btn-row-delete" icon={<MinusOutlined />}>행삭제</Button>
                </Col>
                <Col span={24}>
                  <div className="eu-table-indicator">
                    <span className="font-16-400 text-red">
                      * 보충설명1<br/>* 보충설명2<br/>* 보충설명3
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>6. 제목 + (테이블)총 건수</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-8">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>제목</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="count">총`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="text-blue font-bold-500 ml-4">3</span>건`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-8">
                <Col span={24}>
                  <TitleComp>제목</TitleComp>
                </Col>
                <Col span={24}>
                  <div className="eu-table-indicator">
                    <div className="count">총
                      <span className="text-blue font-bold-500 ml-4">3</span>건
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>7. 제목 + (테이블)총 건수 + 버튼</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-8">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24} className="title-0">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>제목</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={12} className="mt-auto">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="count">총`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="text-blue font-bold-500 ml-4">3</span>건`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={12} style={{ textAlign: 'right' }}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-crud-fine">조회</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-8">
                <Col span={24} className="title-0">
                  <TitleComp>제목</TitleComp>
                </Col>
                <Col span={12} className="mt-auto">
                  <div className="eu-table-indicator">
                    <div className="count">총
                      <span className="text-blue font-bold-500 ml-4">3</span>건
                    </div>
                  </div>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                  <Button className="eu-btn-crud-fine">조회</Button>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>8. 제목 없고 + 총 건수 만</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-8">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="count">총`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="text-blue font-bold-500 ml-4">8453</span>건`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="line"></div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="font-bold-500 ml-16">컨설팅지원사업</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="text-blue ml-4">(2019년 스마트역량강화과제 자동신청)</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-8">
                <div className="eu-table-indicator">
                  <div className="count">총
                    <span className="text-blue font-bold-500 ml-4">8453</span>건
                  </div>
                  <div className="line"></div>
                  <div className="font-bold-500 ml-16">컨설팅지원사업</div>
                  <div className="text-blue ml-4">
                    (2019년 스마트역량강화과제 자동신청)
                  </div>
                </div>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>9. 제목 없고 + 총 건수 + (오른쪽)텍스트</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-8">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={6} className="mt-auto">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="count">총`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="text-blue font-bold-500 ml-4">999</span>건`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={18} style={{ textAlign: 'right' }}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="font-16-400 text-red ml-auto">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`※ 보충설명<br/>※ 보충설명보충설명</span>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-8">
                <Col span={6} className="mt-auto">
                  <div className="eu-table-indicator">
                    <div className="count">총
                      <span className="text-blue font-bold-500 ml-4">999</span>건
                    </div>
                  </div>
                </Col>
                <Col span={18} style={{ textAlign: 'right' }}>
                  <div className="eu-table-indicator">
                    <span className="font-16-400 text-red ml-auto">※ 보충설명<br/>※ 보충설명보충설명</span>
                  </div>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>10. 제목 없고 + 총 건수 + 버튼(셀렉트박스)</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-8">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={6} className="mt-auto">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="count">총`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="text-blue font-bold-500 ml-4">3</span>건`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={18} style={{ textAlign: 'right' }}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Space>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Select`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`getPopupContainer={trigger => trigger.parentNode}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`dropdownAlign={{ offset: [0, 0] }}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`className="text-l"`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`style={{ width: 150 }}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`options={[{value: '', label: '선택'},]}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`defaultValue={''}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-excel-download">조회</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Space>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-8">
                <Col span={6} className="mt-auto">
                  <div className="eu-table-indicator">
                    <div className="count">총
                      <span className="text-blue font-bold-500 ml-4">3</span>건
                    </div>
                  </div>
                </Col>
                <Col span={18} style={{ textAlign: 'right' }}>
                  <Space>
                    <Select
                      getPopupContainer={trigger => trigger.parentNode}
                      dropdownAlign={{ offset: [0, 0] }}
                      className="text-l"
                      style={{ width: 150 }}
                      options={[{value: '', label: '선택'},]}
                      defaultValue={''}
                    />
                    <Button className="eu-btn-excel-download">엑셀다운로드</Button>
                  </Space>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>11. 제목 없고 + 버튼이 많을 때</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-20">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={12}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-crud-warning">조회</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-crud-fine">조회</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={12} style={{ textAlign: 'right' }}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-crud-default">조회</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-crud-error">조회</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-8">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-table-indicator">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="count">총`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span className="text-blue font-bold-500 ml-4">8453</span>건`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-20">
                <Col span={12}>
                  <Button className="eu-btn-crud-warning">조회</Button>
                  <Button className="eu-btn-crud-fine">조회</Button>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                  <Button className="eu-btn-crud-default">조회</Button>
                  <Button className="eu-btn-crud-error">조회</Button>
                </Col>
              </Row>
              <Row className="eu-row-comp-title mb-8">
                <div className="eu-table-indicator">
                  <div className="count">총
                    <span className="text-blue font-bold-500 ml-4">8453</span>건
                  </div>
                </div>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table size="small" bordered />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

    </>
  );
}

export default Sample_baseLayout;