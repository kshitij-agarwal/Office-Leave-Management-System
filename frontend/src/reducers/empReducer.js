import {
  ADD_ITEM,
  DELETE_ITEM,
  MODIFY_DATA,
  MODIFY_USER,
  LOADING,
  GET_EMPLOYEES,
} from "../actions/types";

const initialState = {
  loading: false,
  // allEmployees: [],
  allEmployees: [
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
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      console.log("Hi");
      return {
        ...state,
        allEmployees: action.payload,
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
