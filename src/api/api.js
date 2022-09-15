import * as axios from "axios";

export const API_SAMURAI_KEY = '19d23257-27a1-42d6-9244-27d8dd73eba9';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': API_SAMURAI_KEY,
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
}
