import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
            <div className='app-container'>
                <Header/>
                <Navbar/>
                <div className='app-content-wrapper'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                                 dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs' element={<Dialogs store={props.store}/>}/>
                        <Route path='/news'/>
                        <Route path='/music'/>
                        <Route path='/settings'/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
