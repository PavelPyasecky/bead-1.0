import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logoWrapper}>
                <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/7/77/Arm_logo_2017.svg"/>
            </div>
        </header>
    );
}

export default Header;