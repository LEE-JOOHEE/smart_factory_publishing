import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import smsIcon from 'css/images/user-icons/sms-icon.png';
import ipinIcon from 'css/images/user-icons/ipin-icon.png';

const SubPage18 = ({ children }) => {

  return(
    <>

      {/* 아이디찾기 */}
      {/* 회원정보 > 아이디찾기 */}
      <Row>
        <Col span={24}>

          <div className="join-find-info grid-col-2 gap-90">
            <div className="join-find-info-wrap">
              <div className="title">성명/메일주소로 찾기<span className="highlighter"></span></div>
              <div className="sub-txt mb-22">회원가입 시 등록한 성명과 이메일주소를 입력하세요.</div>
              <div className="usr-search-form">
                <Input placeholder="성명"/>
                <Input placeholder="메일주소" className="mtb-10"/>
              </div>
              <Button className="eu-btn-crud-warning ml-0 w-full btn-h-50">확인</Button>
            </div>
            <div className="join-find-info-wrap">
              <div className="title">휴대폰/아이핀으로 찾기<span className="highlighter"></span></div>
              <div className="sub-txt mb-22">아이핀, 휴대폰 인증으로 아이디를 찾을 수 있습니다.</div>
              <div className="grid-col-2 gap-20">
                <div className="certification">
                  <img src={smsIcon} className="mb-24" alt="가입휴대폰 정보인증" />
                  가입휴대폰 정보인증
                </div>
                <div className="certification">
                  <img src={ipinIcon} className="mb-24" alt="아이핀 본인인증" />
                  아이핀 본인인증
                </div>
              </div>
            </div>
          </div>

        </Col>
      </Row>    

      {/* 비밀번호찾기 */}
      {/* 회원정보 > 비밀번호찾기 */}
      <Row>
        <Col span={24}>

          {/* <div className="join-find-info pw">
            <div className="join-find-info-wrap">
              <div className="title">휴대폰/아이핀으로 찾기<span className="highlighter"></span></div>
              <div className="sub-txt mb-22">아이핀, 휴대폰 인증으로 아이디를 찾을 수 있습니다.</div>
              <div className="grid-col-2 gap-20">
                <div className="certification">
                  <img src={smsIcon} className="mb-24" alt="가입휴대폰 정보인증" />
                  가입휴대폰 정보인증
                </div>
                <div className="certification">
                  <img src={ipinIcon} className="mb-24" alt="아이핀 본인인증" />
                  아이핀 본인인증
                </div>
              </div>
            </div>
          </div> */}

        </Col>
      </Row>  

    </>
  )
}

export default SubPage18;