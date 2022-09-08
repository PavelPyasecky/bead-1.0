import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
})

let mapDispatchToProps = (dispatch) =>(
    {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;