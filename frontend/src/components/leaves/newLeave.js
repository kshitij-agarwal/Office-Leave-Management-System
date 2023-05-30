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
  Calendar,
  DatePicker,
  Input,
  Button,
} from "antd";

import "./newLeave.scss";

import { GET_EMPLOYEES } from "../../actions/types";
import { updateEmployees } from "../../actions/empAction";

const { Meta } = Card;
const { Title, Text } = Typography;
const { TextArea } = Input;

const NewLeave = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { option } = Select;
  const { RangePicker } = DatePicker;

  let allEmp = useSelector((state) => state.employee.allEmployees);

  const leaveTypeOptions = [
    {
      value: "paidLeave",
      label: "Paid Leave",
    },
    {
      value: "sickLeave",
      label: "Sick Leave",
    },
    {
      value: "optionalLeave",
      label: "Optional Leave",
    },
  ];

  const onFormSubmit = (data) => {
    // console.log("onFormSubmit Data - ", data);

    let emp1 = allEmp[0];
    let leaveHistoryRecord = {
      leaveRequestID: `${emp1.empID}_${emp1.leaveHistory.length + 1}`,
      empID: emp1.empID,
      startDate: data.date[0].format("YYYY-MM-DD"),
      endDate: data.date[1].format("YYYY-MM-DD"),
      numberOfDays: data.days,
      leaveType: data.leaveType,
      leaveReason: data.additionalDetails,
      status: "pending",
    };

    emp1.leaveHistory = [leaveHistoryRecord].concat(emp1.leaveHistory);

    emp1.leave[`${leaveHistoryRecord.leaveType}`].count =
      emp1.leave[`${leaveHistoryRecord.leaveType}`].count -
      leaveHistoryRecord.numberOfDays;

    // allEmp[0] = emp1;

    // dispatch({
    //   type: GET_EMPLOYEES,
    //   payload: allEmp,
    // });

    dispatch(updateEmployees(emp1));

    form.resetFields();
  };

  const onFormReset = () => {
    form.resetFields();
  };

  const onFromDateChange = (value, date) => {
    // console.log("onFromDateChange data - ", value.format("DD-MM-YYYY"));
    // console.log("date & value - ", value, date);

    // console.log(
    //   "difference - ",
    //   dayjs(value[1]).diff(dayjs(value[0]), "d") + 1
    // );

    form.setFieldsValue({
      days: dayjs(value[1]).diff(dayjs(value[0]), "d") + 1,
    });
  };

  // const onTextAreaChange = (e) => {
  //   console.log("value - ", e.target.value);
  // };

  return (
    <div className="new-leave-component">
      <div className="new-leave-tab">
        <Row>
          <Space direction="vertical" className="new-leave-tab-space">
            <Title level={4} className="application-form">
              Application Form
            </Title>
            <Text>Please fill the form below to apply for Leave</Text>
            {/* <Avatar shape="square" src={holidayLogo} /> */}
          </Space>
        </Row>

        <Row>
          <Col span={24}>
            <Form
              className="leave-form"
              form={form}
              layout="horizontal"
              onFinish={onFormSubmit}
              initialValues={{
                days: 0,
              }}
              labelCol={{ span: 7 }}
              // wrapperCol={{ span: 10 }}
            >
              <Row>
                <Col span={9}>
                  {/* Select Leave Type */}
                  <Form.Item
                    className="form-item-leave-type"
                    name="leaveType"
                    label="Leave Type"
                    rules={[
                      {
                        required: true,
                        message: "Please select Leave Type.",
                      },
                    ]}
                  >
                    <Select
                      className="select-leave-type"
                      options={leaveTypeOptions}
                      showSearch
                      placeholder="Select Type of Leave"
                    />
                  </Form.Item>

                  {/* From Date */}
                  <Form.Item
                    className="form-item-from-date"
                    name="date"
                    label="Date"
                    rules={[
                      {
                        required: true,
                        message: "Please select the date.",
                      },
                    ]}
                  >
                    <RangePicker
                      className="from-date-calendar"
                      onChange={onFromDateChange}
                      // placement="bottomRight"
                    />
                  </Form.Item>

                  <Form.Item
                    className="form-item-days"
                    name="days"
                    label="Total no. days"
                  >
                    <Input className="number-of-days" disabled />
                  </Form.Item>
                </Col>

                <Col span={14}>
                  {/* Addtional Details */}
                  <Form.Item
                    className="form-item-additional-details"
                    name="additionalDetails"
                    label="Addtional Details"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the reason for Leave.",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      showCount
                      maxLength={500}
                      // onChange={onTextAreaChange}
                      placeholder="Please enter the reason for Leave"
                    />
                  </Form.Item>

                  {/* Submit button */}
                  <Form.Item>
                    <Button
                      className="submit-button"
                      htmlType="submit"
                      type="primary"
                    >
                      Apply Leave
                    </Button>

                    <Button
                      htmlType="button"
                      onClick={onFormReset}
                      className="submit-button reset-button"
                    >
                      Reset
                    </Button>
                  </Form.Item>

                  <Form.Item></Form.Item>
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
