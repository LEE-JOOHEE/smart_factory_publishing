import React, { useState } from "react";
import { Button, Space, Typography } from "antd";
import {
    PlusSquareFilled,
    MinusSquareFilled,
    DownloadOutlined,
    PlusOutlined,
    MinusOutlined,
} from "@ant-design/icons";
import BaseLayout from "components/layout/BaseLayout";
import AdminLayout from "components/layout/AdminLayout";
import LoginLayout from "components/layout/LoginLayout";
import "css/CommonUsr.css";

import GettyImagesAdminLogin from "css/images/GettyImages-admin-login.png";
import AdminMainLayout from "components/layout/AdminMainLayout";
import LoadingPage from "components/layout/LoadingPage";
import UserLayout from "components/layout/UserLayout";
import UserMinLayout from "components/layout/UserMainLayout";
import UserMainEngLayout from "components/layout/UserMainEngLayout";
import TestTrnasfer from "./TestTrnasfer";
import StopServicePage from "./StopServicePage";

// (사용자)최소사이즈는 minWidth="360px"
const { Title } = Typography;
const Main = () => {
    return (
        <>
            <BaseLayout />
            {/* <TestTrnasfer/> */}
            {/* <StopServicePage /> */}

            {/* <AdminLayout /> */}
            {/* <LoginLayout /> */}
            {/* <AdminMainLayout /> */}
            {/* <LoadingPage /> */}
            {/* <UserMinLayout /> */}
            {/* <UserMainEngLayout /> */}
            {/* <UserLayout /> */}

            {/* <h1>로그인 화면 구현</h1>
        <div className="eu-login-wrap">
          <img src={GettyImagesAdminLogin} alt="로그인 배경이미지" />

        </div> */}

            {/* <h1>사용자</h1>
        <Title level={4}>Page Process Buttons</Title>
        <Space wrap>
          <Button
            type="primary"
            size="large"
            className="eu-usr-btn-process-default"
          >
            기본
          </Button>
          <Button size="large" className="eu-usr-btn-process-fine">
            접수
          </Button>
          <Button size="large" className="eu-usr-btn-process-warning">
            제출
          </Button>
          <Button size="large" className="eu-usr-btn-process-error">
            반려
          </Button>
        </Space>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button
            type="primary"
            size="large"
            className="eu-usr-btn-process-default"
          >
            기본
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="large" className="eu-usr-btn-process-fine">
            접수
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="large" className="eu-usr-btn-process-warning">
            제출
          </Button><br />`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="large" className="eu-usr-btn-process-error">
            반려
          </Button>`}
        <br />
        <br />
        <Title level={4}>Popup Process Buttons</Title>
        <Space wrap>
          <Button
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-default"
          >
            기본
          </Button>
          <Button size="middle" className="eu-usr-btn-popup-process-fine">
            접수
          </Button>
          <Button size="middle" className="eu-usr-btn-popup-process-warning">
            제출
          </Button>
          <Button size="middle" className="eu-usr-btn-popup-process-error">
            반려
          </Button>
        </Space>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-default"
          >
            기본
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="middle" className="eu-usr-btn-popup-process-fine">
            접수
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="middle" className="eu-usr-btn-popup-process-warning">
            제출
          </Button><br />`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="middle" className="eu-usr-btn-popup-process-error">
            반려
          </Button>`}
        <br />
        <br />
        <Title level={4}>Component CRUD Buttons</Title>
        <Space wrap>
          <Button size="small" className="eu-usr-btn-crud-default">
            기본
          </Button>
          <Button size="small" className="eu-usr-btn-crud-fine">
            조회
          </Button>
          <Button size="small" className="eu-usr-btn-crud-warning">
            임시저장
          </Button>
          <Button size="small" className="eu-usr-btn-crud-error">
            삭제
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareFilled />}
          >
            행추가
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-row-delete"
            icon={<MinusSquareFilled />}
          >
            행삭제
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-excel-download"
            icon={<DownloadOutlined />}
          >
            엑셀다운로드
          </Button>
        </Space>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="small" className="eu-usr-btn-crud-default">
            기본
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="small" className="eu-usr-btn-crud-fine">
            조회
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="small" className="eu-usr-btn-crud-warning">
            임시저장
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="small" className="eu-usr-btn-crud-error">
            삭제
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
          >
            행추가
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button
            size="small"
            className="eu-usr-btn-row-delete"
            icon={<MinusSquareOutlined />}
          >
            행삭제
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button
            size="small"
            className="eu-usr-btn-excel-download"
            icon={<DownloadOutlined />}
          >
          엑셀다운로드
          </Button>`}
        <br />
        <br />
        <Title level={4}>Table Row Buttons</Title>
        <Space>
          <Button size="small" className="eu-usr-btn-table-default">
            기본
          </Button>
          <Button size="small" className="eu-usr-btn-table-fine">
            조회
          </Button>
          <Button size="small" className="eu-usr-btn-table-warning">
            임시저장
          </Button>
          <Button size="small" className="eu-usr-btn-table-error">
            삭제
          </Button>
        </Space>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="small" className="eu-usr-btn-table-default">
            기본
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="small" className="eu-usr-btn-table-fine">
            조회
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="small" className="eu-usr-btn-table-warning">
            임시저장
          </Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Button size="small" className="eu-usr-btn-table-error">
            삭제
          </Button>`}
        <br /> */}
        </>
    );
};

export default Main;
