import { axiosInstance } from "../../../network";
import { cartConstants } from "../../types";
import store from "../../Store";
import { CREATE_ORDER_ACTION ,  GET_ALL_ORDERS } from "../../types";

export const createOrder = (cartContent) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`/orders`, {
      cartContent,
      tax: 10,
      shippingFee: 10, 
    });
    console.log("response", res);
    dispatch({
      type: CREATE_ORDER_ACTION,
      payload: res.data.orders,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllMyOrders = (cartContent) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/orders/showAllMyOrders`);
    console.log("response", res);
    dispatch({
      type: GET_ALL_ORDERS,
      payload: res.data.orders,
    });
  } catch (err) {
    console.log(err);
  }
};

// {
//    "items":[{"name": "t-shirt2",
//   "image": "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/21/864102/1.jpg?8774",
//   "price": 109999,
//   "amount": 2,
//   "product":"61a13f2a9b6b3cd7f9b46089"}
//     ],
// "tax":10,
// "shippingFee":10
// }

export const getCartItems = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/orders/showAllMyOrders`);
    const { orderItems: items } = res.data.orders[0];
    console.log({ items });
    if (items) {
      dispatch({
        type: cartConstants.ADD_TO_CART_SUCCESS,
        payload: { items },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const accessToken = localStorage.getItem("token");

export const addToCart =
  (product, newQty = 1) =>
  async (dispatch) => {
    const {
      Orders: { items },
      auth,
    } = store.getState();
    //console.log('action::products', products);
    //const product = action.payload.product;
    //const products = state.products;
    const amount = items[product._id]
      ? parseInt(items[product._id].amount + newQty)
      : 1;
    items[product._id] = {
      ...product,
      amount,
    };

    if (accessToken) {
      const payload = {
        // items: Object.keys(items).map((key, index) => {
        //     return {
        //         amount: items[key].amount,
        //         product: items[key]._id
        //     }
        // })
        items: [
          {
            product: product._id,
            amount: amount,
          },
        ],
      };
      console.log(payload);
      const res = await axiosInstance.post(`/orders`, {
        payload,
        tax: 10,
        shippingFee: 10,
      });
      console.log(res);
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(items));
    }

    console.log("addToCart::", items);

    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: { items },
    });
  };

// export const removeCartItem = (payload) => async (dispatch) => {
//     try {
//       const res = await axiosInstance.post(`/user/cart/removeItem`, { payload });
//       if (res.status === 202) {
//         dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
//         dispatch(getCartItems());
//       } else {
//         const { error } = res.data;
//         dispatch({
//           type: cartConstants.REMOVE_CART_ITEM_FAILURE,
//           payload: { error },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

// export const updateCart = () => {
//   return async (dispatch) => {
//     const { auth } = store.getState();
//     let items = localStorage.getItem("cart")
//       ? JSON.parse(localStorage.getItem("cart"))
//       : null;

//     console.log("upppppppppp");

//     if (auth.authenticate) {
//       localStorage.removeItem("cart");
//       //dispatch(getCartItems());
//       if (items) {
//         const payload = {
//           items: Object.keys(items).map((key, index) => {
//             return {
//               amount: items[key].amount,
//               product: items[key]._id,
//             };
//           }),
//         };
//         if (Object.keys(items).length > 0) {
//           const res = await axiosInstance.post(`/user/cart/addtocart`, payload);
//           if (res.status === 201) {
//             dispatch(getCartItems());
//           }
//         }
//       } else {
//         dispatch(getCartItems());
//       }
//     } else {
//       if (items) {
//         dispatch({
//           type: cartConstants.ADD_TO_CART_SUCCESS,
//           payload: { items },
//         });
//       }
//     }
//   };
// };
