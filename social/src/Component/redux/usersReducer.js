const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';


let initialState = {
    users: [],
    pageSize: '100',
    totalCount: '',
    currentPage: '1'
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };

        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };


        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };

        case SET_CURRENT_PAGE:

            return {
                ...state,
                currentPage: action.currentPage
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };

        default:
            return state
    }
};

export let setUsersActionCreator = (items) => {
    return {
        type: SET_USERS,
        users: items,
    }
};

export let followActionCreator = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
};

export let unfollowActionCreator = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
};
export let setCurrentPageActionCreator = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber,
    }
};

export let setTotalUsersCountActionCreator = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount

    }
};


export default usersReducer;