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
                ...state.data,
                ...action.data,
                isAuth: true
            };


        default:
            return state
    }

};

//создает колбекс функцию со значением события
export const setUserAuthData = (userId, login, email) => {
    return {
        type: SET_USER_DATA,
        data: {userId, login, email}
    }
};

export default authorization;