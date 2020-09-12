import {createSelector} from 'reselect'

export const usersSelector = (state) => {
    return state.usersPage.users
};

export const users = createSelector(usersSelector, (users) => {
    return users.filter(u => true)
});

export const pageSize = (state) => {
    return state.usersPage.pageSize
};

export const totalCount = (state) => {
    return state.usersPage.totalCount
};

export const currentPage = (state) => {
    return state.usersPage.currentPage
};

export const isFetching = (state) => {
    return state.usersPage.isFetching
};

export const actionProgress = (state) => {
    return state.usersPage.actionProgress
};


