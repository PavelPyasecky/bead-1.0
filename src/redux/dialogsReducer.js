const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
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
