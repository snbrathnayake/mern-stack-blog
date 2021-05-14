import { POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_FETCH_FAIL, POST_FETCH_REQUEST, POST_FETCH_SCUCCESS, SINGLE_POST_FETCH_FAIL, SINGLE_POST_FETCH_REQUEST, SINGLE_POST_FETCH_SUCCESS } from "constants/postConstants";

export const postCreateReducer = (state = { loading: false, post: {}, error: null }, action) => {
    switch (action.type) {
        case POST_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case POST_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload
            }

        case POST_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                post: {},
                error: action.payload
            }

        default:
            return state;
    }
};

export const postFetchReducer = (state = { loading: false, posts: [], error: null }, action) => {
    switch (action.type) {
        case POST_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case POST_FETCH_SCUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }

        case POST_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }

        default:
            return state;
    }
};

export const postFetchByIdReducer = (state = { loading: false, post: {}, error: null }, action) => {
    switch (action.type) {
        case SINGLE_POST_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SINGLE_POST_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload
            }

        case SINGLE_POST_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                post: {},
                error: action.payload
            }
        default:
            return state;
    }
}