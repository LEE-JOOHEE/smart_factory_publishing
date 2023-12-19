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
      {/* <Row>
        <Col span={24}>
          <div className="join-find-info pw">
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
      </Row>   */}

      {/* 2023-05-26 추가 */}
      {/* 아이디찾기 결과화면 - 찾을때 */}
      {/* <Row>
        <Col span={24}>
          <div className="search-result-form">
            <div className="search-result">
              <div className="mr-10">전정국 님이 조회하신 아이디는</div>
              <div className="text-blue mr-6">Jungko****</div>
              <div>입니다.</div>
            </div>
            <div className="sub-tab-cont-wrap mtb-40">
              <div className="org-chart-wrap-bdr ptb-32 plr-70 lh-170">
                <div>
                개인정보 보호를 위해 아이디의 일부만 보여집니다. 
                <br/>확인된 정보로도 아이디가 생각나지 않으시면 관리자에게 문의하시기 바랍니다.
                <br/>컨택센터 1644-1736
                </div>
              </div>
            </div>
            <Col spn={24}>
              <div className="flex-row-center btn-mob">
                <Button className="eu-btn-process-warning btn-h-50 plr-58" >로그인</Button>
                <Button className="eu-btn-process-error btn-h-50 plr-50">메인으로</Button>
              </div>
            </Col>
          </div> 
        </Col>
      </Row> */}

      {/* 아이디찾기 결과화면 - 못찾을때 */}
      {/* <Row>
        <Col span={24}>
          <div className="search-result-form">
            <div className="search-result">
              <div className="text-blue mr-6">jungkook</div>
              <div className="mr-6">님이</div>
              <div>입력하신 정보의 사용자를 찾지 못했습니다.</div>
            </div>
            <div className="sub-tab-cont-wrap mtb-40">
              <div className="org-chart-wrap-bdr ptb-32 plr-70 lh-170">
                <div>
                  아이디가 생각나지 않으시면 관리자에게 문의하시기 바랍니다.
                  <br/>컨택센터 1644-1736
                </div>
              </div>
            </div>
            <Col spn={24}>
              <div className="flex-row-center btn-mob">
                <Button className="eu-btn-process-warning btn-h-50 plr-50" >회원가입</Button>
                <Button className="eu-btn-process-error btn-h-50 plr-50">메인으로</Button>
              </div>
            </Col>
          </div> 
        </Col>
      </Row> */}

    </>
  )
}

export default SubPage18;