import { all, call, put, takeEvery } from "redux-saga/effects";
import * as types from 'constants/profileConstants';
import * as service from 'services/ProfileService';
import * as actions from 'redux/actions/profileAction';

function* profileActionRequest(payload) {
    const response = yield call(service.getProfileInfo, payload);
    const { data } = response;
    if(data) {
        yield put(actions.profileSuccessInfo(data))
    }

}

function* profileWatchRequest() {
    yield takeEvery(types.USER_PROFILE_GET_REQUEST, profileActionRequest)
}


export default function* authSaga() {
    yield all([
        profileWatchRequest(),
    ])
}