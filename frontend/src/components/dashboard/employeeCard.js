import React from "react";
import dayjs from "dayjs";

import { Row, Col, Space, Tag, Avatar, Typography } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import holidayLogo from "../../static/images/holiday.svg";
import calendarLogo from "../../static/images/calender.svg";
import sickLogo from "../../static/images/sick.svg";
import man1 from "../../static/images/man1.svg";

import "./employeeCard.scss";
const { Text, Link } = Typography;

// dayjs.extend(relativeTime);

const EmployeeCard = (props) => {
  // console.log("emp card props - ", props);

  const logoCheck = () => {
    // console.log("leave type - ", props.emp.leaveHistory[0].leaveType);
    // console.log("props - ",props);

    if (props.emp.leaveHistory[0].leaveType === "paidLeave") {
      return <Avatar shape="square" src={holidayLogo} />;
    } else if (props.emp.leaveHistory[0].leaveType === "sickLeave") {
      return <Avatar shape="square" src={sickLogo} size="large" />;
    } else if (props.emp.leaveHistory[0].leaveType === "optionalLeave") {
      return <Avatar shape="square" src={calendarLogo} />;
    }
  };

  const leaveStatusTag = () => {
    if (props.emp.leaveHistory[0].status === "approved") {
      return (
        <Tag
          icon={<CheckCircleOutlined />}
          color="success"
          className="leave-status-tag"
        >
          APPROVED
        </Tag>
      );
    } else if (props.emp.leaveHistory[0].status === "pending") {
      return (
        <Tag
          icon={<ClockCircleOutlined />}
          color="warning"
          className="leave-status-tag"
        >
          PENDING
        </Tag>
      );
    } else if (props.emp.leaveHistory[0].status === "rejected") {
      return (
        <Tag
          icon={<CloseCircleOutlined />}
          color="error"
          className="leave-status-tag"
        >
          REJECTED
        </Tag>
      );
    }
  };

  return (
    <div className="employee-card">
      {/* <Col span={24} className="employee-card-col"> */}
      <Row className="employee-card-name-row">
        <Col span={5} className="employee-icon">
          {/* <Avatar icon={<UserOutlined />} /> */}
          <Avatar size="large" src={man1} />
        </Col>

        <Col span={14}>
          <Space direction="vertical" className="employee-gap-0px">
            <Text strong>
              {`${props.emp.firstName} ${props.emp.middleName} ${props.emp.lastName}`}
            </Text>
            <Text>{props.emp.empType}</Text>
          </Space>
        </Col>
      </Row>
      {/* </Col> */}

      <Row className="employee-leave-reason">
        <Col span={24}>
          <Text strong>{props.emp.leaveHistory[0].leaveReason}</Text>
          {leaveStatusTag()}
        </Col>
      </Row>

      <Row>
        <Col span={18}>
          <Space direction="vertical" className="employee-gap-0px">
            <Space direction="horizontal">
              <Text type="secondary">Start Date:</Text>
              <Text>
                {dayjs(props.emp.leaveHistory[0].startDate).format(
                  "DD-MMM-YYYY"
                )}
              </Text>
            </Space>
            <Space direction="horizontal">
              <Text type="secondary">End Date:</Text>
              <Text>
                {dayjs(props.emp.leaveHistory[0].endDate).format("DD-MMM-YYYY")}
              </Text>
            </Space>
          </Space>
        </Col>

        <Col span={5} className="employee-icon">
          {logoCheck()}
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeCard;
