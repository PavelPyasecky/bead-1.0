import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/img/user.jpg';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.user.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}
                     className={({isActive}) => `${s.dialogLink} ${isActive ? s.dialogLinkActive : ""}`}>
                <div className={s.itemData}>
                    <div className={s.avatarImgContainer}>
                        <img className={s.avatarImg}
                             src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>
                    </div>
                    <div className={s.fullNameContainer}>
                        <span className={s.fullName}>{props.user.name}</span>
                    </div>
                    <div className={s.lastMessageContainer}>
                        <span className={s.lastMessage}>Last message from friend...</span>
                        <span className={s.dateTime}>11:30 AM</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;