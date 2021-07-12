import React from 'react';
import microsoftLogo from '../resources/images/microsoft.png';

import './IntroPage.css';
const Navbar = () => {
    return(
        <div className="navbar">
        <img className="logo" src={microsoftLogo} alt="microsoft"/>
        <div className="nav_text">
        MICROSOFT | TEAMS
        </div>
        </div>
    );
}

export default Navbar;
