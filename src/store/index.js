import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import applicationReducers from './reducers/signupReducer';
import applicationSignInReducer from './reducers/loginReducer';
let reducers = combineReducers({
    applicationReducers,
    applicationSignInReducer
});
const loggerMiddleware = createLogger();

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;