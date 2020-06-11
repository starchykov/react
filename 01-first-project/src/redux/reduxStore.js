import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";


//склейка всех обработчиков стора
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
});

//присвоение всех обработчиков и состояний переменной
let store = createStore(reducers);


export default store;