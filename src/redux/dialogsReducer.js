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
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state}

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            stateCopy.messages = [...state.messages, {id: 6, message: body}]
            break;
        default:
            break;
    }

    return stateCopy;
}

export let sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
})

export default dialogsReducer;
