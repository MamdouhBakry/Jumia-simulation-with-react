import { axiosInstance } from "../../../network";
import { productConstants } from "../../types";

export const addProduct = (prd) => async (dispatch) => {
  try {
    const response = await axiosInstance.post(`/products`, prd);
    console.log(response.data.product);
    dispatch({
      type: productConstants.ADD_PRODUCT,
      payload: response.data.product,
    });
  } catch (err) {
    console.log(err);
  }
};
