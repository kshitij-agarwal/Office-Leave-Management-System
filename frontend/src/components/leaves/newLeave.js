import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs, { Dayjs } from "dayjs";

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
  Calendar,
  DatePicker,
  Input,
  Button,
  InputNumber,
} from "antd";

import holidayLogo from "../../static/images/holiday.svg";
import calendarLogo from "../../static/images/calender.svg";
import sickLogo from "../../static/images/sick.svg";

import "./newLeave.scss";

import { GET_EMPLOYEES } from "../../actions/types";

const { Meta } = Card;
const { Title, Text } = Typography;
const { TextArea } = Input;

const apiParams = {
  leaveType: "",
  fromDate: "",
  toDate: "",
  additionalDetails: "",
};

const NewLeave = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { option } = Select;
  const { RangePicker } = DatePicker;

  let allEmp = useSelector((state) => state.employee.allEmployees);

  const [fromDate, setFromDate] = useState(0);
  const [toDate, setToDate] = useState();

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
    console.log("onFormSubmit Data - ", data);

    // console.log(data.date[0].format("DD-MM-YYYY"));

    let emp1 = allEmp[0];
    // console.log("len - ", emp1.leaveHistory.length);
    let leaveHistoryRecord = {
      leaveRequestID: `${emp1.empID}_${emp1.leaveHistory.length + 1}`,
      empID: emp1.empID,
      startDate: data.date[0].format("DD-MM-YYYY"),
      endDate: data.date[1].format("DD-MM-YYYY"),
      numberOfDays: data.days,
      leaveType: data.leaveType,
      leaveReason: data.additionalDetails,
      status: "pending",
    };

    emp1.leaveHistory = [leaveHistoryRecord].concat(emp1.leaveHistory);
    // console.log("emp1 -", emp1.leaveHistory);

    emp1.leave[`${leaveHistoryRecord.leaveType}`].count =
      emp1.leave[`${leaveHistoryRecord.leaveType}`].count -
      leaveHistoryRecord.numberOfDays;

    console.log("emp1 -", emp1);

    allEmp[0] = emp1;

    console.log("allemp - ", allEmp);

    dispatch({
      type: GET_EMPLOYEES,
      payload: allEmp,
    });
  };

  const onFormReset = () => {
    form.resetFields();

    // apiParams.leaveType = "";
    // apiParams.fromDate = "";
    // apiParams.toDate = "";
    // apiParams.additionalDetails = "";
  };

  const onFromDateChange = (value, date) => {
    // console.log("onFromDateChange data - ", value.format("DD-MM-YYYY"));
    console.log("date & value - ", value, date);
    console.log("fromdate true - ", fromDate ? true : false);

    console.log(
      "difference - ",
      dayjs(value[1]).diff(dayjs(value[0]), "d") + 1
    );

    // setFromDate(dayjs(value[1]).diff(dayjs(value[0]), "d") + 1);

    form.setFieldsValue({
      days: dayjs(value[1]).diff(dayjs(value[0]), "d") + 1,
    });
  };

  // const onToDateChange = (value, date) => {
  //   console.log("onToDateChange data - ", value.format("DD-MM-YYYY"));
  //   console.log("date & value - ", date, value);
  //   apiParams.toDate = dayjs(date);
  //   console.log("fromdate true - ", fromDate ? true : false);

  //   setToDate(dayjs(date));
  // };

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
                    <Input
                      className="number-of-days"
                      defaultValue={fromDate}
                      disabled
                    />
                  </Form.Item>

                  {/* To Date */}
                  {/* <Form.Item
                    className="form-item-to-date"
                    name="toDate"
                    label="To Date"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <RangePicker
                      className="to-date-calendar"
                      onChange={onToDateChange}
                      // placement="bottomRight"
                    />
                  </Form.Item> */}
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
