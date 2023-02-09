import React from "react";
import Navbar from "./Navbar";
import headShot from '../images/headshot.png'

function Header() {
    return (
        <header>
            <Navbar />
            <div className="header flex light-bg">
                <img src={headShot} height={250} alt="haylee"  /> 
                <div>bio</div>
            </div>
        </header>
    );
}

export default Header;