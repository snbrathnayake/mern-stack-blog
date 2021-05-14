import * as types from 'constants/profileConstants';

export function profile(username) {
    return {
        type: types.USER_PROFILE_GET_REQUEST,
        payload: username
    }
};


export function profileSuccessInfo(data) {
    return {
        type: types.USER_PROFILE_GET_SUCCESS,
        payload: data
    }
};
