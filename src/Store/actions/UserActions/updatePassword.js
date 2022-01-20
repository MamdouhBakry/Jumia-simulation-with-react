import { UPDATE_USER_PASSWORD } from "../../types";
import { axiosInstance } from "../../../network";
export const updatePassword = (user) => async (dispatch) => {
  try {
    const response = await axiosInstance.patch(
      `/users/updateUserPassword`,
      user
    );
    console.log("response", response);
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: response.data.msg,
    });
  } catch (err) {
    console.log(err);
  }
};
