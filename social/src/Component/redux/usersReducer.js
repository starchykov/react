const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const IS_FETCHING = 'IS-FETCHING';


let initialState = {
    users: [],
    pageSize: '100',
    totalCount: '',
    currentPage: 1,
    isFetching: true
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

            case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state
    }
};

export let setUsers = (items) => {
    return {
        type: SET_USERS,
        users: items,
    }
};

export let follow = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
};

export let unfollow = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
};
export let setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber,
    }
};

export let setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
};
export let setFetching = (fetching) => {
    return {
        type: IS_FETCHING,
        isFetching: fetching
    }
};


export default usersReducer;