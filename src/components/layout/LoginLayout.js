import React, { useState, useEffect } from 'react';
import { Layout, Button, Menu, Tooltip, Select, Tabs, Input, Space } from 'antd';
import '/node_modules/antd/dist/antd.css';
import LoginLogoImage from "css/images/logo-login.png";
import LoginPageIcon1 from "css/images/login-page-icon-1.svg";

const { Header, Sider, Content } = Layout;

const LoginLayout = ({ children }) => {


  return (
    <>
    
      <div className="eu-login-body">
        <div className="eu-login-container">
          <div className="eu-login-box">
            <div className="eu-login-form">
              <div className="sub-text mb-4">시스템관리자 / 일반관리자</div>
              <img src={LoginLogoImage} alt="로그인 로고이미지" className="mb-20" />
              <Input placeholder="아이디" />
              <Input.Password placeholder="패스워드" className="mtb-10" />
              <Input placeholder="SNS인증번호를 입력해주세요." className="mb-10"
                suffix={<Button className="eu-btn-table-error">인증번호 재발송</Button>}
              />
              <Button className="eu-btn-process-warning">로그인</Button>
              <div className="flex-row-center gap-16 mt-20">
                <Button type="link" className="eu-btn-link">관리자 권한신청 양식다운로드</Button>
                <div className="line-right"></div>
                <Button type="link" className="eu-btn-link">관리자 권한신청</Button>
              </div>
            </div>
            <div className="line-bottom"></div>
            <div className="eu-login-form-text-area">
              <img src={LoginPageIcon1} alt="로그인페이지 아이콘" className="mr-20" />
              <div>
                회원 여러분이 통합사업관리시스템 사이트이용에 불편함이 없도록 최선을 다하겠습니다.
                <br/>회원의 개인정보를 사전동의 없이 공개하지 않습니다.
                <br/>회원의 개인정보가 보호받을 수 있도록 최선을 다하고 있으며, 
                개인정보보호정책에 의해 보호받고 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default LoginLayout;