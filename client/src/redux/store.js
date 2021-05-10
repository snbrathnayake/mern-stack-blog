import { applyMiddleware, compose, createStore }  from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from "redux/reducers";
import sagas from 'sagas/IndexSaga';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : '',
    },
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;