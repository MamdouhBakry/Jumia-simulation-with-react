import { GET_ALL_USERS } from "../../types";
import { axiosInstance } from "../../../network";


export const getAllUsers = () => async (dispatch) => {
    try {
      const response = await axiosInstance.get(`/users`);
      // console.log("response", response);
      dispatch({
        type: GET_ALL_USERS,
        payload: response.data.users,
      });
    } catch (err) {
      console.log(err);
    }
  };
