import { productConstants } from "../types";

export const AddProductReducers = (state = [], action) => {
  // console.log("action", action);
  switch (action.type) {
    case productConstants.ADD_PRODUCT:
      return [...action.payload];
    default:
      return state;
  }
};
