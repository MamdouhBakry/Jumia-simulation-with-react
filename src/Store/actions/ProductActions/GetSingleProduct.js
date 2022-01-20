import { axiosInstance } from "../../../network";
import { productConstants } from '../../types';



export const ProductById = (id) => async (dispatch) => {
  const lang = localStorage.getItem('lang') || 'en';
  console.log("langProductByIdProductById", lang);
  try {
    const response = await axiosInstance.get(`/products/${id}/${lang}`);
    console.log("responseProductByIdProductById", response);
    dispatch({
      type: productConstants.GET_SINGLE_PRODUCT,
      payload: response.data.product,
    });
  } catch (err) {
    console.log(err);
  }
};
