import {AuthApi, LoginApi, ProfileApi} from "./api";

const AUTHORIZE_ME = 'AUTHORIZE-ME';
const SET_USER_INFO = 'SET-USER-INFO';

const initialState = {
    authData: {
        id: null,
        login: null,
        email: null,
    },
    isAuthorized: null,


    currentUser: {
        "aboutMe": null,
        "contacts": {
            "facebook": null,
            "website": null,
            "vk": null,
            "twitter": null,
            "instagram": null,
            "youtube": null,
            "github": null,
            "mainLink": null
        },
        "lookingForAJob": null,
        "lookingForAJobDescription": null,
        "fullName": null,
        "userId": null,
        "photos": {
            "small": null,
            "large": null
        }
    },
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

export const authorize = (props) => (dispatch) => {
    AuthApi.authMe().then(data => {

        if (data.resultCode === 0) {
            dispatch(setAuthorizeData(data));

            ProfileApi.getProfile(data.data.id).then(response => {
                dispatch(setCurrentUser(response))
            })
        }
    })
};

export const LoginMe =(data)=> (dispatch)=>{
    LoginApi.Login(data).then(response=> {
      dispatch(setAuthorizeData(response.data))
    })
};

export default authorizationReducer;