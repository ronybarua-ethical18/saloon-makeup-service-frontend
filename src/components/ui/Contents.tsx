"use client"

import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default function Contents({ children }: { children: React.ReactNode }) {
  return <Content style={{ minHeight: "100vh", margin: '24px 16px 0', color:"black" }}>{children}</Content>;
}
