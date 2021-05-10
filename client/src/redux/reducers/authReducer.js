import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SCUCCESS, USER_SIGNOUT } from "constants/authConstants";


export const userSigninReducer = (state = { loading: false, userInfo: {}, error: null }, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_SIGNIN_SCUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
                error: null
            };

        case USER_SIGNIN_FAIL:
            return {
                ...state,
                loading: false,
                userInfo: {},
                error: action.payload
            };
        case USER_SIGNOUT:
            return {};

        default:
            return state;
    }
};


export const userSignupReducer = (state = { loading: false, userInfo: {}, error: null }, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
                error: null
            };

        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                userInfo: {},
                error: action.payload
            };

        default:
            return state;
    }
};
