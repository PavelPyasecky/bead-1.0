import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Login {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

const LoginContainer = connect(mapStateToProps, {getAuthUserData})(HeaderAPIContainer)
export default LoginContainer;
