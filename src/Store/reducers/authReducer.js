import { authConstants} from "../types";


export const SignUpReducer = (state = {}, action) => {
    // console.log(action);
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS:
            return action.payload;
        case authConstants.LOGOUT_SUCCESS:
            return action.payload;
        // case authConstants.LOGOUT_SUCCESS:
        //     return ;
        default:
            return state;
    }
};
