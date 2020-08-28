import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authorizationReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    authorization: authorizationReducer
});

const store = createStore(reducers);

export default store;