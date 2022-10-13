import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/user.jpg";


let User = ({user, followingInProgressList, unfollow, follow, ...props}) => {
    return (
        <div key={user.id}>
            <div className={s.dialog}>

                <div className={s.itemData}>
                    <div className={s.avatarImgContainer}>
                        <NavLink to={'/profile/' + user.id}
                                 className={({isActive}) => `${s.dialogLink} ${isActive ? s.dialogLinkActive : ""}`}>
                            <img className={s.avatarImg}
                                 src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>

                    </div>
                    <div className={s.fullNameContainer}>
                        <span className={s.fullName}>{user.name}</span>
                    </div>
                    <div className={s.lastMessageContainer}>
                        <span className={s.lastMessage}>Last message from friend...</span>
                        <span className={s.dateTime}>11:30 AM</span>
                    </div>
                </div>
            </div>
            <div>
                {user.followed ?
                    <button disabled={followingInProgressList.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button> :
                    <button disabled={followingInProgressList.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>Follow</button>
                }
            </div>
        </div>
    )
}

export default User;
