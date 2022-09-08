import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className='app-container'>
            <Header/>
            <Navbar/>
            <div className='app-content-wrapper'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile/>}/>
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
