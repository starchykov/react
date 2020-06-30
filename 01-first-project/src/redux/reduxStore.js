import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authorization from "./auth";
import {reducer as formReducer} from 'redux-form';


//склейка всех обработчиков стора
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authorization,
    form: formReducer
});

//присвоение всех обработчиков и состояний переменной
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;