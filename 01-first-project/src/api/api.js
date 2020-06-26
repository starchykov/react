import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '85314769-00a9-483f-a008-bba2eb841a16'},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        )
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },

    getProfile(userId) {
        console.warn('Please use profileApi element');
        return profileApi.getProfile(userId)
    }
};
export const profileApi = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }

};

export const authApi = {

    auth() {
        return instance.get(`auth/me`)
    }
};






