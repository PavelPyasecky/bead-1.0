import React from 'react';
import {connect} from "react-redux";
import {
    followUnfollowUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching
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
                   followUnfollowUser={this.props.followUnfollowUser} currentPage={this.props.currentPage}/>
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

const UsersContainer = connect(mapStateToProps, {
    followUnfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersAPIContainer);

export default UsersContainer;
