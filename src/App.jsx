import { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;

import "./App.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function getNavLink(to, icon, text, location) {
  return (
    <Menu.Item key={to}>
      <NavLink
        className={({ isActive, isPending }) => {
          !isPending ? isActive ? "ant-menu-item-selected" : "" : "";
        }}
        to={to}
      >
        {icon}
        <span>{text}</span>
      </NavLink>
    </Menu.Item>
  );
}

function App({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation("/");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          position: "fixed",
          zIndex: "100",
          top: "0vh",
          width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            background: "#c1dcff",
            justifyContent: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              left: 0,
              position: "absolute",
            }}
          />
          <img
            src="https://avatars.githubusercontent.com/u/74617254?s=400&u=fb43523e7a21af3f45db13ba3e47e1940619e37d&v=4"
            style={{ width: "70px", marginLeft: "2%", borderRadius: "50%" }}
            alt="logo"
          />
          &nbsp;&nbsp;&nbsp;&nbsp; Beta-App &nbsp;&nbsp;&nbsp;&nbsp;
          <div
            className="container"
            style={{
              position: "absolute",
              right: "4%",
              fontSize: "x-large",
            }}
          >
            <UserOutlined />
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          style={{ position: "fixed", zIndex: "100", top: "11vh" }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          hidden={collapsed}
        >
          <div className="demo-logo-vertical" />
          <br />
          <br />
          <Menu
            theme="dark"
            mode="inline"
            inlineCollapsed={true}
            selectedKeys={[location.pathname]}
          >
            {getNavLink("/documents", <UserOutlined />, "Documents",location)}
            {getNavLink("/deadline", <UploadOutlined />, "Deadline",location)}
            {getNavLink("/group", <UploadOutlined />, "Group",location)}
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              position: "relative",
              marginLeft: collapsed ? "1vh" : "35vh",
              marginTop: "15vh",
            }}
          >
            {children || <Outlet />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
