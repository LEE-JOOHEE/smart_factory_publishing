import React, { useState, useEffect } from "react";
import { Layout, Button, Menu, Tooltip, Tabs, Select } from "antd";
import { useHistory, Link } from "react-router-dom";
import logoKosmo from "../../css/images/logo-kosmo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RotateRightOutlined,
  SettingOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import "/node_modules/antd/dist/antd.css";
import route from "adminRoute.json";

const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = ({ children }) => {
  const items = [...route.result];
  const [tabItems, setTabItems] = useState([
    {
      label: "사업관리",
      key: "사업관리",
      // children: <CmAplyAsmtBsc editable={editable} type="detail" />,
    },
    {
      label: "과제신청",
      key: "과제신청",
      // children: <CmAplyAsmtIndcEnt editable={editable} />,
    },
    {
      label: "협약관리",
      key: "협약관리",
      // children: <CmAplyAsmtPjtco editable={editable} />,
    },
    {
      label: "진도관리",
      key: "진도관리",
      // children: <CmAplyAsmtSplyEnt editable={editable} />,
    },
    {
      label: "평가관리",
      key: "평가관리",
      // children: <CmAplyAsmtPvltrt editable={editable} />,
    },
    {
      label: "사후관리",
      key: "사후관리",
      // children: <CmAplyAsmtRsltIdx editable={editable} />,
    },
    {
      label: "성과/통계",
      key: "성과/통계",
      //children: <CmAtchDoc title={'첨부문서'} editable={editable} />,
    },
    {
      label: "시스템관리",
      key: "시스템관리",
      // children: <CmAplyAsmtSrvy editable={editable} />,
    },
    {
      label: "서비스관리",
      key: "서비스관리",
      //children: <CmAplyAsmtEmplym editable={editable} />,
    },
  ]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>

      <Layout className="eu-admin-container">
        <div className="flex-row">
          <div>
            {/* 로고 */}
            <div className="eu-kosmo-logo-admin">
              <Link to="/">
                <img src={logoKosmo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="eu-header-wrap">
            <div>
              {/* 헤더1 - 로그아웃 */}
              <Header className="eu-header-logout">
                <button className="eu-btn-logout green ml-auto mr-20">권한신청</button>
                <div className="mr-8">권한전환</div>
                <Select 
                  style={{ width : "150px" }}
                  onChange={handleChange}
                  defaultValue="시스템관리자"
                  defaultOpen={true}
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택하세요"
                  options={[
                    {
                      value: '시스템관리자',
                      label: '시스템관리자',
                    },
                    {
                      value: '도입기업',
                      label: '도입기업',
                    },
                  ]}
                />
                <div className="ml-10 mr-8">(주)유클리드소프트</div>
                <div className="mr-6 font-bold-700">전정국</div>
                <button className="eu-sms-btn-bg">SMS</button>
                <Button className="eu-btn-logout">로그아웃</Button>
              </Header>
            </div>
            <div>
              {/* 헤더2 - 탭 */}
              <Header className="eu-header-tab">
                <Tabs items={tabItems} />
              </Header>
            </div>
          </div>
        </div>

        <Layout>
          <Sider width={280} className="eu-sider-menu">
            <Menu
              mode={"inline"}
              theme={"light"}
              items={items}
              defaultOpenKeys={[items[0].key]}
              expandIcon={(icon) =>
                icon.isOpen ? 
                <MinusOutlined style={{color : "#FFF"}} /> : 
                <PlusOutlined />
              }
              style={{
                fontFamily: "NotoSansKR-400",
                fontSize: "18px",
                color: "#89A3CE",
                backgroundColor: "#1A233B",
                height: "100%",
                marginBottom: "60px",
              }}
            />
          </Sider>

          <Content>
            {children}
            <div className="eu-footer">
              ⓒ KOSMO. All Rights Reserved.
            </div>
          </Content>
        </Layout>

      </Layout>




      {/* <Layout>
        <Sider width={280}>
          <div className="eu-kosmo-logo-admin">
            <Link to="/">
              <img src={logoKosmo} alt="logo" />
            </Link>
          </div>

          <Menu
            mode={"inline"}
            theme={"light"}
            items={items}
            defaultOpenKeys={[items[0].key]}
            expandIcon={(icon) =>
              icon.isOpen ? 
              <MinusOutlined style={{color : "#FFF"}} /> : 
              <PlusOutlined />
            }
            style={{
              fontFamily: "NotoSansKR-400",
              fontSize: "18px",
              color: "#89A3CE",
              backgroundColor: "#1A233B",
              height: "100%",
              marginBottom: "60px",
            }}
          />
        </Sider>
        <Layout>
          // 헤더1 - 로그아웃
          <Header className="eu-header-logout">
            <div className="ml-auto mr-8">권한전환</div>
            <Select 
              style={{ width : "150px" }}
              onChange={handleChange}
              defaultValue="시스템관리자"
              defaultOpen={true}
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }}
              placeholder="선택하세요"
              options={[
                {
                  value: '시스템관리자',
                  label: '시스템관리자',
                },
                {
                  value: '도입기업',
                  label: '도입기업',
                },
              ]}
            />
            <div className="ml-10 mr-8">(주)유클리드소프트</div>
            <div className="mr-6 font-bold-700">전정국</div>
            <Button className="eu-btn-logout">로그아웃</Button>
          </Header>

          // 헤더2 - 탭
          <Header className="eu-header-tab">
            <Tabs items={tabItems} />
          </Header>
          <Content>
            {children}
            <div className="eu-footer">
              ⓒ KOSMO. All Rights Reserved.
            </div>
          </Content>
          // <Footer>Footer</Footer>
        </Layout>
      </Layout> */}
    </>
  );
};

export default AdminLayout;
