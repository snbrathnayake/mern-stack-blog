import { all } from "redux-saga/effects";

import auth from "./authSaga";

export default function* indexSaga() {
    yield all([
        auth(),
    ])
}