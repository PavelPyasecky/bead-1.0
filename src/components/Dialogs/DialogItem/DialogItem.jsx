import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}
                     className={({isActive}) => `${s.dialogLink} ${isActive ? s.dialogLinkActive : ""}`}>
                <div className={s.itemData}>
                    <div className={s.avatarImgContainer}>
                        <img className={s.avatarImg} src='https://thumbs.dreamstime.com/b/user-icon-vector-male-person-symbol-profile-avatar-sign-glyph-pictogram-illustration-user-icon-vector-male-person-symbol-104604827.jpg'/>
                    </div>
                    <div className={s.fullNameContainer}>
                        <span className={s.fullName}>{props.name}</span>
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