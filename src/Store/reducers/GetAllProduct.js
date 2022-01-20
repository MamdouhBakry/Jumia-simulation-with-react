import { productConstants } from '../types';

import {fproducts} from '../mockdata'
export const AllProductsReducer = (state = fproducts, action) => {
    // console.log("action", action);
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS:
            return [...action.payload];

        default:
            return state;
    }
};

export const AllProductsPaginationReducer = (state = fproducts, action) => {
    // console.log("action", action);
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_PAGANATION:
            return [...action.payload];
        case productConstants.GET_HightoLowPrice_PRODUCTS:
            return [...action.payload];
        case productConstants.GET_AVERGERATING_PRODUCTS:
            return [...action.payload];
        case productConstants.GET_SORT_AVERGERATING_PRODUCTS:
            return [...action.payload];
        default:
            return state;
    }
};



export const SingleProductReducer = (state = [], action) => {
    // console.log("action", action);
    switch (action.type) {
        case productConstants.GET_SINGLE_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};




