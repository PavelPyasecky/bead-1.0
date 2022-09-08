import React from 'react';
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import s from './Users.module.css';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>{
                pages.map(pageNumber => {
                    return (
                        <span
                            className={props.currentPage === pageNumber ? `${s.selectPage} ${s.pageNumber}` : s.pageNumber}
                            onClick={(e) => {
                                props.onPageChanged(pageNumber)
                            }}>{pageNumber}
                        </span>
                    )
                })
            }
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <DialogItem user={user}/>
                        <button onClick={() => props.followUnfollow(user.id)}>
                            {user.followed ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Users;
