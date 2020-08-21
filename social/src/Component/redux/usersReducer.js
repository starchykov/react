const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
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

        default:
            return state
    }
};

export let setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
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

export default usersReducer;