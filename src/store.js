import { applyMiddleware, compose } from "redux";
import thunk, { createStoreHook } from "react-redux";
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];

const store = createStoreHook(rootReducer, initialState, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;