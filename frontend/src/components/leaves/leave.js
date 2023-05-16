import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Row, Col, Space, Card, Avatar, Typography, Tabs } from "antd";

import holidayLogo from "../../static/images/holiday.svg";
import calendarLogo from "../../static/images/calender.svg";
import sickLogo from "../../static/images/sick.svg";

import "./leave.scss";

const { Meta } = Card;
const { Title, Text } = Typography;

const Leave = () => {
  let allEmp = useSelector((state) => state.employee.allEmployees);

  const tabItems = [
    {
      key: "/newleave",
      label: "New Leave",
      children: "new Leave",
    },
    {
      key: "/leavestatus",
      label: "Leave Status",
      children: "Leave Status",
    },
    {
      key: "/balance",
      label: "balance",
      children: "Balance",
    },
  ];

  return (
    <div className="olms-leave">
      {/* Top Row */}
      <Row>
        <Col span={24} className="top-row-col">
          <Space
            align="center"
            direction="horizontal"
            className="top-row-space"
          >
            <Card className="top-row-card">
              <Space direction="horizontal" className="inner-space">
                <Avatar shape="square" src={holidayLogo} size="small" />
                <Text className="leave-type">Paid Leave</Text>
                <Text type="secondary">{`${allEmp[0].leave.paidLeave.count} Left`}</Text>
              </Space>
            </Card>

            <Card className="top-row-card">
              <Space direction="horizontal" className="inner-space">
                <Avatar shape="square" src={sickLogo} size="small" />
                <Text className="leave-type">Sick Leave</Text>
                <Text type="secondary">{`${allEmp[0].leave.sickLeave.count} Left`}</Text>
              </Space>
            </Card>

            <Card className="top-row-card">
              <Space direction="horizontal" className="inner-space">
                <Avatar shape="square" src={calendarLogo} size="small" />
                <Text className="leave-type">Optional Leave</Text>
                <Text type="secondary">{`${allEmp[0].leave.optionalLeave.count} Left`}</Text>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
      Leave
      {/* Second Row */}
      <Row></Row>
    </div>
  );
};

export default Leave;
