import { all, call, put, takeEvery } from "redux-saga/effects";
import * as types from 'constants/postConstants';
import * as service from 'services/PostService';
import * as actions from 'redux/actions/postAction';

function* postCreateActionRequest(payload) {
    const response = yield call(service.createPost, payload);
    const { data } = response;

    if (data.error) {
        yield put(actions.postCreateError(data.error));
    } else {
        yield put(actions.postCreateSuccess(data))
    }
}

function* postFetchActionRequest() {
    const response = yield call(service.fetchPost);
    const { data } = response;

    if (data.error) {
        yield put(actions.fetchPostError(data.error));
    } else {
        yield put(actions.fetchPostSuccessInfo(data))
    }
}


function* postSingleFetchActionRequest(payload) {
    const response = yield call(service.getPostById, payload);
    const { data } = response;
    if (data.error) {
        yield put(actions.getPostByIdError(data.error));
    } else {
        yield put(actions.getPostByIdSuccess(data))
    }
}



function* postCreateWatchRequest() {
    yield takeEvery(types.POST_CREATE_REQUEST, postCreateActionRequest)
}

function* postsFetchWatchRequest() {
    yield takeEvery(types.POST_FETCH_REQUEST, postFetchActionRequest)
}


function* postsSingleFetchWatchRequest() {
    yield takeEvery(types.SINGLE_POST_FETCH_REQUEST, postSingleFetchActionRequest)
}


export default function* authSaga() {
    yield all([
        postCreateWatchRequest(),
        postsFetchWatchRequest(),
        postsSingleFetchWatchRequest()
    ])
}