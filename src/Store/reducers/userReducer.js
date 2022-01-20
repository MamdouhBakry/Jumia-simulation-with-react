import { GET_ALL_USERS, GET_SINGLE_USER, UPDATE_USER_PASSWORD } from "../types";

export const userReducer = (state = [], action) => {
  // console.log("action", action);
  switch (action.type) {
    case GET_ALL_USERS:
      return [...action.payload];

    case GET_SINGLE_USER:
      return action.payload;
    case UPDATE_USER_PASSWORD:
      return action.payload;

    default:
      return state;
  }
};
