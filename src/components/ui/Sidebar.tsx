"use client";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { UserRole } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";

const { Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

export default function Sidebar(): React.ReactNode {
    const role = UserRole
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      width={280}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontSize: "30px",
          textAlign: "center",
          margin: "1rem auto",
          color:"White"
        }}
      >
        Admin
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["2"]}
        items={sidebarItems(role.SELLER)}
      />
    </Sider>
  );
}
