import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => (<DialogItem key={dialog.id} user={dialog}/>))

    let messagesElements = props.messages.map(message => (
        <Message id={message.id} key={message.id} message={message.message}/>))

    let addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;