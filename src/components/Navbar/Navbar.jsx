import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    let activeSwitcher = isActive => isActive ? "red" : "blue";

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={({isActive}) => `${s.itemLink} ${isActive ? s.itemLinkActive : ""}`}
                         to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => `${s.itemLink} ${isActive ? s.itemLinkActive : ""}`}
                         to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => `${s.itemLink} ${isActive ? s.itemLinkActive : ""}`} to='/users'>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.itemLink} to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.itemLink} to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.itemLink} to='/settings'>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;