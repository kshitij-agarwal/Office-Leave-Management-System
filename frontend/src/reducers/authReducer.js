import { AUTH } from "../actions/types";

const initialState = {
  userAuth: {
    isAuthenticated: false,
    userRole: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        userAuth: action.payload,
      };

    default:
      return state;
  }
};
