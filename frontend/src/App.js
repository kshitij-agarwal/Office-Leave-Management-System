import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { Button, Layout, message, Row, Col, Typography, Space } from "antd";

import Cart from "./components/Cart";
import Sidebar from "./components/layout/sidebar";
import ErrorPage from "./components/layout/errorPage";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard/dashboard";
import Team from "./components/team/team";
import Leave from "./components/leaves/leave";
import Login from "./components/login/login";

import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

import { authenticateUser } from "./actions/authAction";
import "./App.scss";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const App = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let auth = useSelector((state) => state.auth.userAuth);
  let allEmployees = useSelector((state) => state.employee.allEmployees);

  console.log("auth - ", auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [auth.isAuthenticated]);

  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
      </Routes>

      {auth.isAuthenticated && (
        <Layout className="olms-main-container">
          <Header className="olms-header">
            <Row>
              <Col span={21}>
                <Title className="olms-title">
                  Office Leave Management System
                </Title>
              </Col>

              {/* Logout */}
              <Col span={3} className="logout-column">
                <Space direction="vertical" className="logout-space">
                  <Button size="small" block icon={<UserOutlined />}>
                    <Text> {auth.userRole.toUpperCase()} </Text>
                  </Button>
                  <Button
                    // className="logout-button"
                    size="small"
                    block
                    icon={<LogoutOutlined />}
                    onClick={() => {
                      message.success("Succesfully Logged-Out !!");

                      setTimeout(() => {
                        dispatch(
                          authenticateUser({
                            isAuthenticated: false,
                            userRole: "",
                          })
                        );

                        navigate("/");
                      }, 2500);
                    }}
                  >
                    <Text> LOGOUT </Text>
                  </Button>
                </Space>
              </Col>
            </Row>
          </Header>

          <Layout className="olms-sidebar-content">
            <Sidebar />

            <Content className="olms-content">
              <div className="olms-content-div">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/leaves" element={<Leave />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/leave/policy" element={<Cart />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default App;
