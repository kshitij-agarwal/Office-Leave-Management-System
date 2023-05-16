import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Row, Col, Space, Card, Avatar, Typography } from "antd";

import holidayLogo from "../../static/images/holiday.svg";
import calendarLogo from "../../static/images/calender.svg";
import sickLogo from "../../static/images/sick.svg";

import EmployeeCard from "./employeeCard";

import "./dashboard.scss";

const { Meta } = Card;
const { Title } = Typography;

const Dashboard = () => {
  let allEmp = useSelector((state) => state.employee.allEmployees);
  // console.log("allEmp - ", allEmp);

  return (
    <div className="olms-dashboard">
      {/* Top Row */}
      <Row>
        <Col span={24} className="top-row-col">
          <Space
            align="center"
            direction="horizontal"
            className="top-row-space"
          >
            <Card className="top-row-card" hoverable>
              <Meta
                avatar={<Avatar shape="square" src={holidayLogo} />}
                title="Paid Leave"
                description={`${allEmp[0].leave.paidLeave.count} out of 24 Left`}
              />
            </Card>

            <Card className="top-row-card" hoverable>
              <Meta
                avatar={<Avatar shape="square" src={sickLogo} size="large" />}
                title="Sick Leave"
                description={`${allEmp[0].leave.sickLeave.count} out of 6 Left`}
              />
            </Card>

            <Card className="top-row-card" hoverable>
              <Meta
                avatar={<Avatar shape="square" src={calendarLogo} />}
                title="Optional Leave"
                description={`${allEmp[0].leave.optionalLeave.count} out of 4 Left`}
              />
            </Card>
          </Space>
        </Col>
      </Row>

      {/* Second Row */}
      <Row className="dashboard-second-row">
        <Col span={24}>
          <Title level={3} className="dashboard-second-row-title">
            Your Network
          </Title>
        </Col>

        <Row>
          {allEmp.map((emp) => {
            // console.log("emp - ", emp);

            return (
              <Col span={8}>
                <EmployeeCard key={emp?.empID} emp={emp} />
              </Col>
            );
          })}
        </Row>
      </Row>
    </div>
  );
};

export default Dashboard;
