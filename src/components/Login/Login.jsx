import React from "react";
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile/2'}/>
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>);
}

const LoginForm = ({handleSubmit, error}) => {
    return (<form onSubmit={handleSubmit}>
            {createField('Login', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required], {type: 'password'})}
            {createField('Password', 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}

            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>);
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);