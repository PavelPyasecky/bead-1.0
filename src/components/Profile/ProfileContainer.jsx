import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(reponse => {
            this.props.setUserProfile(reponse.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(ProfileAPIContainer);

let WithUrlDateContainer = withRouter(ProfileContainer)
export default WithUrlDateContainer;
