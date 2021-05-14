import * as types from 'constants/postConstants';

export function createPost(post) {
    return {
        type: types.POST_CREATE_REQUEST,
        payload: post
    }
};

export function postCreateSuccess(data) {
    return {
        type: types.POST_CREATE_SUCCESS,
        payload: data
    }
};

export function postCreateError(err) {
    return {
        type: types.POST_CREATE_FAIL,
        payload: err
    }
};


/**
 * ----------------------------------------------------------------
 * ----------------------------------------------------------------
 */

export function fetchPost() {
    return {
        type: types.POST_FETCH_REQUEST
    }
};

export function fetchPostSuccessInfo(post) {
    return {
        type: types.POST_FETCH_SCUCCESS,
        payload: post
    }
};

export function fetchPostError(err) {
    return {
        type: types.POST_FETCH_FAIL,
        payload: err
    }
};



export function getPostById(id) {
    return {
        type: types.SINGLE_POST_FETCH_REQUEST,
        payload: id
    }
}

export function getPostByIdSuccess(post) {
    return {
        type: types.SINGLE_POST_FETCH_SUCCESS,
        payload: post
    }
}


export function getPostByIdError(err) {
    return {
        type: types.SINGLE_POST_FETCH_FAIL,
        payload: err
    }
}