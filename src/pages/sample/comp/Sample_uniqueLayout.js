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
import { PlusOutlined, MinusOutlined, } from "@ant-design/icons";

const Sample_uniqueLayout = ({ ojtGroupCodes, searchClick, editable = false }) => {

  return(
    <>
      <Row className="eu-row-comp-title mt-20">
        <Col span={24}>
          <TitleComp>변형된 레이아웃</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24} className="font-16-400">
          일반적인 레이아웃 이외에 독특한 레이아웃의 샘플을 제공합니다.
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>1. 레이아웃 2분할</TitleComp>
        </Col>
        <Col span={24}>
          <Row gutter={(0, 20)}>
            <Col span={14}>
              <Row className="eu-row-page-comp-layout">
                <Col span={24}>
                  <Row className="eu-row-comp-title mb-8">
                    <Col span={24} className="title-0">
                      <TitleComp>왼쪽</TitleComp>
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
            <Col span={10}>
              <Row className="eu-row-page-comp-layout">
                <Col span={24}>
                  <Row className="eu-row-comp-title mb-8">
                    <Col span={24} className="title-0">
                      <TitleComp>오른쪽</TitleComp>
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
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            {`<Row gutter={(0, 20)}>`}
            <br/>&nbsp;&nbsp;{`<Col span={14}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`ㆍㆍㆍ [왼쪽] 일반 레이아웃 적용 ㆍㆍㆍ`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;{`<Col span={10}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`ㆍㆍㆍ [오른쪽] 일반 레이아웃 적용 ㆍㆍㆍ`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>2. 테이블 나누기</TitleComp>
        </Col>
        <Col span={24}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Row gutter={(0, 20)}>
                <Col span={6}>
                  <Row className="eu-row-comp-title mb-12">
                    <Col span={24} className="title-0">
                      <TitleComp>왼쪽</TitleComp>
                    </Col>
                  </Row>
                  <Row className="eu-row-comp-cont">
                    <Col span={24}>
                      <Table size="small" bordered />
                    </Col>
                  </Row>
                </Col>
                <Col span={18}>
                  <Row className="eu-row-comp-title mb-8">
                    <Col span={15}>
                      <Space>
                        <div className="font-16-500">문서제한용량</div>
                        <Input style={{width: '72px'}} />
                        <div className="font-16-500">MB</div>
                      </Space>
                      <Space className="ml-50">
                        <div className="font-16-500">평가표시적용</div>
                        <Select
                          getPopupContainer={trigger => trigger.parentNode}
                          dropdownAlign={{ offset: [0, 0] }}
                          className="text-l"
                          style={{ width: 100 }}
                          options={[{value: '', label: '미적용'},]}
                          defaultValue={''}
                        />
                      </Space>
                    </Col>
                    <Col span={9} style={{ textAlign: 'right' }}>
                      <Button className="eu-btn-row-insert" icon={<PlusOutlined />}>행추가</Button>
                      <Button className="eu-btn-row-delete" icon={<MinusOutlined />}>행삭제</Button>
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
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Row gutter={(0, 20)}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={6}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-12">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24} className="title-0">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<TitleComp>왼쪽</TitleComp>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}     
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}                    
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={18}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-title mb-8">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={15}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Space>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="font-16-500">문서제한용량</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Input style={{width: '72px'}} />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="font-16-500">MB</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Space>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Space className="ml-50">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="font-16-500">평가표시적용</div>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Select`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`getPopupContainer={trigger => trigger.parentNode}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`dropdownAlign={{ offset: [0, 0] }}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`className="text-l"`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`style={{ width: 100 }}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`options={[{value: '', label: '미적용'},]}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`defaultValue={''}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Space>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={9} style={{ textAlign: 'right' }}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-row-insert" icon={<PlusOutlined />}>행추가</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-row-delete" icon={<MinusOutlined />}>행삭제</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-crud-fine">조회</Button>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="eu-row-comp-cont">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>3. 추후에 나올 다른 특이한 레이아웃</TitleComp>
        </Col>
        <Col span={24}>

        </Col>
      </Row>


      <br/><br/>

    
      

    
    </>
  );
}

export default Sample_uniqueLayout;