import {UsersApi} from "./api";

const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const IS_FETCHING = 'IS-FETCHING';
const ACTION_PROGRESS = 'ACTION-PROGRESS';


let initialState = {
    users: [],
    pageSize: '100',
    totalCount: '',
    currentPage: 1,
    isFetching: true,
    actionProgress: []
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

        case ACTION_PROGRESS:
            return {
                ...state,
                actionProgress: action.isFetching
                    ? [...state.actionProgress, action.inActionUsers]
                    : state.actionProgress.filter(id => id !== action.inActionUsers)
            };

        default:
            return state
    }
};


export let setUsers = (items) => ({type: SET_USERS, users: items});

export let followAC = (id) => ({type: FOLLOW, id: id});

export let unfollowAC = (id) => ({type: UNFOLLOW, id: id});

export let setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});

export let setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount});

export let setFetching = (fetching) => ({type: IS_FETCHING, isFetching: fetching});

export let setActionProgress = (inActionUsers, isFetching) => ({type: ACTION_PROGRESS, isFetching, inActionUsers});


export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setFetching(true));

    UsersApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(setFetching(false))
    });
};

export const follow = (id) => (dispatch) => {
    dispatch(setActionProgress(id, true));
    dispatch(followAC(id));
    UsersApi.followApi(id);
    dispatch(setActionProgress(id, false))
};

export const unfollow = (id) => (dispatch) => {
    dispatch(setActionProgress(id, true));
    dispatch(unfollowAC(id));
    UsersApi.unfollowApi(id);
    dispatch(setActionProgress(id, false))
};

export default usersReducer;