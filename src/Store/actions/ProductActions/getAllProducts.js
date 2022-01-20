import { axiosInstance } from "../../../network";
import { productConstants } from  '../../types';


export const getAllProducts = () => async (dispatch) => {
    const lang = localStorage.getItem('lang') || 'en';
    // console.log("langProductByIdProductById", lang);
    try {
        const response = await axiosInstance.get(`/products/${lang}`);
        console.log(response.data.products)
        // console.log("response", response);
        dispatch({
            type: productConstants.GET_ALL_PRODUCTS,
            payload: response.data.products,
            
        });
    } catch (err) {
        console.log(err);
    }
};
