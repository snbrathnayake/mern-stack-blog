import { USER_PROFILE_GET_FAIL, USER_PROFILE_GET_REQUEST, USER_PROFILE_GET_SUCCESS } from "constants/profileConstants";

export const userProfileReducer = (state = { loading: false, profile: {}, error: null }, action) => {
    switch (action.type) {
        case USER_PROFILE_GET_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_PROFILE_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }

        case USER_PROFILE_GET_FAIL:
            return {
                ...state,
                loading: false,
                profile: {},
                error: action.payload
            }
        default:
            return state;
    }
};