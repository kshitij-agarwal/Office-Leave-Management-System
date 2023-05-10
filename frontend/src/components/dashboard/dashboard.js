import React from "react";

import { Row, Col, Space, Card, Avatar, Typography } from "antd";

import holidayLogo from "../../static/images/holiday.svg";
import calendarLogo from "../../static/images/calender.svg";
import sickLogo from "../../static/images/sick.svg";

import "./dashboard.scss";
import EmployeeCard from "./employeeCard";

const { Meta } = Card;
const { Title } = Typography;

const Dashboard = () => {
  const emp1 = {
    empID: "EMP3456",
    firstName: "Rohit",
    middleName: "",
    lastName: "Verma",
    email: "rohit.verma@gmail.com",
    phoneNumber: 8765432109,
    department: "IT",
    empType: "Executive",
    leave: {
      paidLeave: {
        count: 22,
      },
      sickLeave: {
        count: 6,
      },
      optionalLeave: {
        count: 3,
      },
    },
    leaveHistory: [
      {
        leaveRequestID: "EMP3456_1",
        empID: "EMP3456",
        startDate: "05-07-2023",
        endDate: "06-07-2023",
        numberOfDays: 2,
        leaveType: "paidLeave",
        leaveReason: "Personal work",
        status: "approved",
      },
      {
        leaveRequestID: "EMP3456_2",
        empID: "EMP3456",
        startDate: "15-08-2023",
        endDate: "15-08-2023",
        numberOfDays: 1,
        leaveType: "optionalLeave",
        leaveReason: "Independence Day",
        status: "rejected",
      },
    ],
  };

  const allEmp = [
    {
      empID: "EMP1235",
      firstName: "Alok",
      middleName: "",
      lastName: "Gupta",
      email: "alokgupta987@gmail.com",
      phoneNumber: 9810263845,
      department: "IT",
      empType: "Senior Manager",
      leave: {
        paidLeave: {
          count: 22,
        },
        sickLeave: {
          count: 6,
        },
        optionalLeave: {
          count: 3,
        },
      },
      leaveHistory: [
        {
          leaveRequestID: "EMP1235_1",
          empID: "EMP1235",
          startDate: "12-04-2023",
          endDate: "13-04-2023",
          numberOfDays: 2,
          leaveType: "paidLeave",
          leaveReason: "Personal reasons",
          status: "pending",
        },
      ],
    },
    {
      empID: "EMP1236",
      firstName: "Pranav",
      middleName: "",
      lastName: "Sharma",
      email: "pranavsharma22@gmail.com",
      phoneNumber: 9897654321,
      department: "IT",
      empType: "Manager",
      leave: {
        paidLeave: {
          count: 21,
        },
        sickLeave: {
          count: 6,
        },
        optionalLeave: {
          count: 3,
        },
      },
      leaveHistory: [
        {
          leaveRequestID: "EMP1236_1",
          empID: "EMP1236",
          startDate: "08-06-2023",
          endDate: "10-06-2023",
          numberOfDays: 3,
          leaveType: "paidLeave",
          leaveReason: "Family function",
          status: "approved",
        },
      ],
    },
    {
      empID: "EMP1237",
      firstName: "Priyanka",
      middleName: "",
      lastName: "Singh",
      email: "priyankasingh84@gmail.com",
      phoneNumber: 9789212458,
      department: "IT",
      empType: "Assistant Manager",
      leave: {
        paidLeave: {
          count: 22,
        },
        sickLeave: {
          count: 6,
        },
        optionalLeave: {
          count: 3,
        },
      },
      leaveHistory: [
        {
          leaveRequestID: "EMP1237_1",
          empID: "EMP1237",
          startDate: "05-07-2023",
          endDate: "06-07-2023",
          numberOfDays: 2,
          leaveType: "optionalLeave",
          leaveReason: "Personal reasons",
          status: "rejected",
        },
      ],
    },
    {
      empID: "EMP2345",
      firstName: "Amit",
      middleName: "Kumar",
      lastName: "Sharma",
      email: "amit.sharma@gmail.com",
      phoneNumber: 9876543210,
      department: "IT",
      empType: "Manager",
      leave: {
        paidLeave: {
          count: 22,
        },
        sickLeave: {
          count: 3,
        },
        optionalLeave: {
          count: 2,
        },
      },
      leaveHistory: [
        {
          leaveRequestID: "EMP2345_1",
          empID: "EMP2345",
          startDate: "10-05-2023",
          endDate: "11-05-2023",
          numberOfDays: 2,
          leaveType: "sickLeave",
          leaveReason: "Family function",
          status: "approved",
        },
        {
          leaveRequestID: "EMP2345_2",
          empID: "EMP2345",
          startDate: "20-06-2023",
          endDate: "22-06-2023",
          numberOfDays: 3,
          leaveType: "paidLeave",
          leaveReason: "Medical emergency",
          status: "pending",
        },
      ],
    },
    {
      empID: "EMP3456",
      firstName: "Rohit",
      middleName: "",
      lastName: "Verma",
      email: "rohit.verma@gmail.com",
      phoneNumber: 8765432109,
      department: "IT",
      empType: "Executive",
      leave: {
        paidLeave: {
          count: 22,
        },
        sickLeave: {
          count: 6,
        },
        optionalLeave: {
          count: 3,
        },
      },
      leaveHistory: [
        {
          leaveRequestID: "EMP3456_1",
          empID: "EMP3456",
          startDate: "05-07-2023",
          endDate: "06-07-2023",
          numberOfDays: 2,
          leaveType: "optionalLeave",
          leaveReason: "Personal work",
          status: "approved",
        },
        {
          leaveRequestID: "EMP3456_2",
          empID: "EMP3456",
          startDate: "15-08-2023",
          endDate: "15-08-2023",
          numberOfDays: 1,
          leaveType: "paidLeave",
          leaveReason: "Independence Day",
          status: "rejected",
        },
      ],
    },
    {
      empID: "EMP001",
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
      email: "johnsmith@gmail.com",
      phoneNumber: 9876543210,
      department: "IT",
      empType: "Manager",
      leave: {
        paidLeave: {
          count: 23,
        },
        sickLeave: {
          count: 6,
        },
        optionalLeave: {
          count: 4,
        },
      },
      leaveHistory: [
        {
          leaveRequestID: "EMP001_1",
          empID: "EMP001",
          startDate: "01-01-2022",
          endDate: "01-01-2022",
          numberOfDays: 1,
          leaveType: "paidLeave",
          leaveReason: "Family Function",
          status: "approved",
        },
      ],
    },
    {
      empID: "EMP002",
      firstName: "Emma",
      middleName: "",
      lastName: "Watson",
      email: "emmawatson@gmail.com",
      phoneNumber: 9876543211,
      department: "IT",
      empType: "Assistant Manager",
      leave: {
        paidLeave: {
          count: 22,
        },
        sickLeave: {
          count: 6,
        },
        optionalLeave: {
          count: 4,
        },
      },
      leaveHistory: [
        {
          leaveRequestID: "EMP002_1",
          empID: "EMP002",
          startDate: "05-02-2022",
          endDate: "06-02-2022",
          numberOfDays: 2,
          leaveType: "sickLeave",
          leaveReason: "Sick leave",
          status: "approved",
        },
      ],
    },
    {
      empID: "EMP003",
      firstName: "Robert",
      middleName: "Lee",
      lastName: "Downey",
      email: "robertdowney@gmail.com",
      phoneNumber: 9876543212,
      department: "IT",
      empType: "Senior Manager",
      leave: {
        paidLeave: {
          count: 18,
        },
        sickLeave: {
          count: 6,
        },
        optionalLeave: {
          count: 4,
        },
      },
      leaveHistory: [
        {
          leaveRequestID: "EMP003_1",
          empID: "EMP003",
          startDate: "15-02-2022",
          endDate: "20-02-2022",
          numberOfDays: 6,
          leaveType: "paidLeave",
          leaveReason: "Vacation",
          status: "approved",
        },
      ],
    },
  ];

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
                description={`${emp1.leave.paidLeave.count} out of 24 Left`}
              />
            </Card>

            <Card className="top-row-card" hoverable>
              <Meta
                avatar={<Avatar shape="square" src={sickLogo} size="large" />}
                title="Sick Leave"
                description={`${emp1.leave.sickLeave.count} out of 6 Left`}
              />
            </Card>

            <Card className="top-row-card" hoverable>
              <Meta
                avatar={<Avatar shape="square" src={calendarLogo} />}
                title="Optional Leave"
                description={`${emp1.leave.optionalLeave.count} out of 4 Left`}
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
