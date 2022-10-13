import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

let initialState = {
    posts: [
        {id: 1, message: 'My thoughts 1 in this post...', likesCount: 12},
        {id: 2, message: 'My thoughts 1 in this post...', likesCount: 12},
        {id: 3, message: 'My thoughts 1 in this post...', likesCount: 12},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            stateCopy.posts = [...state.posts, newPost];
            break;

        case SET_USER_PROFILE:
            stateCopy.profile = action.profile;
            break;

        case SET_STATUS:
            stateCopy.status = action.status;
            break;

        case DELETE_POST:
            stateCopy.posts = state.posts.filter(post => post.id !== action.postId);
            break;

        default:
            break;
    }

    return stateCopy;
}

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


export default profileReducer;
