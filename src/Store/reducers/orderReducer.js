import { cartConstants } from "../types";
import { GET_ALL_ORDERS } from "../types";
import { CREATE_ORDER_ACTION } from "../types";
import { GET_ALL_MYORDERS } from "../types";

export const ordersReducer = (state = [], action) => {
  // console.log("action", action);
  switch (action.type) {
    case GET_ALL_ORDERS:
      return [...action.payload];
    case CREATE_ORDER_ACTION:
      return [...action.payload];
    case GET_ALL_MYORDERS:
      return [...action.payload];
    default:
      return state;
  }
};

const initState = {
  orderItems: {
    // 123: {
    //     _id: 123,
    //     name: 'Samsung mobile',
    //     img: 'some.jpg',
    //     price: 200,
    //     qty: 1,
    // }
  },
  updatingCart: false,
  error: null,
};

export const orderReducer = (state = initState, action) => {
  // console.log("orderReducerAction", action);
  switch (action.type) {
    case cartConstants.ADD_TO_CART_SUCCESS:
      return (state = {
        ...state,
        orderItems: action.payload.items,
        updatingCart: false,
      });
    default:
      return state;
  }
};
