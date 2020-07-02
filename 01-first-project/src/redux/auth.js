import {authApi} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {
    data: {
        userId: null,
        login: null,
        email: null,
    },
    isAuth: false
};

//реагирует на событие из колбека и принимает в себя новый стейт
const authorization = (state = initialState, action) => {

    //свитч если событие по типу "***"
    switch (action.type) {
        //тип события
        case SET_USER_DATA:
            //созадет копию стейта для фиксации изминений, получает из события елемент и присваивает
            return {
                ...state,
                ...action.data,
            };

        default:
            return state
    }
};

//создает колбекс функцию со значением события
export const setUserAuthData = (userId, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, login, email, isAuth}
    }
};

export const getAuthUserData = () => (dispatch) => {
    return authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setUserAuthData(id, login, email, true));
            }
        })
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        })
};

export const logout = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, null));
            }
        })
};

export default authorization;