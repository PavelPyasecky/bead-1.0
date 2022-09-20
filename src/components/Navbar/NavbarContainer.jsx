import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

const NavbarContainer = (props) => {

    return (
        <Navbar {...props}/>
    );
};

const mapStateToProps = (state) => ({
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {})(NavbarContainer)
