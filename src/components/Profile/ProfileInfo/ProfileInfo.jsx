import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.profile__header}>
                <img className={s.profile__headerImg}
                     src='https://image.shutterstock.com/image-vector/sea-waves-sun-whale-logo-260nw-1060257314.jpg'/>
            </div>
            <div className={s.profile__content}>
                <div className={s.profile__avatarWrapper}>
                    <img className={s.profile__avatar}
                         src={props.profile.photos.large}/>
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

                <div className={s.profile__description}>
                    <span className={s.profile__name}>{props.profile.fullName}</span>
                    <p className={s.profile__info}>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;