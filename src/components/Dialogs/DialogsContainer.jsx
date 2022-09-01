import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageBodyCreator(text))
                }

                return (
                    <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange}
                             dialogsPage={state.dialogsPage}/>
                );
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;