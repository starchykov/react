import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authorizationReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import appInitialized from "./appReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    authorization: authorizationReducer,
    form: formReducer,
    app: appInitialized

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
