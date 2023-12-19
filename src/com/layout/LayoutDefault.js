import React, { useState } from 'react';
import { Layout, Button, Divider, Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  CalendarOutlined,
  LinkOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import '/node_modules/antd/dist/antd.css';
import route from 'route.json';

let menuData = [];
route.result.map((item) => {
  const frst = {
    label: item['1'].menu,
    key: item['1'].path,
    children: [
      {
        label: item['2'].menu,
        key: item['2'].path,
        children: [
          {
            label: item['3'].menu,
            key: item['3'].path,
            path: item.route,
          },
        ],
      },
    ],
  };

  const frstKey = menuData.map((menu) => menu.key);

  if (!frstKey.includes(frst.key)) {
    menuData = [...menuData, frst];
  } else {
    let curFrstData = menuData.find((element) => element.label === frst.label);

    let currentKey = curFrstData.children.map((obj) => obj.label);
    if (currentKey.includes(frst.children[0].label)) {
      let curSecData = menuData
        .find((element) => element.label === frst.label)
        .children.find((ele) => ele.label === frst.children[0].label).children;
      menuData
        .find((element) => element.label === frst.label)
        .children.find((ele) => ele.label === frst.children[0].label).children =
        [...curSecData, frst.children[0].children[0]];
    } else {
      menuData.find((element) => element.label === frst.label).children = [
        ...curFrstData.children,
        ...frst.children,
      ];
    }
  }
});
console.log(menuData);

const { Header, Footer, Sider, Content } = Layout;
const items = [
  getItem('예제', '예제', <SettingOutlined />, [
    getItem(<Link to="/">Main</Link>, '30'),
    getItem(
      <Link to="/biz/agrem/agremChgDtlAply">협약변경상세(신청)</Link>,
      '31'
    ),
    getItem(<Link to="/biz/evl/evlRsltReg">평가결과등록</Link>, '32'),
  ]),
  // getItem('더미메뉴', 'sub0', <SettingOutlined />, [
  //   getItem('Option 111', '111'),
  //   getItem('Option 11', '11'),
  //   getItem('Option 12', '12'),
  // ]),
];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const LayoutDefault = ({ children }) => {
  const [frstMenu, setFrstMenu] = useState();
  const routeData = route.result.map((item) => {
    const frst = item['1'].menu;
    console.log('insert');
    setFrstMenu((prevState) => ({
      ...prevState,
      frst,
    }));
  });
  console.log('frstMenu: ', frstMenu);
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const leftWidth = 256;
  const defaultSelectedKeys = '1';
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Header
        className="header"
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div className="logo" />
        {/* <Menu
          defaultSelectedKeys={defaultSelectedKeys}
          // defaultOpenKeys={['sub1']}
          mode="horizontal"
          theme={theme}
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
        /> */}
      </Header>
      <Layout className="site-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            width: leftWidth,
            marginTop: 64,
            backgroundColor: 'white',
          }}
        >
          <Menu
            // inlineCollapsed={collapsed}
            defaultSelectedKeys={defaultSelectedKeys}
            // defaultOpenKeys={['sub1']}
            mode={mode}
            theme={theme}
            items={menuData}
            onClick={onClick}
            selectedKeys={[current]}
          />
          {/* <Divider type="horizontal" />
          <Switch onChange={changeMode} /> Change Mode
          <Divider type="horizontal" />
          <Switch onChange={changeTheme} /> Change Style
          <Divider type="horizontal" /> */}
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content style={{ marginTop: 64 }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutDefault;
