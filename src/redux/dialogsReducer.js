const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1, name: 'Ilya', photos: {
                small: null,
                large: null
            },
        },
        {
            id: 2, name: 'Pavel', photos: {
                small: null,
                large: null
            },
        },
        {
            id: 3, name: 'Kirill', photos: {
                small: null,
                large: null
            },
        },
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hi'},
    ],
    newMessageBody: "New message body."
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state}

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = stateCopy.newMessageBody;
            stateCopy.messages = [...state.messages, {id: 6, message: body}]
            stateCopy.newMessageBody = '';
            break;
        default:
            break;
    }

    return stateCopy;
}

export let updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
})

export let sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})

export default dialogsReducer;
