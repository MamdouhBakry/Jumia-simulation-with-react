import { combineReducers } from "redux";
import { orderReducer, ordersReducer } from "./orderReducer";
import { userReducer } from "./userReducer";
import { reviewReducer } from "./ReviewReducer";
import { AddProductReducers } from "./AddProductReducer";
import {
  AllProductsReducer,
  SingleProductReducer,
  AllProductsPaginationReducer,
} from "./GetAllProduct";
import { SignUpReducer } from "./authReducer";
import { GetChildCategory, GetParentCategory } from "./categoryReducer";

export default combineReducers({
  AllProducts: AllProductsReducer,
  AllProductsPagination: AllProductsPaginationReducer,
  SingleProduct: SingleProductReducer,
  orders: ordersReducer,
  users: userReducer,
  SignUp: SignUpReducer, //auth
  Orders: orderReducer, //cart
  category: GetParentCategory,
  categoryChild: GetChildCategory,
  review: reviewReducer,
  product: AddProductReducers,
});
