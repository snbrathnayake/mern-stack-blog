import { all, call, put, takeEvery } from "redux-saga/effects";
import * as types from 'constants/authConstants';
import * as service from 'services/AuthService';
import * as actions from 'redux/actions/authAction';

/*worker saga*/
function* siginActionRequest(payload) {
    const response = yield call(service.getUserInfo, payload);
    const { data } = response;

    if(data.error) {
        yield put(actions.signinError(data.error));
    } else {
        yield put(actions.signinSuccessInfo(data));
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
}

function* sigupActionRequest(payload) {
    const response = yield call(service.createUserInfo, payload);
    const { data } = response;

    if(data.error) {
        yield put(actions.signupError(data.error));
    } else {
        yield put(actions.signupSuccessInfo(data));
        yield put(actions.signinSuccessInfo(data.user));
        localStorage.setItem('registedInfo', JSON.stringify(data.user));
    }
}

function* signoutActionRequest() {
    yield call(service.signout);
    localStorage.removeItem("userInfo");
}

/*watcher saga*/
function* signinWatchRequest() {
    yield takeEvery(types.USER_SIGNIN_REQUEST, siginActionRequest)
}

function* signupWatchRequest() {
    yield takeEvery(types.USER_REGISTER_REQUEST, sigupActionRequest)
}

function* signoutWatchRequest() {
    yield takeEvery(types.USER_SIGNOUT, signoutActionRequest)
}

export default function* authSaga() {
    yield all([
        signinWatchRequest(),
        signupWatchRequest(),
        signoutWatchRequest()
    ])
}

// fork => non-blocking task. Non-blocking