import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post__avatarWrapper}>
                <img className={s.post__avatar}
                     src='https://img.freepik.com/premium-vector/pro-gamer-avatar-logo_71220-49.jpg?w=2000'/>
            </div>
            <div className={s.post__textWrapper}>
                <p className={s.post_text}>{props.message}</p>
            </div>
            <div className={s.likeWrapper}>
                <span className={s.like}>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;