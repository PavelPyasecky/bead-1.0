import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logoWrapper}>
                <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/7/77/Arm_logo_2017.svg"/>
            </div>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                        : <NavLink to={'/login'}>Log In</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;