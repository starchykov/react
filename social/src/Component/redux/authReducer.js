const AUTHORIZE_ME = 'AUTHORIZE-ME';
const SET_USER_INFO = 'SET-USER-INFO';

const initialState = {
    authData: {
        id: null,
        login: null,
        email: null,
    },
    isAuthorized: false,

    currentUser: {}
};


const authorizationReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTHORIZE_ME:
            return {
                ...state,
                authData: {...action.authData},
                isAuthorized: true
            };

        case SET_USER_INFO:
            return {
                ...state,
                currentUser: action.currentUserData
            };

        default:
            return state
    }
};

export const setAuthorizeData = (authData) => {
    return {
        type: AUTHORIZE_ME,
        authData: authData.data
    }
};

export let setCurrentUser = (currentUserData) => {
    return {
        type: SET_USER_INFO,
        currentUserData: currentUserData
    }
};
debugger
export default authorizationReducer;