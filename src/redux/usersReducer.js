import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgressList: [],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, {followed: true})
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, {followed: false})

            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgressList: action.isFetching
                    ? [...state.followingInProgressList, action.userId]
                    : state.followingInProgressList.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export let follow = (id) => ({
    type: FOLLOW_USER,
    userId: id,
})

export let unfollow = (id) => ({
    type: UNFOLLOW_USER,
    userId: id,
})

export let setUsers = (users) => ({
    type: SET_USERS,
    users: users,
})

export let setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})

export let setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
})

export let toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
})

export let toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
})

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.requestUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await apiMethod;

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));

}

export const followSuccess = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow(userId);
        await followUnfollowFlow(dispatch, userId, apiMethod, follow);
    }
}

export const unfollowSuccess = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow(userId);
        await followUnfollowFlow(dispatch, userId, apiMethod, unfollow);
    }
}

export default usersReducer;
