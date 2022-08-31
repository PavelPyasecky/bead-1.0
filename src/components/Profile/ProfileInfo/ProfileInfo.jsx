import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profile__header}>
                <img className={s.profile__headerImg}
                     src='https://image.shutterstock.com/image-vector/sea-waves-sun-whale-logo-260nw-1060257314.jpg'/>
            </div>
            <div className={s.profile__content}>
                <div className={s.profile__avatarWrapper}>
                    <img className={s.profile__avatar}
                         src='https://img.freepik.com/premium-vector/pro-gamer-avatar-logo_71220-49.jpg?w=2000'/>
                </div>
                <div className={s.profile__description}>
                    <span className={s.profile__name}>FirstName LastName</span>
                    <p className={s.profile__info}>Some info about me...</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;