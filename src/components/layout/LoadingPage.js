import React, { useState, useEffect } from 'react';
import { Layout, Button, Menu, Tooltip, Select, Tabs, Input, Space, Spin } from 'antd';
import '/node_modules/antd/dist/antd.css';
import LoginLogoImage from "css/images/logo-loading.png";

const { Header, Sider, Content } = Layout;

const LoadingPage = ({ children }) => {


  return (
    <>
    
      <div className="eu-loading-page-body">
        <div className="eu-loading-container">
          <img src={LoginLogoImage} alt="로고이미지" className="loading-logo" />
          <div className="eu-loading-box">
            <div className="h3 mb-6">해당 화면으로 이동 중 이니 잠시만 기다려 주세요.</div>
            <div className="english font-16">moving to the screen, so please wait a moment.</div>
            <Spin tip="Loading" className="loading-page-loading mt-40" />
          </div>
          <div className="eu-footer">
            ⓒ KOSMO. All Rights Reserved.
          </div>
        </div>
      </div>

    </>
  );
};

export default LoadingPage;