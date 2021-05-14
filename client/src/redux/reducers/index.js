import { userSigninReducer, userSignupReducer } from "./authReducer";

import { combineReducers } from "redux";
import { userProfileReducer } from "./profileReducer";
import { postCreateReducer, postFetchByIdReducer, postFetchReducer } from "./postReducer";

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,
    userProfile: userProfileReducer,
    postCreated: postCreateReducer,
    postFetched: postFetchReducer,
    singlePost: postFetchByIdReducer,
});

export default reducer;