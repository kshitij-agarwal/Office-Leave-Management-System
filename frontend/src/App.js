import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Button, Layout, message } from "antd";

import Cart from "./components/Cart";
import Sidebar from "./components/layout/sidebar";
import ErrorPage from "./components/layout/errorPage";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard/dashboard";
import Team from "./components/team/team";
import Leave from "./components/leaves/leave";

import "./App.scss";

const { Header, Content, Sider } = Layout;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout className="olms-main-container">
          <Header
            className="olms-header"
            style={{
              textAlign: "center",
              color: "white",
              
              // height: 84,
              // paddingInline: 50,
              // lineHeight: "64px",
              // backgroundColor: "#7dbcea",
            }}
          >
            Header
          </Header>
          <Layout className="olms-sidebar-header">
            <Sidebar />
            <Content className="olms-content">
              <div className="olms-content-div">
                <Routes>
                  <Route index path="/" element={<Dashboard />} />
                  <Route path="/leaves" element={<Leave />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/leave/policy" element={<Cart />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
