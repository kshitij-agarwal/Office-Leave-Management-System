import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Form, Typography, Input, Row, Col, Space, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { authenticateUser } from "../../actions/authAction";
import "./login.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(
      authenticateUser({
        isAuthenticated: false,
        userRole: "",
      })
    );
  }, []);

  const onFormSubmit = (data) => {
    console.log("onFormSubmit Data - ", data);

    if (
      data.username === "manager@gmail.com" &&
      data.password === "Manager@123"
    ) {
      console.log("HI");
      setError("");

      dispatch(
        authenticateUser({
          isAuthenticated: true,
          userRole: "manager",
        })
      );

      //
    } else if (
      data.username === "employee@gmail.com" &&
      data.password === "Employee@123"
    ) {
      console.log("Employee");
      setError("");

      dispatch(
        authenticateUser({
          isAuthenticated: true,
          userRole: "employee",
        })
      );

      //
    } else {
      console.log("Error");
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container align-vertical-horizontal">
      <div className="main-container align-vertical-horizontal">
        <Row>
          <Col>
            <Space direction="vertical">
              <Text className="login-text align-vertical-horizontal">
                LOGIN
              </Text>

              <Text className="credentials-text">
                Please enter your credentials to login.
              </Text>

              <Form className="login-form" form={form} onFinish={onFormSubmit}>
                {/* Username */}
                <Form.Item
                  className="form-item-username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your username!",
                    },
                  ]}
                >
                  <Input
                    className="username-input"
                    prefix={<UserOutlined />}
                    placeholder="Username"
                    size="large"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                </Form.Item>

                {/* Password */}
                <Form.Item
                  className="form-item-password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    className="password-input"
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    size="large"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                </Form.Item>

                {/* Button */}
                <Form.Item className="align-vertical-horizontal">
                  <Button
                    className="submit-button"
                    htmlType="submit"
                    // type="primary"
                  >
                    LOGIN
                  </Button>
                </Form.Item>
              </Form>

              {error && (
                <Text
                  className="align-vertical-horizontal error-text"
                  type="danger"
                >
                  {error}
                </Text>
              )}
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
