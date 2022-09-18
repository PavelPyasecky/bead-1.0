import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => (
        <Post message={post.message} likeCount={post.likesCount}/>
    ))

    let addNewPost = (formData) => {
        let newPostText = formData.newPostText;
        props.addPost(newPostText);
    }

    return (
        <div className={s.posts}>
            <div className={s.postsForm}>
                <AddNewPostFormRedux onSubmit={addNewPost}/>
            </div>
            {postsElements}
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPostText'} className={s.postsForm__text} value={props.newPostText}/>
            <button className={s.postsForm__btn}>Send</button>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;