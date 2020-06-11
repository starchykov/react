const FOLLOW = 'FOLLOW-USER';
const UNFOLLOW = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';


//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {
    users: [
        {
            id: '1',
            followed: true,
            fullName: 'Ivan',
            avatarUrl: 'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
            status: 'it`s fine',
            location: {country: 'Ukraine', city: 'Kyiv'}
        },
        {
            id: '2',
            followed: true,
            fullName: 'Ivan',
            avatarUrl: 'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
            status: 'it`s fine',
            location: {country: 'USA', city: 'Washington'}
        },
        {
            id: '3',
            followed: false,
            fullName: 'Ivan',
            avatarUrl: 'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
            status: 'it`s fine',
            location: {country: 'Britain', city: 'London'}
        },
        {
            id: '4',
            followed: true,
            fullName: 'Ivan',
            avatarUrl:'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
            status: 'it`s fine',
            location: {country: 'Canada', city: 'Oslo'}
        }
    ],
};

//реагирует на событие из колбека и принимает в себя новый стейт
const usersReducer = (state = initialState, action) => {

    //свитч если событие по типу "***"
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }

        //копирует старый стейт и старым данынным присваивает новые данные+старые из экшена
        case SET_USERS: {
            return {
                ...state, users: [...state.users, action.users]
            }
        }

        default:
            return state
    }
};

//создает колбекс функцию со значением события
export const followAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
};

//создает колбекс функцию со значением события
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
};

export default usersReducer;