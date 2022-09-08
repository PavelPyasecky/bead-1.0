const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'My thoughts 1 in this post...', likesCount: 12},
        {id: 2, message: 'My thoughts 1 in this post...', likesCount: 12},
        {id: 3, message: 'My thoughts 1 in this post...', likesCount: 12},
    ],
    newPostText: "newPostText",
}

const profileReducer = (state=initialState, action) => {
    let stateCopy = {...state};

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            stateCopy.posts = [...state.posts, newPost];
            stateCopy.newPostText = '';
            break;

        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            break;
        default:
            break;
    }

    return stateCopy;
}

export let addPostActionCreator = () => ({
    type: ADD_POST
})

export let updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
})

export default profileReducer;
