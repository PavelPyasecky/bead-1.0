const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let message = {id: 6, message: body};
            state.messages.push(message);
            state.newMessageBody = '';
            break;
        default:
            break;
    }

    return state;
}

export let updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
})

export let sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})

export default dialogsReducer;
