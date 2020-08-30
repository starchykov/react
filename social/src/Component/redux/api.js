import React from 'react'
import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '85314769-00a9-483f-a008-bba2eb841a16'
    }
});


export const UsersApi = {
    getUsers: (currentPage = 1, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followApi: (userId) => {
        return instance.post(`follow/` + userId).then(response => response.data)
    },
    unfollowApi: (userId) => {
        return instance.delete(`follow/` + userId).then(response => response.data)
    }
};


export const ProfileApi = {
    getProfile: (id) => {
        return instance.get(`profile/` + id)
            .then(response => response.data)
    }
};