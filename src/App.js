import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withRouter} from "./components/Profile/ProfileContainer";
import withSuspense from "./hoc/withSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (!this.props.initialized)
            ? <Preloader/>
            : (
                <div className='app-container'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app-content-wrapper'>
                        <Routes>
                            <Route path='/profile/:userId' element={withSuspense(ProfileContainer)()}/>
                            <Route path='/dialogs' element={withSuspense(DialogsContainer)()}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/news'/>
                            <Route path='/music'/>
                            <Route path='/settings'/>
                        </Routes>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const RootApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default RootApp;

