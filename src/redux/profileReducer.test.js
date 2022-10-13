import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'My thoughts 1 in this post...', likesCount: 12},
        {id: 2, message: 'My thoughts 1 in this post...', likesCount: 12},
        {id: 3, message: 'My thoughts 1 in this post...', likesCount: 12},
    ],
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('New post text.')
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it('new post message should be correct', () => {
    const messageText = 'New post text.';
    let action = addPostActionCreator(messageText)
    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe(messageText);
});

it('after deleting length should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

it('after deleting length shouldn\'t be decremented if id is incorrect', () => {
    let action = deletePost(3)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});