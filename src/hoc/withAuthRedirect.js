import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})


function withAuthRedirect(Component) {
    function ComponentWithProtection(props) {
        return props.isAuth
            ? <Component {...props} />
            : <Navigate to={'/login'}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(ComponentWithProtection);
    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;
