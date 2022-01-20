import { authConstants, cartConstants } from "../../types";
import { axiosInstance } from "../../../network";
// new update signup action
export const signup = (userx) => async (dispatch) => {
  try {
    let res = await axiosInstance.post(`/auth/register`, userx);
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("userName", res.data.user.name);
    // localStorage.setItem("userId", res.data.user.userId);
    // localStorage.setItem("userRole", res.data.user.role);
    // localStorage.setItem("")
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
export const signupSeller = (userx) => async (dispatch) => {
  try {
    let res = await axiosInstance.post(`/auth/register`, userx);
    console.log("res,", res);
    const { token, user } = res.data;
    // localStorage.setItem("token", token);
    // localStorage.setItem("user",JSON.stringify(user));
    // localStorage.setItem("userName", res.data.user.name);
    // localStorage.setItem("userId", res.data.user.userId);
    // localStorage.setItem("userRole", res.data.user.role);
    // localStorage.setItem("")
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = (userx) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`/auth/login`, {
      ...userx,
    });
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const isUserLoggedIn = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const signout = () => {
  return async (dispatch) => {
    // dispatch({ type: authConstants.LOGOUT_REQUEST });
    // localStorage.removeItem('user');
    // localStorage.removeItem('token');
    localStorage.clear();
    // dispatch({ type: authConstants.LOGOUT_SUCCESS });
    // dispatch({ type: cartConstants.RESET_CART });
    //const res = await axiosInstance.post(`/admin/signout`);
    // if(res.status === 200){

    // }else{
    //     dispatch({
    //         type: authConstants.LOGOUT_FAILURE,
    //         payload: { error: res.data.error }
    //     });
    // }
  };
};
