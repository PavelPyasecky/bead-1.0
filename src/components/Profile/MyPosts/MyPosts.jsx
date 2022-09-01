import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => (
        <Post message={post.message} likeCount={post.likesCount}/>
    ))

    let newPostElement = React.createRef();


    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.posts}>
            <div className={s.postsForm}>
                <textarea className={s.postsForm__text} onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
                <button className={s.postsForm__btn} onClick={addPost}>Send</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;