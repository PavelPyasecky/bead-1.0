import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App(props) {
    return (
        <div className='app-container'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-content-wrapper'>
                <Routes>
                    <Route path='/profile/:userId'
                           element={<ProfileContainer/>}/>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
