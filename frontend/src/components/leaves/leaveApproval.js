import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs, { Dayjs } from "dayjs";

import {
  Row,
  Col,
  Space,
  Card,
  Typography,
  Tabs,
  Form,
  Select,
  DatePicker,
  Input,
  Button,
  Table,
  Collapse,
  Radio,
} from "antd";

import "./leaveApproval.scss";

import { updateEmployees } from "../../actions/empAction";

const LeaveApproval = () => {
  const dispatch = useDispatch();
  const { Panel } = Collapse;
  const [form] = Form.useForm();

  const [leaveStatus, setLeaveStatus] = useState("");
  let allEmp = useSelector((state) => state.employee.allEmployees);
  let approvalPending = [];
  // console.log("allEmp - ", allEmp);

  // Get all the employees whose leaves are pending
  allEmp.forEach((emp) => {
    let leaveHistory = emp.leaveHistory;

    for (let i = 0; i < leaveHistory.length; i++) {
      const element = leaveHistory[i];

      if (element.status === "pending") {
        approvalPending.push(emp);
        break;
      }
    }
  });

  const setLeaveType = (data) => {
    let leaveType = "";

    if (data === "paidLeave") {
      leaveType = "Paid Leave";
    }
    if (data === "sickLeave") {
      leaveType = "Sick Leave";
    }
    if (data === "optionalLeave") {
      leaveType = "Optional Leave";
    }

    return leaveType;
  };

  const onRadioChange = (e) => {
    setLeaveStatus(e.target.value);
  };

  const onSubmit = (emp, data) => {
    emp.leaveHistory[0].status = data;

    dispatch(updateEmployees(emp));
  };

  return (
    <>
      <div className="leave-approval-component">
        LeaveApproval
        <div>
          <Collapse accordion>
            {approvalPending.map((i, index) => {
              // console.log("i - ", i);

              return (
                <Panel
                  key={index}
                  header={`${i.firstName} ${i.middleName} ${i.lastName}`}
                >
                  <Row>
                    <Col span={24}>
                      <Form
                        className="leave-approval-form"
                        form={form}
                        layout="horizontal"
                        labelCol={{ span: 8 }}
                        initialValues={{
                          employeeName: `${i.firstName} ${i.middleName} ${i.lastName}`,
                          leaveType: setLeaveType(i.leaveHistory[0].leaveType),
                          numberOfDays: i.leaveHistory[0].numberOfDays,
                          to: i.leaveHistory[0].startDate,
                          from: i.leaveHistory[0].endDate,
                        }}
                      >
                        <Row>
                          <Col span={1} />

                          {/* First Col */}
                          <Col span={10}>
                            <Form.Item
                              name="employeeName"
                              label="Employee Name"
                            >
                              <Input disabled className="remove-disable" />
                            </Form.Item>

                            <Form.Item name="leaveType" label="Leave Type">
                              <Input disabled className="remove-disable" />
                            </Form.Item>

                            <Form.Item name="numberOfDays" label="Total Days">
                              <Input disabled className="remove-disable" />
                            </Form.Item>
                          </Col>

                          {/* Second Row */}
                          <Col span={10}>
                            <Form.Item name="from" label="From">
                              <Input disabled className="remove-disable" />
                            </Form.Item>

                            <Form.Item name="to" label="To">
                              <Input disabled className="remove-disable" />
                            </Form.Item>

                            <Form.Item label="Approve Leave">
                              <Radio.Group onChange={onRadioChange}>
                                <Radio value="approved">Approve</Radio>
                                <Radio value="rejected">Reject</Radio>
                              </Radio.Group>
                            </Form.Item>

                            <Button
                              type="primary"
                              onClick={() => {
                                onSubmit(i, leaveStatus);
                                setLeaveStatus("");
                              }}
                            >
                              Submit
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default LeaveApproval;
