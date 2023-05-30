import React from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs, { Dayjs } from "dayjs";

import {
  Row,
  Col,
  Space,
  Calendar,
  Badge,
} from "antd";

import "./team.scss";

const Team = () => {
  let allEmp = useSelector((state) => state.employee.allEmployees);

  let leaveHistorys = allEmp[0].leaveHistory;
  let leaves = [];

  leaveHistorys.forEach((i) => {
    let len = dayjs(i.endDate).diff(dayjs(i.startDate), "d") + 1;

    for (let j = 0; j < len; j++) {
      let status;

      if (i.status === "approved") {
        status = "success";
      } else if (i.status === "pending") {
        status = "warning";
      } else if (i.status === "rejected") {
        status = "error";
      }

      leaves.push({
        date: dayjs(i.startDate).add(j, "day").format("YYYY-MM-DD"),
        leaveReason: i.leaveReason,
        status: status,
      });
    }
  });

  const dateCellRender = (value) => {
    // console.log("value - ", value);
    // const listDate = getListData(value);
    // console.log(dayjs().format("YYYY-MM-DD"));
    // console.log("leaves - ", leaves.length);

    for (let i = 0; i < leaves.length; i++) {
      const element = leaves[i];
      if (value.format("YYYY-MM-DD") == element.date) {
        console.log("value - i - ", value.format("YYYY-MM-DD"), element.date);
        return <Badge status={element.status} text={element.leaveReason} />;
      }
    }
  };

  return (
    <div className="olms-team">
      {/* Calender Section */}
      <Row className="calendar-row">
        <Space direction="horizontal">
          <Badge status="success" text="Approved" />
          <Badge status="warning" text="Pending" />
          <Badge status="error" text="Rejected" />
        </Space>

        <Calendar
          className="my-calendar"
          dateCellRender={dateCellRender}
          // headerRender={customHeader}
        />
      </Row>
    </div>
  );
};

export default Team;
