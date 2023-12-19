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
  Tag,
} from 'antd';
import { CloseOutlined, } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange, arrChange } from 'components/common/Common';
import TextArea from "antd/lib/input/TextArea";

const Sample_usr = ({ ojtGroupCodes, searchClick, editable = false }) => {
  

  return (
    <>
      


      <Col span={24} className="eu-row-comp-title mt-20">
        <TitleComp>1. 타이포</TitleComp>
      </Col>
      <Row gutter={[10, 0]}>
        <Col span={7}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <div className="font-16-500 mb-20">사용자 페이지 大 타이틀(headline)</div>
              <div className="headline">대타이틀</div>              
              <div className="headline req-r">대타이틀</div>
              <div className="headline"><span className="req-l">대타이틀</span></div>
            </Col>
            <Col span={24} style={{borderTop: '1px solid #ddd'}} className="pt-20">
              <div className="font-16-400">
                {`<div className="headline">대타이틀</div>`}
                <br/>{`<div className="headline req-r">대타이틀</div>`}
                <br/>{`<div className="headline">`}
                <br/>&nbsp;&nbsp;{`<span className="req-l">대타이틀</span>`}
                <br/>{`</div>`}
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <div className="font-16-500 mb-20">사용자 페이지 中 타이틀(tit-blue)</div>
              <div className="sub-tab-cont-wrap">
                <div className="tit-blue">중타이틀</div>
                <div className="tit-blue font-20" style={{color: "#303F9F"}}>중타이틀</div>
                <div className="tit-blue font-18 text-black">*중타이틀</div>
              </div>
            </Col>
            <Col span={24} style={{borderTop: '1px solid #ddd'}} className="pt-20">
              <div className="font-16-400">
                {`<div className="sub-tab-cont-wrap">`}
                <br/>&nbsp;&nbsp;{`<div className="tit-blue">중타이틀</div>`}
                <br/>&nbsp;&nbsp;{`<div className="tit-blue font-20" style={{color: "#303F9F"}}>중타이틀</div>`}
                <br/>&nbsp;&nbsp;{`<div className="tit-blue font-18 text-black">*중타이틀</div>`}
                <br/>{`</div>`}
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={9}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <div className="font-16-500 mb-20">사용자 페이지 텍스트(list)</div>
              <div className="sub-tab-cont-wrap">
                <div className="dot-text">점(dot) 있는 리스트 텍스트</div>
                <div className="dot-text">점(dot) 있는 리스트 텍스트
                  <p className="mb-0">아래 서브 텍스트(들여쓰기)</p>
                </div>
              </div>
            </Col>
            <Col span={24} style={{borderTop: '1px solid #ddd'}} className="pt-20">
              <div className="font-16-400">
                {`<div className="sub-tab-cont-wrap">`}
                <br/>&nbsp;&nbsp;{`<div className="dot-text">점(dot) 있는 리스트 텍스트</div>`}
                <br/>&nbsp;&nbsp;{`<div className="dot-text">점(dot) 있는 리스트 텍스트`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<p className="mb-0">아래 서브 텍스트(들여쓰기)</p>`}
                <br/>&nbsp;&nbsp;{`</div>`}
                <br/>{`</div>`}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Col span={24}>
        <Row className="eu-row-comp-title mt-60">
          <Col span={12}>
            <TitleComp>2. 시작</TitleComp>
          </Col>
          <Col span={12} className="text-r">

          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <div className="font-16-400 mb-20">
              -
            </div>
          </Col>
        </Row>
      </Col>


      







      



    </>
  );
};

export default Sample_usr;
