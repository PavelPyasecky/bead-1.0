import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    postsData: state.profilePage.posts,
})

let mapDispatchToProps = (dispatch) =>(
    {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
)

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
