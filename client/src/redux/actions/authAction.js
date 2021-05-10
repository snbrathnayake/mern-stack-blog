import * as types from 'constants/authConstants';

export function signIn(data) {
    return {
        type: types.USER_SIGNIN_REQUEST,
        payload: data
    }
};

export function signinSuccessInfo(user) {
    return {
        type: types.USER_SIGNIN_SCUCCESS,
        payload: user
    }
};

export function signinError(error) {
    return {
        type: types.USER_SIGNIN_FAIL,
        payload:  error,
    }
};


export function signUp(data) {
    return {
        type: types.USER_REGISTER_REQUEST,
        payload: data
    }
};

export function signupSuccessInfo(user) {
    return {
        type: types.USER_REGISTER_SUCCESS,
        payload: user
    }
};

export function signupError(error) {
    return {
        type: types.USER_REGISTER_FAIL,
        payload:  error,
    }
};



export function signOut() {
    return {
        type: types.USER_SIGNOUT,
    }
};


// export function signoutDone(status) {
//     return {
//         type: types.USER_SIGNOUT_DONE,
//         status
//     }
// };
