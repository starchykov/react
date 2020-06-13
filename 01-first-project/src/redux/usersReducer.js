const FOLLOW = 'FOLLOW-USER';
const UNFOLLOW = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {
    users: [
        // {
        //     id: '1',
        //     followed: true,
        //     name: 'Ivan',
        //     photos: 'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
        //     status: 'it`s fine',
        //     location: {country: 'Ukraine', city: 'Kyiv'}
        // }
    ],

    pageSize: 100,
    totalCount: 1,
    currentPage: 1,
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

        default:
            return state
    }
};

//создает колбекс функцию со значением события
export const followAC = (id) => {
    return {
        type: FOLLOW, id
    }
};

//создает колбекс функцию со значением события
export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW, id
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
};

export const setCurrentPageAC = (currentPageNum) => {
    return {
        type: SET_CURRENT_PAGE, currentPageNum
    }
};

export const setTotalUsersCountAC = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count
    }
};

export default usersReducer;
