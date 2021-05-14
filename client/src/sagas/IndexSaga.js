import { all } from "redux-saga/effects";

import auth from "./authSaga";
import profile from "./profileSaga";
import post from "./postSaga";

export default function* indexSaga() {
    yield all([
        auth(),
        profile(),
        post()
    ])
}