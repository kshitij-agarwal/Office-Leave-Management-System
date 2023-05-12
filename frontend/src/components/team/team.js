import React from "react";

import { Row, Col, Space, Card, Avatar, Typography, Calendar } from "antd";

import "./team.scss";

const Team = () => {
  return (
    <div className="olms-team">
      {/* Top Row */}
      <Row></Row>

      {/* Calender Section */}
      <Row className="calendar-row">
        <Calendar className="my-calendar" />
      </Row>
    </div>
  );
};

export default Team;
