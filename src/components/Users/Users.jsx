import React from 'react';
import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            {
                props.users.map(user => <User user={user} followingInProgressList={props.followingInProgressList}
                    key={user.id} unfollow={props.unfollow} follow={props.follow}/>
                )
            }
        </div>
    )
}

export default Users;
