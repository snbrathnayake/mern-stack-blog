import { userSigninReducer, userSignupReducer } from "./authReducer";

import { combineReducers } from "redux";

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,
});

export default reducer;