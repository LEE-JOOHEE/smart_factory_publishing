import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

const SubPage16 = ({ children }) => {

  return(
    <>

      {/* 로그인 */}
      {/* 회원정보 > 로그인 */}
      <Row>
        <Col span={24}>
          <div className="eu-usr-login-wrap">
            <div className="login-tit mt-60 mb-32">로그인하세요!</div>

            <div className="eu-login-box">
              <div className="eu-login-form">
                <Input placeholder="아이디" />
                <Input.Password placeholder="패스워드" className="mtb-10" />
                <Button className="eu-btn-process-warning">로그인</Button>
                <Button className="eu-btn-process-warning mt-10 bg-black">중고벤처24 이지패스</Button>
                
                <div className="line"></div>

                <div className="flex-row flex-wrap gap-col-16">
                  <Button type="link" className="eu-btn-link mr-auto">회원가입</Button>
                  <div className="flex-row-center flex-nowrap gap-16">
                    <Button type="link" className="eu-btn-link font-bold-400">아이디찾기</Button>
                    <div className="line-right"></div>
                    <Button type="link" className="eu-btn-link font-bold-400">비밀번호찾기</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* 로그인 */}
      {/* 회원정보 > 회원가입 */}
      {/* <Row>
        <Col span={24}>
          <div className="eu-usr-join-wrap">
            <div className="grid-col-2">
              <div className="col-span-1">
                <a href="/#" alt="일반사용자 회원가입" title="일반사용자 회원가입">
                  <div className="inner general-user">
                    <div className="title">
                      <span className="text-navy font-bold-700">일반사용자</span>
                      <span className="ml-6">회원가입</span>
                    </div>
                  </div>
                </a>
                <div className="inner">
                  <div className="line-tit-general"></div>
                  <div className="check">과제 신청기업, 공급기업, 컨설턴트(수행일지 작성) ,컨설팅기관,</div>
                  <div className="check">확인기관, 원가회계기관, 감리기관 담당자 및 감리법인의 소속직원</div>
                </div>
              </div>
              <div className="col-span-1">
                <a href="/#" alt="전문가 회원가입" title="전문가 회원가입">
                  <div className="inner expert-user">
                    <div className="title">
                      <span className="text-red font-bold-700">전문가</span>
                      <span className="ml-6">회원가입</span>
                    </div>
                  </div>
                </a>
                <div className="inner">
                  <div className="line-tit-expert"></div>
                  <div className="check">정보화지원사업 평가 및 심사를 위한 회원</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row> */}





      

    </>
  )
}

export default SubPage16;