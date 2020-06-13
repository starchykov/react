const FOLLOW = 'FOLLOW-USER';
const UNFOLLOW = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {
    users: [],

    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
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

        default:
            return state
    }
};

//создает колбекс функцию со значением события
export const follow = (id) => {
    return {
        type: FOLLOW, id
    }
};

//создает колбекс функцию со значением события
export const unfollow = (id) => {
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

export default usersReducer;
