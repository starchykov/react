import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";


//склейка всех обработчиков стора
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sideBarReducer
});

//присвоение всех обработчиков и состояний переменной
let store = createStore(reducers);


export default store;