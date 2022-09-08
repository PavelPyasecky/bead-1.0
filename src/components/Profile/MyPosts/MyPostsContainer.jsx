import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    postsData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
})

let mapDispatchToProps = (dispatch) =>(
    {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))

        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
)

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
