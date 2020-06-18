import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW-USER';
const UNFOLLOW = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IN_PROGRESS = 'TOGGLE-IN-PROGRESS';

//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {
    users: [],

    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    inProgress: []
};

//реагирует на событие из колбека и принимает в себя новый стейт
const usersReducer = (state = initialState, action) => {
    //свитч если событие по типу "***"
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        //копирует старый стейт и старым данынным присваивает новые данные+старые из экшена
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPageNum
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalCount: action.count
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.status
            }
        }

        case TOGGLE_IN_PROGRESS: {
            return {
                ...state,
                inProgress: action.status
                    ? [...state.inProgress, action.id]
                    : state.inProgress.filter(id => id != action.id)
            }
        }

        default:
            return state
    }
};

//создает колбекс функцию со значением события
export const followAct = (id) => {
    return {
        type: FOLLOW, id
    }
};

//создает колбекс функцию со значением события
export const unfollowAct = (id) => {
    return {
        type: UNFOLLOW, id
    }
};

export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
};

export const setCurrentPage = (currentPageNum) => {
    return {
        type: SET_CURRENT_PAGE, currentPageNum
    }
};

export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count
    }
};

export const setFetchingStatus = (status) => {
    return {
        type: TOGGLE_IS_FETCHING, status
    }
};

export const setProgressStatus = (status, id) => {
    return {
        type: TOGGLE_IN_PROGRESS, status, id
    }
};


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(setFetchingStatus(true));

        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setFetchingStatus(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

export const follow = (id) => {
    return (dispatch) => {

        dispatch(setProgressStatus(true, id));
        usersApi.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAct(id))
            }
            dispatch(setProgressStatus(false, id));
        });
    }
};

export const unfollow = (id) => {
    return (dispatch) => {

        dispatch(setProgressStatus(true, id));
        usersApi.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAct(id))
            }
            dispatch(setProgressStatus(false, id));
        });
    }
};

export default usersReducer;
