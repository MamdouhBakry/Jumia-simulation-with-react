import { GET_SINGLE_USER } from "../../types";
import { axiosInstance } from "../../../network";


export const getSingleUser = (id) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(`/users/${id}`);
      // console.log("response", response);
      dispatch({
        type: GET_SINGLE_USER,
        payload: response.data.user,
      });
    } catch (err) {
      console.log(err);
    }
  };