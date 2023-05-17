import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Row,
  Col,
  Space,
  Card,
  Avatar,
  Typography,
  Tabs,
  Form,
  Select,
} from "antd";

import holidayLogo from "../../static/images/holiday.svg";
import calendarLogo from "../../static/images/calender.svg";
import sickLogo from "../../static/images/sick.svg";

import "./newLeave.scss";

const { Meta } = Card;
const { Title, Text } = Typography;

const NewLeave = () => {
  const [form] = Form.useForm();
  const { option } = Select;

  const onFormSubmit = (data) => {
    console.log("onFormSubmit Data - ", data);
  };

  return (
    <div className="new-leave-component">
      <div className="new-leave-tab">
        <Row>
          <Space direction="vertical" className="new-leave-tab-space">
            <Title level={4} className="application-form">
              Application Form
            </Title>
            <Text>Please Fill the below form to apply</Text>
            <Avatar shape="square" src={holidayLogo} />
          </Space>
        </Row>

        <Row>
          <Col span={24}>
            <Form
              form={form}
              layout="horizontal"
              // autoComplete="off"
              onFinish={onFormSubmit}
            >
              <Row>
                <Col span={10}>
                  <Form.Item
                    name="leaveType"
                    label="Leave Type"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select></Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NewLeave;
