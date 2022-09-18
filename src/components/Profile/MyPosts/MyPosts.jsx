import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

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

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'} className={s.postsForm__text} value={props.newPostText}
                   validate={[required, maxLength10]}/>
            <button className={s.postsForm__btn}>Send</button>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;