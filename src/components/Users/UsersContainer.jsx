import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess, getUsers,
    setCurrentPage,
    setTotalUsersCount, setUsers, unfollowSuccess
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged} users={this.props.users}
                   follow={this.props.follow} unfollow={this.props.unfollow} currentPage={this.props.currentPage}
                   followingInProgressList={this.props.followingInProgressList}/>
        </>
    }
}


let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgressList: state.usersPage.followingInProgressList,
})

export default compose(
    connect(mapStateToProps, {
        follow: followSuccess,
        unfollow: unfollowSuccess,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        getUsers,
    }),
)(UsersAPIContainer);
