import { axiosInstance } from "../../../network";
import { productConstants } from "../../types";


const lang = localStorage.getItem('lang') || 'en';
// console.log("langProductByIdProductById", lang);

export const getAllProductsPaganation = (page,catparent, cat) => async (dispatch) => {
    let response;

    try {
      //     if (cat != 'null') {

      //          response = await axiosInstance.get(`/products?page=${page}&limit=12&categoryparent=${cat}`);
      //     }
      //    else{
      response = await axiosInstance.get(
        `/products/${lang}?page=${page}&limit=8&categoryparent=${catparent}&category=${cat}`
      );
      // }
      console.log("responseeeeeeeeee", response);
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_PAGANATION,
        payload: response.data.products,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const sortPrice = (catparent, sign) => async (dispatch) => {
    let response;
    try {
        // &featured=${featured }
        response = await axiosInstance.get(`/products/${lang}?categoryparent=${catparent}&sort=${sign}price`);
        // console.log("response", response);
        dispatch({
            type: productConstants.GET_HightoLowPrice_PRODUCTS,
            payload: response.data.products,
        });
    } catch (err) {
        console.log(err);
    }
};


export const avergeRatingProducts = (catparent,id) => async (dispatch) => {
    try {
      let response = await axiosInstance.get(`/products/${lang}?categoryparent=${catparent}&numericFilters=averageRating=${id}`);
      // console.log("responseresponseresponseresponse", response);
        dispatch({
            type: productConstants.GET_AVERGERATING_PRODUCTS,
          payload: response.data.products,
        });
    } catch (err) {
        console.log(err);
    }
};

export const sortProductRating = (catparent) => async (dispatch) => {
    try {
      let response = await axiosInstance.get(`/products/${lang}?categoryparent=${catparent}&numericFilters=averageRating<=5&sort=-averageRating`);
      console.log("responseresponseresponseresponse", response);
        dispatch({
            type: productConstants.GET_SORT_AVERGERATING_PRODUCTS,
          payload: response.data.products,
        });
    } catch (err) {
        console.log(err);
    }
};

// localhost: 5000 / api / v1 / products / en ? numericFilters = averageRating <= 5 & sort=-averageRating

// const averageRating = async (id) => {
//   // console.log("id averageRating", id);
//   const res = await axiosInstance.get(`/products/${lang}?numericFilters=averageRating=${id}`);
//   props.setratingproducts(res.data);
//   // console.log("res averageRating", res)
// }