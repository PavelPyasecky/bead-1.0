import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess, requestUsers,
    setCurrentPage,
    setTotalUsersCount, setUsers, unfollowSuccess
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgressList,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-Selectors";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgressList: getFollowingInProgressList(state),
})

export default compose(
    connect(mapStateToProps, {
        follow: followSuccess,
        unfollow: unfollowSuccess,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        requestUsers,
    }),
)(UsersAPIContainer);
