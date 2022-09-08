import React from 'react';
import {connect} from "react-redux";
import {
    followUnfollowUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(reponse => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(reponse.data.items)
            this.props.setTotalUsersCount(reponse.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(reponse => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(reponse.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged} users={this.props.users}
                   followUnfollow={this.props.followUnfollow} currentPage={this.props.currentPage}/>
        </>
    }
}


let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
})

let mapDispatchToProps = (dispatch) => ({
    followUnfollow: (userId) => {
        dispatch(followUnfollowUserAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (count) => {
        dispatch(setTotalUsersCountAC(count))
    },
    toggleIsFetching: (isFetching) => {
        dispatch(toggleIsFetchingAC(isFetching))
    },
})


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;
