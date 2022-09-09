import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className='app-container'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-content-wrapper'>
                <Routes>
                    <Route path='/profile/:userId'
                           element={<ProfileContainer/>}/>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
