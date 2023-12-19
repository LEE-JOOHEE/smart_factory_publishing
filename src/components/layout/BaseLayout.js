import React, { useState, useEffect } from 'react';
import { Layout, Button, Menu, Tooltip, Select, Tabs } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import logoKosmo from "../../css/images/logo-kosmo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RotateRightOutlined,
} from '@ant-design/icons';
import '/node_modules/antd/dist/antd.css';
import route from 'route.json';

const { Header, Sider, Content } = Layout;

const BaseLayout = ({ children }) => {
  const items = [{ key: '/', label: '메인' }, ...route.result];
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const defaultSelectedKeys = '1';

  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    setCurrent(e.key);
    history.push(e.key);
  };

  const [isPopup, setIsPopup] = useState(false);
  const [path, setPath] = useState(window.location.href);
  const customLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key));
    },
  };
  const openPopup = () => {
    let newPopupIndex = customLocalStorage.getItem('POPUP_INDEX')
      ? customLocalStorage.getItem('POPUP_INDEX') + 1
      : 1;
    customLocalStorage.setItem('POPUP_INDEX', newPopupIndex);
    window.open(path, `POPUP_${newPopupIndex}`, 'width=1500, height=900');
    window.name = `${progNm}parent`;
  };
  const logout = () => {
    let popupIndex = customLocalStorage.getItem('POPUP_INDEX');
    if (popupIndex && popupIndex > 0) {
      for (let i = 1; i <= customLocalStorage.getItem('POPUP_INDEX'); i++) {
        window
          .open('', 'POPUP_' + i, 'width=1, height=1, top=10000, left=10000')
          .close();
      }
      customLocalStorage.setItem('POPUP_INDEX', 0);
    }
    history.push('/');
  };

  let progNm = window.location.pathname.split('/').at(-1);
  useEffect(() => {
    setPath(window.location.href);
    if (window.name === `POPUP_${customLocalStorage.getItem('POPUP_INDEX')}`) {
      setIsPopup(true);
    }
  }, []);

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

  return (
    <>
      {isPopup ? (
        <div style={{ padding: '50px' }}>{children}</div>
      ) : (

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
                <Header className="eu-header-logout">
                  <div className="ml-auto mr-8">권한전환</div>
                  <Select 
                    style={{ width : "150px" }}
                    defaultValue="시스템관리자"
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
                  <Button className="eu-btn-logout" onClick={logout}>로그아웃</Button>
                </Header>
              </div>
              <div>
                <Header className="eu-header-tab">
                  <Tabs items={tabItems} />
                </Header>
              </div>
            </div>
          </div>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              width={280}
            >
              <Menu
                defaultSelectedKeys={defaultSelectedKeys}
                mode={'inline'}
                theme={'light'}
                items={items}
                onClick={onClick}
                selectedKeys={[current]}
                style={{ height: '100%', marginBottom: '60px', color: '#fff' }}
              />
              <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                  position: 'fixed',
                  bottom: '16px',
                  left: '16px',
                }}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Sider>

            <Content>
              <div
                style={{
                  position: 'absolute',
                  right: '0',
                  paddingRight: '40px',
                }}
              >
                <Tooltip
                  placement={'leftBottom'}
                  title={'새 창 띄우기'}
                  zIndex={10000}
                >
                  <Button
                    icon={<RotateRightOutlined />}
                    onClick={openPopup}
                  />
                </Tooltip>
                {/* <Button onClick={logout}>로그아웃</Button> */}
              </div>
              {children}

              <div className="eu-footer">
                ⓒ KOSMO. All Rights Reserved.
              </div>
            </Content>

          </Layout>
        </Layout>

        // <Layout>
        //   <Sider
        //     trigger={null}
        //     collapsible
        //     collapsed={collapsed}
        //     width={280}
        //   >
        //     <div className="eu-kosmo-logo-admin">
        //       <Link to="/">
        //         <img src={logoKosmo} alt="logo" />
        //       </Link>
        //     </div>

        //     <Menu
        //       defaultSelectedKeys={defaultSelectedKeys}
        //       mode={'inline'}
        //       theme={'light'}
        //       items={items}
        //       onClick={onClick}
        //       selectedKeys={[current]}
        //       style={{ height: '100%', marginBottom: '60px', color: '#fff' }}
        //     />

        //     <Button
        //       type="primary"
        //       onClick={toggleCollapsed}
        //       style={{
        //         position: 'fixed',
        //         bottom: '16px',
        //         left: '16px',
        //       }}
        //     >
        //       {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        //     </Button>
        //   </Sider>

        //   <Layout>
        //     <Header className="eu-header-logout">
        //       <div className="ml-auto mr-8">권한전환</div>
        //       <Select 
        //         style={{ width : "150px" }}
        //         defaultValue="시스템관리자"
        //         getPopupContainer={trigger => trigger.parentNode}
        //         dropdownAlign={{ offset: [0, 0] }}
        //         placeholder="선택하세요"
        //         options={[
        //           {
        //             value: '시스템관리자',
        //             label: '시스템관리자',
        //           },
        //           {
        //             value: '도입기업',
        //             label: '도입기업',
        //           },
        //         ]}
        //       />
        //       <div className="ml-10 mr-8">(주)유클리드소프트</div>
        //       <div className="mr-6 font-bold-700">전정국</div>
        //       <Button className="eu-btn-logout" onClick={logout}>로그아웃</Button>
        //     </Header>
        //     <Header className="eu-header-tab">
        //       <Tabs items={tabItems} />
        //     </Header>

        //     <Content>
        //       <div
        //         style={{
        //           position: 'absolute',
        //           right: '0',
        //           paddingRight: '40px',
        //         }}
        //       >
        //         <Tooltip
        //           placement={'leftBottom'}
        //           title={'새 창 띄우기'}
        //           zIndex={10000}
        //         >
        //           <Button
        //             icon={<RotateRightOutlined />}
        //             onClick={openPopup}
        //           />
        //         </Tooltip>
        //         <Button onClick={logout}>로그아웃</Button>
        //       </div>
        //       {children}

        //       <div className="eu-footer">
        //         ⓒ KOSMO. All Rights Reserved.
        //       </div>
        //     </Content>
        //   </Layout>
        // </Layout>
      )}
    </>
  );
};

export default BaseLayout;
