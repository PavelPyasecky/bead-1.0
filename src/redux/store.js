import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My thoughts 1 in this post...', likesCount: 12},
                {id: 2, message: 'My thoughts 1 in this post...', likesCount: 12},
                {id: 3, message: 'My thoughts 1 in this post...', likesCount: 12},
            ],
            newPostText: "newPostText",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ilya'},
                {id: 2, name: 'Pavel'},
                {id: 3, name: 'Kirill'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hi'},
            ],
            newMessageBody: "New message body."
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log("State Changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;
