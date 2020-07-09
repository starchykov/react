import {getAuthUserData} from "./auth";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {
    initialized: false,
    isAuth: false
};

//реагирует на событие из колбека и принимает в себя новый стейт
const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            //созадет копию стейта для фиксации изминений, получает из события елемент и присваивает
            return {
                ...state,
                initialized: true,
            };
        default:
            return state
    }
};

//создает колбекс функцию со значением события
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //dispatch(initializedSuccess())
    //dispatch(initializedSuccess())
    //dispatch(initializedSuccess())
    //dispatch(initializedSuccess())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
};


export default AppReducer;